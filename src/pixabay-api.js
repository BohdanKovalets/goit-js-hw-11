import axios from 'axios';
const BASE_KEY = '38858334-f8f34a12e3b087104de78512c';
const BASE_URL = 'https://pixabay.com/api/';

export function requestToTheServer(request,value) {
    const options = {
      params: {
        key: BASE_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: value,
        per_page: 40,
        q: request,
      },
    }

    return axios.get(
      `${BASE_URL}`, options
    ).then(response => response.data)
}
