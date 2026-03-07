import styles from "@/app/components/modal.module.css";
import React, {FC} from "react";
import { motion, AnimatePresence } from "motion/react";


interface ConfirmationProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
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

const ConfirmationModal: FC<ConfirmationProps> = ({isOpen, onClose, message }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    id="emailModal"
                    className={`${styles.cModal} ${isOpen ? styles.isOpened : ''}`}
                    data-component="email-modal"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <div
                        className={`${styles.cModalBackdrop} 
                        ${styles.uFadeHalfEnter} 
                        ${styles.uFadeHalfEnterActive} 
                        ${styles.uFadeHalfLeave} 
                        ${styles.uFadeHalfLeaveActive} 
                        ${styles.uFadeHalfEnterTo}`}
                        data-ref="backdrop">
                    </div>
                    <motion.div
                        className={`${styles.cModalWrapper}`}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{type: "spring", stiffness: 300, damping: 25}}
                    >
                        <div className={`${styles.cModalDialog} ${styles.uModalEnterTo}`} data-ref="dialog">
                            <form>
                                <hr className={`${styles.cModalBand}`}/>
                                <div className={`${styles.cModalComment}`}>
                                    <span className={`${styles.cModalLabel}`}>
                                        {message != null && message}
                                    </span>
                                </div>
                                <hr className={`${styles.cModalBand}`}/>
                                <div className={`${styles.cModalFooter}`}>
                                    <div>
                                        <button
                                            className={`${styles.btnSuccess}`}
                                            type="button"
                                            onClick={onClose}
                                        >
                                            понятно
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
export default ConfirmationModal;