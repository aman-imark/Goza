import React, {useState, useEffect, Profiler} from 'react';

import { Image } from 'react-native';
import { colors } from '../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../pages/home/HomeScreen';
import SpotsScreen from '../pages/home/Spots/SpotsScreen';
import BonusSpotsScreen from '../pages/home/Spots/BonusSpotsScreen';
import DiscoverScreen from '../pages/discover/discover';
import ItsMatchScreen from '../pages/itsmatch/itsmatch';
import LikesScreen from '../pages/Likes/LikesScreen';
import MessagesScreen from '../pages/Messages/MessagesScreen';
import ChatScreen from '../pages/Messages/ChatScreen';
import ProfileScreen from '../pages/Profile/ProfileScreen';
import VipAccess from '../pages/Profile/VipAccess/VipAccess';
import Method from '../pages/Profile/Payment/Method';
import Summary from '../pages/Profile/Payment/Summary';
import SettingScreen from '../pages/Profile/Settings/SettingScreen';
import Personalinfo from '../pages/Profile/Settings/Personalinfo';
import Notification from '../pages/Profile/Settings/Notification';
import ContactScreen from '../pages/Profile/Contact/ContactScreen';
import InviteScreen from '../pages/Profile/InviteFriends/InviteScreen';
import D_PrefrencesScreen from '../pages/Profile/D_Prefrences/D_PrefrencesScreen';


const HomeStack = createNativeStackNavigator();
const DiscoverStack = createNativeStackNavigator();
const LikeStack = createNativeStackNavigator();
const MessageStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();




const AppStack = () => {

    const HomeStackScreen = () => {
      return (
        <HomeStack.Navigator initialRouteName={'HomeScreen'}>
          <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
          <HomeStack.Screen name="SpotsScreen" component={SpotsScreen} options={{ headerShown: false }}/>
          <HomeStack.Screen name="BonusSpotsScreen" component={BonusSpotsScreen} options={{ headerShown: false }}/>
        </HomeStack.Navigator>
      );
    }


    const DiscoverStackScreen = () => {
      return (
        <DiscoverStack.Navigator initialRouteName={'DiscoverScreen'}>
          <DiscoverStack.Screen name="DiscoverScreen" component={DiscoverScreen} options={{ headerShown: false }}/>
          <DiscoverStack.Screen name="ItsMatchScreen" component={ItsMatchScreen} options={{ headerShown: false }}/>
        </DiscoverStack.Navigator>
      );
    }


    const LikeStackScreen = () => {
      return (
        <LikeStack.Navigator initialRouteName={'LikesScreen'}>
          <LikeStack.Screen name="LikesScreen" component={LikesScreen}  options={{ headerShown: false }}/>
        </LikeStack.Navigator>
      );
    }


    const MessageStackScreen = () => {
      return (
        <MessageStack.Navigator initialRouteName={'MessagesScreen'}>
          <MessageStack.Screen name="MessagesScreen" component={MessagesScreen}  options={{ headerShown: false }}/>
          <MessageStack.Screen name="ChatScreen" component={ChatScreen}  options={{ headerShown: false }}/>
        </MessageStack.Navigator>
      );
    }


    const ProfileStackScreen = () => {
      return (
        <ProfileStack.Navigator initialRouteName={'ProfileScreen'}>
          <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
          <ProfileStack.Screen name="VipAccess" component={VipAccess} options={{ headerShown: false }}/>
          <ProfileStack.Screen name="Method" component={Method} options={{ headerShown: false }}/>
          <ProfileStack.Screen name="Summary" component={Summary} options={{ headerShown: false }}/>
          <ProfileStack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }}/>
          <ProfileStack.Screen name="Personalinfo" component={Personalinfo} options={{ headerShown: false }}/>
          <ProfileStack.Screen name="Notification" component={Notification} options={{ headerShown: false }}/>
          <ProfileStack.Screen name="Contact" component={ContactScreen} options={{ headerShown: false }}/>
          <ProfileStack.Screen name="Invite" component={InviteScreen} options={{ headerShown: false }}/>
          <ProfileStack.Screen name="D_Preferences" component={D_PrefrencesScreen} options={{ headerShown: false }}/>
        </ProfileStack.Navigator>
      );
    }


    const MainTabNavigator = () => {
      return (
        <Tab.Navigator initialRouteName="Home"
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          screenOptions={{
              tabBarActiveTintColor: '#D3C6A5',
              tabBarInactiveTintColor: '#ABB4BD',
              tabBarStyle: {
                  backgroundColor: colors.AppDefaultColor,
                  borderTopColor: colors.AppDefaultColor,
                  height:78,
                  paddingTop: 8,
                  paddingBottom: 18
                  // paddingBottom:10, 
                  // position:'absolute',
              },
              tabBarLabelStyle: {
                  fontSize: 12,
                  lineHeight: 25,
                  fontFamily: 'Superclarendon-Regular',
              }
          }}        
        >
          <Tab.Screen name="Home" component={HomeStackScreen} 
              options={{
                tabBarLabel: 'Home',
                headerShown: false,
                tabBarIcon: ({ focused, color }) => (
                    !focused ?
                        <Icon name="home-outline" color={color} size={28} /> :
                        <Icon name="home" color={color} size={28} />
                ),
              }}
          />
          <Tab.Screen name="Discover" component={DiscoverStackScreen} 
              options={{
                tabBarLabel: 'Discover',
                headerShown: false,
                tabBarIcon: ({ focused, color }) => (
                    !focused ?
                        <Image source={require('../assets/icons/discover-outlined.png')} style={{
                            width: 28,
                            height: 28,
                            tintColor: '#ABB4BD',
                            resizeMode: 'contain'
                        }} /> :
                        <Image source={require('../assets/icons/discover.png')} style={{
                            width: 28,
                            height: 28, resizeMode: 'contain'
                        }} />
                ),
              }}
          />
          <Tab.Screen name="Likes" component={LikeStackScreen} 
              options={{
                tabBarLabel: 'Likes',
                headerShown: false,
                tabBarIcon: ({ focused, color }) => (
                    !focused ?
                        <Icon name="heart-outline" color={color} size={28} /> :
                        <Icon name="heart" color={color} size={28} />
                ),
              }}
          />
          <Tab.Screen name="Messages" component={MessageStackScreen} 
              options={{
                tabBarLabel: 'Messages',
                headerShown: false,
                tabBarIcon: ({ focused, color }) => (
                    !focused ?
                        <Image source={require('../assets/icons/message-outlined.png')} style={{
                            width: 28,
                            height: 28, resizeMode: 'contain'
                        }} /> :
                        <Image source={require('../assets/icons/message-filed.png')} style={{
                            width: 28,
                            height: 28, resizeMode: 'contain'
                        }} />
                ),
              }}
          />
          <Tab.Screen name="Profile" component={ProfileStackScreen} 
              options={{
                tabBarLabel: 'Profile',
                headerShown: false,
                tabBarIcon: ({ focused, color }) => (
                    !focused ?
                        <Image source={require('../assets/icons/profile-outlined.png')} style={{
                            width: 28,
                            height: 28,
                            tintColor: '#ABB4BD',
                            resizeMode: 'contain'
                        }} /> :
                        <Image source={require('../assets/icons/profile.png')} style={{
                            width: 28,
                            height: 28, resizeMode: 'contain'
                        }} />
                ),
              }}
          />
        </Tab.Navigator>
      );
    }



    return (
      // <NavigationContainer>
        <MainTabNavigator />
      // </NavigationContainer>
    );
}


export default AppStack;

