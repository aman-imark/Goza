import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useState, useRef, useCallback } from 'react'
import { colors } from '../../utils/Colors';
import { Normalize } from '../../utils/Size'; 
import SegmentedControlTab from "react-native-segmented-control-tab";

import Icon from 'react-native-vector-icons/MaterialIcons';
import globalStyle from '../../utils/globalStyle';

import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

const UploadPhotos = ({setProgress }) => {
  const navigation = useNavigation();

  function handleNavigation() {
    setProgress((prev) => prev + 0.1)
      navigation.navigate('BottomNavigation');
  }

  const AddPhotoBtn = () => {
    return (
      <TouchableOpacity style={styles.addphotoBtn}>
        <Icon name='add' size={15} color={colors.grey} />
      </TouchableOpacity>
    )
  }
  const RemovePhoto = () => {
    return (
      <TouchableOpacity style={styles.removephotoBtn}>
        <Icon name='cancel' size={12} color={colors.grey} />
      </TouchableOpacity>
    )
  }
  return (
    <>
      <View style={styles.namecard}>
        <Text style={[styles.title, globalStyle.fRegular]}>Upload your 4 best photos:</Text>
        <View style={styles.inputcard}>
          <View style={styles.row}>
            <Text style={styles.lebel}>Your main photo must clearly show your face</Text>
            <View style={styles.chip}>
              <Image
                source={require('../../assets/Images/Uploaded/uploaded_1.png')}
                style={styles.uploadedimage} />
                <RemovePhoto/>
            </View>
            <View style={styles.chip}>
            <Image
                source={require('../../assets/Images/Uploaded/uploaded_2.png')}
                style={styles.uploadedimage} />
                <RemovePhoto/>
            </View>
            <View style={styles.chip}>
              <AddPhotoBtn />
            </View>
            <View style={styles.chip}>
              <AddPhotoBtn />
            </View>


          </View>  
        </View>

      </View>

      <TouchableOpacity onPress={handleNavigation} style={styles.btn}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </>
  )
}

export default UploadPhotos;



const styles = StyleSheet.create({

  namecard: {
     width: width - 50
  },

  title: {
    fontSize: 21,
    color: colors.white,
    lineHeight: 32,
    fontFamily: globalStyle.fRegular,
  },
  lebel: {
    fontSize: 12,
    color: colors.grey,
    lineHeight: 32,
    fontFamily: 'Superclarendon-Regular',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginTop: 15,
    justifyContent: 'center'

  },
  chip: {
    backgroundColor: colors.AppDefaultColor,
    margin: 6,
    height: height-650,
    width: width-250,
    borderWidth: 2.5,
    borderStyle: 'dashed',
    borderRadius: 5,
    borderColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputcard: {
    width: '100%',
    marginVertical: 10,

  },
  btn: {
    backgroundColor: colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: 58,
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 5,
    width: width - 40,

  },
  btnText: {
    color: colors.white,
    fontSize: 17,
    fontFamily: 'Superclarendon-Regular',
    alignSelf: 'center',
    letterSpacing: 2.2,
    lineHeight: 23
  },
  addphotoBtn: {
    height: 35,
    width: 35,
    borderRadius: 80,
    backgroundColor: '#2A2C36',
    justifyContent: 'center',
    alignItems: 'center'
  },
  uploadedimage:{
    height:'100%',
    width: '100%',
    resizeMode:'cover',

  },
  removephotoBtn: {
    height: 25,
    width: 25,
    borderRadius: 80,
    backgroundColor: '#2A2C36',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    top:-10,
    right:-10,
    elevation:5,
    
  },
});