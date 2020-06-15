import React from 'react';
import { connect } from 'react-redux';
import {
  resetFormNumber,
  resetUserData,
  setUserData,
  setNextForm,
  setPrevForm,
} from '../../../redux/formsPage-reducer';
import TextPage from './TextPage';

class TextPageContainer extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { formsPage, resetUserData } = this.props;
    if (formsPage.userData) {
      resetUserData();
    }
  }

  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <TextPage {...this.props} />;
  }
}

const mapStateToProps = ({ formsPage, templatesData: { ad } }) => ({
  ad,
  formsPage,
});

export default connect(mapStateToProps, { resetFormNumber, resetUserData, setUserData, setNextForm, setPrevForm })(
  TextPageContainer,
);
