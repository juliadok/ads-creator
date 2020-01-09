import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';

let mapStateToProps = (state) => {
    return {
        templatesPage: state.templatesPage
    }
};

export default connect(mapStateToProps)(Main);