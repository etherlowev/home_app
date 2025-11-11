"use client";

import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from "./new.module.css"
import NewsModel from '../../model/NewsModel';
import React from 'react';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Page() {

  const [data, setData] = useState<NewsModel[]>([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const newsId = params.id;

  if (newsId === null) {
    return <div></div>
  }

  useEffect(() => {
    fetch('/api/get-news/'+newsId)
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setLoading(false);
          console.log(json);
        })
        .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Загрузка...</p>;

  return (
      <div>
        <Header pathName={"/none"}/>
        <div>
          <main id="page-content" className={`${styles.pageContent} ${styles.newsArticlePage}`}>
            <div className={`${styles.newsArticle}`}>
              <div className={`${styles.newsArticleHeader}`}>
                <div className={`${styles.content}`}>
                  <h1 className={`${styles.newsArticleTitle}`}>
                    {data[0].title}
                  </h1>
                </div>
              </div>
              <div className={`${styles.newsArticleContent}`}>
                <div className={`${styles.content}`}>
                  <div className={`${styles.cCard} ${styles.oTypographer}`}>
                    {data[0].text}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer/>
      </div>
  );
}
