import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {UseUserData} from '../context/userContext';
import firestore from '@react-native-firebase/firestore';
import {FAB} from 'react-native-paper';
import {useState} from 'react';

const ClientHome = ({navigation}) => {
  const {userData, user} = UseUserData();
  const [quotesData, setQuotesData] = useState([]);

  useEffect(() => {
    const unsubscribe = getUserData();

    return () => {
      unsubscribe();
    };
  }, []);

  const getUserData = () => {
    const unsubscribe = firestore()
      .collection('Quotes')
      .where('userId', '==', user.uid)
      .onSnapshot(query => {
        const quotesDataAux = query.docs.map(d => ({...d.data(), id: d.id}));
        setQuotesData(quotesDataAux);
      });

    return unsubscribe;
  };

  const deleteQuote = async item => {
    const quote = await firestore()
      .collection('Quotes')
      .doc(item.id)
      .delete()
      .then(() => {
        console.log('Quote Deleted!');
      });
  };

  const rightSwipe = item => {
    return (
      <TouchableOpacity
        onPress={() => deleteQuote(item)}
        style={styles.deleteBox}>
        <Text>Delete</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => (
    <Swipeable renderRightActions={() => rightSwipe(item)}>
      <View style={styles.item}>
        <Text>From: {item.from}</Text>
        <Text>To: {item.to}</Text>
        <Text>Weight: {item.weight}</Text>
      </View>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={quotesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <FAB
        style={styles.fab}
        small
        icon="border-color"
        onPress={() => navigation.navigate('QuoteScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 15,
    right: 0,
    bottom: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  deleteBox: {
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
  },
});

export default ClientHome;
