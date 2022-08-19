import axios from 'axios';

const KEY = '29306254-f578092880d046ebab65c0a59';
const BASE_URL = 'https://pixabay.com/api'

const fetchImage = async (value, step) => {
    try {
        const response = await axios.get
        (`${BASE_URL}/?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${step}`);
return response
    }
    catch (error) {
        console.log(error)
    }
}

export default fetchImage;