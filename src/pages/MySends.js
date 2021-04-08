import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const MySends = () => {
  return (
    <View style={styles.container}>
      <Text>My sends!</Text>
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

export default MySends;
