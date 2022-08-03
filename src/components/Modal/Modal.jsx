import { useEffect } from "react";
import style from "./Modal.module.css";
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onCloseModal, largeImageURL, tags }) {

    useEffect(() => {
        const onCloseModalEscClick = e => {
            if (e.code === 'Escape') {
                onCloseModal();
            };
        };
        window.addEventListener('keydown', onCloseModalEscClick);
        return () => {
            window.removeEventListener('keydown', onCloseModalEscClick);
        };

    });


    const closeModal = e => {
        if (e.currentTarget === e.target) {
            onCloseModal()
        }
    };

    return createPortal(
        <div
            onClick={closeModal}
            className={style.Overlay}>
            <div className={style.Modal}>
                <img
                    src={largeImageURL}
                    alt={tags} />
            </div>
        </div >,
        modalRoot,
    );

};

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};
export default Modal;