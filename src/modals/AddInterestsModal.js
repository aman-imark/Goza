import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { Modal, Appbar } from 'react-native-paper'

import { colors } from '../utils/Colors';
import globalStyle from '../utils/globalStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');


const AddInterestsModalOld = ({}) => {

  // const [showModal_AddInterests, setShowModal_AddInterests] = useState(false);

  const closeModal = () => {
    setShowModal_AddInterests(false);
  }

    // useEffect( () =>    {
    //   const timeout = setTimeout(() => {
    //     setShowModal_AddInterests(true);
    //   }, 100);
    //   return () => clearTimeout(timeout);
    // }, []);


    const interestsList = [
      { id: '1', name: 'Travel' },
      { id: '2', name: 'Music' },
      { id: '3', name: 'Outdoors' },
      { id: '4', name: 'Books' },
      { id: '5', name: 'Beer' },
      { id: '6', name: 'Dogs' },
      { id: '7', name: 'Movies' },
      { id: '8', name: 'Fitness' },
      { id: '9', name: 'Nature' },
      { id: '10', name: 'Gaming' },
      { id: '11', name: 'Dancing' },
      { id: '12', name: 'Sports' },
      { id: '13', name: 'Food' },
      { id: '14', name: 'Drinking' },
      { id: '15', name: 'Animals' },
      { id: '16', name: 'Walks' },
      { id: '17', name: 'Photography' },
    ]

    const [selectedInterest, setSelectedInterest] = useState([])
      const handleInterestPress = (interest) => {
          if (selectedInterest.includes(interest)) {
              setSelectedInterest(selectedInterest.filter((item) => item !== interest));
          } else {
              setSelectedInterest([...selectedInterest, interest]);
          }
    };

    return (
        <Modal contentContainerStyle={styles.containerStyle}
        animationType="fade" transparent={true}>
            <View style={styles.actionMain}>
              <TouchableOpacity style={styles.rightSection} onPress={closeModal}>
                 <Icon name="close" style={{fontSize: 20, color: '#ABB4BD'}}></Icon>
              </TouchableOpacity> 
            </View>

            <View style={{width: '100%'}}>
              <View style={{height: 70, width: '100%', justifyContent: 'flex-end'}}>
                <Text style={styles.header}>Add Interests</Text>
              </View>
            
              <View style={styles.secbody}>
                  {
                      interestsList.map((item, i) =>
                          <TouchableOpacity key={i} mode='outlined' style={[styles.chip, { backgroundColor: selectedInterest && !selectedInterest.includes(item.name) ? colors.white : '#1E1F28' }]}
                              onPress={() => handleInterestPress(item.name)} >
                              <Text style={[styles.chipText, { color: selectedInterest && !selectedInterest.includes(item.name) ? colors.black : colors.white }]}>
                                  {item.name}
                              </Text>
                          </TouchableOpacity>
                  )}
              </View>
              <TouchableOpacity onPress={() => { setCpModal1(false), setCpModal2(true) }} style={styles.btn}>
                  <Text style={styles.btnText}>Add Interests</Text>
              </TouchableOpacity> 
            </View>  
        </Modal>
    )
}

export default AddInterestsModalOld;

const styles = StyleSheet.create({
    containerStyle: {
        width: '90%',
        // justifyContent: 'center',
        // alignItems: 'center',
        alignSelf: 'center',
      
    
        borderRadius: 10,
        elevation: 10,
        shadowOpacity: .5,
        backgroundColor: colors.white,
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
 
  secbody: {
      flexDirection: 'row',
      flexWrap: 'wrap',     
      paddingHorizontal: 20, paddingVertical: 10
  },
  chip: {
      backgroundColor: colors.AppDefaultColor,
      borderWidth: 1,
      borderRadius: 35,
      borderColor: colors.white,
      minHeight: 32,
      paddingHorizontal: 13,
      justifyContent: 'center',
      marginHorizontal: '.8%',
      marginVertical: 4,
      borderWidth: 1,
      borderColor: colors.black,
  },
  chipText: {
      fontSize: 12,
      color: colors.textPlaceHolder,
      fontFamily: 'Superclarendon-Regular',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      letterSpacing: 0.2
  },
  btn: {
      height: 48,
      width: 200,
      borderRadius: 8,
      backgroundColor: colors.secondColor,
      justifyContent: "center",
      alignItems: 'center',
      alignSelf: 'center',
      // marginTop: '6%',
      marginTop: 10,
      marginBottom: 25
  },
  btnText: {
      color: colors.black,
      fontSize: 16,
      fontFamily: 'Superclarendon-Regular',
  },
})