import * as React from 'react';
console.disableYellowBox = true;
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './src/Screens/Main';
import AboutCategory from './src/Screens/AboutCategory';
import OfferScreen from './src/Screens/OfferScreen';
import KalaScreen from './src/Screens/KalaScreen';
import CartScreen from './src/Screens/CartScreen';
import LoginScreen from './src/Screens/LoginScreen';
import SingUpScreen from './src/Screens/SingUpScreen';
import ForgetScreen from './src/Screens/ForgetScreen';
import Search from './src/Screens/Search';
import CategoryScreen from './src/Screens/CategoryScreen';
import DrawerMenu from './src/Components/Drawer/DrawerMenu';
import CommentScreen from './src/Screens/CommentScreen';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="OfferScreen" component={OfferScreen} />
      <Stack.Screen name="KalaScreen" component={KalaScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SingUpScreen" component={SingUpScreen} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="AboutCategory" component={AboutCategory} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
      <Stack.Screen name="CommentScreen" component={CommentScreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerMenu />}
      drawerPosition="right"
      drawerContentOptions={{
        itemStyle: {marginLeft: 0},
        labelStyle: {textAlign: 'right'},
      }}
      drawerStyle={{
        backgroundColor: '#fff',
        width: '60%',
        textAlign: 'right',
      }}>
      <Drawer.Screen name="MyStack" component={MyStack} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
