import 'react-native-gesture-handler';
import React from 'react';
import UserNavigation from './user';
import DriverNavigation from './driver';
import LoginNavigation from './login';
import {UseUserData} from '../context/userContext';

function Routes() {
  const {userType} = UseUserData();

  if (userType == null) {
    return <LoginNavigation />;
  } else if (userType == 'user') {
    return <UserNavigation />;
  } else {
    return <DriverNavigation />;
  }
}

export default Routes;
