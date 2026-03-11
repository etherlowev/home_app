"use client";

import Header from '../components/header';
import Footer from '../components/footer';
import styles from "./tenants.module.css"
import React, {useEffect, useState} from 'react';
import LinkedInfoModel from "@/app/model/LinkedInfoModel";


export default function Home() {
    const [data, setData] =
        useState<LinkedInfoModel[]>([]);

    useEffect(() => {
        setData([
            {
                id: 2,
                documentName: "notification_24_03_2026.pdf",
                title: "Уведомление о проведении внеочередного общего собрания собственников помещений",
                text: "Уважаемые собственники! Просим Вас " +
                    "ознакомиться с уведомлением общего собрания. " +
                    "Дата проведения очной части собрания: 24.03.2026 г. в 19:00.",
            },
            {
                id: 1,
                documentName: "info-list.pdf",
                title: "Собственникам помещений в МКД",
                text: "Уважаемые собственники! В соответствии \n" +
                    "с законодательством на вас возложена обязанность по оплате взносов на капремонт."
            }
            ]);
    }, []);

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
                                {data.map(item => (
                                    <div key={item.id} className={`${styles.box} ${styles.desktop4}`}>
                                        <div className={`${styles.cNewsCard}`}>
                                            <a href={`/documents/${item.documentName}`}>
                                                <div className={`${styles.cNewsCardTitle}`}>
                                                    {item.title}
                                                    <div id="description" className={`${styles.cNewsCardText}`}>
                                                        <p>{item.text}</p>
                                                    </div>
                                                </div>
                                            </a><a href={`/documents/${item.documentName}`} className={`${styles.cNewsCardLink}`}>
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
