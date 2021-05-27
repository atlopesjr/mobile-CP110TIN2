import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {UseUserData} from '../context/userContext';
import {TextInput, RadioButton} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const FinishRegister = ({navigation}) => {
  const {setUserType, user} = UseUserData();
  const [name, setName] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [checked, setChecked] = useState('');

  const finishRegisterFunction = async () => {
    await firestore()
      .collection('Users')
      .doc(user.uid)
      .set({name: name, cellphone: cellphone, userType: checked});

    setUserType(checked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputStyle}>
        <TextInput
          label="Full Name"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.inputStyle}>
        <TextInput
          label="Cellphone"
          value={cellphone}
          onChangeText={text => setCellphone(text)}
        />
      </View>

      <Text>Sender:</Text>
      <RadioButton
        value="user"
        status={checked === 'user' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('user')}
      />

      <Text>Driver:</Text>
      <RadioButton
        value="driver"
        status={checked === 'driver' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('driver')}
      />

      <View style={styles.btnStyle}>
        <Button
          title="Finish Register!"
          onPress={() => finishRegisterFunction()}
        />
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
    marginTop: 2,
    width: 400,
    height: 50,
  },
  inputStyle: {
    width: 400,
    height: 80,
  },
});

export default FinishRegister;
