import * as axios from 'axios';

export const templatesApi = {
  async getTemplates() {
    const { data } = await axios.get('http://localhost:3000//templates.json');
    return data;
  },
};
