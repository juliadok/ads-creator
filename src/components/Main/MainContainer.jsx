import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = ({ templatesPage }) => ({ templatesPage });

export default connect(mapStateToProps)(Main);
