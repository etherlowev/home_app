"use client";
import React, { useState, FC } from "react";
import { motion, AnimatePresence } from "motion/react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (data: { phone: string | undefined; topic: string; body: string; email: string; agreed: boolean }) => void;
}

interface FormData {
  topic: string;
  body: string;
  phone: string;
  email: string;
  agreed: boolean;
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


  const handleSend = () => {
    if (!agreed) {
      alert("You must agree to the privacy policy.");
      return;
    }
    onSend({ topic, body, phone, email, agreed });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          style={styles.backdrop}
          onClick={onClose}
        >
          <motion.div
            className="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Отправить обращение</h2>
            <label>
              Тема обращения:
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                style={styles.input}
                placeholder="Введите тему обращения"
              />
            </label>
            <label>
              Текст обращения:
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                style={styles.textarea}
                placeholder="Введите текст Вашего обращения"
              />
            </label>
            <label>
              Номер телефона:
              <PhoneInput
                placeholder="+7 (123) 456-78-90"
                value={phone}
                defaultCountry="RU"
                onChange={setPhone}
                countries={["RU"]}
                style={styles.input}
              />
            </label>
            <label>
              Адрес электронной почты:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                placeholder="Введите Ваш адрес электронной почты"
              />
            </label>
            <label style={styles.checkboxLabel}>
              <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              style={styles.checkbox}
              />
              Я даю согласие на обработку персональных данных.
              <a href="/privacy" style={styles.a}>Политика работы с персональными данными</a>
            </label>
            <div style={styles.buttonRow}>
              <button onClick={onClose} style={styles.cancelButton}>
                Отмена
              </button>
              <button onClick={handleSend} style={styles.sendButton}>
                Отправить
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const styles = {
  backdrop: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "800px",
    maxWidth: "180vw",
    maxHeight: "80vh",
    overflowY: "auto" as const,
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "4px 0 12px",
    border: "gray",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "4px",
    boxSizing: "border-box" as const,
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "8px",
    margin: "4px 0 12px",
    border: "gray",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "4px",
    boxSizing: "border-box" as const,
  },
  checkbox: {
    marginRight: "0.5em",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
    userSelect: "none" as const,
  },
  buttonRow: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 15,
  },
  sendButton: {
    backgroundColor: "#57bc69",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "9px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#ffffff",
    color: "light-gray",
    border: "gray",
    borderStyle: "solid",
    padding: "8px 16px",
    borderRadius: "9px",
    borderWidth: "2.5px",
    cursor: "pointer",
  },
  a: {
    textDecoration: "none",
    color: "#bf4040",
  }
};

export default ModalForm;