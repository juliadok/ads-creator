import { connect } from 'react-redux';
import Main from './Main';
import { setPreview } from '../../redux/template-reducer';

const mapStateToProps = ({ templatesPage }) => ({ templatesPage });

const mapDispatchToProps = (dispatch) => {
  return {
    setPreview: (preview) => {
      dispatch(setPreview(preview));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
