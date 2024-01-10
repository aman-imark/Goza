import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
 import { RadioButton } from 'react-native-paper'
import { colors } from '../../utils/Colors'

const MethodButton = ({
title,
method,
icon,
id,
checked
}) => {
    return (
        <View style={styles.btn}>
            <View style={styles.btnRow}>
                <Image source={icon} style={{ height: 25, width: 25  }} resizeMode='contain' />
                <Text style={styles.paymentText}>
                    {title}
                </Text>
            </View>
            <RadioButton
                uncheckedColor={'#9610FF'}
                value={method}
                status={checked === method ? 'checked' : 'unchecked'}
                color={'#9610FF'}
            />
        </View>
    )
}

export default MethodButton;

const styles = StyleSheet.create({
    btn: {
        height: 70,
        width: '100%',
        backgroundColor: '#1F222A',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        justifyContent: 'space-between'
    },
    btnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    paymentText: {
        fontSize: 18,
        color: colors.white,
        fontFamily: 'Superclarendon-Bold',
    },
})