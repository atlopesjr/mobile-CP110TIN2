import React from 'react';
import {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet, Text, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const RegisterUser = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
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

      <Button
        title="Register User"
        onPress={() => {
          setLoading(true);

          auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              setLoading(false);
            })
            .catch(() => {
              console.log('Erro ao criar conta');
              setLoading(false);
            });
        }}
      />

      <Text>Register User!</Text>
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

export default RegisterUser;
