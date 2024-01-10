import React, {useRef, useState, useEffect} from 'react';

import { View, Text, StyleSheet, StatusBar, FlatList, Image, Animated, TouchableOpacity } from 'react-native';
import { Appbar, Button, Menu, Divider, Provider, Tooltip, IconButton, Modal, Portal } from 'react-native-paper';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import globalStyle from '../../utils/globalStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// https://blog.jscrambler.com/creating-swipeable-gestures-with-react-native-gesture-handler

const MessagesScreen = ({ navigation }) => {

  const [showView1, setShowView1] = useState('screen1');
  const swipeableRef = useRef(null);

  const toggleView = () => {
    setShowView1('screen2');
    console.log(showView1);
  }

  useEffect( () => {
    setShowView1('screen1');
    console.log(showView1);
  }, []);


  const msgList = [
    {
      id: '1',
      name: 'Natasha W.',
      nameOther: 'Yankees Game',
      lastMsg: 'Hello, evening to...',
      avatar: require('../../assets/like2.png'),
      chatStatus: 'Your turn'
    },
    {
      id: '2',
      name: 'Jamie W.',
      nameOther: 'Yankees Game',
      lastMsg: 'Hello, evening to...',
      avatar: require('../../assets/like1.png'),
      chatStatus: 'Your turn'
    },
    {
      id: '3',
      name: 'Natasha W.',
      nameOther: 'Yankees Game',
      lastMsg: 'Typing...',
      avatar: require('../../assets/like2.png'),
      chatStatus: 'Your turn'
    },
    {
      id: '4',
      name: 'Ally A.',
      nameOther: 'Yankees Game',
      lastMsg: 'Start the chat!',
      avatar: require('../../assets/like3.png'),
      chatStatus: 'Start chat'
    },
    {
      id: '5',
      name: 'Mallory W.',
      nameOther: 'Yankees Game',
      lastMsg: 'Hello, evening to...',
      avatar: require('../../assets/like4.png'),
      chatStatus: ''
    },
  ];


  const MsgItem = ({ msg }) => ( 
    <Swipeable ref={swipeableRef} renderRightActions={RightActions}>
    <TouchableOpacity onPress={()=>navigation.navigate('ChatScreen')} activeOpacity={0.5}>
    <View style={styles.msgContainer}>
      <View style={styles.sec1}>
        <Image source={msg.avatar} style={styles.avatar} />
      </View>
      <View style={styles.sec2}>
        <Text style={styles.name}>{msg.name}</Text>
        <Text style={styles.lastMsg}>{msg.lastMsg}</Text>
      </View>
      <View style={styles.sec3}>
     
        {msg.chatStatus === 'Your turn' ? (
        <View style={{backgroundColor:  '#D3C6A5', borderRadius: 3, paddingHorizontal: 6, paddingVertical: 5, marginBottom: 5}}>
           <Text style={styles.chatStatus}>{msg.chatStatus}</Text>
        </View>
         )         
        :msg.chatStatus  === 'Start chat' ? (
        <View style={{backgroundColor:  '#C9FFD2', borderRadius: 3, paddingHorizontal: 6, paddingVertical: 5, marginBottom: 5}}>
           <Text style={styles.chatStatus}>{msg.chatStatus}</Text>
        </View>
        ):
        <View></View>
        }

        <Text style={styles.nameOther}>{msg.nameOther}</Text>
      </View>
    </View>
    </TouchableOpacity>
    </Swipeable>
  )

  const renderItem = ({ item }) => (
    <MsgItem msg={item} />
  );

  const closeSwipeable = () => {
    swipeableRef.current.close();
  };


  const RightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0.7, 0]
    })

    return (
        <TouchableOpacity onPress={closeSwipeable}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#FDB9B9',
              justifyContent: 'center',
              paddingHorizontal: 20,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}>

             
            <Icon name="close" style={{textAlign: 'center', fontSize: 35, color: '#231F20'}}></Icon>
            <Text style={{textAlign: 'center', lineHeight: 20, fontSize: 14, color: '#1E1F28', 
                          fontFamily: 'Superclarendon-Regular'}}>Unmatch</Text>

            {/* <Animated.Text
              style={{
                color: '#1E1F28',
                fontSize: 14,
                lineHeight: 20,
                paddingHorizontal: 10,
                fontFamily: 'Superclarendon-Regular',
                transform: [{ scale }]
              }}>
              Unmatch
            </Animated.Text> */}
          </View>
        </TouchableOpacity>
    )
   }

 

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='transparent' barStyle="light-content" ></StatusBar>
            <Appbar.Header mode='center-aligned' style={{ color: '#fff', backgroundColor: '#181A20', position: 'relative', top: 0 }}>
              <Appbar.BackAction icon="chevron-left" color="#fff" size={25}/>
        
              <Appbar.Content title={<View style={{ alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[styles.headerTitle]}>My Messages</Text></View>} />
        
              <Appbar.Action icon="magnify" size={25} color="#fff" onPress={()=>navigation.navigate('SearchScreen')}/>
            </Appbar.Header>


           
            {showView1 === 'screen1' ? (
            <FlatList
              data={msgList}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              numColumns={1}
            />       
            ) 
            :showView1 === 'screen2' ? (
            <View style={styles.containerA}>
              <Text style={styles.textA}>No messages yet</Text>
              <Text style={styles.textB}>Check back here later</Text>
              <TouchableOpacity style={styles.button1} onPress={toggleView}>
                <Text style={[globalStyle.fRegular, { color: '#141414', fontSize: 16, lineHeight: 22, letterSpacing: 0.17 }]}>Find Matches</Text>
              </TouchableOpacity>        
            </View>
             ): <> </>
            }
           
        </View>

    )
}

export default MessagesScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
    msgContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderBottomWidth: 0.4,
      // borderBottomColor: 'red'
      borderBottomColor: 'rgba(42, 44, 54, .3)',

    },
    sec1: {
      width: '20%',
      alignItems: 'flex-start'
    },
    sec2: {
      width: '50%',
      // borderColor: 'red',
      // borderWidth: 1,
    },
    sec3: {
      width: '30%',
      // borderColor: 'red',
      // borderWidth: 1,
      alignItems: 'flex-end'
    },

    avatar: {
      width: 54,
      height: 54,
      borderRadius: 100,
      marginRight: 20,
    },
    name: {
      fontSize: 16,
      lineHeight: 20,
      color: '#000000',
      fontFamily: 'Superclarendon-Regular',
      marginBottom: 8
    },
    lastMsg: {
      fontSize: 14,
      lineHeight: 20,
      color: '#ABB4BD',
      fontFamily: 'Superclarendon-Light',
    },
    chatStatus: {
      fontSize: 12,
      lineHeight: 15,
      color: '#1E1F28',
      fontFamily: 'Superclarendon-Light',
    },
    nameOther: {
      fontSize: 12,
      lineHeight: 17,
      color: '#2A2C36',
      fontFamily: 'Superclarendon-Light',
    },

    containerA: {
      // flex: 1,
      height: '60%',
      alignItems: 'center',
      justifyContent : 'center'
    },
    textA: {
      fontFamily: 'Superclarendon-Regular',
      color: '#000000',
      fontSize: 28,
      lineHeight: 42,
      textAlign: 'center'
    },
    textB: {
      fontFamily: 'Superclarendon-Regular',
      color: '#2A2C36',
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