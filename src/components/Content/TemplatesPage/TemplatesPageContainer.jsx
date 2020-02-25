import { connect } from 'react-redux';
import { setAd } from '../../../redux/template-reducer';
import TemplatesPage from './TemplatesPage';

const mapStateToProps = ({ template }) => ({ template });

export default connect(mapStateToProps, { setAd })(TemplatesPage);
