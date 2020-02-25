import { connect } from 'react-redux';
import { setUserData, setNextForm, setPrevForm } from '../../../redux/formsPage-reducer';
import TextPage from './TextPage';

const mapStateToProps = ({ formsPage, template }) => {
  return {
    formsPage,
    ad: template.ad,
  };
};

export default connect(mapStateToProps, { setUserData, setNextForm, setPrevForm })(TextPage);
