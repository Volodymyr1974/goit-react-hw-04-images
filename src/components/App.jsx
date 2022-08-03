import Searchbar from './Searchbar/Searchbar';
import React, { useState } from "react";
import ImageGallery from './ImageGallery/ImageGallery';
import style from './App.module.css';
import Notiflix from 'notiflix';

export default function App() {
  const [qwery, setQwery] = useState('');
  const [page, setPage] = useState(1);

  const searchTextSubmit = (textqwery) => {
    if (textqwery === qwery) {
      return Notiflix.Notify.failure('Вибачте, такий запит вже оброблено. Введіть інший запит для пошуку, або натисніть  "Load More');
    }
    setQwery(textqwery);
    setPage(1);

  };
  const loadMoreBtn = () => {

    setPage(state => state + 1);
  };

  return (
    <div className={style.App} >
      <Searchbar onSubmit={searchTextSubmit} />
      <ImageGallery
        searchQwery={qwery}
        pageNumber={page}
        onLoadMoreBtn={loadMoreBtn}
      />
    </div>
  );


};
