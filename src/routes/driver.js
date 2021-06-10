import 'react-native-gesture-handler';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../pages/DetailsScreen';
import DriverHome from '../pages/DriverHome';
import MyLoads from '../pages/MyLoads';
import DriverProfile from '../pages/DriverProfile';

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
      <Tab.Screen
        name="Home"
        component={DriverStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="MyLoads"
        component={MyLoads}
        options={{
          tabBarLabel: 'My Loads',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="cube-outline"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DriverProfile"
        component={DriverProfile}
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

function DriverStack() {
  return (
    <Stack.Navigator
      initialRouteName="DriverHome"
      screenOptions={{
        header: props => <CustomNavigationBar {...props} />,
      }}>
      <Stack.Screen
        name="DriverHome"
        options={{headerShown: false}}
        component={DriverHome}
      />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default DriverNavigation;
