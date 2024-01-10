import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Modal, Appbar } from 'react-native-paper'

import { colors } from '../utils/Colors';
import globalStyle from '../utils/globalStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');


const AddSpotModal = ({ showModal_AddSpot, setShowModal_AddSpot }) => {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showModalView, setModalValue] = useState('modal1');

    const navigation = useNavigation();


    const handleSubmit = () => {
      setShowModal_LimitSpots(false)
    }

    const closeModal = () => {
      setShowModal_AddSpot(false)
    }
    

    const yesClickedAdd = () => {
      setModalValue('modal2')
    }

    const findPotentialDates = () => {
      setModalValue('modal1')
      setShowModal_AddSpot(false)
    }


    return (
        <>
        <Modal visible={showModal_AddSpot} contentContainerStyle={styles.containerStyle}>
            <View style={styles.actionMain}>
              <TouchableOpacity style={styles.rightSection} onPress={closeModal}>
                 <Icon name="close" style={{fontSize: 20, color: '#ABB4BD'}}></Icon>
              </TouchableOpacity> 
            </View>

            { showModalView === 'modal1' ? (
            <View style={{width: '100%'}}>
              <View style={{height: 80, width: '100%', justifyContent: 'flex-end'}}>
                <Text style={styles.header}>Add this spot?</Text>
              </View>

              <View style={{marginHorizontal: 25}}>
                <Text style={styles.subtitle}>Would you like to add this spot{"\n"} to your top 5 spots?</Text>
               
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop : 30, marginBottom : 40}}>
                  <TouchableOpacity style={styles.btnLeft} onPress={closeModal}>
                    <Text style={[styles.btntext, { color: '#1E1F28' }]}>No</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnRight} onPress={yesClickedAdd}>
                    <Text style={[styles.btntext, { color: '#1E1F28' }]}>Yes, confirm</Text>
                  </TouchableOpacity>
                </View>    
              </View>
            </View>
            )             
            : showModalView === 'modal2' ? (

            <View style={{width: '100%'}}>
              <View style={{height: 120, width: '100%', justifyContent: 'flex-end'}}>
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 100,
                        borderWidth: 5,
                        borderColor: '#000000',
                        backgroundColor: '#D3C6A5',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 12
                    }}>
                    <Icon name="check" size={30} color="#000000"/>
                    </View>              
                  </View>
                <Text style={styles.header}>New Spot Added</Text>
              </View>

              <View style={{marginHorizontal: 25}}>
                <Text style={styles.subtitle}>Restuarant Name has been{"\n"} added to your spots</Text>
               

                <View style={{ flexDirection: 'row', justifyContent: 'center',  marginTop : 30, marginBottom : 40 }}>
                <TouchableOpacity style={[styles.btnLast]} onPress={findPotentialDates}>
                  <Text style={styles.btntextLast}>Find{"\n"}Potential Dates</Text>
                </TouchableOpacity>
                </View>    
              </View>
            </View>
            ): <> </>
            }   

        </Modal>
        </>
    )
}

export default AddSpotModal;

const styles = StyleSheet.create({
    containerStyle: {
      width: '85%',
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
        borderColor: '#000000',
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

    btnLeft1: {
      backgroundColor: '#FFFFFF',
      width: '48%',
      height: 60,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.8,
      borderColor: '#1E1F28',
      borderRadius: 3,
      paddingHorizontal: 5
  },
  btnRight1: {
      backgroundColor: '#000000',
      width: '48%',
      height: 60,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3,
      paddingHorizontal: 5
  },
  btntext1: {
      fontSize: 14,
      lineHeight: 20,
      textAlign: 'center',
      fontFamily: 'Superclarendon-Regular',
  },
  radioText: {
    fontSize: 16,
    lineHeight: 20,
 
    fontFamily: 'Superclarendon-Regular',
  },
  btnLast: {
    width: '85%',
    height: 55,
    backgroundColor: '#D3C6A5',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    alignSelf:'center'
  },
  btntextLast: {
      color: colors.black,
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 20,
      fontFamily: 'Superclarendon-Regular',
      // letterSpacing: .2
  }
})