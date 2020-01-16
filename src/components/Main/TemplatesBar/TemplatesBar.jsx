import React from 'react';
import * as axios from 'axios';
import Template from './Template/Template';
import styles from './TemplatesBar.module.css';

class TemplatesBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
    };
  }

  async componentDidMount() {
    const { data: urls } = await axios.get('/templates.json');

    this.setState({ urls });
  }

  render() {
    const { urls } = this.state;
    return (
      <div className={styles.TemplatesBar}>
        <p>Choose a template:</p>
        {urls.map(({ id, url }) => (
          <Template url={url} key={id} id={id} />
        ))}
      </div>
    );
  }
}

export default TemplatesBar;
