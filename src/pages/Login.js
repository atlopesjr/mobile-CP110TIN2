import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import {UseUserData} from '../context/userContext';
import {TextInput, Snackbar} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const {setUserType} = UseUserData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(false);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const verifySignIn = () => {
    if (!email) {
      setError('Email required *');
      setValid(false);
      return;
    } else if (!password && !password.trim()) {
      setError('Password required *');
      setValid(false);
      return;
    }
    doSignIn(email, password);
  };

  const doSignIn = async (email, password) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user) {
        Alert.alert('Success', 'Authenticated successfully.');
      }
    } catch (e) {
      onToggleSnackBar();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoStyle}>
        <Text>BOX FINDER</Text>
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
          secureTextEntry
          label="Password"
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
        <Button title="LOGIN" onPress={verifySignIn} />
      </View>

      <View style={styles.btnStyle}>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('RegisterUser')}
        />
      </View>

      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Close',
          onPress: () => {
            // Do something
          },
        }}>
        User not found! Try again.
      </Snackbar>

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

export default Login;
