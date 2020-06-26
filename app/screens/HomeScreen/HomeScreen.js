import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
// import styles from './styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
        <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
          <TouchableOpacity style={{backgroundColor:"red"}}>
              <Text style={{color:"white",paddingVertical:10,paddingHorizontal:20}}>HomeScreen</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

export default HomeScreen;
