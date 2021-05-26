import 'react-native-gesture-handler';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import FinishRegister from '../pages/FinishRegister';

const Stack = createStackNavigator();

function CustomNavigationBar({navigation, previous}) {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Box Finder" />
    </Appbar.Header>
  );
}

function FinishRegisterNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="FinishRegister"
      screenOptions={{
        header: props => <CustomNavigationBar {...props} />,
      }}>
      <Stack.Screen
        name="FinishRegister"
        options={{headerShown: false}}
        component={FinishRegister}
      />
    </Stack.Navigator>
  );
}

export default FinishRegisterNavigation;
