import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import globalStyle from '../../utils/globalStyle'
import { styles } from './VerifyStyle'

import { useNavigation } from '@react-navigation/native'




export default function VerifyScreen() {

  const navigation = useNavigation();

  function handleNavigation(){
    navigation.navigate('ApplyMScreen');
  }
  
  function handleNavigation2(){
    navigation.navigate('GetStarted');
  }
  

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'transparent'} translucent />
            
            <View style={[styles.header, globalStyle.mrb1]}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
            </View>
            <View style={[styles.main, globalStyle.mrt1]}>
                <Text style={[styles.title, globalStyle.fRegular, globalStyle.mrt2, globalStyle.mrb2]}>
                    Verifying your account
                </Text>
                <View style={styles.card}>
                    <Text style={styles.p1}>
                        We take the time to review profiles to ensure they are accurate and not spam.
                    </Text>
                    <Text style={styles.p1}>
                        We are in the process of reviewing your profile.
                    </Text>
                    <Text style={styles.p1}>
                        <Text style={[styles.p1, {textDecorationLine: 'underline'}]}>To expedite your review, you can Apply for Membership</Text> 
                        <Text style={[styles.p1]}> or add the name of a Goza member referring you below:</Text>
                    </Text>
                
                </View>
                <TouchableOpacity style={[styles.btn]} onPress={handleNavigation}>
                    <Text style={styles.btnText}>
                        Apply for Membership
                    </Text>
                </TouchableOpacity>
                <View style={{width: '90%', marginVertical: 5}}>
                <Text style={[styles.p1, {textAlign:'center', fontStyle: 'italic'}]}>
                Applications receive a review decision in 24-48 hrs</Text>
                </View>        
                <TouchableOpacity style={styles.refbtn} onPress={handleNavigation2}>
                    <Text style={styles.refbtnText}>
                        Add Referral Member
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

