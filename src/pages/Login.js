import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {UseUserData} from '../context/userContext';

const Login = ({navigation}) => {
  const {setUserType} = UseUserData();

  return (
    <View style={styles.container}>
      <Text>You have (undefined) details.</Text>
      <Button title="Login as User" onPress={() => setUserType('user')} />
      <Button title="Login as Driver" onPress={() => setUserType('driver')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
