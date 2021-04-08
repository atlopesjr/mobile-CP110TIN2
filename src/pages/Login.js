import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {UseUserData} from '../context/userContext';

const Login = ({navigation}) => {
  const {setUserType} = UseUserData();

  return (
    <View style={styles.container}>
      <Text>Login Page!</Text>
      <View style={styles.btnStyle}>
        <Button
          title="Register User"
          onPress={() => navigation.navigate('RegisterUser')}
        />
      </View>
      <View style={styles.btnStyle}>
        <Button
          title="Recovery Password"
          onPress={() => navigation.navigate('PassRecovery')}
        />
      </View>
      <View style={styles.btnStyle}>
        <Button title="Login as User" onPress={() => setUserType('user')} />
      </View>
      <View style={styles.btnStyle}>
        <Button title="Login as Driver" onPress={() => setUserType('driver')} />
      </View>
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
  btnStyle: {
    marginTop: 5,
  },
});

export default Login;
