import 'react-native-gesture-handler';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../pages/DetailsScreen';
import ClientHome from '../pages/ClientHome';
import MySends from '../pages/MySends';
import ClientProfile from '../pages/ClientProfile';
import QuoteScreen from '../pages/QuoteScreen';

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

function UserNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ClientStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="MySends"
        component={MySends}
        options={{
          tabBarLabel: 'My Sends',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cube-send" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="ClientProfile"
        component={ClientProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
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
      <Stack.Screen name="QuoteScreen" component={QuoteScreen} />
    </Stack.Navigator>
  );
}

export default UserNavigation;
