"use client";

import Header from '../components/header';
import Footer from '../components/footer';
import styles from "./contacts.module.css"
import React from 'react';
import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';

export default function Contacts() {

  return (
    <div>
      <Header pathName={"/contacts"} />
      <div className={styles.page}>
        <main id="page-content" className={`${styles.pageContent} ${styles.contactsPage}`} data-route="сontacts">
          <div className={`${styles.page}`}>
            <div className={`${styles.pageHeader}`}>
              <div className={`${styles.content}`}>
                <div className={`${styles.pageHeaderWrapper}`}>
                  <h1 className={`${styles.pageHeaderTitle}`}>Всегда на связи <br/> с жителями</h1>
                  <div className={`${styles.headerIconWrap}`}>
                    <svg width="105" height="92" className={`${styles.featureIcon}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M104.053 35.167c-.218-12.8-7.798-24.189-19.407-29.314A5.885 5.885 0 0 0 78.768 0a5.883 5.883 0 0 0-5.2 3.143 33.741 33.741 0 0 0-2.713-.07c-8.613.14-16.688 3.599-22.737 9.741-5.985 6.076-9.312 14.097-9.39 22.615l-5.7 18.796a2.032 2.032 0 0 0 1.946 2.622h6.49c.356 0 .645.29.645.645v6.81c0 7.25 5.899 13.15 13.15 13.15h2.874c1.39 0 2.521 1.13 2.521 2.52V89.2a2.033 2.033 0 0 0 4.065 0v-9.228a6.593 6.593 0 0 0-6.586-6.585h-2.875c-5.009 0-9.084-4.076-9.084-9.085v-6.81a4.715 4.715 0 0 0-4.71-4.71h-3.75l4.99-16.458c.058-.19.087-.39.087-.59 0-15.517 12.62-28.346 28.13-28.596.655-.01 1.314.003 1.969.037v29.352c-3.804 2.022-6.401 6.024-6.401 10.624 0 5.812 4.146 10.674 9.636 11.784a4.735 4.735 0 0 1-4.374 2.935h-8.648a5.802 5.802 0 0 0-5.424-3.76 5.8 5.8 0 0 0-5.792 5.792 5.8 5.8 0 0 0 5.792 5.793 5.802 5.802 0 0 0 5.424-3.76h8.648c4.198 0 7.717-2.959 8.585-6.9 5.767-.881 10.199-5.875 10.199-11.884 0-4.39-2.366-8.236-5.889-10.335V10.363c9.226 4.797 15.162 14.282 15.342 24.873.12 7.046-2.34 15.248-6.268 20.897a16.025 16.025 0 0 0-2.877 9.191v15.97a2.033 2.033 0 0 0 4.065 0v-15.97c0-2.472.743-4.848 2.15-6.87 4.45-6.4 7.13-15.323 6.995-23.287zM57.68 65.63a1.73 1.73 0 0 1-1.728-1.728 1.73 1.73 0 0 1 1.728-1.728 1.73 1.73 0 0 1 1.728 1.728 1.73 1.73 0 0 1-1.728 1.728zM76.955 5.878c0-1 .813-1.813 1.813-1.813s1.814.813 1.814 1.813V35.31a12.051 12.051 0 0 0-2.07-.183c-.528 0-1.047.038-1.557.105V5.878zm9.515 41.273c0 4.388-3.57 7.958-7.958 7.958s-7.958-3.57-7.958-7.958c0-4.389 3.57-7.959 7.958-7.959s7.958 3.57 7.958 7.959zM94.312 87.763a2.039 2.039 0 0 0-1.437-.595c-.534 0-1.059.215-1.436.595a2.04 2.04 0 0 0-.596 1.437c0 .535.217 1.06.596 1.437.377.378.902.596 1.436.596.535 0 1.059-.218 1.437-.596.378-.378.596-.902.596-1.437 0-.536-.218-1.059-.596-1.437z"
                          fill="rgba(var(--theme-accent-rgb), .15)">
                      </path>
                      <path
                          d="M47.837 4.427a32.854 32.854 0 0 0-9.923-1.354c-8.613.14-16.687 3.599-22.737 9.74-5.985 6.077-9.312 14.098-9.39 22.615l-5.7 18.797a2.032 2.032 0 0 0 1.945 2.622h6.49c.356 0 .646.29.646.645v6.81c0 7.251 5.898 13.15 13.15 13.15h2.874c1.39 0 2.52 1.13 2.52 2.52V89.2a2.033 2.033 0 0 0 4.065 0v-9.228a6.593 6.593 0 0 0-6.585-6.585h-2.875c-5.01 0-9.085-4.076-9.085-9.085v-6.81a4.715 4.715 0 0 0-4.71-4.71h-3.75l4.99-16.458c.058-.19.088-.39.088-.59 0-15.517 12.619-28.346 28.129-28.596 2.97-.049 5.893.35 8.699 1.185a2.033 2.033 0 0 0 1.159-3.896z"
                          fill="rgba(var(--theme-accent-rgb), .15)">
                      </path>
                      <path
                          d="M37.38 61.87h-7.218a5.802 5.802 0 0 0-5.424-3.76 5.8 5.8 0 0 0-5.793 5.792 5.8 5.8 0 0 0 5.793 5.793 5.802 5.802 0 0 0 5.424-3.76h7.218a2.033 2.033 0 0 0 0-4.065zm-12.642 3.76a1.73 1.73 0 0 1-1.728-1.728 1.73 1.73 0 0 1 1.728-1.728 1.73 1.73 0 0 1 1.729 1.728 1.73 1.73 0 0 1-1.729 1.728zM16.599 33.619c-1.123 0-2.033.91-2.033 2.032v.084a2.032 2.032 0 0 0 4.065 0v-.084c0-1.122-.91-2.032-2.032-2.032zM37.913 12a23.752 23.752 0 0 0-21.492 14.52 2.033 2.033 0 0 0 3.745 1.579A19.685 19.685 0 0 1 37.98 16.064a2.032 2.032 0 0 0 2-2.065 2.028 2.028 0 0 0-2.066-2zM51.635 34.298a2.047 2.047 0 0 0-1.437-.596c-.534 0-1.059.218-1.437.596a2.048 2.048 0 0 0-.595 1.436c0 .535.217 1.06.596 1.437.378.378.902.596 1.436.596.535 0 1.06-.218 1.437-.596.378-.378.596-.902.596-1.437 0-.534-.218-1.058-.596-1.436z"
                          fill="rgba(var(--theme-accent-rgb), .15)">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <section className={`${styles.section}`}>
              <div className={`${styles.content}`}>
                <div className={`${styles.cCard} ${styles.mainContentCard}`}>
                  <div className={`${styles.wrapper}`}>
                    <h2 className={`${styles.sectionTitle}`}>Основной офис</h2>
                    <div className={`${styles.innerWrapper}`}>
                      <div className={`${styles.contentBlock}`}>
                        <div className={`${styles.block}`}>
                          <h3 className={`${styles.blockTitle}`}>Режим работы</h3>
                          <ul className={`${styles.scheduleList}`}>
                            <li className={`${styles.scheduleListListItem}`}>
                              <div className={`${styles.scheduleListListItem} ${styles.scheduleListListItemColorPrimary}`}>
                                Понедельник
                              </div>
                              <div className={`${styles.scheduleListRightItem}`}>
                                09:00 - 18:00 (перерыв 13:00 - 14:00)
                              </div>
                            </li>
                            <li className={`${styles.scheduleListListItem}`}>
                              <div className={`${styles.scheduleListListItem} ${styles.scheduleListListItemColorPrimary}`}>
                                Вторник
                              </div>
                              <div className={`${styles.scheduleListRightItem}`}>
                                09:00 - 18:00 (перерыв 13:00 - 14:00)
                              </div>
                            </li>
                            <li className={`${styles.scheduleListListItem}`}>
                              <div className={`${styles.scheduleListListItem} ${styles.scheduleListListItemColorPrimary}`}>
                                Среда
                              </div>
                              <div className={`${styles.scheduleListRightItem}`}>
                                09:00 - 18:00 (перерыв 13:00 - 14:00)
                              </div>
                            </li>
                            <li className={`${styles.scheduleListListItem}`}>
                              <div className={`${styles.scheduleListListItem} ${styles.scheduleListListItemColorPrimary}`}>
                                Четверг
                              </div>
                              <div className={`${styles.scheduleListRightItem}`}>
                                09:00 - 18:00 (перерыв 13:00 - 14:00)
                              </div>
                            </li>
                            <li className={`${styles.scheduleListListItem}`}>
                              <div className={`${styles.scheduleListListItem} ${styles.scheduleListListItemColorPrimary}`}>
                                Пятница
                              </div>
                              <div className={`${styles.scheduleListRightItem}`}>
                                09:00 - 18:00 (перерыв 13:00 - 14:00)
                              </div>
                            </li>
                            <li className={`${styles.scheduleListListItem}`}>
                              <div className={`${styles.scheduleListListItem} ${styles.scheduleListListItemColorPrimary}`}>
                                Суббота
                              </div>
                              <div className={`${styles.scheduleListRightItem}`}>
                                время работы не указано
                              </div>
                            </li>
                            <li className={`${styles.scheduleListListItem}`}>
                              <div className={`${styles.scheduleListListItem} ${styles.scheduleListListItemColorPrimary}`}>
                                Воскресенье
                              </div>
                              <div className={`${styles.scheduleListRightItem}`}>
                                время работы не указано
                              </div>
                            </li>
                          </ul>
                          <br/>

                        </div>

                        <div className={`${styles.block}`}>
                          <h3 className={`${styles.blockTitle}`}>Контакты</h3>
                          <ul className={`${styles.contactsList}`}>
                            <li className={`${styles.contactsListListItem}`}>
                              <div className={`${styles.contactsListListItem} ${styles.contactsListListItemColorPrimary}`}>
                                Телефон офиса
                              </div>
                              <div>
                                8 495 788 45 17
                              </div>
                            </li>
                            <li className={`${styles.contactsListListItem}`}>
                              <div className={`${styles.contactsListListItem} ${styles.contactsListListItemColorPrimary}`}>
                                Диспетчерская
                              </div>
                              <div>
                                8 495 737 45 17
                              </div>
                            </li>
                            <li className={`${styles.contactsListListItem}`}>
                              <div className={`${styles.contactsListListItem} ${styles.contactsListListItemColorPrimary}`}>
                                Электронная почта
                              </div>
                              <div>
                                ykgorizont@gmail.com
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className={`${styles.mapBlock}`}>
                        <div>
                          <h3 className={`${styles.blockTitle}`}>Адрес</h3>
                          <p className={`${styles.blockText}`}>
                            г. Москва, ул.Ватутина д.18, к.2.
                          </p>
                        </div>
                        <YMaps query={{lang: "ru_RU", apikey: "4f825c30-1baa-406e-9ea6-bc7b2b438c5d"}}>
                          <Map className={`${styles.mapBlockMap} ${styles.map}`} width={`430px`} height={`367px`} defaultState={{ center: [55.722588, 37.452112], zoom: 17 }}>
                            <Placemark geometry={[55.722588, 37.452112]} />
                          </Map>
                        </YMaps>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}
