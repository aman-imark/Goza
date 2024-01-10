import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { Normalize } from '../../utils/Size';
import { colors } from '../../utils/Colors';                

const Location = ({setProgress}) => {
    
    const [Location, setLocation] = useState('')
    
    

    useEffect(()=>{
         
    })
    return (
        <View style={styles.namecard}>
            <View style={styles.inputcard}>
                <Text style={styles.lebel}>Your location:</Text>
                <TextInput
                    placeholder='City, State'
                    // placeholderTextColor={colors.textPlaceHolder}
                    placeholderTextColor={'#9E9E9E'}
                    style={styles.inputFeild}
                    onChangeText={newText => setLocation(newText)}
                    value={Location}
                    autoFocus={true}
                    onSubmitEditing={() => setProgress((prev) => prev + 0.1)}
                />
            </View>
        </View>
    )
}

export default Location

const styles = StyleSheet.create({

    namecard: {
        marginTop: 55,
        width: '100%'
    },

    lebel: {
        fontSize: 21,
        color: colors.white,
        lineHeight: 32,
        fontStyle: 'normal',
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