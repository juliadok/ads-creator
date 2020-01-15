/* eslint-disable react/destructuring-assignment */
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
    return (
      <div className={styles.TemplatesBar}>
        <p>Choose a template:</p>
        {this.state.urls.map((urls) => (
          <Template url={urls.url} key={urls.id} id={urls.id} />
        ))}
      </div>
    );
  }
}

export default TemplatesBar;
