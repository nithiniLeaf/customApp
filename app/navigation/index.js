import React, { Component } from "react";
import {ActivityIndicator, View, Text} from 'react-native';
import NavigationStack from "./NavigationStack";
// import NavigationService from "./NavigationService";

class AppNavigator extends Component {
  render() {
    return (
      <NavigationStack
        // ref={navigatorRef => {
        //   NavigationService.setTopLevelNavigator(navigatorRef);
        // }}
      />
   
    );
  }
}

export default AppNavigator;