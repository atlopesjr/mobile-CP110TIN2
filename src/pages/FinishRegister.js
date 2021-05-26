import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {UseUserData} from '../context/userContext';
import {TextInput, RadioButton} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const FinishRegister = ({navigation}) => {
  const {setUserType, user} = UseUserData();
  const [name, setName] = useState('');
  const [celphone, setCelphone] = useState('');
  const [checked, setChecked] = useState('');

  const finishRegisterFunction = async () => {
    await firestore()
      .collection('Users')
      .doc(user.uid)
      .set({name: name, celphone: celphone, userType: checked});

    setUserType(checked);
  };

  return (
    <View style={styles.container}>
      <Text>Login Page!</Text>
      <TextInput
        style={{width: 400, height: 80}}
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
      />

      <TextInput
        style={{width: 400, height: 80}}
        label="Celphone"
        value={celphone}
        onChangeText={text => setCelphone(text)}
      />

      <RadioButton
        value="user"
        status={checked === 'user' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('user')}
      />

      <RadioButton
        value="driver"
        status={checked === 'driver' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('driver')}
      />

      <View style={styles.btnStyle}>
        <Button
          title="Finish register"
          onPress={() => finishRegisterFunction()}
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

export default FinishRegister;
