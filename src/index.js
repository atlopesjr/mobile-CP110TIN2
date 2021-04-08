import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {UserProvider} from './context/userContext';

class App extends React.Component {
  render() {
    return (
      <UserProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </UserProvider>
    );
  }
}

export default App;
