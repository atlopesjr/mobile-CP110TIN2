import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const MyLoads = () => {
  return (
    <View style={styles.container}>
      <Text>My Loads!</Text>
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

export default MyLoads;
