import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {UseUserData} from '../context/userContext';
import auth from '@react-native-firebase/auth';

const DriverProfile = () => {
  const {userData} = UseUserData();

  return (
    <View style={styles.container}>
      <Text>{userData.name} Profile!</Text>
      <Button
        title="Log Out"
        onPress={() => {
          auth()
            .signOut()
            .then(() => {})
            .catch(() => console.log('Falha ao deslogar'));
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
