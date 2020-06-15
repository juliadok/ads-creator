import React from 'react';
import { connect } from 'react-redux';
import { setAd, getTemplates } from '../../../redux/template-reducer';
import TemplatesPage from './TemplatesPage';

class TemplatesPageContainer extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getTemplates();
  }

  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <TemplatesPage {...this.props} />;
  }
}

const mapStateToProps = ({ templatesData }) => ({ templatesData });

export default connect(mapStateToProps, { setAd, getTemplates })(TemplatesPageContainer);
