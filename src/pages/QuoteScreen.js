import React from 'react';
import {useState} from 'react';
import {UseUserData} from '../context/userContext';
import {TextInput} from 'react-native-paper';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const QuoteScreen = ({navigation}) => {
  const {userData, user} = UseUserData();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [weight, setWeight] = useState('');
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(false);
  const [visible, setVisible] = useState(false);

  const verifyQuote = () => {
    if (!from && !password.trim()) {
      setError('From required *');
      setValid(false);
      return;
    } else if (!to && !password.trim()) {
      setError('To required *');
      setValid(false);
      return;
    } else if (!weight && !weight.trim()) {
      setError('Weight required *');
      setValid(false);
      return;
    }
    doQuote({from, to, weight, userId: user.uid});
  };

  const doQuote = async quote => {
    console.log(quote);
    try {
      let response = await firestore().collection('Quotes').add(quote);
      if (response) {
        console.log(response);
        Alert.alert('Success', 'Quote added!');
      }
    } catch (e) {
      console.log('erro ao cadastrar quote');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoStyle}>
        <Text>Register Quote!</Text>
      </View>

      <View style={styles.inputStyle}>
        <TextInput
          style={{width: '100%', height: 60}}
          label="From"
          value={from}
          onChangeText={text => {
            setFrom;
            setFrom(text);
          }}
          error={isValid}
        />
      </View>

      <View style={styles.inputStyle}>
        <TextInput
          style={{width: '100%', height: 60}}
          label="To"
          value={to}
          onChangeText={text => {
            setTo;
            setTo(text);
          }}
          error={isValid}
        />
      </View>

      <View style={styles.inputStyle}>
        <TextInput
          style={{width: '100%', height: 60}}
          label="Weight"
          value={weight}
          onChangeText={text => {
            setWeight;
            setWeight(text);
          }}
          error={isValid}
        />
      </View>

      {error ? (
        <View style={styles.errorLabelContainerStyle}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
      ) : null}

      <View style={styles.btnStyle}>
        <Button title="ADD QUOTE" onPress={verifyQuote} />
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

export default QuoteScreen;
