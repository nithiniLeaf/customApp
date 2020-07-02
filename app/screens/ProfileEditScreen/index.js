import React, {Component} from 'react';
import ProfileEditScreen from './ProfileEditScreen';
// import {connect} from 'react-redux';
// import * as navigationActions from '../../actions/navigationActions';

class ProfileEditContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ProfileEditScreen {...this.props} />;
  }
}
function mapStateToProps(state) {
  return {
    loginResponse: state.loginReducer.response,
    isLoading: state.loadingReducer.isLoading,
  };
}
export default ProfileEditContainer;
