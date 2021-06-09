import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {UseUserData} from '../context/userContext';
import {TextInput, Checkbox} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const FinishRegister = ({navigation}) => {
  const {setUserType, getUserData, user} = UseUserData();
  const [name, setName] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [checked, setChecked] = useState('');
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(false);
  const [visible, setVisible] = useState(false);

  const verifyFinishRegister = () => {
    if (!name) {
      setError('Name required *');
      setValid(false);
      return;
    } else if (!cellphone && !cellphone.trim()) {
      setError('Cellphone required *');
      setValid(false);
      return;
    } else if (!checked) {
      setError('User Type required *');
      setValid(false);
      return;
    }
    finishRegisterFunction(name, cellphone, checked);
  };

  const finishRegisterFunction = async (name, cellphone, checked) => {
    try {
      let response = await firestore()
        .collection('Users')
        .doc(user.uid)
        .set({name: name, cellphone: cellphone, userType: checked});
      getUserData();
      if (response && response.user) {
        console.log('cadastro finalizado');
      }
    } catch (e) {
      console.log('erro ao finalizar');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoStyle}>
        <Text>Finish Register User!</Text>
      </View>

      <View style={styles.inputStyle}>
        <TextInput
          style={{width: '100%', height: 60}}
          label="Full Name"
          value={name}
          onChangeText={text => {
            setError;
            setName(text);
          }}
          error={isValid}
        />
      </View>

      <View style={styles.inputStyle}>
        <TextInput
          style={{width: '100%', height: 60}}
          label="Cellphone"
          value={cellphone}
          onChangeText={text => {
            setError;
            setCellphone(text);
          }}
          error={isValid}
        />
      </View>

      <View style={styles.createSection}>
        <Text>Sender:</Text>
        <Checkbox
          value="user"
          status={checked === 'user' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('user')}
        />
        <Text>Driver:</Text>
        <Checkbox
          value="driver"
          status={checked === 'driver' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('driver')}
        />
      </View>

      {error ? (
        <View style={styles.errorLabelContainerStyle}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
      ) : null}

      <View style={styles.btnStyle}>
        <Button title="Finish Register!" onPress={verifyFinishRegister} />
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
  createSection: {
    flexDirection: 'row',
  },
});

export default FinishRegister;
