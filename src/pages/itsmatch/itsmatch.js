import React, { useState, useRef }  from 'react';
import { StyleSheet, Platform, TouchableOpacity, Text, View, Image, StatusBar, ScrollView } from 'react-native';

import globalStyle from '../../utils/globalStyle';

import { Appbar, Button, Menu, Divider, Provider, Tooltip, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/Colors';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const ItsMatchScreen = ({ navigation })  => {

  const [rotateLeft, setRotateLeft] = useState(false);
  const [rotateRight, setRotateRight] = useState(false);

  const rotateLeftHandler = () => {
    setRotateLeft(!rotateLeft);
    setRotateRight(false);
  };

  const rotateRightHandler = () => {
    setRotateRight(!rotateRight);
    setRotateLeft(false);
  };


  return (

    <Provider>
      <StatusBar backgroundColor='transparent' barStyle="light-content" ></StatusBar>
      <Appbar.Header mode='center-aligned' style={{ color: '#fff', backgroundColor: '#181A20', position: 'relative', top: 0 }}>
        <Appbar.BackAction icon="chevron-left" color="#fff" size={25}
        onPress={()=>navigation.goBack() }  />

        <Appbar.Content title={<View style={{ alignItems: 'center', justifyContent: 'center'}}>
          <Text style={[styles.nameTitle]}>Yankees Game</Text>
          <Text style={[styles.detailSubTitle]}>Saturday @ 10 p.m.</Text></View>} />
      </Appbar.Header>

      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.viewLeft}>
              <Image
                source={require('../../assets/test-user.png')} 
                style={styles.imageLeft}/>
              <TouchableOpacity style={styles.heart1}>
                 <Icon name="cards-heart" style={{fontSize: 25, color: '#000000'}}></Icon>
              </TouchableOpacity>
          </View>
       
          <View style={styles.viewRight}>
              <Image
                source={require('../../assets/test-user.png')}
                style={styles.imageRight}/>
              <TouchableOpacity style={styles.heart2}>
                 <Icon name="cards-heart" style={{fontSize: 25, color: '#000000'}}></Icon>
              </TouchableOpacity>
          </View>

        {/* <TouchableOpacity
          onPress={rotateLeftHandler}
          style={rotateLeft ? styles.cardWrapperLeftActive : styles.cardWrapperLeft}>
          <Image
            source={require('../../assets/card1.png')}
            style={rotateLeft ? styles.cardImageActive : styles.cardImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={rotateRightHandler}
          style={rotateRight ? styles.cardWrapperRightActive : styles.cardWrapperRight}>
          <Image
            source={require('../../assets/card2.png')}
            style={rotateRight ? styles.cardImageActive : styles.cardImage}
          />
        </TouchableOpacity> */}
        </View>

        <View style={{marginTop: 25}}>
          <Text style={styles.text1}>It’s a date!</Text>
          <Text style={styles.text2}>Start the conversation</Text>          
        </View>

        <View style={{ alignItems: 'center', marginVertical: 20 }}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button1}>
                  <Text style={[globalStyle.fRegular, { color: '#1E1F28', fontSize: 17.5, lineHeight: 24 }]}>Say hi</Text>
                </TouchableOpacity>
             
                <TouchableOpacity style={styles.button2}>
                  <Text style={[globalStyle.fRegular, { color: '#F7F7F7', fontSize: 17.5, lineHeight: 24 }]}>Keep looking</Text>
                </TouchableOpacity>
              </View>
        </View>


      </View>
    </Provider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    color: '#ffffff',
    width: '100%',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  nameTitle: {
    fontFamily: 'Superclarendon-Regular',
    color: '#D3C6A5',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center'
  },
  detailSubTitle: {
    fontFamily: 'Superclarendon-Regular',
    color: '#D3C6A5',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center'
  },
 

  cardContainer: {
    flexDirection: 'row',
    height: 320,
    // borderColor: 'red',
    // borderWidth: 1,
    position: 'relative',
    marginVertical: 25,
    // marginHorizontal: 25,
  },
  viewLeft: {
    height: 280,
    width: '54%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 1,
    // borderWidth: 2,
    // borderColor: 'green',
    alignItems: 'flex-end'
  },
  viewRight: {
    height: 280,
    width: '54%',
    position: 'absolute',
    right: 0,
    top: 0,
    // borderWidth: 2,
    // borderColor: 'blue',
    alignItems: 'flex-start'
  },

  imageLeft: {
    borderRadius: 14.8,
    transform: [{ rotate: '-10deg' }],
    height: 280,
    width: 190,
    resizeMode: 'cover',
  },
  imageRight: {
    borderRadius: 14.8,
    transform: [{ rotate: '10deg' }],
    height: 280,
    width: 190,
    resizeMode: 'cover'
  },

  heart1: {
    position: 'absolute',
    bottom: -25,
    left: 35,
    transform: [{ rotate: '-10deg' }],
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    borderRadius: 100,
    backgroundColor: '#D3C6A5',

    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {
      width: 10,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 15,
  },
  heart2: {
    position: 'absolute',
    top: -25,
    left: 10,
    transform: [{ rotate: '-10deg' }],
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    borderRadius: 100,
    backgroundColor: '#D3C6A5',

    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {
      width: 10,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 15,
  },

  text1: {
    fontFamily: 'Superclarendon-Regular',
    fontSize: 31,
    textAlign: 'center',
    color: '#D3C6A5',
    lineHeight: 37,
  },
  text2: {
    fontFamily: 'Superclarendon-Regular',
    fontSize: 16,
    color: '#ABB4BD',
    textAlign: 'center',
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 20
  },

  button1: {
    fontFamily: 'Superclarendon-Regular',
    backgroundColor: '#D3C6A5',
    color: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4.36,
    borderColor: '#000000',
    borderWidth: 1.09,
    height: 44,
    width: 200
  },
  button2: {
    fontFamily: 'Superclarendon-Regular',
    backgroundColor: '#1F222A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4.36,
    borderColor: '#FFFFFF',
    borderWidth: 1.09,
    height: 44,
    width: 200
  },

});

export default ItsMatchScreen;

