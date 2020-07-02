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
import {
  StackActions,
  NavigationActions,
  CommonActions,
} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import styles from './styles';
import {isEmpty} from '../../config/common';

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

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  async componentDidMount() {}
  readuserdata(useremail, userpassword) {
    if (isEmpty(useremail)) {
      Alert.alert('Please enter email');
    } else if (isEmpty(userpassword)) {
      Alert.alert('Please enter password');
    } else {
      var found = false;
      var userid = '';
      const {navigation} = this.props;
      var ref = firebase.database().ref('Users/');

      ref.once('value', async function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          var id = childData.id;

          if (
            useremail == childData.email &&
            userpassword == childData.password
          ) {
            found = true;
            userid = childData.uid;
          }
        });
        if (found == true) {
          Alert.alert('Login Succesfully');
          // navigation.navigate('DrawerStack');
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'DrawerStack'}],
            }),
          );
          const user = await AsyncStorage.setItem('userId', userid);
        } else {
          Alert.alert('Login Failed!!!!!!');
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter email"
          onChangeText={useremail => this.setState({useremail})}
          style={styles.textinput_container}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Enter password"
          onChangeText={userpassword => this.setState({userpassword})}
          style={styles.textinput_container}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.background_text}
          // onPress={() => this.props.navigation.navigate('Drawers')}
          onPress={() =>
            this.readuserdata(this.state.useremail, this.state.userpassword)
          }>
          <Text style={styles.text_container}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AuthScreen;
