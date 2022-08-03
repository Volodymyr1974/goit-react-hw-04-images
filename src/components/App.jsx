import Searchbar from './Searchbar/Searchbar';
import React, { Component } from "react";
import ImageGallery from './ImageGallery/ImageGallery';
import style from './App.module.css';
import Notiflix from 'notiflix';

export default class App extends Component {
  state = {
    qwery: '',
    page: 1,
  }
  searchTextSubmit = (qwery) => {
    if (qwery === this.state.qwery) {
      return Notiflix.Notify.failure('Вибачте, такий запит вже оброблено. Введіть інший запит для пошуку, або натисніть  "Load More');
    }
    this.setState(
      {
        qwery,
        page: 1
      });
  };
  loadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,

    }));
  };

  render() {
    const { qwery, page } = this.state;
    return (
      <div className={style.App} >
        <Searchbar onSubmit={this.searchTextSubmit} />
        <ImageGallery
          searchQwery={qwery}
          pageNumber={page}
          onLoadMoreBtn={this.loadMoreBtn}
        />
      </div>
    );
  }

};
