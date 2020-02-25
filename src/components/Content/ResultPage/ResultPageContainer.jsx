import { connect } from 'react-redux';
import ResultPage from './ResultPage';

const mapStateToProps = ({ formsPage, template }) => {
  return {
    formsPage,
    ad: template.ad,
  };
};

export default connect(mapStateToProps)(ResultPage);
