import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const PassRecovery = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Password Recovery!</Text>
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

export default PassRecovery;
