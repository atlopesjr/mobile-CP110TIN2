import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {UseUserData} from '../context/userContext';
import auth from '@react-native-firebase/auth';

const DriverProfile = () => {
  const {setUserType} = UseUserData();

  return (
    <View style={styles.container}>
      <Text>Driver Profile!</Text>
      <Button
        title="Logoff"
        onPress={() => {
          auth()
            .signOut()
            .then(() => {})
            .catch(() => console.log('Falha ao deslogar'));
          setUserType(null);
        }}
      />
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
