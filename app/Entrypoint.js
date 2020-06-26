import Navigator from './navigation';
// import {Provider} from 'react-redux';
import React, {Component} from 'react';
// import configureStore  from './store/configureStore';
import {ActivityIndicator, View, Text} from 'react-native';
// import {PersistGate} from 'redux-persist/es/integration/react';
// const {persistor, store} = configureStore();

export default class Entrypoint extends Component { 
    constructor(props) {
      super(props);
    }
  
    render() {
      return ( 

            <Navigator />
    
      );
    }
  }