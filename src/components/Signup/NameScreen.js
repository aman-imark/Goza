import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { Normalize } from '../../utils/Size';
import { colors } from '../../utils/Colors';
import globalStyle from '../../utils/globalStyle';


const NameScreen = ({ setProgress }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const input1 = useRef()
    const input2 = useRef()
    return (
        <View style={[styles.namecard]}>
            <View style={[styles.inputcard, globalStyle.mrb1]}>
                <Text style={styles.lebel}>First name:</Text>
                <TextInput
                    ref={input1}
                    defaultValue='First name'
                    placeholder='First name'
                    placeholderTextColor={'#9E9E9E'}
                    style={styles.inputFeild}
                    onChangeText={newText => setFirstname(newText)}
                    value={firstname}
                    onSubmitEditing={() => input2.current.focus()}
                    autoFocus= {true}
                />
            </View>
            <View style={[styles.inputcard, globalStyle.mrt2]}>
                <Text style={styles.lebel}>Last name:</Text>
                <TextInput
                    ref={input2}
                    defaultValue='Last name'
                    placeholder='Last name'
                    placeholderTextColor={'#9E9E9E'}
                    style={styles.inputFeild}
                    onChangeText={newText => setLastname(newText)}
                    value={lastname}
                    onSubmitEditing={() => setProgress((prev)=>prev+0.1)}
                />
            </View>
        </View>
    )
}

export default NameScreen

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
        color: colors.white,
        height: 58,
        marginTop: 16,
        fontSize: 16,
        fontFamily: 'Superclarendon-Regular',

    },
    inputcard: {
        width: '100%',
        // marginTop: 30
    }
});