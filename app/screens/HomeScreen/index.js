import React, {Component} from 'react';
import HomeScreen from './HomeScreen';
// import {connect} from 'react-redux';
// import * as navigationActions from '../../actions/navigationActions';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HomeScreen {...this.props} />;
  }
}
function mapStateToProps(state) {
  return {
    loginResponse: state.loginReducer.response,
    isLoading: state.loadingReducer.isLoading,
  };
}
export default HomeContainer;