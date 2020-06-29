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
      <View style={styles.container}>
        <TouchableOpacity style={styles.img_container}>
          <Text style={styles.text_container}>HomeScreen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
