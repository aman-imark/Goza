import { StyleSheet, Text, View,Dimensions, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { Modal, Appbar } from 'react-native-paper'

import { TouchableOpacity } from 'react-native';
import { colors } from '../utils/Colors';
import globalStyle from '../utils/globalStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('screen');


const ReportUserModal = ({ showModal_Report, setShowModal_Report }) => {

    const [selectedButton, setSelectedButton] = useState(null);

    const [showModalView, setModalValue] = useState('modal1');

    const [text, setText] = useState('');

    const handleButtonPress = (buttonId) => {
        setSelectedButton(buttonId);
        setTimeout(() => {
          setModalValue('modal2');
      }, 500);
    };

    const backModalView = () => {
        setModalValue('modal1');
    }

    const handleSubmit = () => {
        setModalValue('modal3');
    }

    const closeModal = () => {
        setShowModal_Report(false)
    }
    
    useEffect(() => {
      setModalValue('modal1');
    }, []);
  


    const ReasonData =
    [
      { id: '1', reason: 'Not interested in this user ' },
      { id: '2', reason: 'This profile is a scam, fake, or spam' },
      { id: '3', reason: 'Content is inappropriate' },
      { id: '4', reason: 'Underage or minor' },
      { id: '5', reason: 'Someone is in danger' }     
    ];
  


    return (
        <>
        <Modal visible={showModal_Report} contentContainerStyle={styles.containerStyle} animationType="slide">
            <View style={styles.actionMain}>

            {showModalView === 'modal2' ? (
              <TouchableOpacity style={styles.leftSection} onPress={backModalView}>
                 <Icon name="arrow-back" style={{fontSize: 20, color: '#000000'}}></Icon>
              </TouchableOpacity>
              ): <TouchableOpacity></TouchableOpacity>
            }

              <TouchableOpacity style={styles.rightSection} onPress={closeModal}>
                 <Icon name="close" style={{fontSize: 20, color: '#ABB4BD'}}></Icon>
              </TouchableOpacity> 
            </View>

            {showModalView === 'modal1' ? (
            <View style={{marginTop: '15%'}}>
              <View>
                <Text style={styles.header}>Report User</Text>
              </View> 
              <View style={{width: '75%', marginBottom: 40}}>
                <Text style={styles.subtitle}>We keep your report & information private.</Text>
                <View style={{gap: 10}}>
                 {ReasonData.map((item) => (
                  <TouchableOpacity key={item.id} onPress={() => handleButtonPress(item.id)} style={[styles.buttonSelected, { backgroundColor: selectedButton === item.id ? '#ABB4BD' : '#F7F7F7'}]}>
                    <Text numberOfLines={2} style={[styles.buttonSelectedText, { color: selectedButton === item.id ? '#1E1F28' : '#6D6D6D'}]}>{item.reason}</Text>
                  </TouchableOpacity>
                 ))}
                </View>
              </View>
            </View> 
            )
            :showModalView === 'modal2' ? (

            <View style={{marginTop: '15%', width: '100%', alignItems: 'center'}}>
              <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <View>
                <Text style={styles.header}>Report User</Text>
              </View> 
              <View style={{width: '82%'}}>
                <Text style={styles.subtitle}>We keep your report & information private.</Text>
                <Text style={[styles.subtitle, {textAlign: 'left'}]}>Please provide more details about this issue:</Text>
                <TextInput style={styles.reasonInput}
                      multiline numberOfLines={4} onChangeText={setText} value={text} />
              </View>
              <TouchableOpacity onPress={handleSubmit} style={styles.btn}>            
                <Text style={styles.btntext}>Submit Report</Text>
              </TouchableOpacity>

              </KeyboardAvoidingView> 
            </View> 
            )

            :showModalView === 'modal3' ? (
            <View style={{marginTop: '15%', width: '100%', alignItems: 'center'}}>
              <View>
                <Text style={styles.header}>Report Submitted</Text>
              </View>
              <View style={{width: '90%', marginBottom: 25}}>
                <Text style={styles.subtitle2}>Your report has been submitted</Text>
                <Text style={styles.subtitle2}>We will contact you if further information or action is necessary</Text>
              </View>
            </View>
            ): <> </>
            }   
        </Modal>
        </>
    )
}

export default ReportUserModal;

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
    left: 10,
    right: 10,
    top: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    zIndex: 100,
  },
  leftSection: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36 ,
    height: 36,
    borderRadius: 100,
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
        color: '#ABB4BD',
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 25,
    },
    subtitle2: {
        color: '#6D6D6D',
        fontSize: 15,
        lineHeight: 19,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },

    buttonSelected: {
       width: '100%',
       //  height: 45,
       borderColor: '#ABB4BD',
       borderWidth: 1,
       borderRadius: 10,
       padding: 12,
       justifyContent: 'center'
    },
    buttonSelectedText: {
        fontSize: 14,
        // lineHeight: 21,
        fontFamily: 'Superclarendon-Regular',
     },
    reasonInput: {
        fontSize: 14,
        minHeight: 72,
        backgroundColor: '#F7F7F7',
        color: '#000000',
        borderRadius: 18,     
        borderColor: '#ABB4BD',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 15,
        fontFamily: 'Superclarendon-Regular',
    },
 
    btn: {
        width: 180,
        height: 46,
        backgroundColor: '#000000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 25,
        alignSelf:'center'        
    },
    btntext: {
        color: '#F7F7F7',
        fontSize: 16,
         lineHeight: 24,
        fontFamily: 'Superclarendon-Regular',
    },

})