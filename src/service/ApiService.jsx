
const fetchGallery = (searchQwery, pageNumber) => {
    return fetch(`https://pixabay.com/api/?key=27772870-4058b108341efce898c1dbbbe&q=${searchQwery}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=12`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(new Error(`Ух...Щось пішло не так, або дані за Вашим запитом відсутні`));
        });

}
export default fetchGallery;
