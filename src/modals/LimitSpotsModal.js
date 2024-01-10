import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Appbar } from 'react-native-paper';

import Modal from 'react-native-modal';

import { colors } from '../utils/Colors';
import globalStyle from '../utils/globalStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');


const LimitSpotsModal = ({ showModal_LimitSpots, setShowModal_LimitSpots }) => {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showModalView, setModalValue] = useState('modal1');


    const navigation = useNavigation();


    const handleSubmit = () => {
      setShowModal_LimitSpots(false)
    }

    const closeModal = () => {
      setShowModal_LimitSpots(false)
    }
    

    const noKeepClicked = () => {
      // navigation.navigate('Discover');
      setShowModal_LimitSpots(false)
    }

    const yesClicked = () => {
      setModalValue('modal2')
    }

    const yesClickedLimit = () => {
      setModalValue('modal1')
      setShowModal_LimitSpots(false)
    }


    const handleSelectOption = (option) => {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    };

    
    const spotOptions = [
      {
          id: 1,
          title: 'Misi'
      },
      {
          id: 2,
          title: 'Yankees Game'
      },
      {
          id: 3,
          title: 'Restaurants 1234...'
      },
      {
          id: 4,
          title: 'BarNamedThis'
      },
      {
          id: 5,
          title: 'Club123'
      }
    ]
   

    return (
        <>
        <Modal 
        // visible={showModal_LimitSpots} contentContainerStyle={styles.containerStyle}
        isVisible={showModal_LimitSpots}
        onBackdropPress={() => setShowModal_LimitSpots(false)}
        onBackButtonPress={() => setShowModal_LimitSpots(false)}
        swipeDirection="down"
        // onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}        
        >
          <View style={styles.modalContent}>
          <View style={{alignItems: 'center'}}>
                  <View style={styles.barIcon}></View>
                </View>
            <View style={styles.actionMain}>
              <TouchableOpacity style={styles.rightSection} onPress={closeModal}>
                 <Icon name="close" style={{fontSize: 20, color: '#ABB4BD'}}></Icon>
              </TouchableOpacity> 
            </View>

            { showModalView === 'modal1' ? (
            <View style={{width: '100%'}}>
              <View style={{height: 80, width: '100%', justifyContent: 'flex-end'}}>
                <Text style={styles.header}>
                  It’s time to select{"\n"}
                  new dating spots!
                </Text>
              </View>

              <View style={{marginHorizontal: 25}}>
                <Text style={styles.subtitle}>
                   Change it up this week by{"\n"}
                   selecting new spots & new matches
                </Text>
               
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginVertical : 30 }}>
                  <TouchableOpacity style={styles.btnLeft1} onPress={noKeepClicked}>
                    <Text style={[styles.btntext1, { color: '#1E1F28' }]}>No, keep last{"\n"}week’s spots</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnRight1} onPress={yesClicked}>
                    <Text style={[styles.btntext1, { color: '#FFFFFF' }]}>Yes, choose{"\n"}new ones!</Text>
                  </TouchableOpacity>
                </View>    
              </View>
            </View>
            )             
            : showModalView === 'modal2' ? (

            <View style={{width: '100%'}}>
              <View style={{height: 50, width: '100%', justifyContent: 'flex-end'}}>
                <Text style={styles.header}>Limit Reached!</Text>
              </View>

              <View style={{marginHorizontal: 25}}>
                <Text style={styles.subtitle}>You can only select 5 spots.</Text>
                <Text style={styles.subtitle}>To add this spot,&nbsp;
                  <Text style={{fontFamily: 'Superclarendon-Bold', textDecorationLine: 1,}}>deselect</Text>{"\n"}
                  <Text style={{fontFamily: 'Superclarendon-Bold'}}>&nbsp;one of your spots below</Text>
                </Text>
  
                <View style={{marginHorizontal: 25, marginTop: 22}}>
                  {spotOptions.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 8,
                      }}
                      onPress={() => handleSelectOption(item.id)}
                    >
                      <View
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: 100,
                          borderWidth: 2,
                          borderColor: selectedOptions.includes(item.id) ? '#000000' : '#000000',
                          backgroundColor: selectedOptions.includes(item.id) ? '#9E8954' : '#ffffff',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: 10,
                        }}
                      >
                        {selectedOptions.includes(item.id) && (
                          <Icon name="check" size={14} color="#000000" />
                        )}
                      </View>
                      <Text style={styles.radioText}>{item.title}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginVertical : 30 }}>
                  <TouchableOpacity style={styles.btnLeft} onPress={closeModal}>
                    <Text style={[styles.btntext, { color: '#1E1F28' }]}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnRight} onPress={yesClickedLimit}>
                    <Text style={[styles.btntext, { color: '#1E1F28' }]}>Yes, confirm</Text>
                  </TouchableOpacity>
                </View>    
              </View>
            </View>            
            ): <> </>
            }   
          </View>
        </Modal>
        </>
    )
}

export default LimitSpotsModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: colors.white,
    // paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 400,
    paddingBottom: 10,
  },
  barIcon: {
    marginTop: 10,
    width: 65,
    height: 6,
    backgroundColor: "#D9D9D9",
    borderRadius: 4,
  },
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent : 'center',
        borderRadius: 10,
        elevation: 10,
        shadowOpacity: .5,
        backgroundColor: colors.white,
        alignSelf: 'center',
        marginHorizontal: '6%'
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
    // marginTop:35,
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