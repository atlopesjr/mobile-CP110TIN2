import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Routes></Routes>
      </NavigationContainer>
    );
  }
}

export default App;
