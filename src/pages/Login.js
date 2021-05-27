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
      <Text>BOX FINDER</Text>

      <View style={styles.inputStyle}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputStyle}>
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View style={styles.btnStyle}>
        <Button
          title="LOGIN"
          onPress={() => {
            auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {})
              .catch(() => console.log('erro ao logar'));
          }}
        />
      </View>

      <View style={styles.btnStyle}>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('RegisterUser')}
        />
      </View>

      {/* <View style={styles.btnStyle}>
        <Button
          title="Recovery Password"
          onPress={() => navigation.navigate('PassRecovery')}
        />
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
    marginTop: 2,
    width: 400,
    height: 50,
  },
  inputStyle: {
    width: 400,
    height: 80,
  },
});

export default Login;
