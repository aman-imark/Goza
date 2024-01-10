import { View, Text, Image, TextInput, Dimensions, Alert, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './SignupStyle';
import { colors } from '../../utils/Colors';


import * as Progress from 'react-native-progress';
import NameScreen from '../../components/Signup/NameScreen';
import BirthHeight from '../../components/Signup/BirthHeight';
import Ethnicity from '../../components/Signup/Ethnicity';
import Religion from '../../components/Signup/Religion';
import Location from '../../components/Signup/Location';
import Gender from '../../components/Signup/Gender';
import EdBackground from '../../components/Signup/EdBackground';
import Preferences from '../../components/Signup/Preferences';
import UploadPhotos from '../../components/Signup/UploadPhotos';
import globalStyle from '../../utils/globalStyle';
import { Appbar, Button, IconButton } from 'react-native-paper';



const { width, height } = Dimensions.get('screen');


const SignupScreen  = ({ navigation }) => {

  const [progress, setProgress] = useState(0);


  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (emailInput) => {
    setEmail(emailInput);
    const emailRegex = /\S+@\S+\.\S+/;
    setIsValidEmail(emailRegex.test(emailInput));
    console.log(emailInput);
    console.log(isValidEmail);
    if(isValidEmail === true){
      setProgress(0.1)
    }
  };

  // const emailBoxStyle = isValidEmail ? styles.errorBox : styles.defaultBox;
  const emailBoxStyle = !isValidEmail ? styles.errorBox : styles.defaultBox;

  useEffect(() => {
    setProgress(0);
  }, []); 
  console.log(progress);


  return (
    <View style={styles.Container}>
      {progress > 0 ? (
        <View>
        <Progress.Bar
          aria-hidden={true}
          progress={progress}
          height= {10}
          width={width - 35}
          unfilledColor={'#fff'}
          color={colors.grey}
          borderRadius={10}
          style={[styles.progress]} />
        </View>
      ): 
        <View>
        <Progress.Bar
          aria-hidden={true}
          progress={0}
          height= {10}
          width={width - 35}
          unfilledColor={'#fff'}
          color={colors.grey}
          borderRadius={10}
          style={[styles.progress]} />
        </View>
      }

      <Appbar.Header mode='center-aligned' style={{ color: '#fff', backgroundColor: '#181A20', position: 'relative', top: -40 }}>
        <Appbar.BackAction icon="chevron-left" color="#fff" size={25} onPress={() => navigation.navigate('Otp')}/>
      </Appbar.Header>    
        {/* <Appbar.Header mode='center-aligned' style={{ color: '#fff', backgroundColor: '#181A20', position: 'relative', top: 0 }}>
          <Appbar.BackAction icon="chevron-left" color="#fff" size={25} onPress={() => navigation.navigate('Otp')}/>
        </Appbar.Header> */}
        
      <View style={styles.main}>
        {progress === 0 ?
          <View style={[styles.emailinputCard]}>
            <Text style={styles.lebel}>Your email:</Text>
            <TextInput
              autoFocus={true}
              placeholder='Email'
              placeholderTextColor={'#9E9E9E'}
              keyboardType="email-address"
              autoCapitalize="none"
              
              style={[styles.inputEmail, emailBoxStyle]}
              value={email}
              onChangeText={handleEmailChange}
              // onSubmitEditing={() => setProgress(0.1)}
              // onChangeText={newText => setEmail(newText)}
            />
            {!isValidEmail && (
             <Text style={styles.errorText}>Please enter a valid email address</Text>
            )}

          </View>
          : progress === 0.1 ?
            <NameScreen setProgress={setProgress} />
            : progress === 0.2 ?
              <BirthHeight setProgress={setProgress} />
              : progress === 0.30000000000000004 ?
                <Ethnicity setProgress={setProgress} />
                : progress === 0.4 ?
                  <Religion setProgress={setProgress} />
                  : progress === 0.5 ?
                    <Location setProgress={setProgress} />
                    : progress === 0.6 ?
                      <Gender setProgress={setProgress} />
                      : progress === 0.7 ?
                        <EdBackground setProgress={setProgress} />
                        : progress === 0.7999999999999999 ?
                          <Preferences setProgress={setProgress} />
                          :
                          <UploadPhotos setProgress={setProgress} />
        }
      </View>
    </View>
  )
}

export default SignupScreen;
