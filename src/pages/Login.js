import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {UseUserData} from '../context/userContext';
import {TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const {setUserType} = UseUserData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text>Login Page!</Text>
      <TextInput
        style={{width: 400, height: 80}}
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        style={{width: 400, height: 80}}
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />

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
        <Button
          title="Login as User"
          onPress={() => {
            auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {})
              .catch(() => console.log('erro ao logar'));
          }}
        />
      </View>
      {/* <View style={styles.btnStyle}>
        <Button title="Login as Driver" onPress={() => setUserType('driver')} />
      </View> */}
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
