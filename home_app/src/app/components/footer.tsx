import React, {JSX} from 'react';
import "../globals.css"
import styles from "./footer.module.css"

const Footer: React.FC = (): JSX.Element => {
  return <>
  <footer className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.footerMenus}>
        <img
            src="https://176428.selcdn.ru/RosKvartal.CDN/Front.Assets/9709062349/images/9d578d6c-9d37-46ac-a380-4c391374fb40.jpg"
            alt="" className={styles.footerLogo}/>
        <div className={styles.grid}>
          <div className={`${styles.box} ${styles.laptop3}`}>
            <h4 className={styles.footerTitle}>О компании</h4>
            <ul className={styles.footerMenu}>
              <li>
                <a href="/about-company" className={styles.footerMenuItem}>
                  Лицензии и контакты
                </a>
              </li>
              <li>
                <a href="/about-company" className={styles.footerMenuItem}>
                  Контактная информация
                </a>
              </li>
              <li>
                <a href="/about-company" className={styles.footerMenuItem}>
                  Уставные документы
                </a>
              </li>
              <li>
                <a href="/about-company" className={styles.footerMenuItem}>
                  Наша история
                </a>
              </li>
              <li>
                <a href="/about-company" className={styles.footerMenuItem}>
                  Первые лица
                </a>
              </li>
              <li>
                <a href="/about-company" className={styles.footerMenuItem}>
                  Реквизиты
                </a>
              </li>
              <li>
                <a href="/section/51438" className={styles.footerMenuItem}>
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
                <a href="/in-development" className={styles.footerMenuItem}>
                  Оплатить ЖКУ онлайн
                </a>
              </li>
              <li>
                <a href="/in-development" className={styles.footerMenuItem}>
                  Оплатить ЖКУ без комиссии
                </a>
              </li>
              <li>
                <button data-dispatch-widget="recourse" className={styles.footerMenuItem}>
                  Отправить обращение
                </button>
              </li>
              <li>
                <button data-dispatch-widget="meteringDevices" className={styles.footerMenuItem}>
                  Отправить показания
                </button>
              </li>
              <li>
                <a href="/in-development" className={styles.footerMenuItem}>
                  Справочник жильца
                </a>
              </li>
              <li>
                <a href="/page/51432" className={styles.footerMenuItem}>
                  Информация о компании обслуживающей лифты
                </a>
              </li>
            </ul>
          </div>
          <div className={`${styles.box} ${styles.laptop3}`}>
            <h4 className={styles.footerTitle}>Для партнеров</h4>
            <ul className={styles.footerMenu}>
              <li>
                <a href="/in-development" className={styles.footerMenuItem}>
                  Информация для партнеров
                </a>
              </li>
              <li>
                <a href="/in-development" className={styles.footerMenuItem}>
                  Владельцам неджвижимости
                </a>
              </li>
              <li>
                <a href="/in-development" className={styles.footerMenuItem}>
                  Конкурсы и закупки
                </a>
              </li>
              <li>
                <a href="/in-development" className={styles.footerMenuItem}>
                  Застройщикам
                </a>
              </li>
            </ul>
          </div>
          <div className={`${styles.box} ${styles.laptop3}`}>
            <h4 className={styles.footerTitle}>Документы</h4>
            <ul className={styles.footerMenu}>
              <li>
                <a href="/page/51428" className={styles.footerMenuItem}>
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/page/51429" className={styles.footerMenuItem}>
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
                <div className={styles.footerContactText} data-modal="#emailModal">ykgorizont@gmail.com</div>
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