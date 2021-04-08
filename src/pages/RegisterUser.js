import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const RegisterUser = ({navigation}) => {
  return (
    <View style={styles.container}>
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
