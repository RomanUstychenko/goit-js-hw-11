import { Notify } from 'notiflix/build/notiflix-notify-aio';
import creatList from "./creatlist"
const loadMore = document.querySelector('.load-more')

function checkRes(response) {
    const dataHits = response.data.hits;
    const totalHits = response.data.totalHits;
    checkPhotoAmmount(response);
  
    if (dataHits.length !== 0) {
      Notify.info(`Hooray! We found ${totalHits} images.`);
      
      creatList(dataHits);
      loadMore.classList.remove('is-hidden');
      loadMore.classList.add('loadNore-display');
    } else {
      gallery.innerHTML = '';
      Notify.info(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
  }

  function checkPhotoAmmount(response) {
    const photoPerPage = 40;
    const dataTotalHits = response.data.totalHits;
  
    if (dataTotalHits > photoPerPage) {
      loadMore.classList.remove('is-hidden');
      loadMore.classList.add('loadNore-display');
    } else {
      loadMore.classList.remove('loadNore-display');
      loadMore.classList.add('is-hidden');
      Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
    }
  }
  export default checkRes;