import { StyleSheet, Text, TouchableOpacity, Dimensions, View, 
    ScrollView, TextInput, Image, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors } from '../utils/Colors'
import { Provider, Portal, Divider, Modal as ModalPaper } from 'react-native-paper';

import Modal from "react-native-modal";

import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const { width, height } = Dimensions.get('screen');

const CompleteProfileModal = ({ }) => {
  

    const [cpModal1, setCpModal1] = useState(false);
    const [cpModal2, setCpModal2] = useState(false);
    const [cpModal3, setCpModal3] = useState(false);
    const [showModal_AddInterests, setShowModal_AddInterests] = useState(false);


    const interestsList = [
        { id: '1', name: 'Travel' },
        { id: '2', name: 'Music' },
        { id: '3', name: 'Outdoors' },
        { id: '4', name: 'Books' },
        { id: '5', name: 'Beer' },
        { id: '6', name: 'Dogs' },
        { id: '7', name: 'Movies' },
        { id: '8', name: 'Gym' },
    ]

    const addinterestsList = [
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

    const politicstsList = [
        { id: '1', name: ' Liberal' },
        { id: '2', name: 'Conservative' },
        { id: '3', name: 'Not Political' },
        { id: '4', name: 'Moderate' },
        { id: '5', name: 'Other' },
        { id: '6', name: 'Prefer not to say' },
    ]

    const education = [
        { id: '1', name: ' College' },
        { id: '2', name: 'Postgrad' },
        { id: '4', name: 'High School' },
        { id: '5', name: 'Prefer not to say' },
    ]


    useEffect( () =>    {
        const timeout = setTimeout(() => {
            setCpModal1(true);
        }, 8000);
        return () => clearTimeout(timeout);
    }, []);

 



    return (
        <>
          <CompleteProfileModal1 cpModal1={cpModal1} setCpModal1={setCpModal1} 
                                 cpModal2={cpModal2} setCpModal2={setCpModal2} 
                                 setShowModal_AddInterests={setShowModal_AddInterests} 
                                 interestsList={interestsList} politicstsList={politicstsList} education={education} />
          
          <CompleteProfileModal2 cpModal2={cpModal2} setCpModal2={setCpModal2} cpModal3={cpModal3} setCpModal3={setCpModal3} />
          
          <CompleteProfileModal3 cpModal3={cpModal3} setCpModal3={setCpModal3} cpModal2={cpModal2} setCpModal1={setCpModal1} />
          
          <AddInterestsModal showModal_AddInterests={showModal_AddInterests} setShowModal_AddInterests={setShowModal_AddInterests} 
                             setCpModal1={setCpModal1} addinterestsList={addinterestsList} ></AddInterestsModal>
        </>
    )
}


export default CompleteProfileModal;

    const CompleteProfileModal1 = ({
        interestsList, politicstsList, education, 
        cpModal1,
        setCpModal1,
        setCpModal2,
        setShowModal_AddInterests
    }) => {

      const [checked, setChecked] = React.useState(false);
      const [selectedInterest, setSelectedInterest] = useState([]);

      const handleInterestPress = (interest) => {
          if (selectedInterest.includes(interest)) {
              setSelectedInterest(selectedInterest.filter((item) => item !== interest));
          } else {
              setSelectedInterest([...selectedInterest, interest]);
          }
      };

      const handleNext1 = () => {
        setCpModal1(false); 
        setCpModal2(true);
        console.log(setCpModal2())
        
      };
    

        return (
            // <Modal visible={cpModal1} 
            // contentContainerStyle={styles.containerStyle}>
            <Modal
            isVisible={cpModal1}
            onBackdropPress={() => setCpModal1(false)}
            onBackButtonPress={() => setCpModal1(false)}
            swipeDirection="down"
            // onSwipeComplete={toggleModal}
            animationIn="bounceInUp"
            animationOut="bounceOutDown"
            animationInTiming={900}
            animationOutTiming={500}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={500}
            style={styles.modal}>

                <View style={styles.modalContent}>
                    <View style={{alignItems: 'center'}}>
                      <View style={styles.barIcon}></View>
                    </View>
        
                <View style={{width: '100%', paddingHorizontal: 15, paddingTop: 15}}>
                    <Text style={styles.title}> Complete your profile </Text>
                    <Divider style={{ marginTop: 10, color: "#ABB4BD" }} />

                    <View style={styles.section}>
                        <View style={styles.headrow}>
                            <Text style={styles.sectitle}> Interests: </Text>
                            <Text style={[styles.textside, {fontStyle: 'italic'}]}> Select at least 2 </Text>
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
                            <TouchableOpacity mode='outlined' 
                            onPress={() => { setCpModal1(false), setShowModal_AddInterests(true) }}                         
                            style={[{ backgroundColor : '#F5F5F5', minHeight: 32, marginVertical: 4, marginHorizontal: '.8%',
                            alignItem: 'center', justifyContent: 'center', paddingHorizontal: 8, borderRadius: 4, borderWidth: 1, borderColor: '#ABB4BD'}]}>
                                <Text style={{ color: '#93979B'}}>+ Add </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Divider style={{ marginTop: 20, color: "#ABB4BD" }} />
    
                    <View style={styles.section}>
                        <View style={styles.headrow}>
                            <Text style={styles.sectitle}> Politics: </Text>
                            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'flex-end' }}>                  
                           
                            <CheckBox                         
                            style={{height: 14, width: 14, marginRight: 5, alignItems: 'center', justifyContent: 'center'}}
                            boxType='square'
                            onCheckColor="black"
                            onTintColor="black"
                            animationDuration={0.2}
                            lineWidth={1.3}  
                            />
 
                            <Text style={styles.textside}> Hide from profile </Text>
                            </View>
                        </View>
                        <View style={styles.secbody}>
                            {
                                politicstsList.map((item, i) =>
                                    <TouchableOpacity key={i} mode='outlined' style={[styles.chip, { backgroundColor: selectedInterest && !selectedInterest.includes(item.name) ? colors.white : '#1E1F28' }]}
                                        onPress={() => handleInterestPress(item.name)} >
                                        <Text style={[styles.chipText, { color: selectedInterest && !selectedInterest.includes(item.name) ? colors.black : colors.white }]}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                        </View>
                    </View>
                    <Divider style={{ marginTop: 20, color: "#ABB4BD" }} />
    
                    <View style={styles.section}>
                        <View style={styles.headrow}>
                            <Text style={styles.sectitle}>Highest Education Level:</Text>
                        </View>
                        <View style={styles.secbody}>
                            {
                                education.map((item, i) =>
                                    <TouchableOpacity key={i} mode='outlined' style={[styles.chip, { backgroundColor: selectedInterest && !selectedInterest.includes(item.name) ? colors.white : '#1E1F28' }]}
                                        onPress={() => handleInterestPress(item.name)} >
                                        <Text style={[styles.chipText, { color: selectedInterest && !selectedInterest.includes(item.name) ? colors.black : colors.white }]}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                        </View>
                    </View>
                    <View style={{marginTop: 10}}>
                    <TouchableOpacity onPress={() => { handleNext1() }} style={styles.btn}>
                        <Text style={styles.btnText}>Next</Text>
                    </TouchableOpacity>
                    </View>  

                </View> 
                </View>
            </Modal>
        )
    }


    const CompleteProfileModal2 = ({
        cpModal2,
        setCpModal2,
        cpModal3,
        setCpModal3
    }) => {

        const handleSaveChanges2 = () => {
            setCpModal2(false);
            setCpModal3(true);
        };


        return (
            <Modal 
            // visible={cpModal2} contentContainerStyle={styles.containerStyle}>
            isVisible={cpModal2}
            onBackdropPress={() => setCpModal2(false)}
            onBackButtonPress={() => setCpModal2(false)}
            swipeDirection="down"
            // onSwipeComplete={toggleModal}
            animationIn="bounceInUp"
            animationOut="bounceOutDown"
            animationInTiming={900}
            animationOutTiming={500}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={500}
            style={styles.modal}>
          
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.modalContent}>
                <View style={{alignItems: 'center'}}>
                  <View style={styles.barIcon}></View>
                </View>
            <View  style={{width: '100%', paddingHorizontal: 15, paddingTop: 15}}> 
                <View style={styles.card}>
                    <Text style={styles.title}> Complete your profile </Text>
                    <Divider style={{ marginTop: 10, color: "#ABB4BD"  }} />
    
                    <View style={styles.section}>
                        <View style={styles.titlebox}>
                            <Text style={styles.inptitle}>About Me:</Text>
                        </View>                    
                        <View style={[styles.inputContainer, { height: 90, borderRadius: 10 }]}>
                            <TextInput
                                style={[styles.inputField, { textAlignVertical: 'top' }]}
                                placeholder={'write a short intro, including hobbies, interests, dreams, thing you want to do, or anything!'}
                                placeholderTextColor={colors.txtgrey}
                                multiline={true}
                            // onChangeText={newText => setCardName(newText)}
                            // value={cardName}
                            />
                        </View>
                       
                        <Text style={styles.limittext}>
                            500 character limit
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.titlebox}>
                            <Text style={styles.inptitle}>
                              <Text style={[styles.inptitle, {textDecorationLine: 'underline'}]}>Prompt 1:</Text> The two most important things you should know about me are
                            </Text>
                        </View>
                        <View style={styles.backcard}>
                            <View style={[styles.inputContainer, { height: 65, borderRadius: 10 }]}>
                                <TextInput
                                    style={[styles.inputField, { textAlignVertical: 'top' }]}
                                    placeholder={'type your answer...'}
                                    placeholderTextColor={colors.txtgrey}    
                                    multiline={true}
                                // onChangeText={newText => setCardName(newText)}
                                // value={cardName}
                                />
    
                            </View>
                        </View>
                        <Text style={styles.limittext}>
                            200 character limit
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.titlebox}>
                            <Text style={styles.inptitle}>
                             <Text style={[styles.inptitle, {textDecorationLine: 'underline'}]}>Prompt 2:</Text> Let’s talk about...
                            </Text>
                        </View>
                        <View style={styles.backcard}>
                            <View style={[styles.inputContainer, { height: 65, borderRadius: 10 }]}>
                                <TextInput
                                    style={[styles.inputField, { textAlignVertical: 'top' }]}
                                    placeholder={'type your answer...'}
                                    placeholderTextColor={colors.txtgrey}
    
                                    multiline={true}
                                // onChangeText={newText => setCardName(newText)}
                                // value={cardName}
                                />
                            </View>
                        </View>
                        <Text style={styles.limittext}>
                            200 character limit
                        </Text>
                    </View>
                    <View style={{marginTop: 10}}>
                    <TouchableOpacity style={styles.btn}  onPress={() => { handleSaveChanges2() }} >
                        <Text style={styles.btnText}>Save Changes</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>
            </KeyboardAvoidingView>
            </Modal>
        )
    }


    const CompleteProfileModal3 = ({
        cpModal3,
        setCpModal3,
        cpModal1,
        setCpModal1
    }) => {

        const handleSave3 = () => {
            setCpModal3(false);
            setCpModal1(false)
        };

        return (
            <Modal 
            // visible={cpModal3} contentContainerStyle={styles.containerStyle}>
            isVisible={cpModal3}
            onBackdropPress={() => setCpModal3(false)}
            onBackButtonPress={() => setCpModal3(false)}
            swipeDirection="down"
            // onSwipeComplete={toggleModal}
            animationIn="bounceInUp"
            animationOut="bounceOutDown"
            animationInTiming={900}
            animationOutTiming={500}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={500}
            style={styles.modal}>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.modalContent}>
                <View style={{alignItems: 'center'}}>
                  <View style={styles.barIcon}></View>
                </View>
            <View  style={{width: '100%', paddingHorizontal: 15, paddingTop: 15}}> 
                <View style={styles.card}>
                    <Text style={styles.title}> Link your social media </Text>
                    <Divider style={{ marginTop: 10, color: "#ABB4BD"  }} />
                 
                    <View style={styles.section}>
                        <View style={{width: width - 70, flexDirection: 'row', alignItems :'center', marginBottom: 10}}>
                            <Image style={{ height: 35, width: 35, marginRight: 6 }} resizeMode={'cover'} source={require('../assets/icons/Instagram.png')}></Image>
                            <Text style={styles.inptitle}>Instagram</Text>
                        </View>
                        <View style={{ borderColor: '#2A2C36', borderWidth: 1,
                           borderRadius: 3, paddingHorizontal: 10, paddingVertical: 10, marginHorizontal: 16}}>
                           <TextInput
                           placeholder='Insert URL'
                           placeholderTextColor={'#ABB4BD'}></TextInput>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <View style={{width: width - 70, flexDirection: 'row', alignItems :'center', marginBottom: 10}}>
                            <Image style={{ height: 35, width: 35, marginRight: 6 }} resizeMode={'cover'} source={require('../assets/icons/Facebook.png')}></Image>
                            <Text style={styles.inptitle}>Facebook</Text>
                        </View>
                        <View style={{ borderColor: '#2A2C36', borderWidth: 1,
                           borderRadius: 3, paddingHorizontal: 10, paddingVertical: 10, marginHorizontal: 16}}>
                           <TextInput
                           placeholder='Insert URL'
                           placeholderTextColor={'#ABB4BD'}></TextInput>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={{width: width - 70, flexDirection: 'row', alignItems :'center', marginBottom: 10}}>
                            <Image style={{ height: 35, width: 35, marginRight: 6 }} resizeMode={'cover'} source={require('../assets/icons/LinkedIn.png')}></Image>
                            <Text style={styles.inptitle}>Linkedin</Text>
                        </View>
                        <View style={{ borderColor: '#2A2C36', borderWidth: 1,
                           borderRadius: 3, paddingHorizontal: 10, paddingVertical: 10, marginHorizontal: 16}}>
                           <TextInput
                           placeholder='Insert URL'
                           placeholderTextColor={'#ABB4BD'}></TextInput>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={{width: width - 70, flexDirection: 'row', alignItems :'center', marginBottom: 10}}>
                            <Image style={{ height: 25, width: 25, marginRight: 6 }} resizeMode={'cover'} source={require('../assets/icons/tik-tok.png')}></Image>
                            <Text style={styles.inptitle}>Tik Tok</Text>
                        </View>
                        <View style={{ borderColor: '#2A2C36', borderWidth: 1,
                           borderRadius: 3, paddingHorizontal: 10, paddingVertical: 10, marginHorizontal: 16}}>
                           <TextInput
                           placeholder='Insert URL'
                           placeholderTextColor={'#ABB4BD'}></TextInput>
                        </View>
                        <View style={{height: 15}}></View>
                    </View>

                    <TouchableOpacity style={styles.btn}  onPress={() => { handleSave3() }} >
                        <Text style={styles.btnText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            </KeyboardAvoidingView>
            </Modal>
        )
    }


    const AddInterestsModal = ({
        showModal_AddInterests,
        setShowModal_AddInterests,
        addinterestsList,
        setCpModal1
    }) => {

        const [checked, setChecked] = React.useState(false);
        const [selectedInterest, setSelectedInterest] = useState([]);
  
        const handleInterestPress = (interest) => {
            if (selectedInterest.includes(interest)) {
                setSelectedInterest(selectedInterest.filter((item) => item !== interest));
            } else {
                setSelectedInterest([...selectedInterest, interest]);
            }
        };

        

        return (
            <ModalPaper visible={showModal_AddInterests} contentContainerStyle={styles.containerStyle}
            animationType="fade" transparent={true}>
                <View style={styles.actionMain}>
                  <TouchableOpacity style={styles.rightSection} onPress={() => { setCpModal1(true), setShowModal_AddInterests(false) }} >
                     <Icon name="close" style={{fontSize: 20, color: '#ABB4BD'}}></Icon>
                  </TouchableOpacity> 
                </View>
    
                <View style={{width: '100%'}}>
                  <View style={{height: 70, width: '100%', justifyContent: 'flex-end'}}>
                    <Text style={styles.header}>Add Interests</Text>
                  </View>
                
                  <View style={styles.secbody2}>
                      {
                          addinterestsList.map((item, i) =>
                              <TouchableOpacity key={i} mode='outlined' style={[styles.chip, { backgroundColor: selectedInterest && !selectedInterest.includes(item.name) ? colors.white : '#1E1F28' }]}
                                  onPress={() => handleInterestPress(item.name)} >
                                  <Text style={[styles.chipText, { color: selectedInterest && !selectedInterest.includes(item.name) ? colors.black : colors.white }]}>
                                      {item.name}
                                  </Text>
                              </TouchableOpacity>
                      )}
                  </View>
                  <TouchableOpacity onPress={() => { setCpModal1(true), setShowModal_AddInterests(false) }} style={styles.btn}>
                      <Text style={styles.btnText}>Add Interests</Text>
                  </TouchableOpacity> 
                </View>  
            </ModalPaper>
        )
    }




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
        justifyContent: "flex-end",
        margin: 0,
        // flex: 1,
        width: '92%',

        // paddingVertical: 22,
        // paddingHorizontal: 15,
        // marginHorizontal: 15,

        alignSelf: 'center',
        borderRadius: 10,
        elevation: 10,
        shadowOpacity: .5,
        backgroundColor: colors.white,
        // borderColor: 'red',
        // borderWidth: 1,
        // height: 'auto'
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
    card: {
        // width: '100%',
        // borderWidth: 1,
        // borderColor: 'red'
        height: 'auto',
    },
    title: {
        color: '#6D6D6D',
        fontSize: 18,
        lineHeight: 21,
        fontFamily: 'Superclarendon-Bold',
        textAlign: 'center',
        marginVertical: 8
    },
    title2: {
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
    section: {
        width: '100%',
        marginTop: 20,
    },
    headrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    sectitle: {
        color: colors.black,
        fontSize: 16.5,
        lineHeight: 20,
        fontFamily: 'Superclarendon-Bold',

    },
    textside: {
        fontSize: 13,
        color: "#93979B",
        fontFamily: 'Superclarendon-Regular',
        justifyContent: 'center',
    },
    titlebox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10
    },
    inptitle: {
        color: colors.AppDefaultColor,
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'Superclarendon-Bold',
    },
    inputContainer: {
        // backgroundColor: colors.textdefult,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#1E1F28',
        height: 55,
        borderColor: '#2A2C36',
        paddingVertical: 5
    },
    inputField: {
        paddingLeft: 15,
        borderRadius: 15,
        color: colors.black,
        // height: '100%',
        fontSize: 14,
        fontFamily: 'Superclarendon-Regular',
    },
    addtext: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Superclarendon-Bold',
        color: '#6D6D6D',
        alignSelf: 'flex-end'
    },
    limittext: {
        fontSize: 11.5,
        color: '#6D6D6D',
        fontFamily: 'Superclarendon-Regular',
        alignSelf: 'flex-end',
        marginTop: 6
    },
      secbody: {
          flexDirection: 'row',
          flexWrap: 'wrap',     
        //   paddingHorizontal: 20, 
          paddingTop: 10
      },
      secbody2: {
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
          width:  '58%',
          maxWidth: 200,
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