import React, {Component} from 'react';
import LoginScreen from './LoginScreen';
// import {connect} from 'react-redux';
// import * as navigationActions from '../../actions/navigationActions';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <LoginScreen {...this.props} />;
  }
}
function mapStateToProps(state) {
  return {
    loginResponse: state.loginReducer.response,
    isLoading: state.loadingReducer.isLoading,
  };
}
export default LoginContainer;