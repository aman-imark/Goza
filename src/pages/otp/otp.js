import React, { useState, useRef }from 'react';
import { StyleSheet, TouchableOpacity, Modal, Text, TextInput, View, Image, Button, Alert, KeyboardAvoidingView, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import globalStyle from '../../utils/globalStyle';

import { useNavigation } from '@react-navigation/native';

import OTPInputView from '@twotalltotems/react-native-otp-input';
import Loading from '../../components/loading/Loading';
import { colors } from '../../utils/Colors';

// import Clipboard from '@react-native-community/clipboard';





export default function Otp() {

  const navigation = useNavigation();
  
  function handleNavigation() {
    // navigation.navigate('');
  }



  const [code, setCode] = useState('');
  const otpRef = useRef(null);

  const handleCodeChanged = (newCode) => {
    console.log(newCode)
    setCode(newCode);
  };



  const handleResetOtp = () => {
    setCode('');
    // Call the clear method provided by the OTP input field component
    // otpRef.current.clear();
    // console.log(otpRef.current)
    console.log('Current code:', code)
    
  };



  const getOTPValue = () => {
    console.log('Current code:', code);
    navigation.navigate('SignupScreen');
  };


  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    console.log('Ch udhdghudyg')
    setIsLoading(true);

    // Perform async operation here...

    // setIsLoading(false);
  };


  return (
    <KeyboardAvoidingView style={styles.container}  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <View style={[globalStyle.center, globalStyle.mrt2, globalStyle.mrb1]}>
      <Text style={[globalStyle.h2, globalStyle.txtCenter, {paddingHorizontal: '10%'}]}>Enter Code</Text>
        <Text style={[globalStyle.pdt2, styles.subtitle, globalStyle.mrt2]}>Sent to +1 516-732-4080</Text>
      </View>

      <View style={[globalStyle.mrt2, {width: '88%'}]}>
          <View style={[{alignItems: 'center', width: '100%', height: 100, overflow: 'hidden'}]}>
   
          <OTPInputView ref={otpRef}
              style={[{width: '80%', height: 100}]}
              pinCount={4}
              code={code}
              autoFocus={true}
              codeInputFieldStyle={styles.textInput}
              onCodeChanged={handleCodeChanged} />
          </View>
      
          <View style={[globalStyle.mrt2]}>
            <TouchableOpacity onPress={handleResetOtp}>
                <Text style={[globalStyle.fRegular, globalStyle.txtCenter, 
                      { color: '#fff', fontSize: 14, textDecorationLine: 'underline' }]}>Resend Code</Text>
            </TouchableOpacity>
          </View>




          <View style={{marginTop: '10%'}}>
          {/* <View style={[globalStyle.mrt1]}> */}
            <TouchableOpacity style={globalStyle.customButton} onPress={getOTPValue}>
              <Text style={[globalStyle.fRegular, { color: '#fff', fontSize: 16 }]}>Verify</Text>
            </TouchableOpacity>
          </View>
          
          {/* <View>
            <Button title="Load Data" onPress={handleButtonClick} />
            <Modal  animationType="slide"
          transparent={true} style={[globalStyle.border]} 
          >
              <Loading />
            </Modal>
          </View> */}

      </View>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    color: '#ffffff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    fontFamily: 'Superclarendon-Regular',
    backgroundColor: colors.btnColor2,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: '5%',
    width: '100%',
    borderColor: '#35383F',
    borderWidth: 1,
    height: 58
  },

  textInput: {
    width: 60,
    height: 65,
    color: '#000000',
    backgroundColor: '#F7F7F7',
    borderRadius: 15,
    fontSize: 34,
    textAlign: 'center',
    // marginHorizontal: 5,

    fontFamily: 'Superclarendon-Regular',
  },



  input: {
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: 'transparent',
    width: '100%'


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
  }
});