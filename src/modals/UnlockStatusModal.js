import { StyleSheet, Text, View,Dimensions, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { Modal, Appbar } from 'react-native-paper'

import Carousel, {Pagination} from 'react-native-snap-carousel'

import { TouchableOpacity } from 'react-native'
import { colors } from '../utils/Colors'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import globalStyle from '../utils/globalStyle'

const { width, height } = Dimensions.get('screen');


const UnlockStatusModal = ({ showModal_UnlockStatus, setShowModal_UnlockStatus }) => {
    
    const handleSubmit = () => {
        setShowModal_UnlockStatus(false)
    }

    const closeModal = () => {
        setShowModal_UnlockStatus(false)
    }
    
  
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);

    const images = [
        { id: 1, source: require('../assets/like1.png') },
        { id: 2, source: require('../assets/like2.png') },
        { id: 3, source: require('../assets/like3.png') },
      ];


    const InterestList =
    [
      { id: '1', name: 'Travel' },
      { id: '2', name: 'Music' },
      { id: '3', name: 'Outdoors' },
      { id: '4', name: 'Books' },
      { id: '5', name: 'Beer' },
      { id: '6', name: 'Dogs' },
      { id: '7', name: 'Movies' },
      { id: '8', name: 'Gym' }
    ];
  


    

    const data = [
        {
            id: 1,
            title: '12',
            subtitle: 'months',
            content: '$7.49/mo',
            discount: 'Save 36%'
        },
        {
            id: 2,
            title: '6',
            subtitle: 'months',
            content: '$8.33/mo',
            discount: 'Save 36%'
        },
        {
            id: 3,
            title: '1',
            subtitle: 'months',
            content: '$9.99/mo',
            discount: 'Save 36%'
        }
    ]
    const Card = ({ item }) => {
        return (
            <View style={styles.card}>
                <Text style={styles.cardtitle}>{item.title}</Text>
                <Text style={styles.cardsubtitle}>{item.subtitle}</Text>
                <Text style={styles.cardcontent}>{item.content}</Text>
                <Text style={styles.carddiscount}>{item.discount}</Text>
            </View>
        )
    }








    return (
        <>
        <Modal visible={showModal_UnlockStatus} contentContainerStyle={styles.containerStyle}>
            <View style={styles.actionMain}>
              <TouchableOpacity style={styles.rightSection} onPress={closeModal}>
                 <Icon name="close" style={{fontSize: 20, color: '#ABB4BD'}}></Icon>
              </TouchableOpacity> 
            </View>

            <View style={{height: 20}}></View>
            {/* <View style={{height: 80, width: '100%', justifyContent: 'flex-end'}}>
              <Text style={styles.header}>Display: 'none'</Text>
            </View> */}
            <View style={[globalStyle.center, {marginTop: 8, marginBottom: 8}]}>
              <Image source={require('../assets/unlock_heart.png')}  style={{height:74, resizeMode: 'contain' }} />
            </View>

            <Text style={styles.title}>Unlock VIP Status</Text>
            <Text style={styles.subtitle}>Unlimited likes each week and no ads</Text>

            <View style={{
                    // borderColor: 'green',
                    // borderWidth: 1,
                    height: 220,
                    justifyContent: 'center',
                    alignItems: 'center' 
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
                    borderWidth: 1,
                    borderColor: 'red',
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
                sliderWidth={330}    
                itemWidth={110}         
                snapToInterval={200}
                snapToAlignment="center"
                layout="default"
                loop={true}
                onSnapToItem={index => setIndex(index)}

                inactiveSlideOpacity={0.2}                
                inactiveSlideScale={1}
          
                containerCustomStyle={{
                    marginHorizontal: 0,
                    marginVertical: 0,
                    backgroundColor:'#F7F7F7',
                    // backgroundColor:'red',
                    borderWidth: 1,
                    borderColor: '#DEDEDE',
                    // borderColor: 'blue',
                    borderRadius: 10,   
                }}
            />

            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.btn}>            
               <Text style={styles.btntext}>GET VIP STATUS</Text>
            </TouchableOpacity>
        </Modal>
        </>
    )
}

export default UnlockStatusModal;

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
    fontSize: 18,
    lineHeight: 23,
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
        color: '#000000',
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 0,
        marginHorizontal: 30
    },
    card: {
        width: 110,
        height: 145,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:10,
        gap: 4
    },
    cardtitle: {
        color: colors.black,
        fontSize: 25,
        lineHeight: 32,
        fontFamily: 'Superclarendon-Bold',
    },
    cardsubtitle: {
        color: colors.black,
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'Superclarendon-Bold',
    },
    cardcontent: {
        color: colors.black,
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'Superclarendon-Bold',
    },
    carddiscount: {
        color: colors.black,
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Superclarendon-Bold',
    },


    btn: {
        width: '80%',
        height: 55,
        backgroundColor: '#D3C6A5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
        alignSelf:'center'        
    },
    btntext: {
        color: colors.black,
        fontSize: 16,
        fontStyle: 'normal',
         lineHeight: 25,
        fontFamily: 'Superclarendon-Bold',
    },

})