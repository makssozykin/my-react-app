import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export const fetchArticlesWithTopic = async topic => {
  const responce = await axios.get(`/search?query=${topic}`);
  return responce.data.hits;
};
