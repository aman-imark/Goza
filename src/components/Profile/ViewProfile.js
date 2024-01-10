import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../../utils/Colors'
import globalStyle from '../../utils/globalStyle'

const ViewProfile = () => {

    const InterestsList =
    [
      { id: '1', name: 'Fishing' },
      { id: '2', name: 'Swimming' },
      { id: '3', name: 'Golfing' },
      { id: '4', name: 'Soccer' },
      { id: '5', name: 'Baseball' }
    ]
    const [interest, setInterest] = useState('');

    const scrollViewRef = useRef();
    const handleScrollToTop = () => {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    };


    return (
        <ScrollView  ref={scrollViewRef} style={styles.Container}>
          <View style={[globalStyle.mrt2, styles.main1]}>
            <Image resizeMode={'cover'} style={{width: '100%', borderRadius: 10}} source={require('../../assets/test-user.png')}></Image>
          </View>


          <View style={[globalStyle.mrt2, globalStyle.mrb1, styles.main2]}>
            <View style={{ paddingHorizontal: 30 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={[styles.nameTitleUser]}>Rebecca A.</Text>
                  {/* <View style={styles.dot}></View> */}
                  <Icon name="circle" style={styles.dot}></Icon>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity>
                    <Image style={{ height: 25, width: 25, marginHorizontal: 1 }} resizeMode={'cover'} source={require('../../assets/icons/LinkedIn.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ height: 25, width: 25, marginHorizontal: 1 }} resizeMode={'cover'} source={require('../../assets/icons/Instagram.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ height: 25, width: 25, marginHorizontal: 1 }} resizeMode={'cover'} source={require('../../assets/icons/Facebook.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ height: 20, width: 20, marginHorizontal: 1 }} resizeMode={'cover'} source={require('../../assets/icons/tik-tok.png')}></Image>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={[styles.nameSubTitleUser]}>Brooklyn, NY </Text>
                  <Icon name="circle" size={5} style={styles.dot2}></Icon>
                  <Text style={[styles.nameSubTitleUser]}>27</Text>
                  <Icon name="circle" size={5} style={styles.dot2}></Icon>
                  <Text style={[styles.nameSubTitleUser]}>5’ 6”</Text>
              </View>


              <View style={[globalStyle.mrt2]}>
                <Text style={styles.ptext}>Lawyer @ Jamison Personal Injury LLP</Text>
                <Text style={styles.ptext}>New York University School of Law</Text>
                <Text style={styles.ptext}>New York University</Text>
              </View>
            </View>

            <View style={{ borderBottomColor: '#ABB4BD', marginVertical: 12, borderWidth: 0.4, opacity: 0.25 }}></View>

            <View style={{ paddingHorizontal: 30 }}>
              <Text style={[styles.aboutMe, globalStyle.mrb2]}>About me</Text>

              <Text style={styles.ptext2}>Hey there! I’m a recent law grad working at a PI law firm.
                I just moved to Brooklyn and am looking to met new people.
                I love intelligent conversation, animals, jogging, and playing
                tennis. Let’s get to know eachother!</Text>

              <View style={[globalStyle.mrt1]}>
                <Image resizeMode={'cover'} style={{width: '100%', borderRadius: 10}} source={require('../../assets/test-user.png')}></Image>
              </View>
            </View>
            <View style={{ borderBottomColor: '#ABB4BD', marginVertical: 12, borderWidth: 0.4, opacity: 0.25 }}></View>

            <View style={{ paddingHorizontal: 30 }}>                        
              <View>
                <Text style={{ color: '#B4A47B', fontSize: 18, fontFamily: 'Superclarendon-Regular', lineHeight: 23 }}>The two most important things you should know about me</Text>
                <Text style={{ fontSize: 22, color: '#1E1F28', fontFamily: 'Superclarendon-Regular', lineHeight: 28, marginVertical: 10 }}>I love to fish!</Text>
              </View>
            </View>
            <View style={{ borderBottomColor: '#ABB4BD', marginVertical: 12, borderWidth: 0.4, opacity: 0.25 }}></View>


            <View style={{ paddingHorizontal: 30 }}>
            <View style={[globalStyle.mrt2]}>
                <Image resizeMode={'cover'} style={{width: '100%', borderRadius: 10}} source={require('../../assets/test-user.png')}></Image>
            </View>
            </View>
            <View style={{ borderBottomColor: '#ABB4BD', marginVertical: 12, borderWidth: 0.4, opacity: 0.25 }}></View>


            <View style={{ paddingHorizontal: 30 }}>
              <View>
                <Text style={{ color: '#B4A47B', fontSize: 18, fontFamily: 'Superclarendon-Regular', lineHeight: 23 }}>Let’s talk about...</Text>
                <Text style={{ fontSize: 22, color: '#1E1F28', fontFamily: 'Superclarendon-Regular', lineHeight: 28, marginVertical: 10 }}>Family and my career</Text>
              </View>
            </View>
            <View style={{ borderBottomColor: '#ABB4BD', marginVertical: 12, borderWidth: 0.4, opacity: 0.25 }}></View>


            <View style={{ paddingHorizontal: 30 }}>
              <View style={[globalStyle.mrt2]}>
                  <Image resizeMode={'cover'} style={{width: '100%', borderRadius: 10, borderTopLeftRadius: 100}} source={require('../../assets/test-user.png')}></Image>
              </View>

              <Text style={{ color: '#B4A47B', fontSize: 16, fontFamily: 'Superclarendon-Regular', lineHeight: 20, marginVertical: 16 }}>Interests</Text>


              <View style={[styles.row]}>
                {
                  InterestsList.map((item,i) =>
                        <View  key={i}  style={[styles.chip]}>
                          <Text style={[styles.chipText, { color: interest === item.name ? colors.black : colors.white }]}>
                              {item.name}
                          </Text>
                        </View>
                  )
                }
              </View>


              <View style={{ flexDirection: 'row', marginVertical: 5}}>
                 <View style={{ flex: 1, alignItems: 'center' }}><Text style={styles.sub1}>Religion</Text></View>
                 <View style={{ flex: 1, alignItems: 'center' }}><Text style={styles.sub1}>Zodiac</Text></View>
                 <View style={{ flex: 1, alignItems: 'center' }}><Text style={styles.sub1}>Politics</Text></View>
              </View>
              <View style={{ flexDirection: 'row',  marginVertical: 5}}>
                 <View style={{ flex: 1, alignItems: 'center' }}><Text style={styles.sub2}>Christian</Text></View>
                 <View style={{ flex: 1, alignItems: 'center' }}><Text style={styles.sub2}>Cancer</Text></View>
                 <View style={{ flex: 1, alignItems: 'center' }}><Text style={styles.sub2}>Moderate</Text></View>
              </View>
            </View>

           
            <View style={{ alignItems: 'center'}}>
                <TouchableOpacity style={styles.backButton} onPress={handleScrollToTop}>
                  <Text style={[globalStyle.fRegular, { color: '#000000', fontSize: 17, lineHeight: 21 }]}>Back to Top</Text>
                </TouchableOpacity>
            </View>

          </View>
      
        </ScrollView>
    )
}

export default ViewProfile

const styles = StyleSheet.create({
    Container: {
        height: '60%',
        width: '100%',
        backgroundColor: colors.textdefult, 
        paddingVertical: 15,         
    },
    nameTitleMenu: {
        fontFamily: 'Superclarendon-Regular',
        color: '#1E1F28',
        fontSize: 15,
        lineHeight: 18,
        // textAlign: 'center'
      },
    
      nameTitleUser: {
        fontSize: 24,
        fontFamily: 'Superclarendon-Regular',
        color: '#000000',
        lineHeight: 30,
      },
      nameSubTitleUser: {
        fontSize: 15.52,
        fontFamily: 'Superclarendon-Regular',
        color: '#B4A47B',
        lineHeight: 20,
      },
      aboutMe: {
        fontSize: 16,
        fontFamily: 'Superclarendon-Regular',
        color: '#B4A47B',
        lineHeight: 20,
      },
    
    main1: {
        // alignItems: 'center',
        position: 'relative',
        // borderColor: 'red',
        // borderWidth: 2,
        marginHorizontal:30
      },
    
    
      subMain: {
        position: 'absolute',
        left: -22,
        right: -22,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
      },
    
      subMain2: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
      },
    
    
      leftSection: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: '#F7F7F7',
    
        shadowColor: 'rgba(11, 11, 11, 0.26)',
        shadowOffset: {
          width: 10,
          height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 13,
        elevation: 13,
      },
      rightSection: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: '#D3C6A5',
    
        shadowColor: 'rgba(11, 11, 11, 0.26)',
        shadowOffset: {
          width: 10,
          height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 13,
        elevation: 13,
      },
      dot: {
        marginLeft: 10,
        color: '#16B526',
        fontSize: 8.44
      },
      dot2: {
        marginHorizontal: 6,
        color: '#B4A47B',
      },
    
    
      title: {
        // #F6F6F6
        fontFamily: 'Superclarendon-Regular',
      },
      subtitle: {
        fontFamily: 'Superclarendon-Regular',
      },
      subtitle: {
        fontFamily: 'Superclarendon-Regular',
      },
    
      ptext: {
        fontFamily: 'Superclarendon-Light',
        fontSize: 14,
        color: '#0B0A0A',
        lineHeight: 18,
      },
      ptext2: {
        fontFamily: 'Superclarendon-Regular',
        fontSize: 15,
        color: '#1E1F28',
        lineHeight: 20,
      },
    
      row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10
      },
      chip: {
        backgroundColor: colors.AppDefaultColor,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FFFFFF',
        minHeight: 35,
        paddingHorizontal: 13,
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 12
      },
      chipText: {
        fontSize: 16,
        color: colors.textPlaceHolder,
        lineHeight: 35,
        fontFamily: 'Superclarendon-Regular',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        letterSpacing: 0.12,
      },
    
    
      sub1:{
        fontFamily: 'Superclarendon-Regular',
        fontSize: 16,
        color: '#B4A47B',
        lineHeight: 20,
      },
      sub2:{
        fontFamily: 'Superclarendon-Regular',
        fontSize: 18,
        color: '#1E1F28',
        lineHeight: 23,
      },
    
      backButton: {
        fontFamily: 'Superclarendon-Regular',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderStyle: 'solid',
        borderColor: '#000000',
        borderWidth: 0.8,
        height: 44,
        width: '40%',
        marginTop: 32,
        // marginBottom: '72%'
      },
      buttonContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 20,
      },
      button: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 10,
      },
      buttonText: {
        color: 'white',
      },
    
})