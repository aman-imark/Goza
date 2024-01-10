import React, { useState, useEffect } from 'react';
import { StatusBar} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './src/routing/AuthStack';
import AppStack from './src/routing/AppStack';


import { storeData, getData, removeData, clearData } from './src/services/storageService';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    getAuthStatus()
  }, []);


  const getAuthStatus = async () => {
    try {
      const data = await getData('setUser').then( (data) => {
        // console.log(data);
        if (data) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      });
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
    }
  };


  return (
    <NavigationContainer>
        {/* <AuthStack/> */}
        {isAuthenticated ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>

    // <StatusBar backgroundColor='transparent' barStyle="light-content" ></StatusBar>
  );
}

export default App;