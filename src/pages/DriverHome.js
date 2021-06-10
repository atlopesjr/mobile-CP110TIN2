import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {UseUserData} from '../context/userContext';
import firestore from '@react-native-firebase/firestore';
import {FAB} from 'react-native-paper';
import {useEffect} from 'react';

const DriverHome = ({navigation}) => {
  const {userData, user} = UseUserData();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const quotes = await firestore()
      .collection('Quotes')
      .where('userId', '==', user.uid)
      .get();
    const quotesData = quotes.docs.map(d => d.data());
    console.log(quotesData);
  };

  return (
    <View style={styles.container}>
      <Text> Hello {userData.name}!</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate('DetailsScreen')}
      />
      <FAB
        style={styles.fab}
        small
        icon="magnify"
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

export default DriverHome;
