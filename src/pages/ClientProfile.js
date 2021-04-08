import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {UseUserData} from '../context/userContext';

const ClientProfile = () => {
  const {setUserType} = UseUserData();

  return (
    <View style={styles.container}>
      <Text>Client Profile!</Text>
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

export default ClientProfile;
