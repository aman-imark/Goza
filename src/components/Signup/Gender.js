import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { Normalize } from '../../utils/Size';
import { colors } from '../../utils/Colors';

const Gender = ({setProgress}) => {
    const [Gender, setGender] = useState('');
    const genderList = [
        { id: '1', name: 'Man' },
        { id: '1', name: 'Woman' },
        { id: '1', name: 'Non-binary' },
    ]
    return (
        <View style={styles.namecard}>
            <View style={styles.inputcard}>
                <Text style={styles.lebel}>I am a:</Text>
                {genderList.map((item, i) =>
                    <TouchableOpacity key={i} 
                        onPress={() => { setTimeout(() => { setProgress((pre) => pre + 0.1); 
                                        //   console.log("pressed!");
                                        }, 500), setGender(item.name) }}
                        style={[styles.inputFeild, { backgroundColor: Gender === item.name ? colors.white : '#1E1F28' }]}>
                        <Text style={[styles.btnText, { color: Gender === item.name ? colors.black : colors.white }]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default Gender




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
        height: 58,
        marginTop: 16,

    },
    inputcard: {
        width: '100%',
        // marginTop: 30
    },
    btnText: {
        color: colors.customBtnText,
        fontSize: 16,
        fontFamily: 'Superclarendon-Regular',
    }
});