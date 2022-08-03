import Button from "components/Button/Button";
import { useState, useEffect } from "react";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import fetchGallery from '../../service/ApiService';
import Modal from '../Modal/Modal';
import style from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import Loader from "../Loader/Loader";


function ImageGallery({ onLoadMoreBtn, searchQwery, pageNumber }) {
    const [imageGallery, setImageGallery] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [largeImageURL, setLargeImageURL] = useState('');
    const [tags, setTags] = useState('');
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const [totalHits, setTotalHits] = useState(null);

    useEffect(() => {
        if (!searchQwery) {
            return;
        }
        function fetchgwery() {
            setStatus('pending');
            fetchGallery(searchQwery, pageNumber)
                .then(gallery => {
                    pageNumber > 1
                        ? setImageGallery(prevState => [...prevState, ...gallery.hits])
                        : setImageGallery(gallery.hits);

                    setTotalHits(gallery.totalHits);
                    setStatus('resolved');

                    if (!gallery.hits.length) {
                        setStatus('idle');
                        Notiflix.Notify.warning(`Ух...Щось пішло не так, або дані за Вашим запитом відсутні`)
                        return;
                    }
                })
                .catch(error => {
                    setError(error);
                    setStatus('rejected');
                })

        }

        fetchgwery();
    }, [pageNumber, searchQwery]
    );


    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const onSetImage = (largeImageURL, tags) => {
        setLargeImageURL(largeImageURL);
        setTags(tags);
        toggleModal();

    };


    return (
        <>
            {imageGallery.length > 0 && (

                <ul className={style.ImageGallery}>
                    {imageGallery.map(item => (
                        <li key={item.id}
                            className={style.ImageGalleryItem}>
                            < ImageGalleryItem
                                onSetImage={onSetImage}

                                item={item}
                            />
                        </li>
                    ))}
                </ul>)}
            {status === 'pending' && < Loader />}
            {status === 'resolved' && imageGallery.length < totalHits && <Button onLoadMoreButtonClick={onLoadMoreBtn}></Button>}
            {showModal && (
                <Modal
                    onCloseModal={toggleModal}
                    largeImageURL={largeImageURL}
                    tags={tags}>
                </Modal>)}
            {status === 'rejected' && Notiflix.Notify.warning(error.message)}
        </>

    )


};

ImageGallery.propTypes = {
    onLoadMoreBtn: PropTypes.func.isRequired,
    searchQwery: PropTypes.string.isRequired,
    pageNumber: PropTypes.number.isRequired
};

export default ImageGallery;