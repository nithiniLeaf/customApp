import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  Alert,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Picker} from '@react-native-community/picker';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import {isEmpty} from '../../config/common';
// import styles from './styles';
const firebaseConfig = {
  apiKey: 'AIzaSyBvMi7jSY-Kf6XLegoRmM4KDkXk70L_Zio',
  authDomain: 'social-login-db9e5.firebaseapp.com',
  databaseURL: 'https://social-login-db9e5.firebaseio.com',
  projectId: 'social-login-db9e5',
  storageBucket: 'social-login-db9e5.appspot.com',
  messagingSenderId: '91137978885',
  appId: '1:91137978885:web:ea5057e86c67e626bae26c',
  measurementId: 'G-TQYC7Z015P',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: ' ',
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    const userId = await AsyncStorage.getItem('userId');
    console.log('Profile', userId);
    firebase
      .database()
      .ref('Users/' + userId)
      .on('value', snapshot => {
        const userObj = snapshot.val();
        this.setState({
          fname: userObj.fname,
          lname: userObj.lname,
          age: userObj.age,
          gender: userObj.gender,
          email: userObj.email,
          password: userObj.password,
        });
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            placeholder="Enter first name"
            value={this.state.fname}
            editable={false}
            onChangeText={fname => this.setState({fname})}
            style={styles.textinput_container}
          />
          <TextInput
            placeholder="Enter last name"
            value={this.state.lname}
            editable={false}
            onChangeText={lname => this.setState({lname})}
            style={styles.textinput_container}
          />
          <TextInput
            placeholder="Enter age"
            value={this.state.age}
            editable={false}
            onChangeText={age => this.setState({age})}
            style={styles.textinput_container}
            keyboardType="numeric"
          />
          <View style={styles.textinput_container} editable={false}>
            <Picker selectedValue={this.state.gender} editable={false}>
              <Picker.Item label="Select Gender" value="null" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>

          <TextInput
            placeholder="Enter email"
            value={this.state.email}
            editable={false}
            onChangeText={email => this.setState({email})}
            style={styles.textinput_container}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Enter password"
            value={this.state.password}
            editable={false}
            onChangeText={password => this.setState({password})}
            style={styles.textinput_container}
            // keyboardType="visible-password"
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.background_text}
            onPress={() => this.props.navigation.navigate('ProfileEditScreen')}>
            <Text style={styles.text_container}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default ProfileScreen;
