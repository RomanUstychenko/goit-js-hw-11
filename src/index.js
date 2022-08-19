// import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchImage from "./fetchimage"
import checkRes from "./check"
import creatList from "./creatlist"

const form = document.querySelector('.search-form')
const loadMore = document.querySelector('.load-more')
const gallery = document.querySelector('.gallery')

let value = null;
let stepPage = 1;

loadMore.classList.add('is-hidden');
loadMore.classList.remove('loadNore-display');
function  onButtonClick (e)  {
    e.preventDefault();
    value = e.target.searchQuery.value.toLowerCase().trim();
    
    if (!value) {
        gallery.innerHTML = '';
        loadMore.classList.add('is-hidden');
        loadMore.classList.remove('loadNore-display');
        Notify.info(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      } else {
        gallery.innerHTML = '';
        loadMore.classList.remove('is-hidden');
        loadMore.classList.add('loadNore-display');
        fetchImage(value, stepPage)
          .then(checkRes)
          .catch(error => console.log(error));
      }
    }

    async function onClickAddPage() {
      stepPage += 1;
      fetchImage(value, stepPage)
        .then(data => onClickLoadMore(data, stepPage))
        .catch(error => console.log(error));
    }

    function onClickLoadMore(response, step) {
      const dataTotalPhoto = response.data.totalHits;
      const dataTotalImg = response.data.hits;
      let totalPages = dataTotalPhoto / 40;
    
      if (step > totalPages) {
        loadMore.classList.add('is-hidden');
        Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
      }
      creatList(dataTotalImg);
    }

  form.addEventListener ('submit', onButtonClick)
  loadMore.addEventListener('click', onClickAddPage);