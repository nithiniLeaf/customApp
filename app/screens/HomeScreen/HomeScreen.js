import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const userId = await AsyncStorage.getItem('userId');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.text_container}>
          <Text>HomeScreen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
