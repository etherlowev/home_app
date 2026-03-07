"use client";

import Header from '../components/header';
import Footer from '../components/footer';
import styles from "./news.module.css"
import React, {useEffect, useState} from 'react';
import NewsModel from "@/app/model/NewsModel";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Europe/Moscow'
  }).format(date);
};

export default function Home() {
  const [data, setData] = useState<NewsModel[]>([]);
  useEffect(() => {
    fetch('/api/get-news/')
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            let rows = json.rows;
            let news = [];

            for (let i = 0 ; i < rows.length ; i++) {
              let item = rows[i];
              news.push(new NewsModel(
                  item.id,
                  item.title,
                  item.text,
                  formatDate(item.date_posted)
              ));
            }
            setData(news);
          }
          else {
            setData([]);
          }
        })
        .catch((error) => console.log('Fetch failed:', error))
        .finally(() => console.log());
  }, []);

  return (
      <div>
        <Header pathName={"/news"}/>
        <main id="page-content" className={`${styles.pageContent} ${styles.newsPage}`}>
            <div className={`${styles.news}`}>
                <div className={`${styles.newsHeader}`}>
                    <div className={`${styles.content}`}>
                        <h1 className={`${styles.newsTitle}`}>
                            Новости компании ТСЖ "Ватутина, 18-2" и важные сообщения жильцам
                        </h1>
                    </div>
                </div>
                <div className={`${styles.newsContent}`}>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.grid}`}>
                            {data.map(item => (
                                <div key={item.id} className={`${styles.box} ${styles.desktop4}`}>
                                    <div className={`${styles.cNewsCard}`}>
                                        <div className={`${styles.cNewsCardTitle}`}>
                                            {item.title}
                                            <div id="description" className={`${styles.cNewsCardText}`}>
                                                <p>
                                                    {item.date_posted}
                                                </p>
                                            </div>
                                        </div>
                                        <a href={`/news/${item.id}`} className={`${styles.cNewsCardLink}`}>
                                            Перейти
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
          <Footer/>
      </div>
  );
}
