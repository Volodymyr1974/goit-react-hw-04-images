import style from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onLoadMoreButtonClick }) => {
    return (
        <button
            className={style.Button}
            onClick={onLoadMoreButtonClick} type="submit">
            Load More
        </button>
    );


};

Button.propTypes = {
    onLoadMoreButtonClick: PropTypes.func.isRequired,
};
export default Button;