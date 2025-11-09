"use client";

import Header from '../components/header';
import Footer from '../components/footer';
import styles from "./news.module.css"
import React from 'react';

export default function Home() {
  
  return (
      <div>
        <Header pathName={"/news"}/>
        <main id="page-content" className={`${styles.pageContent} ${styles.newsPage}`}>
          <div className={`${styles.news}`}>
            <div className={`${styles.newsHeader}`}>
              <div className={`${styles.content}`}>
                <h1 className={`${styles.newsTitle}`}>
                  Новости компании ООО "УК ГОРИЗОНТ" и важные сообщения жильцам
                </h1>
              </div>
            </div>
            <div className={`${styles.newsContent}`}>
              <div className={`${styles.content}`}>
                <div className={`${styles.grid}`}>
                  <div className={`${styles.box} ${styles.desktop4}`}>
                    <div className={`${styles.cNewsCard}`}>
                      <a href="/documents/info-list.pdf">
                        <div className={`${styles.cNewsCardTitle}`}>
                          Плановое отключение ГВС с 01.08.2022 по 11.08.2022
                          <div id="description" className={`${styles.cNewsCardText}`}>
                            <p>
                              14.07.2022
                            </p>
                          </div>
                        </div>
                      </a><a href="/news/1" className={`${styles.cNewsCardLink}`}>
                      Перейти
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
  );
}
