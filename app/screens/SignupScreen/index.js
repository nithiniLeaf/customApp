import React, {Component} from 'react';
import SignupScreen from './SignupScreen';
// import {connect} from 'react-redux';
// import * as navigationActions from '../../actions/navigationActions';

class SignupContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SignupScreen {...this.props} />;
  }
}
function mapStateToProps(state) {
  return {
    loginResponse: state.loginReducer.response,
    isLoading: state.loadingReducer.isLoading,
  };
}
export default SignupContainer;
