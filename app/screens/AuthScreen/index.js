import React, {Component} from 'react';
import AuthScreen from './AuthScreen';
// import {connect} from 'react-redux';
// import * as navigationActions from '../../actions/navigationActions';

class AuthContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AuthScreen {...this.props} />;
  }
}
function mapStateToProps(state) {
  return {
    loginResponse: state.loginReducer.response,
    isLoading: state.loadingReducer.isLoading,
  };
}
export default AuthContainer;
