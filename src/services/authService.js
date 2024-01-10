import React, { useState, createContext } from 'react';

import { storeData, getData, removeData, clearData } from './storageService';


export const AuthContext = createContext();

export const AuthService = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(false);

    let nativeHeaders;
    if(token === '') {
        nativeHeaders = {
           'Content-Type': 'application/json', 
           'Access-Control-Allow-Origin': '*', 
        };
    }else {
        nativeHeaders = {
           'Content-Type': 'application/json', 
           'Access-Control-Allow-Origin': '*',
           'Authorization': `Bearer ${token}`
        };
    }
  
  
    const res = await fetch(baseUrl+url, {method: 'post', headers: nativeHeaders, body: JSON.stringify(data)});
    const finalRes = await res.json();
    return finalRes;
  
};
  
  