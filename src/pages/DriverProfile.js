import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {UseUserData} from '../context/userContext';

const DriverProfile = () => {
  const {setUserType} = UseUserData();

  return (
    <View style={styles.container}>
      <Text>Driver Profile!</Text>
      <Button title="Logoff" onPress={() => setUserType(null)} />
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

export default DriverProfile;
