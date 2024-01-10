import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Modal, Appbar } from 'react-native-paper'

import { colors } from '../utils/Colors';
import globalStyle from '../utils/globalStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel, {Pagination} from 'react-native-snap-carousel';
const { width, height } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';


import { storeData, getData, removeData, clearData } from '../services/storageService';


const WelcomeModal = ({ showModal_Welcome, setShowModal_Welcome }) => {
  
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);    
  const isCarousel = useRef(null);


    const closeModal = () => {
      setShowModal_Welcome(false)
      setWelcomeStoreData();
    }
    

    function handleNavigation() {
        navigation.navigate('SpotsScreen');
        setShowModal_Welcome(false)
        setWelcomeStoreData();
    }



    const setWelcomeStoreData = async () => {
        await storeData('setWelcome', {'setWelcome': true});
    };
  



    const data = [
      {
          id: 1,
          title: 'Step 1',
          image: require('../assets/homeWel1.png'),
          content: 'You pick your top date spots',
      },
      {
          id: 2,
          title: 'Step 2',
          image: require('../assets/homeWel2.png'),
          content: 'We show you profiles with common date spots & interests',
      },
      {
          id: 3,
          title: 'Step 3',
          image: require('../assets/homeWel3.png'),
          content: 'Match and head out to your pre-set date spot!',
      }
    ];




  const Card = ({ item }) => {
      return (
          <View style={styles.card}>
              <View style={{width: '100%', alignItems: 'center'}}>
                  <Image source={item.image} />
              </View>
              <Text style={styles.cardtitle}>{item.title}</Text> 
              <Text style={styles.cardcontent}> {item.content} </Text>
          </View>
      )
  }

    return (
        <Modal visible={showModal_Welcome} contentContainerStyle={styles.containerStyle}>
            <View style={styles.actionMain}>
              <TouchableOpacity style={styles.rightSection} onPress={closeModal}>
                 <Icon name="close" style={{fontSize: 20, color: '#ABB4BD'}}></Icon>
              </TouchableOpacity> 
            </View>
            <View style={{height: 40, width: '100%', justifyContent: 'flex-end'}}>
                <Text style={styles.title}>Welcome to Goza!</Text>
            </View>
            <Text style={styles.subtitle}>
                Here’s how it works:
            </Text>

            <View style={{
                    // borderColor: 'green',
                    // borderWidth: 1,
                    height: 240,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // borderColor: 'red',
                    // borderWidth: 1               
                  }}>

            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                tappableDots={true}
                vertical={false}
                inactiveDotOpacity={1}
                inactiveDotScale={1}
                dotContainerStyle={{
                    height: 12,
                    width: 12,
                    marginHorizontal: 5,
                    marginVertical: 0,
                    borderRadius: 100,
                }}
                dotStyle={{
                    width: 12,
                    height: 12,
                    borderRadius: 100,
                    backgroundColor: '#121212',
                }}
                inactiveDotStyle={{
                  width: 12,
                  height: 12,
                  borderRadius: 100,
                  backgroundColor: 'transparent',
                  borderColor: '#C0C0C0',
                  borderWidth: 1,             
                }}
            />

            <Carousel
                ref={isCarousel}
                data={data}
                renderItem={Card}
                sliderWidth={width - 60}    
                itemWidth={width - 60}               
                snapToInterval={200}
                snapToAlignment="center"
                layout="default"
                loop={false}
                onSnapToItem={index => setIndex(index)}

                inactiveSlideOpacity={0.2}                
                inactiveSlideScale={1}
          
                containerCustomStyle={{
                    marginHorizontal: 0,
                    marginVertical: 0,
                }}
            />

            </View>
            <TouchableOpacity
                onPress={handleNavigation}
                style={[styles.btn, {marginTop: 20}]}>
                <Text style={styles.btntext}>Choose My Spots</Text>
            </TouchableOpacity>
        </Modal>
    )
}

export default WelcomeModal;

const styles = StyleSheet.create({
    containerStyle: {
        // width: 330,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent : 'center',
        borderRadius: 10,
        elevation: 10,
        shadowOpacity: .5,
        backgroundColor: colors.white,
        alignSelf: 'center',
        paddingVertical: 30,
        marginHorizontal: 20
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
        color: '#1E1F28',
        fontSize: 20,
        lineHeight: 25,
        fontFamily: 'Superclarendon-Bold',
        textAlign: 'center'
    },
    pragraph: {
        color: '#6D6D6D',
        fontSize: 15,
        lineHeight: 22,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 0
    },
    subtitle: {
        color: colors.black,
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center',
        marginTop: 10
    },
    card: {
        // width: 330,
        height: 170,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:10,
        gap: 5
        
    },
    cardtitle: {
        color: '#343131',
        fontSize: 18,
        lineHeight: 23,
        fontFamily: 'Superclarendon-Bold',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
        marginTop: 15,
        marginBottom: 8,
    },

    cardcontent: {
        color: '#343131',
        fontSize: 16,
        lineHeight: 22,
        paddingHorizontal: '16%',
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center',
        // marginBottom: 20,
    },
    btn: {
        width: '80%',
        height: 55,
        backgroundColor: '#D3C6A5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        // marginTop:35,
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
});