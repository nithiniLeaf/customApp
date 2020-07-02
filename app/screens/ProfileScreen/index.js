import React, {Component} from 'react';
import ProfileScreen from './ProfileScreen';
// import {connect} from 'react-redux';
// import * as navigationActions from '../../actions/navigationActions';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ProfileScreen {...this.props} />;
  }
}
function mapStateToProps(state) {
  return {
    loginResponse: state.loginReducer.response,
    isLoading: state.loadingReducer.isLoading,
  };
}
export default ProfileContainer;
