import 'react-native-gesture-handler';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import DetailsScreen from '../pages/DetailsScreen';
import Login from '../pages/Login';
import RegisterUser from '../pages/RegisterUser';
import PassRecovery from '../pages/PassRecovery';

const Stack = createStackNavigator();

function CustomNavigationBar({navigation, previous}) {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Box Finder" />
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
      <Stack.Screen name="RegisterUser" component={RegisterUser} />
      <Stack.Screen name="PassRecovery" component={PassRecovery} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default LoginNavigation;
