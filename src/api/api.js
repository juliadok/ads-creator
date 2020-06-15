import * as axios from 'axios';

export const templatesApi = {
  async getTemplates() {
    const { data } = await axios.get(`${process.env.PUBLIC_URL}/templates.json`);
    return data;
  },
};
