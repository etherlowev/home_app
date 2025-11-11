"use client";

import Header from '../components/header';
import Footer from '../components/footer';
import styles from "./elevator.module.css"
import React from 'react';

export default function Home() {
  
  return (
      <div>
        <Header pathName={"/elevator-service-company"}/>
        <div>
          <main id="page-content" className={`${styles.pageContent} ${styles.newsArticlePage}`}>
            <div className={`${styles.newsArticle}`}>
              <div className={`${styles.newsArticleHeader}`}>
                <div className={`${styles.content}`}>
                  <h1 className={`${styles.newsArticleTitle}`}>
                    Информация о компании обслуживающей лифты
                  </h1>
                </div>
              </div>
              <div className={`${styles.newsArticleContent}`}>
                <div className={`${styles.content}`}>
                  <div className={`${styles.cCard} ${styles.oTypographer}`}>
                    <p>
                      Уважаемые жильцы! <br/>
                      Лифты в вашем доме обслуживает компания МОС Отис. <br/>
                      Телефон диспетчерской МОС Отис +7(800) 250 68 47
                    </p>
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
