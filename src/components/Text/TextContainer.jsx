import { connect } from 'react-redux';
import TextPage from './TextPage';
import { setUserData, setFormNumber } from '../../redux/text-reducer';

const mapStateToProps = ({ textPage, templatesPage }) => ({ textPage, templatesPage });

export default connect(mapStateToProps, { setUserData, setFormNumber })(TextPage);
