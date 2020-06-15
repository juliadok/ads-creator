import { connect } from 'react-redux';
import ResultPage from './ResultPage';

const mapStateToProps = ({ formsPage, templatesData: { ad } }) => ({
  ad,
  formsPage,
});

export default connect(mapStateToProps)(ResultPage);
