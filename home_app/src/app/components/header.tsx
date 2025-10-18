import React, {JSX} from 'react';
import "./Header.css"


const Header: React.FC = (): JSX.Element => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      let menuToggle = document.querySelector('.menu-toggle');
      let nav = document.getElementById('main-nav');
      if (nav != null && menuToggle != null) {
        const isOpen = nav.classList.toggle('open');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', "isOpen");
      }
  };

  return <header className='flex margin-header'>
    <div className='logo'>
      <a>
        <img className="logo-icon"
             src="https://176428.selcdn.ru/RosKvartal.CDN/Front.Assets/9709062349/images/9d578d6c-9d37-46ac-a380-4c391374fb40.jpg"
             alt="ООО УК &quot;Горизонт&quot;"></img>
      </a>
    </div>
    <ul id="main-nav" className="nav">
      <li>
        <a href="/" className=''>Главная</a>
      </li>
      <li>
        <a href="/houses" className="">Дома</a>
      </li>
      <li>
        <a href="/about-company" className="">Компания</a>
      </li>
      <li>
        <a href="/section/51433" className="">Жителям</a>
      </li>
      <li>
        <a href="/contacts" className="">Контакты</a>
      </li>
    </ul>
    <div className="phone">
      <div style={{display: 'flex', gap: '3%'}}>
        <a href="tel:8 495 788 45 17">8 495 788 45 17</a>
        <svg viewBox="0 0 19 18" width="19" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--theme-accent)"
                d="M17.636 14.237l-2.786-2.786c-.555-.553-1.474-.536-2.048.038l-1.404 1.404-.277-.155c-.886-.49-2.1-1.164-3.376-2.441-1.28-1.28-1.954-2.496-2.447-3.383-.052-.094-.101-.184-.15-.27l.941-.94.464-.465c.575-.575.59-1.494.037-2.048L3.804.404C3.25-.149 2.33-.132 1.756.443l-.786.79.022.02a4.54 4.54 0 0 0-.647 1.142C.194 2.793.1 3.172.057 3.553c-.368 3.05 1.026 5.837 4.808 9.62 5.228 5.227 9.442 4.833 9.624 4.813a4.71 4.71 0 0 0 1.16-.291 4.53 4.53 0 0 0 1.138-.645l.017.015.795-.778c.574-.576.59-1.495.037-2.05z"></path>
        </svg>
      </div>
      <a href="https://lk.gorizont-yk.stack-divo.ru" className="" data-ref="account-btn">
        <svg className="" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--theme-accent)"
                d="M9 0C4.05 0 0 4.05 0 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9zm0 2.7c1.53 0 2.7 1.17 2.7 2.7 0 1.53-1.17 2.7-2.7 2.7-1.53 0-2.7-1.17-2.7-2.7 0-1.53 1.17-2.7 2.7-2.7zm0 12.78c-2.25 0-4.23-1.17-5.4-2.88 0-1.8 3.6-2.79 5.4-2.79 1.8 0 5.4.99 5.4 2.79-1.17 1.71-3.15 2.88-5.4 2.88z"></path>
        </svg>
      </a>
      <svg className="main-menu-btn__close-svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path fill="var(--theme-accent)"
              d="M11.7693 10.0002L19.6343 2.13513C20.123 1.6469 20.123 0.854719 19.6343 0.366487C19.1457 -0.122162 18.3544 -0.122162 17.8657 0.366487L10.0006 8.23157L2.13513 0.366487C1.64648 -0.122162 0.855136 -0.122162 0.366487 0.366487C-0.122162 0.854719 -0.122162 1.6469 0.366487 2.13513L8.23198 10.0002L0.366487 17.8653C-0.122162 18.3535 -0.122162 19.1457 0.366487 19.6339C0.610811 19.8778 0.931018 20 1.25081 20C1.5706 20 1.8908 19.8778 2.13513 19.6335L10.0006 11.7684L17.8657 19.6335C18.11 19.8778 18.4302 20 18.75 20C19.0698 20 19.39 19.8778 19.6343 19.6335C20.123 19.1453 20.123 18.3531 19.6343 17.8649L11.7693 10.0002Z"></path>
      </svg>
    </div>
  </header>;
};

export default Header;