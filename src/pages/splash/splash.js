import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function Splash() {

  const navigation = useNavigation();


  useEffect( () => {
    const dismissStartPage = setTimeout(() => {
      navigation.navigate('OnboardingScreen');
    }, 2000);
  
    return () => {
      clearTimeout(dismissStartPage);
    };

  }, []);
  
  
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        {/* <Image source={require('../../assets/splash1.png')} style={{height:70, resizeMode: 'contain' }} /> */}
        <Image source={require('../../assets/logo.png')} style={{height: '100%', resizeMode: 'contain' }} />
      </View>
    </View>
  );

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    // borderColor: 'red',
  },
  
  customFont: {
    fontSize: 40
  }
});
