import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';


export default function ImageGalleryItem({ item, onSetImage }) {

    return (
        // <li
        //     key={item.id}
        //     className={style.ImageGalleryItem}
        // >
        <img className={style.ImageGalleryItem_image}
            src={item.webformatURL}
            alt={item.tags}
            onClick={() => onSetImage(item.largeImageURL, item.tags)}
        />
        // </li>
    );

};
ImageGalleryItem.propTypes = {

    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }),

    onSetImage: PropTypes.func.isRequired,
};



