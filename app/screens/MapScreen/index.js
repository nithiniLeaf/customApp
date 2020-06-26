import React, {Component} from 'react';
import MapScreen from './MapScreen';
// import {connect} from 'react-redux';
// import * as navigationActions from '../../actions/navigationActions';

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MapScreen {...this.props} />;
  }
}
function mapStateToProps(state) {
  return {
    loginResponse: state.loginReducer.response,
    isLoading: state.loadingReducer.isLoading,
  };
}
export default MapContainer;