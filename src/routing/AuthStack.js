import React, {useState, useEffect} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/Ionicons';

import Splash from '../pages/splash/splash';
import Login from '../pages/login/login';
import GetStarted from '../pages/get-started/getstarted';
import OnboardingScreen from '../pages/Onboarding/OnboardingScreen';
import Verify from '../pages/verify/verify';
import Otp from '../pages/otp/otp';
import SignupScreen from '../pages/signup/SignupScreen';
import Discover from '../pages/discover/discover';
import ApplyMScreen from '../pages/verifyAc/ApplyMScreen';
import VerifyScreen from '../pages/verifyAc/VerifyScreen';


const Stack = createNativeStackNavigator();


const AuthStack = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} 
            options={{headerShown: false}} />
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} 
            options={{ headerShown: false }}/>
          <Stack.Screen name="GetStarted" component={GetStarted} 
            options={{ title: '', headerTintColor: '#ffffff',
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#181A20', 
          } }}/>
          <Stack.Screen name="Login" component={Login} 
            options={{ title: '', headerTintColor: '#ffffff', 
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#181A20', 
          } }}/>
          <Stack.Screen name="Verify" component={Verify} 
             options={{ title: '', headerTintColor: '#ffffff',
               headerStyle: {
                 backgroundColor: '#181A20', 
          } }}/>
          <Stack.Screen name="Otp" component={Otp} 
              options={{ title: '', headerTintColor: '#ffffff',
                headerStyle: {
                  backgroundColor: '#181A20', 
          } }}/>

        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }}/>  
        <Stack.Screen name="ApplyMScreen" component={ApplyMScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="VerifyScreen" component={VerifyScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );
};


export default AuthStack;
