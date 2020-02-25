import * as axios from 'axios';

export const adAPI = {
  getAdData() {
    return axios.get('/templates.json').then((response) => {
      return response.urls;
    });
  },
};

/*
async componentDidMount() {
  const { data: urls } = await axios.get('/templates.json');
  this.setState({ urls });
}
*/
