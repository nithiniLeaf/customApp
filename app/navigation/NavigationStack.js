import * as React from 'react';
import {ActivityIndicator, View, Text, Image, Alert} from 'react-native';
import {
  NavigationContainer,
  DrawerActions,
  CommonActions,
} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createAppContainer,
  createSwitchNavigator,
  createCompatNavigatorFactory,
} from '@react-navigation/compat';
import AsyncStorage from '@react-native-community/async-storage';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import CameraScreen from '../screens/CameraScreen';
import AuthScreen from '../screens/AuthScreen';
import SignupScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';
import Images from '../config/images';
import constants from '../config/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginStack = createStackNavigator();
constLoginStackScreen = () => (
  <LoginStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <LoginStack.Screen name="Login" component={LoginScreen} />
  </LoginStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <LoginStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <LoginStack.Screen name="Profile" component={ProfileScreen} />
  </LoginStack.Navigator>
);

const LogoTitle = () => (
  <Image style={{width: 20, height: 35}} source={Images.fitlogo} />
);
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: true,
    }}>
    <HomeStack.Screen
      name="Home"
      options={({navigation, route}) => ({
        headerTitle: props => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <LogoTitle {...props} />
          </TouchableOpacity>
        ),
      })}
      component={HomeScreen}
    />
  </HomeStack.Navigator>
);

const Tab = createBottomTabNavigator();
const Tabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        switch (route.name) {
          case 'Map':
            iconName = focused ? Images.todaySelected : Images.today;
            break;
          case 'Camera':
            iconName = focused ? Images.nutritionSelected : Images.nutrition;
            break;
        }
        return (
          <Image
            source={iconName}
            resizeMode={'contain'}
            style={{
              width: 20,
              height: 20,
              tintColor: focused
                ? constants.APP_THEME_COLOR
                : constants.APP_BLACK_COLOR,
            }}
          />
        );
      },
    })}
    tabBarOptions={{
      style: {
        backgroundColor: constants.APP_WHITE_COLOR,
      },
      labelStyle: {
        fontFamily: 'Montserrat-Medium',
      },
      activeTintColor: constants.APP_THEME_COLOR,
      inactiveTintColor: constants.APP_BLACK_COLOR,
      keyboardHidesTabBar: true,
    }}>
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Camera" component={CameraScreen} />
  </Tab.Navigator>
);

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() =>
          Alert.alert(
            'Log out',
            'Do you want to logout?',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  return null;
                },
              },
              {
                text: 'Confirm',
                onPress: () => {
                  AsyncStorage.clear();
                  // props.navigation.navigate('Login')
                  props.navigation.dispatch(
                    CommonActions.reset({
                      // index: 0,
                      routes: [{name: 'AuthScreen'}],
                    }),
                  );
                },
              },
            ],
            {cancelable: false},
          )
        }
      />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();
const Drawers = () => (
  <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={HomeStackScreen} />
    <Drawer.Screen name="Tabs" component={Tabs} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);

const DrawerStack = createCompatNavigatorFactory(createStackNavigator)(
  {
    Drawers,
    ProfileEditScreen: ProfileEditScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      // swipeEnabled: false,
    },
  },
);

const SwitchNavigator = createSwitchNavigator(
  {
    DrawerStack,
    // HomeScreen : HomeScreen,
    LoginScreen: LoginScreen,
    SignupScreen: SignupScreen,
    AuthScreen: AuthScreen,
    // ProfileEditScreen: ProfileEditScreen,
    // ProfileScreen: ProfileStackScreen,
  },
  {headerMode: 'none', initialRouteName: 'LoginScreen'},
);

function App() {
  return (
    <NavigationContainer>
      <SwitchNavigator />
    </NavigationContainer>
  );
}
export default App;
