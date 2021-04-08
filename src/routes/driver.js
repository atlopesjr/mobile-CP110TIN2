import 'react-native-gesture-handler';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
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
      <Tab.Screen name="Home" component={DriverStack} />
      <Tab.Screen name="MyLoads" component={MyLoads} />
      <Tab.Screen
        name="DriverProfile"
        options={{title: 'Profile'}}
        component={DriverProfile}
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
