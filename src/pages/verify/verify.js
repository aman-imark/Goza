import React, { useState }from 'react';
import { StyleSheet, TouchableOpacity, Text, View, KeyboardAvoidingView, Platform } from 'react-native';

import globalStyle from '../../utils/globalStyle';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-phone-number-input/react-native-input'
import { colors } from '../../utils/Colors';
// import 'react-phone-number-input/style.css';


export default function Verify() {

  const navigation = useNavigation();
  
  function handleNavigationSend() {
    console.log(phoneNumber);
    console.log(phoneNumber.length)
    if(phoneNumber.length < 12){
      setHasError(true);
    }
    if(phoneNumber.length == 12){
      navigation.navigate('Otp');
    }
  }


  const [phoneNumber, setPhoneNumber] = useState('');
  const [hasError, setHasError] = useState(false);


  const isValidPhoneNumber = (value) => {
    // Add your own validation logic here
    return true; // Return true if the phone number is valid
  };

  const handlePhoneChange = (value) => {
    if(value.length > 12) {
       setHasError(true);
    }else {
       setHasError(false);
    }
    setPhoneNumber(value);
  };
 
  const inputBoxStyle = hasError ? styles.errorBox : styles.defaultBox;


  return (
    <KeyboardAvoidingView style={styles.container}  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <View style={[globalStyle.center, globalStyle.mrb1]}>
         <Text style={[globalStyle.h2, globalStyle.txtCenter, {paddingHorizontal: '12%'}]}>Verify your phone number</Text>
         <Text style={[globalStyle.pdt2, styles.subtitle, globalStyle.mrt2]}>We will text you a verification link</Text>
      </View>

      <View style={[globalStyle.mrt2, {width: '88%'}]}>
      <View style={[styles.container2, inputBoxStyle]}>
          <View style={styles.leftSection}>
              <Text style={[globalStyle.fRegular, {fontSize: 20, color: '#ffffff', marginRight: 8}]}>+1 |</Text>
          </View>
          <View style={[styles.rightSection]}>
            <View>
            <PhoneInput
            style={[styles.input, globalStyle.fRegular]}
            placeholder="XXX- XXX -XXXX"
            placeholderTextColor={'#9E9E9E'}
            defaultCountry="US"
            autoFocus={true}
            maxLength={14}
            // limitMaxLength={true}
            value={phoneNumber}
            onChange={handlePhoneChange} />
            </View>
          </View>
      </View>
   

      { hasError === true  ? (
      <Text style={[styles.errorText, {textAlign: 'left', color: '#FF3B30'}]}>Phone number invalid. Try again</Text>
      ): <></>
      }

      <View style={{marginTop: '15%'}}>
          <TouchableOpacity style={globalStyle.customButton} onPress={handleNavigationSend}>
              <Text style={[globalStyle.fRegular, { color: '#fff', fontSize: 16}]}>Send Code</Text>
          </TouchableOpacity>
      </View>
      </View>

    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181A20',
    color: '#ffffff',
    width: '100%',
  },
  container2: {
    fontFamily: 'Superclarendon-Regular',
    backgroundColor: colors.btnColor2,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: '2%',
    width: '100%',
    height: 58
  },
  leftSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
  },
  rightSection: {
    flex: 3,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    marginStart: '4%'
  },
  input: {
    fontSize: 20,
    color: '#ffffff',
    backgroundColor: 'transparent',
    width: '100%',
    // justifyContent:'center',
    // alignItems: 'center'
    // height: 40,
    // borderColor: 'gray',
    // borderWidth: 1,
    // paddingHorizontal: 10,
  },
  subtitle: {
    fontFamily: 'Superclarendon-Regular',
    fontSize: 15,
    color: '#fff',
    letterSpacing: 0.2,
    lineHeight: 22
  },
  defaultBox: {
    borderColor: '#35383F',
    borderWidth: 1,
  },
  errorBox: {
    borderColor: '#FF3B30',
    borderWidth: 1.5,
  },
  errorText: {    
    fontFamily: 'Superclarendon-Regular',
    fontSize: 15,
    color: '#FF3B30',
    letterSpacing: 0.2,
    lineHeight: 22,
    // top: 10
  }
});