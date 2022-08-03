import { Component } from "react";
import style from "./Modal.module.css";
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount = () => {
        window.addEventListener('keydown', this.onCloseModalEscClick);
    };
    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.onCloseModalEscClick);
    };

    onCloseModalEscClick = e => {
        if (e.code === 'Escape') {
            this.props.onCloseModal();
        }
    };

    onCloseModal = e => {
        if (e.currentTarget === e.target) {
            this.props.onCloseModal()
        }

    }
    render() {
        return createPortal(
            <div
                onClick={this.onCloseModal}
                className={style.Overlay}>
                <div className={style.Modal}>
                    <img
                        src={this.props.largeImageURL}
                        alt={this.props.tags} />
                </div>
            </div >,
            modalRoot,
        );
    }
};

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};
export default Modal;