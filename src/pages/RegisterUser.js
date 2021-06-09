import React from 'react';
import {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet, Text, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const RegisterUser = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const verifySingUp = () => {
    if (!email) {
      setError('Email required *');
      setValid(false);
      return;
    } else if (!password && !password.trim()) {
      setError('Password required *');
      setValid(false);
      return;
    }
    doSignUp(email, password);
  };

  const doSignUp = async (email, password) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response && response.user) {
        console.log('cadastrado');
      }
    } catch (e) {
      console.log('erro ao cadastrar');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoStyle}>
        <Text>Register User!</Text>
      </View>

      <View style={styles.inputStyle}>
        <TextInput
          style={{width: '100%', height: 60}}
          label="Email"
          value={email}
          onChangeText={text => {
            setError;
            setEmail(text);
          }}
          error={isValid}
        />
      </View>

      <View style={styles.inputStyle}>
        <TextInput
          style={{width: '100%', height: 60}}
          secureTextEntry={isSecureEntry}
          label="Password"
          right={
            <TextInput.Icon
              name={isSecureEntry ? 'eye' : 'eye-off'}
              onPress={() => {
                setIsSecureEntry(prev => !prev);
              }}
            />
          }
          value={password}
          error={isValid}
          onChangeText={text => setPassword(text)}
        />
      </View>

      {error ? (
        <View style={styles.errorLabelContainerStyle}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
      ) : null}

      <View style={styles.btnStyle}>
        <Button title="REGISTER" onPress={verifySingUp} />
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
    width: '90%',
    paddingTop: 10,
    justifyContent: 'center',
  },
  inputStyle: {
    width: '90%',
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    paddingBottom: 10,
  },
  errorLabelContainerStyle: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
  },
});

export default RegisterUser;
