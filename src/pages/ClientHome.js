import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {UseUserData} from '../context/userContext';

const ClientHome = ({navigation}) => {
  const {userData} = UseUserData();

  return (
    <View style={styles.container}>
      <Text>Home! olá {userData.name}</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate('DetailsScreen')}
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

export default ClientHome;
