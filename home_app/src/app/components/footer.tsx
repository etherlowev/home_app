import React, {JSX} from 'react';
import "./Footer.css"

const Footer: React.FC = (): JSX.Element => {
  return <>
  <footer className='footer wow fadeIn'>
    <div className="content">
      <div className="footer-menus">
        <img
            src="https://176428.selcdn.ru/RosKvartal.CDN/Front.Assets/9709062349/images/9d578d6c-9d37-46ac-a380-4c391374fb40.jpg"
            alt="" className="footer-logo"/>
        <div className="grid">
          <div className="box laptop-3">
            <h4 className="footer-title">О компании</h4>
            <ul className="footer-menu">
              <li>
                <a href="/about-company" className="footer-menu-item">
                  Лицензии и контакты
                </a>
              </li>
              <li>
                <a href="/about-company" className="footer-menu-item">
                  Контактная информация
                </a>
              </li>
              <li>
                <a href="/about-company" className="footer-menu-item">
                  Уставные документы
                </a>
              </li>
              <li>
                <a href="/about-company" className="footer-menu-item">
                  Наша история
                </a>
              </li>
              <li>
                <a href="/about-company" className="footer-menu-item">
                  Первые лица
                </a>
              </li>
              <li>
                <a href="/about-company" className="footer-menu-item">
                  Реквизиты
                </a>
              </li>
              <li>
                <a href="/section/51438" className="footer-menu-item">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>
          <div className="box laptop-3">
            <h4 className="footer-title">Для жильцов</h4>
            <ul className="footer-menu">
              <li>
                <a href="/news" className="footer-menu-item">
                  Новости
                </a>
              </li>
              <li>
                <a href="/in-development" className="footer-menu-item">
                  Оплатить ЖКУ онлайн
                </a>
              </li>
              <li>
                <a href="/in-development" className="footer-menu-item">
                  Оплатить ЖКУ без комиссии
                </a>
              </li>
              <li>
                <button data-dispatch-widget="recourse" className="footer-menu-item">
                  Отправить обращение
                </button>
              </li>
              <li>
                <button data-dispatch-widget="meteringDevices" className="footer-menu-item">
                  Отправить показания
                </button>
              </li>
              <li>
                <a href="/in-development" className="footer-menu-item">
                  Справочник жильца
                </a>
              </li>
              <li>
                <a href="/page/51432" className="footer-menu-item">
                  Информация о компании обслуживающей лифты
                </a>
              </li>
            </ul>
          </div>
          <div className="box laptop-3">
            <h4 className="footer-title">Для партнеров</h4>
            <ul className="footer-menu">
              <li>
                <a href="/in-development" className="footer-menu-item">
                  Информация для партнеров
                </a>
              </li>
              <li>
                <a href="/in-development" className="footer-menu-item">
                  Владельцам неджвижимости
                </a>
              </li>
              <li>
                <a href="/in-development" className="footer-menu-item">
                  Конкурсы и закупки
                </a>
              </li>
              <li>
                <a href="/in-development" className="footer-menu-item">
                  Застройщикам
                </a>
              </li>
            </ul>
          </div>
          <div className="box laptop-3">
            <h4 className="footer-title">Документы</h4>
            <ul className="footer-menu">
              <li>
                <a href="/page/51428" className="footer-menu-item">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/page/51429" className="footer-menu-item">
                  Пользовательское соглашение
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-contacts">
        <div className="grid">
          <div className="box desktop-3 laptop-4">
            <span className="footer-contact footer-contact-email">
              <div className="footer-contact-inner">
                <div className="footer-contact-title">эл.почта</div>
                <div className="footer-contact-text" data-modal="#emailModal">ykgorizont@gmail.com</div>
              </div>
            </span>
          </div>
          <div className="box desktop-9 laptop-8">
            <div className="right">


              <a href="tel: 8 495 788 45 17" className="footer-contact footer-contact-phone">
                <div className="footer-contact-inner">
                  <div className="footer-contact-title">по всем вопросам</div>
                  <div className="footer-contact-text">8 495 788 45 17</div>
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