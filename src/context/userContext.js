import React, {createContext, useState, useContext} from 'react';

const UserContext = createContext({
  userType: null,
  setUserType: () => null,
});

export const UserProvider = ({children}) => {
  const [userType, setUserType] = useState(null);

  return (
    <UserContext.Provider
      value={{userType: userType, setUserType: setUserType}}>
      {children}
    </UserContext.Provider>
  );
};

export function UseUserData() {
  const context = useContext(UserContext);
  return context;
}
