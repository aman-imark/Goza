import React, { useState, useEffect } from 'react';

import { View, Text, StatusBar, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Appbar, Button, Menu, Divider, Provider, Tooltip, IconButton, Modal, Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import NoLikeModal from '../../modals/NoLikeModal';
import UnlockStatusModal from '../../modals/UnlockStatusModal';

import globalStyle from '../../utils/globalStyle';
 

import { postApiCall, getApiCall } from '../../services/apiCall';
import { storeData, getData, removeData, clearData } from '../../services/storageService';
import { getUserDetails } from '../../services/userDataService';



const LikesScreen = () => {

  const [showModal_NoLike, setShowModal_NoLike] = useState(false);
  const [showModal_UnlockStatus, setShowModal_UnlockStatus] = useState(false);

  const [showView1, setShowView1] = useState('screen1');



    useEffect(() => {
        getUserStoreData();
        setShowView1('screen1');
    }, [ ])



    const getUserStoreData = async () => {
        const data = await getData('setUser').then( (data) => {
            console.log('Home 1:  ' + data.token);
            setUserToken(data.token);
            // console.log(userToken)
            getUserProfile(data.token);
        });
    };
  

    const getWelcomeStoreData = async () => {
        const data = await getData('setWelcome').then( (data) => {
            // console.log(data);
            if(data) {
                setShowModal_Welcome(false);
            } else{
                setShowModal_Welcome(true);
            }
        });
    };
  


    const getUserProfile = async (token) => {
        const userDetails = await getUserDetails(token);
        console.log(userDetails);
        if(userDetails){
            setUserData(userDetails.data)
        }
    };



  




 
  const toggleView = () => {
    setShowView1('screen2');
    console.log(showView1);
  }

  const findMatchesClick = () => {
    setShowView1('screen3');
    console.log(showView1);
  }

  const prefrenceClick = () => {
    setShowView1('screen1');
    console.log(showView1);
  }


  


  const savedList = [
    { id: 1, 
      title: 'Danica D.',
      avatar: require('../../assets/like1.png'), 
      height: '27',
      age: '5’ 6”',
      location: 'Brooklyn, NY',
      description: 'Lawyer @ Jamison P...' ,
      check: '0',
    },
    { id: 2, 
      title: 'Danica D.',
      avatar: require('../../assets/like2.png'), 
      height: '27',
      age: '5’ 6”',
      location: 'Brooklyn, NY',
      description: 'Lawyer @ Jamison P...',
      check: '0',
    },
    { id: 3, 
      title: 'Danica D.',
      avatar: require('../../assets/like3.png'), 
      height: '27',
      age: '5’ 6”',
      location: 'Brooklyn, NY',
      description: 'Lawyer @ Jamison P...',
      check: '1',
    },
    { id: 4, 
      title: 'Danica D.',
      avatar: require('../../assets/like4.png'), 
      height: '27',
      age: '5’ 6”',
      location: 'Brooklyn, NY',
      description: 'Lawyer @ Jamison P...',
      check: '1',
    },
  ];
  

  const clickLike_Close = (check) => {
    if(check === '1')
    setShowModal_NoLike(true)
  };


  const clickLike_Heart = (check) => {
    if(check === '1')
    setShowModal_UnlockStatus(true)
  };



  const SavedItem = ({ user }) => (
    <View style={styles.cardContainer}>
      <View style={{height: 220}}>
        <Image resizeMode={'cover'} style={{width: '100%', borderRadius: 10 }} source={user.avatar}></Image>
        <View style={styles.actionMain}>
            <TouchableOpacity style={styles.leftSection} activeOpacity={0.6} 
            onPress={() => clickLike_Close(user.check)}>
               <Icon name="close" style={{fontSize: 18, color: '#ABB4BD'}}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightSection} activeOpacity={0.6}
            onPress={() => clickLike_Heart(user.check)}>
               <Icon name="cards-heart-outline" style={{fontSize: 18}}></Icon>
            </TouchableOpacity> 
        </View>
      </View>


      <View>
        <Text style={styles.nameTitleUser}>{user.title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginBottom: 4}}>
                  <Text style={[styles.nameSubTitleUser]}>{user.location}</Text>
                  <Icon name="circle" size={4} style={styles.dot2}></Icon>
                  <Text style={[styles.nameSubTitleUser]}>{user.age}</Text>
                  <Icon name="circle" size={4} style={styles.dot2}></Icon>
                  <Text style={[styles.nameSubTitleUser]}>{user.height}</Text>
        </View>
        <Text style={styles.description}>{user.description}</Text>
      </View>    
    </View>
  );
  

  const renderItem = ({ item }) => (
    <SavedItem user={item} />
  );



  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='transparent' barStyle="light-content" ></StatusBar>
      <Appbar.Header mode='center-aligned' style={{ color: '#fff', backgroundColor: '#181A20', position: 'relative', top: 0 }}>
        <Appbar.BackAction icon="chevron-left" color="#fff" size={25}/>
  
        <Appbar.Content title={<View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={[styles.headerTitle]}>People Who Liked You</Text></View>} />
  
      </Appbar.Header>

      {showView1 === 'screen1' ? (
      <FlatList
        data={savedList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.container2}
      />
      ) 
      :showView1 === 'screen2' ? (
      <View style={styles.containerA}>
        <Text style={styles.textA}>No likes yet</Text>
        <Text style={styles.textB}>Check back here later</Text>
        <TouchableOpacity style={styles.button1} onPress={findMatchesClick}>
          <Text style={[globalStyle.fRegular, { color: '#141414', fontSize: 16, lineHeight: 22, letterSpacing: 0.17 }]}>Find Matches</Text>
        </TouchableOpacity>        
      </View>
      )

      :showView1 === 'screen3' ? (
      <View style={styles.containerA}>
        <Text style={styles.textC}>That’s all for today!</Text>
        <Text style={styles.textC}>Quality over quantity is our motto. Check back tomorrow! New members join daily.</Text>
        <TouchableOpacity style={styles.button2}  onPress={prefrenceClick}>
          <Text style={[globalStyle.fRegular, { color: '#141414', fontSize: 16, lineHeight: 22, letterSpacing: 0.17 }]}>Change Preferences</Text>
        </TouchableOpacity>        
      </View> 
      ): <> </>
      }

      <UnlockStatusModal  showModal_UnlockStatus={showModal_UnlockStatus} setShowModal_UnlockStatus={setShowModal_UnlockStatus}></UnlockStatusModal>
      <NoLikeModal showModal_NoLike={showModal_NoLike} setShowModal_NoLike={setShowModal_NoLike}></NoLikeModal>
    </View>
  )
}

