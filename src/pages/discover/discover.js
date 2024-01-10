import React, { useState, useRef, useEffect }  from 'react';
import { StyleSheet, Platform, TouchableOpacity, Text, View, 
  Image, StatusBar, ScrollView, Picker, Animated, Dimensions, PanResponder } from 'react-native';

import globalStyle from '../../utils/globalStyle';
import { Normalize } from '../../utils/Size';
import { colors } from '../../utils/Colors';


import { Appbar, Button, IconButton, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

import ReportUserModal from '../../modals/ReportUserModal';
import InterestedModal from '../../modals/InterestedModal';
import NotInterestedModal from '../../modals/NotInterestedModal';
import CompleteProfileModal from '../../modals/CompleteProfileModal';

import SwipeCards from 'react-native-swipe-cards';
const SCREEN_WIDTH = Dimensions.get('window').width;

const DiscoverScreen = ({ navigation })  => {
  
  const [showModal_Intersted, setShowModal_Intersted] = useState(false);
  const [showModal_NotIntersted, setShowModal_NotIntersted] = useState(false);

  const [showModal_Report, setShowModal_Report] = useState(false);


  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const [currentIndex, setCurrentIndex] = useState(0);

  const clickRemoveMenu = () => {
    setVisible(false);
  };

  const clickReportMenu = () => {
    setVisible(false);
    setShowModal_Report(true);
  };



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

    const [showContainer, setShowContainer] = useState(false);

    const handleScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.y;
      if (scrollPosition > 380) { // Change 100 to the height you want to trigger the container
        setShowContainer(true);
      } else {
        setShowContainer(false);
      }
    };
  

    const cards = [
      { id: 1, name: 'John', age: 25, image: require('../../assets/test-user.png') },
      { id: 2, name: 'Mary', age: 23, image: require('../../assets/like1.png') },
      { id: 3, name: 'Peter', age: 27, image: require('../../assets/like2.png') },
      { id: 4, name: 'Peter', age: 27, image: require('../../assets/Images/Profile/selfie.png') },
      { id: 5, name: 'Peter', age: 27, image: require('../../assets/Images/Uploaded/uploaded_1.png') },
      { id: 6, name: 'Peter', age: 27, image: require('../../assets/Images/Uploaded/uploaded_2.png') },
    ];

    
    const handleYup = () => {
      setCurrentIndex(currentIndex + 1);
      navigation.navigate('itsmatch')
    };
  
    const handleNope = () => {
      setCurrentIndex(currentIndex + 1);
    };
  
    const handlePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    const handleNext = () => {
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const Card = ({ card, onClickClose, onClickHeart  }) => {
      return (
        <View style={styles.swipeCard}>
          <Image style={styles.swipeCardImage} source={card.image} />
          <View style={styles.subMain}>
            <TouchableOpacity style={styles.leftSection} 
            // onPress={() => setShowModal_NotIntersted(true) }
            onPress={onClickClose}
            >
               <Icon name="close" style={{fontSize: 30}}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightSection} 
            // onPress={() => setShowModal_Intersted(true) }
            onPress={onClickHeart}
            >
               <Icon name="cards-heart-outline" style={{fontSize: 30, color: '#FFF'}}></Icon>
            </TouchableOpacity> 
          </View>
        </View>
      );
    };

    const NoMoreCards = ({  }) => {
      return (
        <View style={[styles.swipeCard, {backgroundColor: '#ABB4BD'}]}>
            <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
              <Text style={[styles.nameTitle, {color: '#f3f3f3'}]}>No more profile found!</Text>
            </View>
        </View>
      );
    };
    

  return ( 
    <View style={styles.container}> 
      <StatusBar backgroundColor='transparent' barStyle="dark-content" ></StatusBar>

      <Appbar.Header mode='center-aligned' style={{ backgroundColor: '#fff', position: 'relative', top: 0 }}>
        <Appbar.BackAction icon="chevron-left" size={25} color="#000000" onPress={() =>  { navigation.navigate('Discover') }} />
        <Appbar.Content title={<View style={{alignItems: 'center', justifyContent: 'center' }}>
          <Text style={[styles.nameTitle]}>Yankees Game</Text>
          <Text style={[styles.detailSubTitle]}>Saturday @ 10 p.m.</Text></View>} />
        <View style={{position: 'absolute', top: 0, right: 50, bottom: 0, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Appbar.Action icon="reply-outline" color="#000000" size={25} onPress={() => { navigation.navigate('itsmatch') }} />
        </View>  
        <Menu visible={visible}
          anchor={<Appbar.Action icon="dots-horizontal" size={25} color="#000000" onPress={showMenu}/>}
          style={styles.anchorMenu}  onRequestClose={hideMenu}>      
            <MenuItem onPress={clickRemoveMenu} children={<Text style={[styles.nameTitleMenu]}>Remove</Text>}></MenuItem>
            <View style={{borderColor: '#ABB4BD', borderWidth: 0.8, marginHorizontal: 10, opacity: 0.7}}></View>
            {/* <MenuDivider style={{marginHorizontal: 10}} color="#ABB4BD"/> */}
            <MenuItem onPress={clickReportMenu} children={<Text style={[styles.nameTitleMenu]}>Report</Text>}></MenuItem>      
        </Menu>
      </Appbar.Header>



      <View style={styles.containerChild}>
      <ScrollView ref={scrollViewRef} onScroll={handleScroll}>
        
        <View style={{marginTop: 20, height: 400,
              //  borderColor: 'red', borderWidth: 1
           }}>
        <SwipeCards
             cards={cards.slice(currentIndex)}            
             cardKey="id"
             cardStyle={styles.swipeCardContainer}
             renderCard={(card) => <Card 
              card={card}
              onClickClose={handleNope}
              onClickHeart={handleYup}
              />}
             showYup={false}
             showNope={false}
             renderNoMoreCards={() => <NoMoreCards />}
            //  handleYup={() => console.log('Yup')}
            //  handleNope={() => console.log('Nope')}

             cardIndex={currentIndex}
             handleYup={handleYup}
             handleNope={handleNope}
             smoothTransition={true}
            //  stack={false}
            //  stackDepth={3}
          />
          {/* <View style={styles.subMain}>
            <TouchableOpacity style={styles.leftSection} onPress={() => setShowModal_NotIntersted(true) }>
               <Icon name="close" style={{fontSize: 30}}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightSection} onPress={() => setShowModal_Intersted(true) }>
               <Icon name="cards-heart-outline" style={{fontSize: 30, color: '#FFF'}}></Icon>
            </TouchableOpacity> 
          </View>    */}
        </View>

          {/* <View style={[globalStyle.mrt2, styles.main1]}>
            <Image resizeMode={'cover'} style={{width: '100%', borderRadius: 10}} source={require('../../assets/test-user.png')}></Image>
            <View style={styles.subMain}>
              <TouchableOpacity style={styles.leftSection} onPress={() => setShowModal_NotIntersted(true) }>
                 <Icon name="close" style={{fontSize: 30}}></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rightSection} onPress={() => setShowModal_Intersted(true) }>
                 <Icon name="cards-heart-outline" style={{fontSize: 30, color: '#FFF'}}></Icon>
              </TouchableOpacity> 
            </View>
          </View> */}
 

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
                  <Image resizeMode={'cover'} style={{width: '100%', borderRadius: 10}} source={require('../../assets/test-user.png')}></Image>
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
      </View>


      <InterestedModal showModal_Intersted={showModal_Intersted} setShowModal_Intersted={setShowModal_Intersted}></InterestedModal>
      <NotInterestedModal showModal_NotIntersted={showModal_NotIntersted} setShowModal_NotIntersted={setShowModal_NotIntersted}></NotInterestedModal>
      <ReportUserModal showModal_Report={showModal_Report} setShowModal_Report={setShowModal_Report}></ReportUserModal>
      <CompleteProfileModal></CompleteProfileModal>


 
      {showContainer && (
      <View style={styles.subMain2}>
          <TouchableOpacity style={styles.leftSection} 
          onPress={() => setShowModal_NotIntersted(true) }
          // onPress={handleNope}
          >
             <Icon name="close" style={{fontSize: 30}}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightSection} 
          onPress={() => setShowModal_Intersted(true) }
          // onPress={handleYup}
          >
             <Icon name="cards-heart-outline" style={{fontSize: 30, color: '#FFF'}}></Icon>
          </TouchableOpacity> 
      </View>
       )}
   </View>
  );
};


export default DiscoverScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameTitle: {
    fontFamily: 'Superclarendon-Regular',
    color: '#000000',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center'
  },
  detailSubTitle: {
    fontFamily: 'Superclarendon-Regular',
    color: '#000000',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center'
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




swipeCardContainer: {
    position: 'relative',
    top: 0,
    width: '100%',
    height: '100%',
    // borderColor: 'blue',
    // borderWidth: 1
},
swipeCard: {
  borderRadius: 10,
  width: SCREEN_WIDTH * 0.85,
  height: 400,
  alignItems: 'center',
  // borderColor: 'green',
  // borderWidth: 1,
},
swipeCardImage: {
  borderRadius: 10,
  height: 400,
  width: SCREEN_WIDTH * 0.85,
  // width: '100%', // make the image fill the card width
  // height: '100%', // make the image fill the card height
  resizeMode: 'cover',
},
twoButtonContainer: {
  position: 'relative',
  top: 0,
  borderColor: 'green',
  borderWidth: 1,
},

  containerChild: {
    flex: 1,
    backgroundColor: '#fff',
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
    left:  -20,
    right: -20,
    // left:  '2%',
    // right: '2%',
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

});


