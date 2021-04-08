import 'react-native-gesture-handler';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import DetailsScreen from '../pages/DetailsScreen';
import Login from '../pages/Login';

const Stack = createStackNavigator();

function CustomNavigationBar({navigation, previous}) {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Frete app" />
    </Appbar.Header>
  );
}

function LoginNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        header: props => <CustomNavigationBar {...props} />,
      }}>
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default LoginNavigation;
