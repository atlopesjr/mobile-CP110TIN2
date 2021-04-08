import 'react-native-gesture-handler';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../pages/DetailsScreen';
import ClientHome from '../pages/ClientHome';
import MySends from '../pages/MySends';
import ClientProfile from '../pages/ClientProfile';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function CustomNavigationBar({navigation, previous}) {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Box Finder" />
    </Appbar.Header>
  );
}

function DriverNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ClientStack} />
      <Tab.Screen name="MySends" component={MySends} />
      <Tab.Screen
        name="ClientProfile"
        options={{title: 'Profile'}}
        component={ClientProfile}
      />
    </Tab.Navigator>
  );
}

function ClientStack() {
  return (
    <Stack.Navigator
      initialRouteName="ClientHome"
      screenOptions={{
        header: props => <CustomNavigationBar {...props} />,
      }}>
      <Stack.Screen
        name="ClientHome"
        options={{headerShown: false}}
        component={ClientHome}
      />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default DriverNavigation;
