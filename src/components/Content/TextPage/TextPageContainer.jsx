import { connect } from 'react-redux';
import { resetForms, setUserData, setNextForm, setPrevForm } from '../../../redux/formsPage-reducer';
import TextPage from './TextPage';

const mapStateToProps = ({ formsPage, template }) => {
  return {
    formsPage,
    ad: template.ad,
  };
};

export default connect(mapStateToProps, { resetForms, setUserData, setNextForm, setPrevForm })(TextPage);
