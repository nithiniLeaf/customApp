import * as React from "react";
import {ActivityIndicator, View, Text, Image} from 'react-native';
import {NavigationContainer,DrawerActions} from '@react-navigation/native';
import { createDrawerNavigator,DrawerItemList,
	DrawerItem,DrawerContentScrollView } from '@react-navigation/drawer';
import {createBottomTabNavigator}  from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
	createAppContainer,
	createSwitchNavigator,
	createCompatNavigatorFactory
  } from "@react-navigation/compat";
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import CameraScreen from '../screens/CameraScreen';
import Images from '../config/images';
import constants from '../config/constants';
import { TouchableOpacity } from "react-native-gesture-handler";


const LoginStack = createStackNavigator();
constLoginStackScreen = () =>(
  <LoginStack.Navigator
		screenOptions={{
			headerShown: false,
		}}
	>
		<LoginStack.Screen name="Login" component={LoginScreen}></LoginStack.Screen>
	</LoginStack.Navigator>
);

const LogoTitle = () =>(
	<Image
		style={{ width: 20, height: 35 }}
		source={Images.fitlogo}
	  />
  );
const HomeStack = createStackNavigator();
const HomeStackScreen = () =>(
  <HomeStack.Navigator
		screenOptions={{
			headerShown: true,
		}}
	>
		<HomeStack.Screen name="Home" options={({ navigation, route }) => ({
          headerTitle: props => <TouchableOpacity onPress={()=>navigation.openDrawer()}><LogoTitle {...props} /></TouchableOpacity>,
        })} component={HomeScreen}></HomeStack.Screen>
	</HomeStack.Navigator>
);


const Tab = createBottomTabNavigator();
  const Tabs = () => (
	<Tab.Navigator
		screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;
				switch (route.name) {
					case "Map":
						iconName = focused ? Images.todaySelected : Images.today;
						break;
					case "Camera":
						iconName = focused ? Images.nutritionSelected : Images.nutrition;
						break;
				}
				return (
					<Image
						source={iconName}
						resizeMode={"contain"}
						style={{
							width: 20,
							height: 20,
							tintColor: focused ? constants.APP_THEME_COLOR : constants.APP_BLACK_COLOR,
						}}
					/>
				);
			},
		})}
		tabBarOptions={{
			style: {
				backgroundColor: constants.APP_WHITE_COLOR,
			},
			labelStyle:{
				fontFamily: "Montserrat-Medium",
			},
			activeTintColor: constants.APP_THEME_COLOR,
			inactiveTintColor: constants.APP_BLACK_COLOR,
			keyboardHidesTabBar: true,
		}}
	>
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
		  onPress={() => props.navigation.navigate("LoginScreen")}
		/>
	  </DrawerContentScrollView>
	);
  }
  const Drawer = createDrawerNavigator();
  const Drawers = () => (
  <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props}/>} >
		<Drawer.Screen name="Home" component={HomeStackScreen} />
		<Drawer.Screen name="Tabs" component={Tabs} />
	</Drawer.Navigator>
);



  const SwitchNavigator = createSwitchNavigator(
	{
		Drawers,
		// HomeScreen : HomeScreen,
		  LoginScreen : LoginScreen,
	},
	{ headerMode: "none", initialRouteName: "LoginScreen" }
  );

function App() {
	return (
		<NavigationContainer>
			<SwitchNavigator />
		</NavigationContainer>
	);
}
export default App;