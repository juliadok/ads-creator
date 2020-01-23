import React from 'react';
import * as axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    const { setPreview } = this.props;
    return (
      <>
        <div className={styles.TemplatesBar}>
          <p>Choose a template:</p>
          {urls.map(({ url, id }) => (
            <Template url={url} key={id} id={id} setPreview={setPreview} />
          ))}
        </div>
        <Link to="/text">
          <Button variant="primary" as="span" block>
            Choose
          </Button>
        </Link>
      </>
    );
  }
}

export default TemplatesBar;
