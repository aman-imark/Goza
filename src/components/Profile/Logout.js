import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/Colors'
import { Divider, Modal } from 'react-native-paper'

const Logout = ({
    setLogoutmodal,
    logoutmodal
}) => {





    
    return (
        <Modal visible={logoutmodal} animationType="fade"
        contentContainerStyle={styles.containerStyle}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '100%'}}
        >

            <View style={styles.card}>
                <Text style={[styles.title]}>Logout</Text>
                <Divider />
                <Text style={[styles.pragraph ]}>Are you sure you want to log out?</Text>
            </View>

            {/* <Card />*/}
            <View style={styles.btnrow}>
                <TouchableOpacity onPress={() => setLogoutmodal(false)} style={[styles.btn]}>
                    <Text style={styles.btntext}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setLogoutmodal(false)} style={[styles.btn,{backgroundColor:colors.black}]}>
                    <Text style={[styles.btntext,{color:colors.white}]}>Yes, logout</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default Logout

const styles = StyleSheet.create({
    containerStyle: {
        // height: '60%',
        // width: '90%',
        borderRadius: 10,
        elevation: 10,
        shadowOpacity: .5,
        backgroundColor: '#1F222A',
        alignSelf: 'center',
        padding: 25,
        marginHorizontal: 20
    },
    card: {
        width: '100%',
        gap: 20
    },
    title: {
        color: colors.white,
        fontSize: 20,
        fontStyle: 'normal',
        // lineHeight: 25,
        fontFamily: 'Superclarendon-Bold',
        textAlign: 'center'
    },
    pragraph: {
        color: colors.white,
        fontSize: 15,
        lineHeight: 23,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center',
    },
    btnrow: {
        width: '100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:10
    },
    btn: {
        width: '45%',
        height: 53,
        backgroundColor: colors.white,
        borderRadius: 4, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    btntext: {
        color: colors.AppDefaultColor,
        fontSize: 14.5,
        fontFamily: 'Superclarendon-Regular',
        letterSpacing: .2
    }
})