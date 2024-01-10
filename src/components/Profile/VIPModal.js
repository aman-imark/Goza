import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../../utils/Colors';
import { Modal } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

const VIPModal = ({ open, setOpen }) => {

    const navigation = useNavigation();

    return (
        <Modal visible={open} animationType="fade"
               contentContainerStyle={styles.containerStyle}
               style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '100%'}}>

            <Text style={[styles.title, { fontSize: 22 }]}>Congratulations!</Text>
            <Text style={[styles.pragraph, { marginHorizontal: 50 }]}>You’re now an VIP!</Text>
            {/* <Card />*/}
            {/* setOpen(false),  */}
            <TouchableOpacity onPress={()=> { setOpen(false), navigation.navigate('Discover') }} style={[styles.btn]}>
                <Text style={styles.btntext}>Accept VIP Status</Text>
            </TouchableOpacity>
        </Modal>
    )
}

export default VIPModal;

const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 10,
        elevation: 10,
        shadowOpacity: .5,
        backgroundColor: '#1F222A',
        alignSelf: 'center',
         padding: 35,
        //  borderColor: 'red',
        //  borderWidth: 1,
        //  shadowColor: '#fff'
    },
    title: {
        color: colors.white,
        fontSize: 24,
        fontStyle: 'normal',
        // lineHeight: 25,
        fontFamily: 'Superclarendon-Bold',
        textAlign: 'center'
    },
    pragraph: {
        color: colors.white,
        fontSize: 16,
        lineHeight: 23,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center',
        marginTop: 15
    },

    btn: {
        width: '100%',
        height: 50,
        backgroundColor: '#D3C6A5',
        borderRadius: 100,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30
    },
    btntext: {
        color: colors.black,
        fontSize: 16,
        fontStyle: 'normal',
         lineHeight: 25,
        fontFamily: 'Superclarendon-Bold',
        letterSpacing: .2
    }
})