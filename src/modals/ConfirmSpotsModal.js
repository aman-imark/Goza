import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Modal, Appbar } from 'react-native-paper'

import { colors } from '../utils/Colors';
import globalStyle from '../utils/globalStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('screen');


const ConfirmSpotsModal = ({ showModal_ConfirmSpots, setShowModal_ConfirmSpots, setShowModal_LimitSpots }) => {

    const handleSubmit = () => {
      setShowModal_ConfirmSpots(false)
    }

    const closeModal = () => {
      setShowModal_ConfirmSpots(false)
    }
    

    const yesConfirm = () => {
      setShowModal_ConfirmSpots(false)
    }




    return (
        <>
        <Modal visible={showModal_ConfirmSpots} contentContainerStyle={styles.containerStyle}>
            <View style={styles.actionMain}>
              <TouchableOpacity style={styles.rightSection} onPress={closeModal}>
                 <Icon name="close" style={{fontSize: 20, color: '#ABB4BD'}}></Icon>
              </TouchableOpacity> 
            </View>

            <View style={{height: 80, width: '100%', justifyContent: 'flex-end'}}>
              <Text style={styles.header}>Confirm Your Spots?</Text>
            </View>


            <View style={{width: '84%'}}>
              <Text style={styles.subtitle}>You only see people who select at least 1 of the same dating spots as you.</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginVertical : 30 }}>
                <TouchableOpacity style={styles.btnLeft} onPress={closeModal}>
                  <Text style={[styles.btntext, { color: '#1E1F28' }]}>Not yet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRight} onPress={yesConfirm}>
                  <Text style={[styles.btntext, { color: '#1E1F28' }]}>Yes, confirm</Text>
                </TouchableOpacity>
              </View>    
            </View>
        </Modal>
        </>
    )
}

export default ConfirmSpotsModal;

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent : 'center',
        borderRadius: 10,
        elevation: 10,
        shadowOpacity: .5,
        backgroundColor: colors.white,
        alignSelf: 'center',
        // marginHorizontal: '6%'
    },
   actionMain: {
    position: 'absolute',
    right: 10,
    top: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    zIndex: 100,
  },
  rightSection: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36 ,
    height: 36,
    borderRadius: 100,
  },
  header:{
    width: '100%',
    marginBottom: 5,
    color: '#000000',
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Superclarendon-Bold',
    textAlign: 'center',
   },
    title: {
        color: '#000000',
        fontSize: 18,
        lineHeight: 23,
        fontFamily: 'Superclarendon-Bold',
        textAlign: 'center',
    },
    subtitle: {
        color: '#6D6D6D',
        fontSize: 15,
        lineHeight: 22,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 0,
    },
 

    btnLeft: {
        backgroundColor: '#FFFFFF',
        width: '48%',
        height: 48,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.8,
        borderColor: '#1E1F28',
        borderRadius: 3,
        paddingHorizontal: 5
    },
    btnRight: {
        backgroundColor: '#D3C6A5',
        width: '48%',
        height: 48,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        paddingHorizontal: 5
    },
    btntext: {
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        fontFamily: 'Superclarendon-Regular',
    },

})