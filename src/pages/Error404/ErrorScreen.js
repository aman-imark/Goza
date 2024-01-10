import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { colors } from '../../Utils/Colors'
import { Normalize } from '../../Utils/Size'

const ErrorScreen = () => {
    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'transparent'} translucent />
            <View style={styles.content}>

                <Text style={styles.title}>Oops!</Text>
                <Text style={styles.subtitle}>Something went wrong.</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>
                    Return to Homepage
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ErrorScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        height: '100%',
        backgroundColor: colors.AppDefaultColor, justifyContent:'center'
    },
    title: {
        fontSize: 40,
        color: colors.textdefult,
        fontFamily: 'Superclarendon-Bold',
        letterSpacing: 0.6,
        alignSelf: 'center'
    },
    subtitle: {
        fontSize: 18,
        color: colors.textdefult,
        fontFamily: 'Superclarendon-Regular',
        letterSpacing: 0.3,
        lineHeight: 30,
        alignSelf: 'center'
    },
    content:{
        
    },
    btn: {
        height: 50,
        borderRadius: 85,
        paddingHorizontal: 16,
        backgroundColor: '#35383F',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        marginTop:50,
        width:'80%'
    },
    btntext: {
        fontSize: Normalize(18),
        color: colors.textdefult,
        fontFamily: 'Superclarendon-Regular',
        letterSpacing: 0.3,
        lineHeight: 30,
    }
})