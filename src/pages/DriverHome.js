import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const DriverHome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
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

export default DriverHome;
