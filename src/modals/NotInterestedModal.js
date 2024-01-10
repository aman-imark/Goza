import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Modal, Appbar } from 'react-native-paper'

import { colors } from '../utils/Colors';
import globalStyle from '../utils/globalStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('screen');


const NotInterestedModal = ({ showModal_NotIntersted, setShowModal_NotIntersted }) => {

    const handleSubmit = () => {
        setShowModal_NotIntersted(false)
    }

    const closeModal = () => {
        setShowModal_NotIntersted(false)
    }
    

    return (
        <>
        <Modal visible={showModal_NotIntersted} contentContainerStyle={styles.containerStyle}>
            <View style={styles.actionMain}>
              <TouchableOpacity style={styles.rightSection} onPress={closeModal}>
                 <Icon name="close" style={{fontSize: 20, color: '#ABB4BD'}}></Icon>
              </TouchableOpacity> 
            </View>

            <View style={{height: 80, width: '100%', justifyContent: 'flex-end'}}>
              <Text style={styles.header}>Not interested?</Text>
            </View>


            <View style={{width: '84%'}}>
              <Text style={styles.subtitle}>Clicking the “X” means you’re not interested in that person</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginVertical : 30 }}>
                <TouchableOpacity style={styles.btnLeft} onPress={closeModal}>
                  <Text style={[styles.btntext, { color: '#1E1F28' }]}>Undo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRight} onPress={closeModal}>
                  <Text style={[styles.btntext, { color: '#FFFFFF' }]}>Not Interested</Text>
                </TouchableOpacity>
              </View>    
            </View>
        </Modal>
        </>
    )
}

export default NotInterestedModal;

const styles = StyleSheet.create({
    containerStyle: {
        width: 330,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent : 'center',
        borderRadius: 10,
        elevation: 10,
        shadowOpacity: .5,
        backgroundColor: colors.white,
        alignSelf: 'center',
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
    fontSize: 24,
    lineHeight: 33,
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
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 0,
    },
 

    btnLeft: {
        backgroundColor: '#FFFFFF',
        width: '47%',
        height: 54,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.8,
        borderColor: '#1E1F28',
        borderRadius: 3,
        paddingHorizontal: 10
    },
    btnRight: {
        backgroundColor: '#000000',
        width: '47%',
        height: 54,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.8,
        borderColor: '#1E1F28',
        borderRadius: 3,
        paddingHorizontal: 10
    },
    btntext: {
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',
        fontFamily: 'Superclarendon-Regular',
    },

})