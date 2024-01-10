import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { Normalize } from '../../utils/Size';
import { colors } from '../../utils/Colors';
import globalStyle from '../../utils/globalStyle';
const { width, height } = Dimensions.get('screen');

const EdBackground = ({ setProgress }) => {
    const [Jobtitle, setJotitle] = useState('');
    const [Companyname, setCompanyname] = useState('')
    const [University, setUniversity] = useState('')
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();


    return (
        <>
            <View style={[styles.namecard, globalStyle.mrb2]}>
                <View style={styles.inputcard}>
                    <Text style={styles.lebel}>Your background:</Text>
                    <TextInput
                        ref={input1}
                        autoFocus={true}
                        placeholder='Job title'
                        placeholderTextColor={'#9E9E9E'}
                        style={styles.inputFeild}
                        onChangeText={newText => setJotitle(newText)}
                        value={Jobtitle}
                        onSubmitEditing={() => input2.current.focus()}
                    />
                    <TextInput
                        ref={input2}
                        placeholder='Company'
                        placeholderTextColor={'#9E9E9E'}
                        style={styles.inputFeild}
                        onChangeText={newText => setCompanyname(newText)}
                        value={Companyname}
                        onSubmitEditing={() => input3.current.focus()}
                    />
                    <TextInput
                        ref={input3}
                        placeholder='College/University'
                        placeholderTextColor={'#9E9E9E'}
                        style={styles.inputFeild}
                        onChangeText={newText => setUniversity(newText)}
                        value={University}
                        onSubmitEditing={() => console.log('Pressed!')}
                    />                    
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={[globalStyle.fBold, globalStyle.mrt2, {color: '#ABB4BD', fontSize: 12, textAlign: 'right'}]}>+ add more education</Text>
                    </TouchableOpacity>
                </View>

            </View>
            
            {/* <View style={[globalStyle.mrt1, globalStyle.border, {width: '100%'}]}>
            <View style={[globalStyle.mrt1, globalStyle.border, {width: '88%'}]}> */}
            <TouchableOpacity onPress={() => setProgress((prev) => prev + 0.1)} style={[styles.btn, { backgroundColor: 'transparent' }]}>
                <Text style={styles.btnText}>
                    Skip
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setProgress((prev) => prev + 0.1)} style={styles.btn}>
                <Text  style={styles.btnText}>
                    Continue
                </Text>
            </TouchableOpacity>
            {/* </View>
            </View> */}
        </>
    )
}

export default EdBackground

const styles = StyleSheet.create({

    namecard: {
        marginTop: 55,
        width: '100%'
    },

    lebel: {
        fontSize: 21,
        color: colors.white,
        lineHeight: 32,
        fontFamily: 'Superclarendon-Regular',
    },
    inputFeild: {
        backgroundColor: '#1E1F28',
        paddingLeft: 30,
        justifyContent: 'center',
        borderRadius: 4,
        color: colors.lightygrey,
        height: 58,
        marginTop: 16,
        fontSize: 16,
        fontFamily: 'Superclarendon-Regular',

    },
    inputcard: {
        width: '100%',
    },
    addtext: {
        color: colors.lightygrey,
        fontSize: 12,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'right',
        lineHeight: 17,
        letterSpacing: 0.2,
        marginTop: 15,
    },
    btn: {
        backgroundColor: colors.btnColor,
        justifyContent: 'center',
        alignItems: 'center',
        height: 58,
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 5,
        width:width-40,

    },
    btnText: {
        color: colors.white,
        fontSize: 17,
        fontFamily: 'Superclarendon-Regular',
        alignSelf: 'center',
        letterSpacing: 2.2,
        lineHeight: 23
    }
});