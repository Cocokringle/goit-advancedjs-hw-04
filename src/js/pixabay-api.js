import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24739758-4c739ca612149bb371b205192';

export const getImagesByQuery = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });

  return response.data;
};
