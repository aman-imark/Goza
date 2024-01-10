import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import Loading from '../components/loading/Loading';
import AppStack from './AppStack';
import AuthStack from './AuthStack';


export const Router = () => {

  if (loading) {
    return <Loading/>;
  }


  return (
    <NavigationContainer>
       {authData ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>

    // <NavigationContainer>
    //     {isAuthenticated ? <AppStack/> : <AuthStack/>}
    // </NavigationContainer>
  );

};
