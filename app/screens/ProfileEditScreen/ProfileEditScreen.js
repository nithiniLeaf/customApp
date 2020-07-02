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
import {NavigationActions} from '@react-navigation/native';
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

class ProfileEditScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: ' ',
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    const userId = await AsyncStorage.getItem('userId');
    firebase
      .database()
      .ref('Users/' + userId)
      .once('value', snapshot => {
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

  async updateuserdata(fname, lname, age, gender, email, password) {
    if (isEmpty(fname)) {
      Alert.alert('Please enter first name');
    } else if (isEmpty(lname)) {
      Alert.alert('Please enter last name');
    } else if (isEmpty(age)) {
      Alert.alert('Please enter age');
    } else if (gender == 'null') {
      Alert.alert('Please enter gender');
    } else if (isEmpty(email)) {
      Alert.alert('Please enter email');
    } else if (isEmpty(password)) {
      Alert.alert('Please enter password');
    } else {
      const userId = await AsyncStorage.getItem('userId');
      const {navigation} = this.props;
      firebase
        .database()
        .ref('Users/' + userId)
        .update({
          fname,
          lname,
          age,
          gender,
          email,
          password,
        })
        .then(data => {
          Alert.alert('Successfully updated');
          navigation.navigate('Drawers');
        })
        .catch(error => {
          console.log('error', error);
        });
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            placeholder="Enter first name"
            value={this.state.fname}
            onChangeText={fname => this.setState({fname})}
            style={styles.textinput_container}
          />
          <TextInput
            placeholder="Enter last name"
            value={this.state.lname}
            onChangeText={lname => this.setState({lname})}
            style={styles.textinput_container}
          />
          <TextInput
            placeholder="Enter age"
            value={this.state.age}
            onChangeText={age => this.setState({age})}
            style={styles.textinput_container}
            keyboardType="numeric"
          />
          <View style={styles.textinput_container}>
            <Picker
              selectedValue={this.state.gender}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({gender: itemValue})
              }>
              <Picker.Item label="Select Gender" value="null" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>

          <TextInput
            placeholder="Enter email"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            style={styles.textinput_container}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Enter password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            style={styles.textinput_container}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.background_text}
            onPress={() =>
              this.updateuserdata(
                this.state.fname,
                this.state.lname,
                this.state.age,
                this.state.gender,
                this.state.email,
                this.state.password,
              )
            }>
            <Text style={styles.text_container}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default ProfileEditScreen;
