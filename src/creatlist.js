import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery')

const creatList = list => {
    list.innerHTML = '';
    const markup = list
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
           `<a class="gallery__link link" href="${largeImageURL}">
           <div class="photo-card">
           <div class="gallery__thumb">
           <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
           </div>
           <div class="info">
             <p class="info-item">
               <b>Likes</b> <br>${likes}
             </p>
             <p class="info-item">
               <b>Views</b> <br>${views}
             </p>
             <p class="info-item">
               <b>Comments</b> <br>${comments}
             </p>
             <p class="info-item">
               <b>Downloads</b> <br>${downloads}
             </p>
           </div>
         </div></a> 
        `
    )
        .join('');
        gallery.classList.add('gallery__item')
        gallery.insertAdjacentHTML('beforeend', markup);
        
        const simplebox = new SimpleLightbox('.gallery a'
        , {
          captionsData: "alt",
          captionDelay: 250,
          captionPosition: "bottom",
        }
        );
        simplebox.on('show.simplelightbox', function () {
          
        });
        simplebox.refresh();

        return gallery;
    }
export default creatList;