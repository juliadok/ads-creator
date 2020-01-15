import * as axios from 'axios';

export const backgroundData = axios.get('/templates.json').then((response) => {
  return response.data.background;
});
