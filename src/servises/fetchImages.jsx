 function fetchImages(query, page = 1) {
  const API_KEY = '34949231-97333589adf73858ce38633dc';
  const BASE_URL = 'https://pixabay.com/api/';
  const PER_PAGE = 12;

  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGE}&page=${page}`
  ).then(res => {
    if (res.ok) {
    return res.json();
    }
  });
}

const api = {
  fetchImages,
};


export default api;