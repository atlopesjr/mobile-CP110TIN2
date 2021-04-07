import 'react-native-gesture-handler';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import DetailsScreen from '../pages/DetailsScreen';
import Login from '../pages/Login';
import ClientHome from '../pages/ClientHome';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const loginType = 'user';

function CustomNavigationBar({navigation, previous}) {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Frete app" />
    </Appbar.Header>
  );
}

function Routes() {
  if (loginType == null) {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          header: props => <CustomNavigationBar {...props} />,
        }}>
        <Stack.Screen
          name="Login"
          options={{header: () => null}}
          component={Login}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    );
  } else if (loginType == 'user') {
    return <UserNavigation></UserNavigation>;
  } else {
    return <TransportNavigation></TransportNavigation>;
  }
}

function UserNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ClientHome} />
    </Tab.Navigator>
  );
}

function TransportNavigation() {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: props => <CustomNavigationBar {...props} />,
      }}>
      <Bottom.Screen name="Home" component={HomeScreen} />
      <Bottom.Screen name="Details" component={DetailsScreen} />
    </Bottom.Navigator>
  );
}

export default Routes;
