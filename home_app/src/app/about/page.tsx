"use client";

import Header from '../components/header';
import Footer from '../components/footer';
import styles from "./about.module.css";
import DocumentFile from "@/app/components/documentFile";
import React from 'react';

export default function Contacts() {

  const onClickAc0 = () => {
    let ac0 = document.getElementById('ac-0');
    if (ac0 != null) {
      ac0.classList.toggle(styles.isActive);
    }
  }

  const onClickAc1 = () => {
    let ac1 = document.getElementById('ac-1');
    if (ac1 != null) {
      ac1.classList.toggle(styles.isActive);
    }
  }

  return (
      <div>
        <Header pathName={"/about"} />
        <div className={styles.page}>
          <main id="page-content" className={`${styles.pageContent} ${styles.contactsPage}`} data-route="сontacts">
            <div className={`${styles.page}`}>
              <main id="page-content" className={`${styles.pageContent} ${styles.aboutCompanyPage}`} data-route="about-company">
                <section className={`${styles.pageAbout}`}>
                  <div className={`${styles.wrapper}`}>
                    <div className={`${styles.pageAboutHeader}`}>
                      <h2 className={`${styles.pageAboutHeaderHeadline}`}>О ТСЖ "Ватутина, 18-2"</h2>
                      <div className={`${styles.pageAboutHeaderIcon}`}>
                        <svg width="91" height="91" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M34.883 30.333H31.85v3.034h3.033v-3.034zM34.883 36.4H31.85v3.033h3.033V36.4zM34.883 42.467H31.85V45.5h3.033v-3.033zM34.883 48.533H31.85v3.034h3.033v-3.034zM40.95 30.333h-3.034v3.034h3.033v-3.034zM40.95 36.4h-3.034v3.033h3.033V36.4zM40.95 42.467h-3.034V45.5h3.033v-3.033zM40.95 48.533h-3.034v3.034h3.033v-3.034zM47.016 30.333h-3.034v3.034h3.034v-3.034zM47.016 36.4h-3.034v3.033h3.034V36.4zM47.016 42.467h-3.034V45.5h3.034v-3.033zM47.016 48.533h-3.034v3.034h3.034v-3.034zM53.084 30.333h-3.033v3.034h3.033v-3.034zM40.95 24.267h-3.034V27.3h3.033v-3.033zM47.016 24.267h-3.034V27.3h3.034v-3.033zM53.084 24.267h-3.033V27.3h3.033v-3.033zM53.084 36.4h-3.033v3.033h3.033V36.4zM53.084 42.467h-3.033V45.5h3.033v-3.033zM53.084 48.533h-3.033v3.034h3.033v-3.034zM59.15 30.333h-3.033v3.034h3.034v-3.034zM59.15 36.4h-3.033v3.033h3.034V36.4zM59.15 42.467h-3.033V45.5h3.034v-3.033zM59.15 48.533h-3.033v3.034h3.034v-3.034z"
                              fill="rgba(var(--theme-accent-rgb), .15)"></path>
                          <path
                              d="M89.485 22.75H66.733V1.517C66.733.679 66.056 0 65.218 0H25.783c-.837 0-1.516.678-1.516 1.515V22.75H1.517C.679 22.75 0 23.428 0 24.265V78.867c0 .837.678 1.516 1.515 1.516H4.687A9.101 9.101 0 004.55 81.9v7.583c0 .837.678 1.516 1.515 1.517h78.868c.837 0 1.516-.678 1.517-1.515V81.9a9.054 9.054 0 00-.137-1.517h3.17c.837 0 1.516-.677 1.517-1.515V24.267c0-.837-.678-1.516-1.515-1.517zM65.217 65.217a3.033 3.033 0 11-6.067 0 3.033 3.033 0 016.067 0zm-36.4-3.034a3.033 3.033 0 110 6.067 3.033 3.033 0 010-6.067zm-9.1 25.784H7.583V81.9a6.067 6.067 0 0112.134 0v6.067zm-9.1-18.2a3.033 3.033 0 116.066 0 3.033 3.033 0 01-6.066 0zm9.33 5.578a9.14 9.14 0 00-1.909-1.412 6.067 6.067 0 10-8.776 0 9.158 9.158 0 00-3.48 3.417H3.032V25.783h21.234v35.463a5.984 5.984 0 00.161 8.137 9.126 9.126 0 00-4.482 5.962zm14.936 12.622H22.75V77.35a6.067 6.067 0 0112.133 0v10.617zm18.2 0H37.917V77.35a7.583 7.583 0 0115.166 0v10.617zM40.95 62.183a4.55 4.55 0 119.1 0 4.55 4.55 0 01-9.1 0zm13.787 9.952a10.683 10.683 0 00-4.352-4.2 7.584 7.584 0 10-9.77 0 10.683 10.683 0 00-4.352 4.2 9.16 9.16 0 00-3.058-2.752A6.023 6.023 0 0027.3 59.365V3.033h36.4v56.332a5.995 5.995 0 00-1.517-.215 6.05 6.05 0 00-4.388 10.233 9.16 9.16 0 00-3.058 2.752zM68.25 81.9v6.067H56.117V77.35a6.067 6.067 0 1112.133 0v4.55zm15.167 6.067H71.283V81.9a6.067 6.067 0 0112.134 0v6.067zm-9.1-18.2a3.033 3.033 0 116.066 0 3.033 3.033 0 01-6.066 0zm13.65 7.583h-2.748a9.158 9.158 0 00-3.48-3.417 6.067 6.067 0 10-8.778 0 9.135 9.135 0 00-1.907 1.412 9.125 9.125 0 00-4.482-5.962 5.984 5.984 0 00.162-8.137V25.783h21.233V77.35z"
                              fill="rgba(var(--theme-accent-rgb), .15)"></path>
                          <path
                              d="M74.317 34.883h-3.034V59.15h3.034V34.883zM83.416 34.883h-3.033V59.15h3.033V34.883zM10.617 34.883H7.584V59.15h3.033V34.883zM19.717 34.883h-3.033V59.15h3.033V34.883zM54.601 6.067H36.4c-.837 0-1.516.677-1.516 1.515v12.135c0 .837.678 1.516 1.515 1.516H54.6c.837 0 1.516-.677 1.516-1.515V7.583c0-.837-.678-1.516-1.515-1.516zM53.083 18.2H37.916V9.1h15.167v9.1z"
                              fill="rgba(var(--theme-accent-rgb), .15)"></path>
                        </svg>
                      </div>
                    </div>
                    <div className={`${styles.pageAboutContent}`}>
                      <div className={`${styles.block} ${styles.oTypographer}`}>
                        <p dir="ltr"><strong>Уважаемые собственники и жители дома,</strong><br/><br/>ТСЖ «Ватутина, 18-2» –
                          новое товарищество собственников жилья, пришедшее на замену управляющей компании.<br/><br/>Мы
                          за то, чтобы обслуживание и содержание домов было качественным и безопасным, а услуги
                          предоставлялись своевременно и без задержек. И готовы соответствовать этим
                          требованиям.<br/><br/>Мы хотим, чтобы сфера ЖКХ была простой для людей и помогала создавать
                          комфортные условия для жизни.</p><p data-empty="true"><br/></p>
                      </div>
                    </div>
                  </div>
                </section>

                <div className={`${styles.requisitesAndDocumentsMobile}`} role="tablist">
                  <div className={`${styles.ac} ${styles.ac0}`} id="ac-0" onClick={onClickAc0}>
                    <div className={`${styles.acQ}`} role="tab">
                      <h2 className={`${styles.acQ} ${styles.title}`} tabIndex={0}>Реквизиты</h2>
                    </div>
                    <div className={`${styles.acA}`} role="tabpanel">
                      <section className={`${styles.pageRequisites}`}>
                        <div className={`${styles.wrapper} ${styles.wrapperSmall}`}>
                          <div className={`${styles.pageRequisitesContainer}`}>
                            <div className={`${styles.pageRequisitesTitle}`}>
                              <span className={`${styles.title}`}>Реквизиты</span>
                            </div>
                            <div className={`${styles.pageRequisitesBlock}`}>
                              <div className={`${styles.pageRequisitesContent}`}>
                                <div className={`${styles.pageRequisitesContentText}`}>Полное наименование организации</div>
                                <div className={`${styles.pageRequisitesContentDesc}`}>Товарищество собственников жилья "Ватутина, 18-2"</div>
                              </div>
                              <div className={`${styles.pageRequisitesContent}`}>
                                <div className={`${styles.pageRequisitesContentText}`}>Сокращенное наименование</div>
                                <div className={`${styles.pageRequisitesContentDesc}`}>ТСЖ "Ватутина, 18-2"</div>
                              </div>
                              <div className={`${styles.pageRequisitesContent}`}>
                                <div className={`${styles.pageRequisitesContentText}`}>Адрес</div>
                                <div className={`${styles.pageRequisitesContentDesc}`}>121357, Москва г, вн.тер.г. муниципальный
                                  округ Фили-Давыдково, ул. Ватутина, д. 18, к. 2, кв. 96
                                </div>
                              </div>
                              <div className={`${styles.pageRequisitesContent}`}>
                                <div className={`${styles.pageRequisitesContentText}`}>Телефоны</div>
                                <div className={`${styles.pageRequisitesContentDesc}`}>8 495 788 45 17</div>
                              </div>
                              <div className={`${styles.pageRequisitesContent}`}>
                                <div className={`${styles.pageRequisitesContentText}`}>Телефон диспетчерской</div>
                                <div className={`${styles.pageRequisitesContentDesc}`}>8 495 737 45 17</div>
                              </div>
                              <div className={`${styles.pageRequisitesContent}`}>
                                <div className={`${styles.pageRequisitesContentText}`}>Электронная почта</div>
                                <div className={`${styles.pageRequisitesContentDesc}`}>tsgVatutina18-2@mail.ru</div>
                              </div>
                              <div className={`${styles.pageRequisitesContent}`}>
                                <div className={`${styles.pageRequisitesContentText}`}>ИНН</div>
                                <div className={`${styles.pageRequisitesContentDesc}`}>7731267010</div>
                              </div>
                              <div className={`${styles.pageRequisitesContent}`}>
                                <div className={`${styles.pageRequisitesContentText}`}>КПП</div>
                                <div className={`${styles.pageRequisitesContentDesc}`}>773101001</div>
                              </div>
                              <div className={`${styles.pageRequisitesContent}`}>
                                <div className={`${styles.pageRequisitesContentText}`}>ОКВЭД</div>
                                <div className={`${styles.pageRequisitesContentDesc}`}></div>
                              </div>
                              <div className={`${styles.pageRequisitesContent}`}>
                                <div className={`${styles.pageRequisitesContentText}`}>ОКПО</div>
                                <div className={`${styles.pageRequisitesContentDesc}`}></div>
                              </div>
                              <div className={`${styles.pageRequisitesContent}`}>
                                <div className={`${styles.pageRequisitesContentText}`}>ОГРН</div>
                                <div className={`${styles.pageRequisitesContentDesc}`}>1027731012979</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className={`${styles.ac} ${styles.ac1}`} id="ac-1" onClick={onClickAc1}>
                    <div className={`${styles.acQ}`} role="tab">
                      <h2 className={`${styles.acQ} ${styles.title}`} tabIndex={0}>Уставные документы</h2>
                    </div>
                    <div className={`${styles.acA}`} role="tabpanel">
                      <section className={`${styles.pageDocuments}`}>
                        <div className={`${styles.wrapper} ${styles.wrapperSmall}`}>
                          <div className={`${styles.pageDocumentsTitle}`}>
                            <span className={`${styles.titleBig}`}>Документы компании</span>
                          </div>
                          <DocumentFile documentName={'act-ventilation.pdf'}
                                        documentTitle={'Акт обследования технического состояния вентиляции'}>
                          </DocumentFile>
                          <DocumentFile documentName={'heating_season_readiness_check.pdf'}
                                        documentTitle={'Акт проверки готовности к отопительному периоду 2025/2026 гг.'}>
                          </DocumentFile>
                          <DocumentFile documentName={'heating_readiness_addendum.pdf'}
                                        documentTitle={'Приложение к акту проверки готовности к отопительному периоду 2025/2026 гг.'}>
                          </DocumentFile>
                          <DocumentFile documentName={'thermal_energy_inspection_report.pdf'}
                                        documentTitle={'Акт проверки узла учета тепловой энергии и теплоносителя'}>
                          </DocumentFile>
                          <DocumentFile documentName={'certificate_FTA.pdf'}
                                        documentTitle={'Свидетельство о регистрации юр. лица в ФНС'}>
                          </DocumentFile>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>

                <div className={`${styles.pageRequisitesDesktop}`}>
                  <section className={`${styles.pageRequisites}`}>
                    <div className={`${styles.wrapper} ${styles.wrapperSmall}`}>
                      <div className={`${styles.pageRequisitesContainer}`}>
                        <div className={`${styles.pageRequisitesTitle}`}>
                          <span className={`${styles.title}`}>Реквизиты</span>
                        </div>
                        <div className={`${styles.pageRequisitesBlock}`}>
                          <div className={`${styles.pageRequisitesContent}`}>
                            <div className={`${styles.pageRequisitesContentText}`}>Полное наименование организации</div>
                            <div className={`${styles.pageRequisitesContentDesc}`}>Товарищество собственников жилья
                              "Ватутина, 18-2"
                            </div>
                          </div>
                          <div className={`${styles.pageRequisitesContent}`}>
                            <div className={`${styles.pageRequisitesContentText}`}>Сокращенное наименование</div>
                            <div className={`${styles.pageRequisitesContentDesc}`}>ТСЖ "Ватутина, 18-2"</div>
                          </div>
                          <div className={`${styles.pageRequisitesContent}`}>
                            <div className={`${styles.pageRequisitesContentText}`}>Адрес</div>
                            <div className={`${styles.pageRequisitesContentDesc}`}>121357, Москва г, вн.тер.г.
                              муниципальный
                              округ Фили-Давыдково, ул. Ватутина, д. 18, к. 2, кв. 96
                            </div>
                          </div>
                          <div className={`${styles.pageRequisitesContent}`}>
                            <div className={`${styles.pageRequisitesContentText}`}>Телефоны</div>
                            <div className={`${styles.pageRequisitesContentDesc}`}>8 495 788 45 17</div>
                          </div>
                          <div className={`${styles.pageRequisitesContent}`}>
                            <div className={`${styles.pageRequisitesContentText}`}>Телефон диспетчерской</div>
                            <div className={`${styles.pageRequisitesContentDesc}`}>8 495 737 45 17</div>
                          </div>
                          <div className={`${styles.pageRequisitesContent}`}>
                            <div className={`${styles.pageRequisitesContentText}`}>Электронная почта</div>
                            <div className={`${styles.pageRequisitesContentDesc}`}>tsgVatutina18-2@mail.ru</div>
                          </div>
                          <div className={`${styles.pageRequisitesContent}`}>
                            <div className={`${styles.pageRequisitesContentText}`}>ИНН</div>
                            <div className={`${styles.pageRequisitesContentDesc}`}>7731267010</div>
                          </div>
                          <div className={`${styles.pageRequisitesContent}`}>
                            <div className={`${styles.pageRequisitesContentText}`}>КПП</div>
                            <div className={`${styles.pageRequisitesContentDesc}`}>773101001</div>
                          </div>
                          <div className={`${styles.pageRequisitesContent}`}>
                            <div className={`${styles.pageRequisitesContentText}`}>ОКВЭД</div>
                            <div className={`${styles.pageRequisitesContentDesc}`}></div>
                          </div>
                          <div className={`${styles.pageRequisitesContent}`}>
                            <div className={`${styles.pageRequisitesContentText}`}>ОКПО</div>
                            <div className={`${styles.pageRequisitesContentDesc}`}></div>
                          </div>
                          <div className={`${styles.pageRequisitesContent}`}>
                            <div className={`${styles.pageRequisitesContentText}`}>ОГРН</div>
                            <div className={`${styles.pageRequisitesContentDesc}`}>1027731012979</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div className={`${styles.pageDocumentsDesktop}`}>
                  <section className={`${styles.pageDocuments}`}>
                    <div className={`${styles.wrapper} ${styles.wrapperSmall}`}>
                      <div className={`${styles.pageDocumentsTitle}`}>
                        <span className={`${styles.titleBig}`}>Документы компании</span>
                      </div>
                      <DocumentFile documentName={'act-ventilation.pdf'}
                                    documentTitle={'Акт обследования технического состояния вентиляции'}>
                      </DocumentFile>
                      <DocumentFile documentName={'heating_season_readiness_check.pdf'}
                                    documentTitle={'Акт проверки готовности к отопительному периоду 2025/2026 гг.'}>
                      </DocumentFile>
                      <DocumentFile documentName={'heating_readiness_addendum.pdf'}
                                    documentTitle={'Приложение к акту проверки готовности к отопительному периоду 2025/2026 гг.'}>
                      </DocumentFile>
                      <DocumentFile documentName={'thermal_energy_inspection_report.pdf'}
                                    documentTitle={'Акт проверки узла учета тепловой энергии и теплоносителя'}>
                      </DocumentFile>
                      <DocumentFile documentName={'certificate_FTA.pdf'}
                                    documentTitle={'Свидетельство о регистрации юр. лица в ФНС'}>
                      </DocumentFile>
                    </div>
                  </section>
                </div>
              </main>
            </div>
          </main>
        </div>
        <Footer/>
      </div>
  );
}
