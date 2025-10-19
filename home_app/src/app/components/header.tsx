import React from 'react';
import "./Header.css"

interface HeaderProps {
  /** Active nav element */
  pathName: string;
}

function Header ({pathName}: HeaderProps ) {
  const handleClick = () => {
    let menuToggle = document.getElementById('menu');
    let crossToggle = document.getElementById('cross');
    let mobileMenu = document.querySelector('.main-menu-mobile')
    if (menuToggle != null && crossToggle != null && mobileMenu != null) {
      menuToggle.classList.toggle('active');
      crossToggle.classList.toggle('active');
      if (mobileMenu.getAttribute('hidden') != "") {
        mobileMenu.setAttribute("hidden", "");
      }
      else {
        mobileMenu.removeAttribute("hidden");
      }
    }
  };

  function selectedNav(path : string) {
    return pathName === path ? 'active' : ''
  }

  return <header className='header header-main-page-margin'>
    <div className="header-top">
      <div className="content" data-ref="header-top-navbar">
        <div className="u-d-flex">
          <div className="u-d-flex u-flex-grow">
            <a href="/" className="logo" data-ref="logo">
              <img
                  src="https://176428.selcdn.ru/RosKvartal.CDN/Front.Assets/9709062349/images/9d578d6c-9d37-46ac-a380-4c391374fb40.jpg"
                  alt="ООО УК &quot;Горизонт&quot;" className="logo-icon"/>
            </a>
            <nav className="main-menu" data-ref="main-menu">
              <ul className="u-d-flex" data-ref="main-menu-list">
                <li className="u-flex-shrink-0">
                  <a href="/" className={selectedNav("/")}>Главная</a>
                </li>
                <li className="u-flex-shrink-0">
                  <a href="/houses" className={selectedNav("/houses")}>Дома</a>
                </li>
                <li className="u-flex-shrink-0">
                  <a href="/about" className={selectedNav("/about")}>Компания</a>
                </li>
                <li className="u-flex-shrink-0">
                  <a href="/news" className={selectedNav("/news")}>Жителям</a>
                </li>
                <li className="u-flex-shrink-0">
                  <a href="/contacts" className={selectedNav("/contacts")}>Контакты</a>
                </li>
              </ul>
            </nav>
            <div className="main-menu-rest-wrap" data-ref="main-menu-rest">
              <div className="main-menu-rest-item" data-ref="main-menu-rest-item-btn">
                <svg className="main-menu-rest-icon" width="16" height="4" viewBox="0 0 16 4" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M12.5 2C12.5 2.8125 13.1875 3.5 14 3.5C14.8125 3.5 15.5 2.8125 15.5 2C15.5 1.1875 14.8125 0.5 14 0.5C13.1875 0.5 12.5 1.1875 12.5 2ZM3.5 2C3.5 1.1875 2.8125 0.5 2 0.5C1.1875 0.5 0.5 1.1875 0.5 2C0.5 2.8125 1.1875 3.5 2 3.5C2.8125 3.5 3.5 2.8125 3.5 2ZM9.5 2C9.5 1.1875 8.8125 0.5 8 0.5C7.1875 0.5 6.5 1.1875 6.5 2C6.5 2.8125 7.1875 3.5 8 3.5C8.8125 3.5 9.5 2.8125 9.5 2Z"></path>
                </svg>
              </div>
              <div className="main-menu-rest-items" data-ref="main-menu-rest-items">
                <div className="main-menu-rest-item">
                  <a href="/" className="main-menu-rest-item__link active">Главная</a>
                </div>
                <div className="main-menu-rest-item">
                  <a href="/houses" className="main-menu-rest-item__link ">Дома</a>
                </div>
                <div className="main-menu-rest-item">
                  <a href="/about-company" className="main-menu-rest-item__link ">Компания</a>
                </div>
                <div className="main-menu-rest-item">
                  <a href="/section/51433" className="main-menu-rest-item__link ">Жителям</a>
                </div>
                <div className="main-menu-rest-item">
                  <a href="/contacts" className="main-menu-rest-item__link ">Контакты</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="u-d-flex">
              <div className="header-phone-wrap u-flex-shrink-0" data-ref="header-phone">
                <div className="header-phone">
                  <a href="tel:8 495 788 45 17">8 495 788 45 17</a>
                  <svg className="header-phone-icon" viewBox="0 0 19 18" width="19" height="18" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fill="var(--theme-accent)"
                          d="M17.636 14.237l-2.786-2.786c-.555-.553-1.474-.536-2.048.038l-1.404 1.404-.277-.155c-.886-.49-2.1-1.164-3.376-2.441-1.28-1.28-1.954-2.496-2.447-3.383-.052-.094-.101-.184-.15-.27l.941-.94.464-.465c.575-.575.59-1.494.037-2.048L3.804.404C3.25-.149 2.33-.132 1.756.443l-.786.79.022.02a4.54 4.54 0 0 0-.647 1.142C.194 2.793.1 3.172.057 3.553c-.368 3.05 1.026 5.837 4.808 9.62 5.228 5.227 9.442 4.833 9.624 4.813a4.71 4.71 0 0 0 1.16-.291 4.53 4.53 0 0 0 1.138-.645l.017.015.795-.778c.574-.576.59-1.495.037-2.05z"></path>
                  </svg>
                </div>
                <div className="header-phones">
                  <div className="header-phone">
                    <span className="header-phone-title">Диспетчерская</span>
                    <a href="tel:8 495 737 45 17">8 495 737 45 17</a>
                    <svg className="header-phone-icon" viewBox="0 0 19 18" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill="var(--theme-accent)"
                            d="M17.636 14.237l-2.786-2.786c-.555-.553-1.474-.536-2.048.038l-1.404 1.404-.277-.155c-.886-.49-2.1-1.164-3.376-2.441-1.28-1.28-1.954-2.496-2.447-3.383-.052-.094-.101-.184-.15-.27l.941-.94.464-.465c.575-.575.59-1.494.037-2.048L3.804.404C3.25-.149 2.33-.132 1.756.443l-.786.79.022.02a4.54 4.54 0 0 0-.647 1.142C.194 2.793.1 3.172.057 3.553c-.368 3.05 1.026 5.837 4.808 9.62 5.228 5.227 9.442 4.833 9.624 4.813a4.71 4.71 0 0 0 1.16-.291 4.53 4.53 0 0 0 1.138-.645l.017.015.795-.778c.574-.576.59-1.495.037-2.05z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <a href="https://lk.gorizont-yk.stack-divo.ru" className="account-btn" data-ref="account-btn">
                <svg className="account-btn__lk-svg" width="18" height="18" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill="var(--theme-accent)"
                        d="M9 0C4.05 0 0 4.05 0 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9zm0 2.7c1.53 0 2.7 1.17 2.7 2.7 0 1.53-1.17 2.7-2.7 2.7-1.53 0-2.7-1.17-2.7-2.7 0-1.53 1.17-2.7 2.7-2.7zm0 12.78c-2.25 0-4.23-1.17-5.4-2.88 0-1.8 3.6-2.79 5.4-2.79 1.8 0 5.4.99 5.4 2.79-1.17 1.71-3.15 2.88-5.4 2.88z"></path>
                </svg>
              </a>
              <a className="account-btn account-btn__blind" href="?blind=true" data-ref="blind-btn">
                <svg className="account-btn__blind-svg" width="24" height="24" fill="none"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="var(--theme-accent)"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                </svg>
              </a>
              <div role="button" className="main-menu-btn active" onClick={handleClick}>
                <div className="main-menu-btn-inner"></div>
                <svg className="main-menu-btn__close-svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path id={'cross'} fill="var(--theme-accent)"
                        d="M11.7693 10.0002L19.6343 2.13513C20.123 1.6469 20.123 0.854719 19.6343 0.366487C19.1457 -0.122162 18.3544 -0.122162 17.8657 0.366487L10.0006 8.23157L2.13513 0.366487C1.64648 -0.122162 0.855136 -0.122162 0.366487 0.366487C-0.122162 0.854719 -0.122162 1.6469 0.366487 2.13513L8.23198 10.0002L0.366487 17.8653C-0.122162 18.3535 -0.122162 19.1457 0.366487 19.6339C0.610811 19.8778 0.931018 20 1.25081 20C1.5706 20 1.8908 19.8778 2.13513 19.6335L10.0006 11.7684L17.8657 19.6335C18.11 19.8778 18.4302 20 18.75 20C19.0698 20 19.39 19.8778 19.6343 19.6335C20.123 19.1453 20.123 18.3531 19.6343 17.8649L11.7693 10.0002Z"></path>
                  <path id={'menu'} className={'active'}
                      d="M0 1.75491C0 1.11058 0.591979 0.588242 1.32222 0.588242H19.8333C20.5636 0.588242 21.1556 1.11058 21.1556 1.75491C21.1556 2.39924 20.5636 2.92157 19.8333 2.92157H1.32222C0.591979 2.92157 0 2.39924 0 1.75491Z M0 7.58824C0 6.94391 0.591979 6.42157 1.32222 6.42157H19.8333C20.5636 6.42157 21.1556 6.94391 21.1556 7.58824C21.1556 8.23257 20.5636 8.75491 19.8333 8.75491H1.32222C0.591979 8.75491 0 8.23257 0 7.58824Z M0 13.4216C0 12.7772 0.591979 12.2549 1.32222 12.2549H19.8333C20.5636 12.2549 21.1556 12.7772 21.1556 13.4216C21.1556 14.0659 20.5636 14.5882 19.8333 14.5882H1.32222C0.591979 14.5882 0 14.0659 0 13.4216Z"
                      fill="#454545"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-menu-mobile" hidden={true}>
        <nav className="main-menu">
          <ul>
            <li><a href="/" className="active">Главная</a></li>
            <li><a href="/houses" className="">Дома</a></li>
            <li><a href="/about-company" className="">Компания</a></li>
            <li><a href="/section/51433" className="">Жителям</a></li>
            <li><a href="/contacts" className="">Контакты</a></li>
          </ul>
        </nav>
        <div className="header-phones">
          <div className="header-phone">
            <svg className="header-phone-icon" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="var(--theme-accent)"
                    d="M17.636 14.237l-2.786-2.786c-.555-.553-1.474-.536-2.048.038l-1.404 1.404-.277-.155c-.886-.49-2.1-1.164-3.376-2.441-1.28-1.28-1.954-2.496-2.447-3.383-.052-.094-.101-.184-.15-.27l.941-.94.464-.465c.575-.575.59-1.494.037-2.048L3.804.404C3.25-.149 2.33-.132 1.756.443l-.786.79.022.02a4.54 4.54 0 0 0-.647 1.142C.194 2.793.1 3.172.057 3.553c-.368 3.05 1.026 5.837 4.808 9.62 5.228 5.227 9.442 4.833 9.624 4.813a4.71 4.71 0 0 0 1.16-.291 4.53 4.53 0 0 0 1.138-.645l.017.015.795-.778c.574-.576.59-1.495.037-2.05z"></path>
            </svg>
            <div className="header-phone-text">
              <span className="header-phone-title">По всем вопросам</span>
              8 495 788 45 17
            </div>
          </div>
          <div className="header-phone">
            <svg className="header-phone-icon" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="var(--theme-accent)"
                    d="M17.636 14.237l-2.786-2.786c-.555-.553-1.474-.536-2.048.038l-1.404 1.404-.277-.155c-.886-.49-2.1-1.164-3.376-2.441-1.28-1.28-1.954-2.496-2.447-3.383-.052-.094-.101-.184-.15-.27l.941-.94.464-.465c.575-.575.59-1.494.037-2.048L3.804.404C3.25-.149 2.33-.132 1.756.443l-.786.79.022.02a4.54 4.54 0 0 0-.647 1.142C.194 2.793.1 3.172.057 3.553c-.368 3.05 1.026 5.837 4.808 9.62 5.228 5.227 9.442 4.833 9.624 4.813a4.71 4.71 0 0 0 1.16-.291 4.53 4.53 0 0 0 1.138-.645l.017.015.795-.778c.574-.576.59-1.495.037-2.05z"></path>
            </svg>
            <div className="header-phone-text">
              <span className="header-phone-title">Диспетчерская</span>
              8 495 737 45 17
            </div>
          </div>
        </div>
        <a href="https://lk.gorizont-yk.stack-divo.ru" className="account-btn">
          <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--theme-accent)"
                  d="M9 0C4.05 0 0 4.05 0 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9zm0 2.7c1.53 0 2.7 1.17 2.7 2.7 0 1.53-1.17 2.7-2.7 2.7-1.53 0-2.7-1.17-2.7-2.7 0-1.53 1.17-2.7 2.7-2.7zm0 12.78c-2.25 0-4.23-1.17-5.4-2.88 0-1.8 3.6-2.79 5.4-2.79 1.8 0 5.4.99 5.4 2.79-1.17 1.71-3.15 2.88-5.4 2.88z"></path>
          </svg>
          Личный кабинет
        </a>
        <a className="account-btn" href="?blind=true">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="var(--theme-accent)"
                  d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
          </svg>
          Версия для слабовидящих
        </a>
      </div>
    </div>
    <div className="header-bottom header-bottom-main-page-color  u-d-none  ">
      <div className="content">
        <ul className="main-submenu">
        </ul>
      </div>
    </div>

  </header>;
}

export default Header;