export default LikesScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    color: '#ffffff',
    width: '100%',
  },
  headerTitle: {
    fontFamily: 'Superclarendon-Regular',
    color: '#F7F7F7',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center'
  },




  container2: {
    marginHorizontal: 16
  },
  cardContainer: {
    // backgroundColor: '#f9c2ff',
    // padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    flex: 1,
    // borderWidth:2,
    // borderColor: 'red'
  },


  dot2: {
     marginHorizontal: 5,
     color: '#ABB4BD',
   },
 
   actionMain: {
    position: 'absolute',
    left: -10,
    right: 0,
    bottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  leftSection: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    borderRadius: 100,
    backgroundColor: '#2A2C36',

    shadowColor: 'rgba(11, 11, 11, 0.26)',
    shadowOffset: {
      width: 10,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 11,
    elevation: 11,

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,
    // elevation: 7,
  },
  rightSection: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36 ,
    height: 36,
    borderRadius: 100,
    backgroundColor: '#F7F7F7',

    shadowColor: 'rgba(11, 11, 11, 0.26)',
    shadowOffset: {
      width: 10,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 11,
    elevation: 11,
  },
  nameTitleUser: {
    fontFamily: 'Superclarendon-Regular',
    color: '#F7F7F7',
    fontSize: 17,
    lineHeight: 20,
  },
  nameSubTitleUser: {
    fontSize: 12,
    fontFamily: 'Superclarendon-Regular',
    color: '#ABB4BD',
    lineHeight: 15,
  },
  description: {
    fontSize: 12,
    fontFamily: 'Superclarendon-Regular',
    lineHeight: 15,
    color: '#F7F7F7',
  },


  containerA: {
    // flex: 1,
    height: '60%',
    alignItems: 'center',
    justifyContent : 'center'
  },
  textA: {
    fontFamily: 'Superclarendon-Regular',
    color: '#FFFCFC',
    fontSize: 30,
    lineHeight: 45,
    textAlign: 'center'
  },
  textB: {
    fontFamily: 'Superclarendon-Regular',
    color: '#ABB4BD',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginVertical: 5
  },
  textC: {
    fontFamily: 'Superclarendon-Regular',
    color: '#FFFCFC',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginVertical: 12,
    marginHorizontal: 60
  },
  button1: {
    backgroundColor: '#D3C6A5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 86.8,
    height: 50.37,
    width: 220,
    marginVertical: 20,
  },
  button2: {
    backgroundColor: '#D3C6A5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 86.8,
    height: 50.37,
    width: 280,
    marginVertical: 20,
  },

});