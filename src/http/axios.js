import axios from 'axios';
const baseUrl = `https://api.rawg.io/api/games`;
const apiKey = '3dbe5baa7df44f92a7e6d3bdd8c28888';

const GamesApi = axios.create({ baseURL: baseUrl });
GamesApi.interceptors.request.use((config) => {
  config.params = {
    key: apiKey,
    // spread the request's params
    ...config.params,
  };
  return config;
});

export default GamesApi;
