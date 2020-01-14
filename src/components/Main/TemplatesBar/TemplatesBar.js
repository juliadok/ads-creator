import React from 'react';
import Template from './Template/Template';
import styles from './TemplatesBar.module.css';


class TemplatesBar extends React.Component {
  TemplateElement = this.props.urls.map(urls => <Template url={urls.url} key = {urls.id} id={urls.id} />);

  render () {
    return (
      <div className = {styles.TemplatesBar}>
            <p>Choose a template:</p>
            { this.TemplateElement }
        </div>
    )
  }
}

export default TemplatesBar;
