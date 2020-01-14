import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';

let mapStateToProps = ({templatesPage}) => ({templatesPage});

export default connect(mapStateToProps)(Main);
