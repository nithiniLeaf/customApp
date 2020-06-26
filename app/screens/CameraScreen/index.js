import React, {Component} from 'react';
import CameraScreen from './CameraScreen';
// import {connect} from 'react-redux';
// import * as navigationActions from '../../actions/navigationActions';

class CameraContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <CameraScreen {...this.props} />;
  }
}
function mapStateToProps(state) {
  return {
    loginResponse: state.loginReducer.response,
    isLoading: state.loadingReducer.isLoading,
  };
}
export default CameraContainer;