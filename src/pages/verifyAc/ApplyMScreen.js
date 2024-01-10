import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './VerifyStyle'
import { TextInput } from 'react-native-paper'
import { colors } from '../../utils/Colors'
import globalStyle from '../../utils/globalStyle'
import { useNavigation } from '@react-navigation/native'



const ApplyMScreen = () => {

    const navigation = useNavigation();

    function handleNavigation(){
      navigation.navigate('VerifyScreen');
    }
  
    
    const [text, setText] = useState('')
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
                        Please provide the name(s) of current Goza members who are referring your application for approval. We will contact them for verification:
                    </Text>

                    <View>
                    <TextInput
                        label="Type Here..."
                        value={text}
                        mode='outlined'
                        textColor={colors.white}
                        activeOutlineColor='#F6F6F6'
                        placeholderTextColor={'#F7F7F7'}
                        onChangeText={text => setText(text)}
                        style={styles.input}
                    />
                    </View>

          <View>
            <TouchableOpacity>
                <Text style={[globalStyle.fRegular, globalStyle.txtCenter, 
                      { color: '#fff', fontSize: 18, textDecorationLine: 'underline' }]}>Submit</Text>
            </TouchableOpacity>
          </View>
                    <Text style={[styles.p1, {fontFamily: 'Superclarendon-Regular'}]}>
                        To expedite your review, you can Apply for Membership below:
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

            </View>
        </View>
    )
}

export default ApplyMScreen