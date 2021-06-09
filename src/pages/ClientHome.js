import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {UseUserData} from '../context/userContext';
import {FAB} from 'react-native-paper';

const ClientHome = ({navigation}) => {
  const {userData} = UseUserData();

  return (
    <View style={styles.container}>
      <Text>Hello {userData.name}!</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate('DetailsScreen')}
      />
      <FAB
        style={styles.fab}
        small
        icon="border-color"
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
  fab: {
    position: 'absolute',
    margin: 15,
    right: 0,
    bottom: 0,
  },
});

export default ClientHome;
