import 'react-native-gesture-handler';
import React from 'react';
import UserNavigation from './user';
import DriverNavigation from './driver';
import LoginNavigation from './login';
import FinishRegisterNavigation from './finishRegister';
import {UseUserData} from '../context/userContext';

function Routes() {
  const {userType, user} = UseUserData();

  if (user == null) {
    return <LoginNavigation />;
  } else if (user != null && userType == null) {
    return <FinishRegisterNavigation />;
  } else if (user != null && userType == 'user') {
    return <UserNavigation />;
  } else {
    return <DriverNavigation />;
  }

  // if (user == null) {
  //   return <LoginNavigation />;
  // } else {
  //   return <UserNavigation />;
  // }
}

export default Routes;
