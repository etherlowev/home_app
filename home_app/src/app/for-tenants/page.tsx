"use client";

import Header from '../components/header';
import Footer from '../components/footer';
import styles from "./tenants.module.css"
import React from 'react';

export default function Home() {
  
  return (
      <div>
        <Header pathName={"/for-tenants"}/>
        <main id="page-content" className={`${styles.pageContent} ${styles.newsPage}`}>
          <div className={`${styles.news}`}>
            <div className={`${styles.newsHeader}`}>
              <div className={`${styles.content}`}>
                <h1 className={`${styles.newsTitle}`}>
                  Жителям
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
                          Собственникам помещений в МКД
                          <div id="description" className={`${styles.cNewsCardText}`}>
                            <p>Уважаемые собственники! В соответствии 
                              с законодательством на вас возложена обязанность по оплате взносов на капремонт.
                            </p>
                          </div>
                        </div>
                      </a><a href="/documents/info-list.pdf" className={`${styles.cNewsCardLink}`}>
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
