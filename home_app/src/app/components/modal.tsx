"use client";
import React, { useState, FC } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "./modal.module.css";
import { motion, AnimatePresence } from "motion/react";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (data: { phone: string | undefined; topic: string; body: string; email: string; agreed: boolean }) => void;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: "-100vh", scale: 0.8 },
  visible: { opacity: 1, y: "0", scale: 1 },
  exit: { opacity: 0, y: "100vh", scale: 0.8 },
};

const ModalForm: FC<ModalFormProps> = ({ isOpen, onClose, onSend }) => {
  const [topic, setTopic] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [phone, setPhone] = useState<string | undefined>();
  const [email, setEmail] = useState<string>("");
  const [agreed, setAgreed] = useState<boolean>(false);

  const handleSend = async () => {
    if (!agreed) {
      alert("Необходимо Ваше согласие на обработку персональных данных.");
    }
    else {
      const sendButton = document.getElementById('send-button');
      if (sendButton == null) {
        return;
      }
      sendButton.setAttribute("disabled", 'true');
      sendButton.classList.toggle(styles.disabled);
      if (!isValidPhoneNumber(typeof phone === "string" ? phone : "", "RU")) {
        sendButton.setAttribute("disabled", 'false');
        sendButton.classList.toggle(styles.disabled);
        alert("Номера телефона введен некорректно. Проверьте правильность введенных данных.")
        return
      }

      await onSend({topic, email, body, phone, agreed});

      sendButton.setAttribute("disabled", 'false');
      sendButton.classList.toggle(styles.disabled);
    }
  };

  return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
              id="emailModal"
              className={`${styles.cModal} 
              ${isOpen ? styles.isOpened : ''}`}
              data-component="email-modal"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
          >
            <div
                className={`${styles.cModalBackdrop} ${styles.uFadeHalfEnter} ${styles.uFadeHalfEnterActive} ${styles.uFadeHalfLeave} ${styles.uFadeHalfLeaveActive} ${styles.uFadeHalfEnterTo}`}
                data-ref="backdrop">
            </div>
            <motion.div
                className={`${styles.cModalWrapper}`}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className={`${styles.cModalDialog} ${styles.uModalEnterTo}`} data-ref="dialog">
                <form id="email-form" data-ref="form" noValidate={false}>
                  <div className={`${styles.cModalHeader}`}>
                    <span className={`${styles.cModalHeaderTitle}`} data-ref="title">Отправить обращение</span>
                    <button type="button" data-ref="close-btn" onClick={onClose}>
                      <svg
                          className={`${styles.cModalHeaderClose}`}
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="times"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 352 512"
                      >
                        <path fill="currentColor"
                              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19
                              0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48
                              0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48
                              0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28
                              256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28
                              12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28
                              32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                        />
                      </svg>
                    </button>
                  </div>
                  <hr className={`${styles.cModalBand}`}/>
                  <div className={`${styles.cModalComment}`} data-ref="comment">
                    <span className={`${styles.cModalLabel}`}>Тема сообщения</span>
                    <input
                        className={`${styles.cModalInput}`}
                        type="topic"
                        id="topic"
                        form="email-form"
                        placeholder="Введите тему Вашего сообщения"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                    />
                    <span className={`${styles.cModalTextDanger}`}
                          data-ref="error-text">Тема сообщения слишком короткая
                    </span>
                  </div>
                  <div className={`${styles.cModalComment}`} data-ref="comment">
                    <span className={`${styles.cModalLabel}`}>Текст сообщения</span>
                    <textarea
                        className={`${styles.cModalCommentMessage}`}
                        name="comment"
                        id="comment"
                        cols={20}
                        placeholder="Введите текст Вашего сообщения"
                        form="email-form"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <span
                        className={`${styles.cModalTextDanger}`}
                        data-ref="error-text"
                    >
                      Текст сообщения слишком короткий
                    </span>
                  </div>
                  <div className={`${styles.cModalContainer}`} data-ref="phone-number" data-mask="phoneNumber">
                    <PhoneInput
                        className={`${styles.cModalInput}`}
                        placeholder="+7 (123) 456-78-90"
                        value={phone}
                        defaultCountry="RU"
                        onChange={setPhone}
                        countries={["RU"]}
                    />
                  </div>
                  <div className={`${styles.cModalContainer}`} data-ref="email-address">
                    <span className={`${styles.cModalLabel}`}>Адрес электронной почты</span>
                    <input
                        className={`${styles.cModalInput}`}
                        type="email"
                        id="mail"
                        form="email-form"
                        placeholder="Введите Ваш адрес электронной почты"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className={`${styles.cModalTextDanger}`} data-ref="error-email">
                      Неверный формат электронной почты
                    </span>
                  </div>
                  <hr className={`${styles.cModalBand}`}/>
                  <div className={`${styles.cModalFooter}`}>
                    <span className={`${styles.cModalPolicy}`} data-ref="policy">
                      <div className={`${styles.cModalPolicyWrapper}`}>
                          <input
                              className={`${styles.cModalCheckbox}`}
                              type="checkbox"
                              checked={agreed}
                              onChange={(e) => setAgreed(e.target.checked)}
                          />
                          <p className={`${styles.cModalPolicyText}`}>
                            Я даю согласие на обработку персональных данных.
                            <a className={`${styles.cModalPolicyLink}`} target="_blank" href="/policy">
                              Политика работы с&nbsp;персональными данными
                            </a>
                          </p>
                      </div>
                      <span className={`${styles.cModalTextDanger}`} data-ref="error-policy">
                            Необходимо ознакомиться с политикой конфиденциальности
                      </span>
                    </span>
                    <div>
                      <button
                          className={`${styles.btnClose}`}
                          type="button"
                          onClick={onClose}
                      >
                        отмена
                      </button>
                      <button id={'send-button'} className={`${styles.btnSuccess}`} type="button" onClick={handleSend}>
                        отправить
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
            <div id="emailConfirmModal" className={`${styles.cModal}`} data-component="email-confirm-modal">
              <div className={`${styles.cModalBackdrop} ${styles.uFadeHalfEnter}`} data-ref="backdrop">
              </div>
              <div className={`${styles.cModalWrapper}`}>
                <div className={`${styles.cModalDialog} ${styles.uModalEnter}`} data-ref="dialog">
                  <div className={`${styles.cModalHeader}`}>
                    <span className={`${styles.cModalHeaderTitle}`}>Обратная связь</span>
                    <button type="button" className={`${styles.button}`} data-ref="close-btn">
                      <svg className={`${styles.cModalHeaderClose}`} aria-hidden="true" focusable="false"
                           data-prefix="fas"
                           data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                        <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19
                                    0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48
                                    0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48
                                    0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28
                                    256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28
                                    12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28
                                    32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                      </svg>
                    </button>
                  </div>
                  <hr className={`${styles.cModalBand}`}/>
                  <div className={`${styles.cModalContent}`}>
                    Ваше сообщение успешно отправлено. Мы свяжемся с вами в самое ближайшее время.
                  </div>
                  <hr className={`${styles.cModalBand}`}/>
                  <div className={`${styles.cModalFooter}`}>
                    <button type="button" className={`${styles.button} ${styles.btnSuccess}`} data-ref="cancel-btn">
                      понятно
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
  );
};
export default ModalForm;