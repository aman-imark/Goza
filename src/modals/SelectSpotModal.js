import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Modal, Appbar } from 'react-native-paper'

import { colors } from '../utils/Colors';
import globalStyle from '../utils/globalStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');


const SelectSpotModal = ({ showModal_SelectSpot, setShowModal_SelectSpot }) => {


    const closeModal = () => {
      setShowModal_SelectSpot(false)
    }
    

    const navigation = useNavigation();

    function handleNavigation() {
        setShowModal_SelectSpot(false)
        navigation.navigate('SpotsScreen');
    }



    return (
        <Modal visible={showModal_SelectSpot} contentContainerStyle={styles.containerStyle}>
            {/* <View style={styles.actionMain}>
              <TouchableOpacity style={styles.rightSection} onPress={closeModal}>
                 <Icon name="close" style={{fontSize: 20, color: '#ABB4BD'}}></Icon>
              </TouchableOpacity> 
            </View> */}

            <View style={{height: 60, width: '100%', justifyContent: 'center'}}>
              <Text style={styles.header}>Select your dating spots</Text>
            </View>

            <View style={{width: '100%'}}>
              <Text style={[styles.pragraph]}>
                  Every week, you select your{'\n'}
                  top 5 dating spots.
                  {'\n'}
                  {'\n'}
                  You only see potential matches who select the same dating spots as you!
                  {'\n'}
              </Text>
              <TouchableOpacity onPress={handleNavigation} style={[styles.btn]}>
                <Text style={styles.btntext}> Choose My Spots </Text>
              </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default SelectSpotModal;

const styles = StyleSheet.create({
  containerStyle: {
      width: '88%',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent : 'center',
      borderRadius: 10,
      elevation: 10,
      shadowOpacity: .5,
      backgroundColor: colors.white,
      alignSelf: 'center',

      paddingVertical: 20,
      paddingHorizontal: 10,

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
      fontSize: 22,
      lineHeight: 33,
      fontFamily: 'Superclarendon-Bold',
      textAlign: 'center',
     },

  pragraph: {
      color: '#6D6D6D',
      fontSize: 15,
      lineHeight: 22,
      fontFamily: 'Superclarendon-Regular',
      textAlign: 'center',
  },
  btn: {
      width: '62%',
      height: 55,
      backgroundColor: '#D3C6A5',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 2,
      marginBottom: 12,
      alignSelf:'center'
  },
  btntext: {
      color: colors.black,
      fontSize: 16,
      fontStyle: 'normal',
       lineHeight: 25,
      fontFamily: 'Superclarendon-Regular',
      // letterSpacing: .2
  }

})