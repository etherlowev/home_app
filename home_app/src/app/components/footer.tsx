import React, {JSX} from 'react';
import "../globals.css"
import styles from "./footer.module.css"

const Footer: React.FC = (): JSX.Element => {
  return <>
  <footer className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.footerMenus}>
        <img src="/img/logo.png" alt="logo" className={styles.footerLogo}/>
        <div className={styles.grid}>
          <div className={`${styles.box} ${styles.laptop3}`}>
            <h4 className={styles.footerTitle}>О компании</h4>
            <ul className={styles.footerMenu}>
              <li>
                <a href="/about" className={styles.footerMenuItem}>
                  Контактная информация
                </a>
              </li>
              <li>
                <a href="/about" className={styles.footerMenuItem}>
                  Уставные документы
                </a>
              </li>
              <li>
                <a href="/about" className={styles.footerMenuItem}>
                  Реквизиты
                </a>
              </li>
              <li>
                <a href="/vacancies" className={styles.footerMenuItem}>
                  Вакансии
                </a>
              </li>
            </ul>
          </div>
          <div className={`${styles.box} ${styles.laptop3}`}>
            <h4 className={styles.footerTitle}>Для жильцов</h4>
            <ul className={styles.footerMenu}>
              <li>
                <a href="/news" className={styles.footerMenuItem}>
                  Новости
                </a>
              </li>
              <li>
                <a href="https://lk.tsj-vatytina.stack-divo.ru" className={styles.footerMenuItem}>
                  Отправить показания
                </a>
              </li>
              <li>
                <a href="/elevator-service-company" className={styles.footerMenuItem}>
                  Информация о компании обслуживающей лифты
                </a>
              </li>
            </ul>
          </div>
          <div className={`${styles.box} ${styles.laptop3}`}>
            <h4 className={styles.footerTitle}>Документы</h4>
            <ul className={styles.footerMenu}>
              <li>
                <a href="/privacy" className={styles.footerMenuItem}>
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/user-agreement" className={styles.footerMenuItem}>
                  Пользовательское соглашение
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerContacts}>
        <div className={styles.grid}>
          <div className={`${styles.box} ${styles.desktop3} ${styles.laptop4}`}>
            <span className={`${styles.footerContact} ${styles.footerContactEmail}`}>
              <div className={styles.footerContactInner}>
                <div className={styles.footerContactTitle}>эл.почта</div>
                <div className={styles.footerContactText} data-modal="#emailModal">tsgVatutina18-2@mail.ru</div>
              </div>
            </span>
          </div>
          <div className={`${styles.box} ${styles.desktop9} ${styles.laptop8}`}>
            <div className={styles.right}>


              <a href="tel: 8 495 788 45 17" className={`${styles.footerContact} ${styles.footerContactPhone}`}>
                <div className={styles.footerContactInner}>
                  <div className={styles.footerContactTitle}>по всем вопросам</div>
                  <div className={styles.footerContactText}>8 495 788 45 17</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </>;
};

export default Footer;