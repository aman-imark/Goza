import React, {useRef, useState, useEffect} from 'react';
import { Appbar, Button, IconButton, Provider } from 'react-native-paper';
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity,
    StatusBar, Image, TextInput, ScrollView, StyleSheet } from 'react-native'
    import {
        responsiveHeight,
        responsiveWidth,
        responsiveFontSize
    } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Fontisto';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { colors } from '../../utils/Colors';
import ReportUserModal from '../../modals/ReportUserModal';


const { width, height } = Dimensions.get('screen');


const ChatScreen = ({ navigation }) => {

    const [showModal_Report, setShowModal_Report] = useState(false);

    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);
  
    const clickUnmatchMenu = () => {
      setVisible(false);
    };
  
    const clickReportMenu = () => {
      setVisible(false);
      setShowModal_Report(true);
    };
  const [screen, setScreen] = useState('Massages');

  return (
        <View style={styles.container}>
            <StatusBar backgroundColor='transparent' barStyle="dark-content" ></StatusBar>
            <Appbar.Header mode='center-aligned' style={{ backgroundColor: '#181A20', position: 'relative', top: 0 }}>
              <Appbar.BackAction icon="chevron-left" color="#fff" size={25} onPress={() =>  { navigation.goBack()}} />
              <Appbar.Content title={<View style={{alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[styles.nameTitle]}>Michael Q.</Text>
                <Text style={[styles.detailSubTitle]}>Brooklyn, NY
                <Icon name='circle-small' size={14} color={'#ABB4BD'} /> 27 
                <Icon name='circle-small' size={14} color={'#ABB4BD'} /> 5’ 6”
                </Text>                
                </View>} />
              <Menu visible={visible}
                anchor={<Appbar.Action icon="dots-horizontal" size={25} color="#fff" onPress={showMenu}/>}
                style={styles.anchorMenu}  onRequestClose={hideMenu}>      
                  <MenuItem onPress={clickUnmatchMenu} children={<Text style={[styles.nameTitleMenu]}>Unmatch</Text>}></MenuItem>
                  <View style={{borderColor: '#ABB4BD', borderWidth: 0.8, marginHorizontal: 10, opacity: 0.7}}></View>
                  {/* <MenuDivider style={{marginHorizontal: 10}} color="#ABB4BD"/> */}
                  <MenuItem onPress={clickReportMenu} children={<Text style={[styles.nameTitleMenu]}>Report</Text>}></MenuItem>      
              </Menu>    
            </Appbar.Header>

            <View style={styles.main}>
                <View style={styles.segmentRow}>
                    <TouchableOpacity onPress={() => setScreen('Massages')} style={[styles.segmentBtn, { borderBottomColor: screen === 'Massages' ? colors.textdefult : colors.AppDefaultColor, }]}>
                        <Text style={[styles.segmentTitle, { color: screen === 'Massages' ? '#fff' : '#858585' }]}>
                            Messages
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setScreen('Profile')} style={[styles.segmentBtn, { borderBottomColor: screen === 'Profile' ? colors.textdefult : colors.AppDefaultColor, }]}>
                        <Text style={[styles.segmentTitle, { color: screen === 'Profile' ? '#fff' : '#858585' }]}>
                            Profile
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.screen}>
                    {screen === 'Massages' ? <Massages /> : screen === 'Profile' ? <Profile /> : <View></View>}
                </View>
            </View>

            <ReportUserModal showModal_Report={showModal_Report} setShowModal_Report={setShowModal_Report}></ReportUserModal>
        </View>
  )
}


  const Massages = () => {
    return (
        <View style={styles.massagesView}>
            <ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 10 }}>

                <View style={{ flex: 1, height: 2, backgroundColor: '#E8E6EA' }} />
                <View>
                    <Text style={styles.timetext}>Mon. Jan 30 10:11 AM</Text>
                </View>
                <View style={{ flex: 1, height: 2, backgroundColor: '#E8E6EA' }} />
            </View>

            <View style={[styles.card]}>
                <View style={styles.cardimage}>
                    <Image source={require('../../assets/Images/Home/Category/c_image1.png')} style={styles.image} />
                </View>
                <View style={styles.cardcontent}>
                    <View style={{flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Superclarendon-Light', fontSize: 14.5, lineHeight: 20, color: '#9796A1' }}>Sports</Text>                        
                        <Icon name='circle-small' size={25} color={'#C4C4C4'} />
                        <Text style={{ fontFamily: 'Superclarendon-Regular', fontSize: 14.5, lineHeight: 20, color: '#9796A1' }}>Event Link</Text>  
                        <IconF name='link' style={{marginLeft: 10, fontSize: 14.5}} color={'#fff'} />
                    </View>
                    <Text style={[styles.nametext, { color: colors.white }]}>Yankees Game</Text>
                    <Text style={[styles.addtext, { color: colors.white }]}>Saturday @ 8pm</Text>
                    <Text style={[styles.addtext, { color: '#9796A1', fontFamily: 'Superclarendon-Light' }]}>Manhattan, NY</Text>
                </View>
            </View>

            <Text style={{
                fontSize: 15.5, color: '#1E1F28', lineHeight: 20, fontFamily: 'Superclarendon-Regular', textAlign: 'center'}}>
                It’s date night, Rebecca and Michael!
            </Text>
            {/* <ScrollView contentContainerStyle={styles.chatview}> */}
            <View style={styles.chatview}>
                <View style={{ alignItems: 'flex-start', gap: 5 }}>
                    <View style={{ paddingHorizontal: 15, paddingVertical: 10, maxWidth: '80%', backgroundColor: 'rgba(0,0,0,0.07)', borderRadius: 15, borderBottomLeftRadius: 0 }}>
                        <Text style={{
                            fontSize: 15,
                            lineHeight:22, fontFamily: 'Superclarendon-Light',
                            color: '#000'
                        }}  >
                            Hey Rebecca, what time should I pick you up at?
                        </Text>
                    </View>
                    <Text style={{ fontSize: 12, fontFamily: 'Superclarendon-Light', color: '#000', opacity: 0.5 }}>
                        2:55 PM
                    </Text>
                </View>
                <View style={{ alignItems: 'flex-end', gap: 5 }}>
                    <View style={{
                        alignSelf: 'flex-end',
                        paddingHorizontal: 15, paddingVertical: 10, maxWidth: '80%', backgroundColor: '#000', borderRadius: 15, borderBottomRightRadius: 0,

                    }}>

                        <Text style={{
                            fontSize: 15, fontFamily: 'Superclarendon-Light',
                            color: '#FFFFFF',
                            lineHeight:22,
                            fontWeight: '300'
                        }}  >
                            Can’t wait! I love the Yankees and tonight’s game is going to be great.
                        </Text>
                    </View>
                    <Text style={{ fontSize: 12, fontFamily: 'Superclarendon-Light', color: '#000', opacity: 0.5 }}>
                        2:55 PM
                    </Text>
                </View>
                <View style={{ alignItems: 'flex-start', gap: 5 }}>
                    <View style={{ paddingHorizontal: 15, paddingVertical: 10, maxWidth: '80%', backgroundColor: 'rgba(0,0,0,0.07)', borderRadius: 15, borderBottomLeftRadius: 0 }}>
                        <Text style={{
                            fontSize: 15, 
                            lineHeight:22,
                            fontFamily: 'Superclarendon-Light',
                            color: '#000'
                        }}  >
                            Sure, let’s do it! 😊
                        </Text>
                    </View>
                    <Text style={{ fontSize: 12, fontFamily: 'Superclarendon-Light', color: '#000', opacity: 0.5 }}>
                    3:10 PM
                    </Text>
                </View>
            </View>
            </ScrollView>

            <View style={{ width: '100%', position: 'absolute', alignSelf: 'center', bottom: 180, zIndex: 100 }}>
                <View  style={{ borderRadius: 20, borderWidth: 1, borderColor: '#E8E6EA', paddingVertical: 10,
                       paddingHorizontal: 15, justifyContent: 'center', minHeight: 55, backgroundColor: '#fff'}}>

                   <TextInput placeholder='Type message' placeholderTextColor={'#ABB4BD'} multiline={true} />
                </View>
            </View>
        </View>
      )
    }

  const Profile = () => {
      return (
          <View style={{ alignItems: 'center' }}>
              {/* <Text>
                  Profile
              </Text> */}
          </View>
      )
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.AppDefaultColor,
    },
    nameTitle: {
        fontFamily: 'Superclarendon-Regular',
        color: colors.textdefult,
        fontSize: 20,
        lineHeight: 35,
        textAlign: 'center',
    },
    detailSubTitle: {
        fontFamily: 'Superclarendon-Regular',
        color: colors.txtgrey,
        fontSize: 15.5,
        lineHeight: 20,
        textAlign: 'center'
    },
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.textdefult,

    },
    anchorMenu: {
        top: 100,
        padding: 0,
        width: 140
      },
      nameTitleMenu: {
        fontFamily: 'Superclarendon-Regular',
        color: '#1E1F28',
        fontSize: 15,
        lineHeight: 18,
        // textAlign: 'center'
      },
    
      
      segmentRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 35,
        backgroundColor: colors.AppDefaultColor,
        paddingTop: 20,
        paddingBottom: 10
    },
    segmentBtn: {
        borderBottomColor: colors.AppDefaultColor,
        borderBottomWidth: 2,
        padding: 3
    },
    segmentTitle: {
        color: colors.textdefult,
        fontSize: 16,
        lineHeight: 18,
        fontFamily: 'Superclarendon-Regular',
        letterSpacing: 0.5
    },

    linkbtn: {
        borderBottomColor: colors.AppDefaultColor,
        borderBottomWidth: 2,
        padding: 3
    },
    linktext: {
        color: colors.textdefult,
        fontSize: 16,
        lineHeight: 18,
        // fontFamily: 'Superclarendon-Bold',
        textAlignVertical: 'center'

    },


    massagesView:{
        width:'100%',
        paddingHorizontal:20, 
        height:'100%',
    },
    timetext: {
        textAlign: 'center',
        color: '#B4B1B1',
        opacity: 0.8,
        fontFamily: 'Superclarendon-Regular',
    },

    card: {
        // justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#2A2C36',
        overflow: 'hidden',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical:15
    },
    cardcontent: {
        justifyContent: 'center',
        paddingLeft:20,
    },
    cardimage: {
        justifyContent:'center',
        alignItems: 'center'
    },
    image: {
        width: 62,
        height: 62,
        resizeMode: 'cover',
        borderRadius: 10
    },
    nametext: {
        color: colors.textdefult,
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'Superclarendon-Regular',
        fontWeight: '400',
    },
    addtext: {
        color: colors.txtgrey,
        fontSize: 13.5,
        lineHeight: 18,
        marginTop: 2,
        fontFamily: 'Superclarendon-Regular',
    },
    chatview:{ 
         justifyContent:'flex-end',
         gap: 20,
         paddingTop: 20,
         paddingBottom: 10,
         paddingHorizontal: 10,
    }
});


export default ChatScreen;




