import type React from "react";
import styles from "./Modal.module.css"

//Icons
import { IoIosCloseCircleOutline } from "react-icons/io";

interface Props {
    children: React.ReactNode
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({children, showModal, setShowModal}: Props) => {
    const closeModal = (e:React.MouseEvent): void => {
        setShowModal((prev: boolean) => !prev)
    }

    return(
        <div id="modal" className={`${styles.modal} ${showModal ? "" : "showCard"}`}>
            <div className={styles.contentModal}>
                <IoIosCloseCircleOutline onClick={closeModal} className={styles.closeIcon} />
                <h4>Modal</h4>
                {children}
            </div>
        </div>
    )
}