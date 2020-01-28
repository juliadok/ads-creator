import { connect } from 'react-redux';
import TextPage from './TextPage';
import { setUserData, setNextForm, setPrevForm } from '../../redux/text-reducer';

const mapStateToProps = ({ textPage, templatesPage }) => ({ textPage, templatesPage });

export default connect(mapStateToProps, { setUserData, setNextForm, setPrevForm })(TextPage);
