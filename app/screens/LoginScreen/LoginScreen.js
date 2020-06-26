import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import InstagramLogin from 'react-native-instagram-login';
import CookieManager from '@react-native-community/cookies';
import firebase from '@react-native-firebase/app';
// import styles from './styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  setIgToken = data => {
    this.setState({token: data});
  };

  onClear() {
    CookieManager.clearAll(true).then(res => {
      this.setState({token: null});
    });
  }

  async componentDidMount() {
    PushNotification.configure({
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);
      },
    });

    GoogleSignin.configure({
      webClientId:
        '91137978885-94d40sdjfm8rl11fckcs5lr2jie154lp.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity
          style={{backgroundColor: 'red'}}
          onPress={() => this.props.navigation.navigate('Drawers')}>
          <Text
            style={{
              color: 'white',
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
        />
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                console.log(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />
        <TouchableOpacity
          style={{backgroundColor: 'red', marginTop: 5}}
          onPress={() => this.instagramLogin.show()}>
          <Text
            style={{
              color: 'white',
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}>
            Instagram Login
          </Text>
        </TouchableOpacity>
        <InstagramLogin
          ref={ref => (this.instagramLogin = ref)}
          appId="your-app-id"
          appSecret="your-app-secret"
          redirectUrl="your-redirect-Url"
          scopes={['user_profile', 'user_media']}
          onLoginSuccess={this.setIgToken}
          onLoginFailure={data => console.log(data)}
        />
      </View>
    );
  }
  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(
        data.idToken,
        data.accessToken,
      );
      // login with credential
      const firebaseUserCredential = await firebase
        .auth()
        .signInWithCredential(credential);
      // this.setState({userInfo, error: null});
      console.log('Success:' + userInfo);
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          // sign in was cancelled
          Alert.alert('cancelled');
          break;
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          Alert.alert('in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // android only
          Alert.alert('play services not available or outdated');
          break;
        default:
          Alert.alert('Something went wrong', error.toString());
          this.setState({
            error,
          });
      }
    }
  };
}

export default LoginScreen;
