import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import Routes from './routes';
import {UserProvider} from './context/userContext';

class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <UserProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </UserProvider>
      </PaperProvider>
    );
  }
}

export default App;
