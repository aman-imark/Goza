import { View, Text, StatusBar, ImageBackground, Image, 
    TouchableOpacity, SafeAreaView, ScrollView, FlatList, Button, Alert } from 'react-native';

import React, { useState, useEffect, useContext } from 'react';

import { postApiCall, getApiCall } from '../../services/apiCall';
import { storeData, getData, getUserToken, removeData, clearData } from '../../services/storageService';
import { getUserDetails } from '../../services/userDataService';


import { styles } from './HomeStyle';

import LimitSpotsModal from '../../modals/LimitSpotsModal'
import SelectSpotModal from '../../modals/SelectSpotModal';
import WelcomeModal from '../../modals/WelcomeModal';
import AddSpotModal from '../../modals/AddSpotModal';
import TestModal from '../../modals/TestModal';

const HomeScreen = ({ navigation }) => {

    const [userToken, setUserToken] = useState(null);
    const [userData, setUserData] = useState(null);

    const [mySpots, setmySpots] = useState(null);
    const [hotSpots, sethotSpots] = useState(null);
    const [nycClassics, setnycClassics] = useState(null);


    const [showModal_Welcome, setShowModal_Welcome] = useState(false);
    const [showModal_SelectSpot, setShowModal_SelectSpot] = useState(false);
    const [showModal_LimitSpots, setShowModal_LimitSpots] = useState(false);
    const [showModal_AddSpot, setShowModal_AddSpot] = useState(false);

 
    const [response, setResponse] = useState(null);


    useEffect( () => {
        getUserProfile();
        getWelcomeStoreData();
        getMySpots();
        getHomeSpots();

        setTimeout(() => {
        }, 500);
    }, [ ])



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
  


    const getUserProfile = async () => {
        const receivedUserToken = await getUserToken();
        console.log('success  ' + receivedUserToken);
        setUserToken(receivedUserToken);

        const userDetails = await getUserDetails(userToken);
        console.log(userDetails);
        if(userDetails){
            setUserData(userDetails);
        }
    };




    const removeStoreData = async () => {
        const data = await removeData('setUser').then( (data) => {
            console.log(data);
            setResponse(data);
        });
    };

    
    const clearStoreData = async () => {
        const data = await clearData().then( (data) => {
            console.log(data);
            setResponse(data);
        });
    };



    const getMySpots = () => {
        getApiCall('/my-spots', userToken).then( (res) => {
          console.log(res);
          console.warn(res)
          setmySpots(res.myspots);
        }).catch( (err) => { console.log(err) });
    }
    
    
    const getHomeSpots = () => {
        getApiCall('/home', userToken).then( (res) => {
            console.log(res);
            sethotSpots(res.hotspots);
            setnycClassics(res.favorites);
        }).catch( (err) => { console.log(err) });
    }
    



    const categories = [
        {
            id: 1,
            c_title: 'My Spots',
            c_subtitle: 'Your selected spots this week'
        },
        {
            id: 2,
            c_title: 'Hot Spots',
            c_subtitle: 'Trending spots this week'
        },
        {
            id: 3,
            c_title: 'NYC Classics',
            c_subtitle: 'Timeless favorites'
        }
    ];


    // const mySpots = [
    //     {
    //         id: 1,
    //         address: 'Bronx, NY',
    //         title: 'Yankees Game',
    //         timing: 'Saturday @ 8 PM',
    //         matches: '100 Potential Matches',
    //         img: require('../../assets/Images/Home/Spots/spot_1.png')
    //     },
    //     {
    //         id: 2,
    //         address: 'Manhattan, NY',
    //         title: 'Zero Bond',
    //         timing: 'Saturday @ 10 PM',
    //         matches: '100 Potential Matches',
    //         img: require('../../assets/Images/Home/Spots/spot_2.png')
    //     },
    //     {
    //         id: 3,
    //         address: 'Bronx, NY',
    //         title: 'Yankees Game',
    //         timing: 'Saturday @ 8 PM',
    //         matches: '100 Potential Matches',
    //         img: require('../../assets/Images/Home/Spots/spot_1.png')
    //     },
    //     {
    //         id: 4,
    //         address: 'Manhattan, NY',
    //         title: 'Zero Bond',
    //         timing: 'Saturday @ 10 PM',
    //         matches: '100 Potential Matches',
    //         img: require('../../assets/Images/Home/Spots/spot_2.png')
    //     }
    // ];


    // const hotSpots = [
    //     {
    //         id: 1,
    //         address: 'Bronx, NY',
    //         title: 'Yankees Game',
    //         timing: 'Saturday @ 8 PM',
    //         matches: '100 Potential Matches',
    //         img: require('../../assets/Images/Home/Spots/spot_1.png')
    //     },
    //     {
    //         id: 2,
    //         address: 'Manhattan, NY',
    //         title: 'Zero Bond',
    //         timing: 'Saturday @ 10 PM',
    //         matches: '100 Potential Matches',
    //         img: require('../../assets/Images/Home/Spots/spot_2.png')
    //     },
    //     {
    //         id: 3,
    //         address: 'Bronx, NY',
    //         title: 'Yankees Game',
    //         timing: 'Saturday @ 8 PM',
    //         matches: '100 Potential Matches',
    //         img: require('../../assets/Images/Home/Spots/spot_1.png')
    //     },
    //     {
    //         id: 4,
    //         address: 'Manhattan, NY',
    //         title: 'Zero Bond',
    //         timing: 'Saturday @ 10 PM',
    //         matches: '100 Potential Matches',
    //         img: require('../../assets/Images/Home/Spots/spot_2.png')
    //     }
    // ];


    // const nycClassics = [
    //     {
    //         id: 1,
    //         address: 'Bronx, NY',
    //         title: 'Yankees Game',
    //         timing: 'Saturday @ 8 PM',
    //         matches: '100 Potential Matches',
    //         img: require('../../assets/Images/Home/Spots/spot_1.png')
    //     },
    //     {
    //         id: 2,
    //         address: 'Manhattan, NY',
    //         title: 'Zero Bond',
    //         timing: 'Saturday @ 10 PM',
    //         matches: '100 Potential Matches',
    //         img: require('../../assets/Images/Home/Spots/spot_2.png')
    //     },
    //     {
    //         id: 3,
    //         address: 'Bronx, NY',
    //         title: 'Yankees Game',
    //         timing: 'Saturday @ 8 PM',
    //         matches: '100 Potential Matches',
    //         img: require('../../assets/Images/Home/Spots/spot_1.png')
    //     },
    //     {
    //         id: 4,
    //         address: 'Manhattan, NY',
    //         title: 'Zero Bond',
    //         timing: 'Saturday @ 10 PM',
    //         matches: '100 Potential Matches',
    //         img: require('../../assets/Images/Home/Spots/spot_2.png')
    //     },

    // ];
  

    // const Card = ({title,timing,address,img, matches}) => {
    //     return (
    //         <View style={styles.card}>
    //             <View style={styles.cardimage}>
    //                 <Image source={img} style={styles.image} />
    //             </View>
    //             <View style={styles.cardcontent} >
    //                 <Text style={styles.address}>{address}</Text>
    //                 <Text style={styles.title}>{title}</Text>
    //                 <Text style={styles.timing}>{timing}</Text>
    //                 {/* <Text style={styles.matches}>{matches}</Text> */}
    //             </View>
    //         </View>
    //     )
    // };


    const Card = ({item}) => {
        return (
            <View style={styles.card}>
                <View style={styles.cardimage}>
                    <Image source={{uri : item.image}} style={styles.image} />
                </View>
                <View style={styles.cardcontent} >
                    <Text style={styles.address}>{item.location}</Text>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.timing}>{item.date_time}</Text>
                </View>
            </View>
        )
    };


    return (
        <View  style={styles.Container}>
        <SafeAreaView style={styles.Container}>
            <StatusBar backgroundColor={'transparent'} translucent />
         
            <ImageBackground source={require('../../assets/Images/Home/banner_1.png')} style={styles.header}>
                <View style={styles.logocard}>
                    <Image source={require('../../assets/logo.png')} style={styles.logoimg} />
                </View>
                <View style={styles.headerContent}>
                    {/* <Text style={styles.headerTitle}>Welcome, {userData.firstname}</Text> */}
                    {/* <Text style={styles.headerSubtitle}>{userData.location}</Text> */}
                    {/* <Text style={styles.headerTitle}>Welcome, {userData.name}</Text> */}
                    {/* <Text style={styles.headerSubtitle}>New York, New York</Text> */}
                </View>
            </ImageBackground>

            <ScrollView>
    <View>
      <Button title="GET Store" onPress={getUserProfile} />
      <Button title="REMOVE Store" onPress={removeStoreData} />
      <Button title="CLEAR Store" onPress={clearStoreData} />

      <Text style={{color: '#fff'}}>{JSON.stringify(userData)}</Text>
      {response && <Text style={{color: '#fff'}}>{JSON.stringify(userDetails)}</Text>}
    </View>


            <View style={styles.main}>
                <View style={styles.categorysection}>
                    <View style={styles.categoryheader}>
                        <Text style={styles.categoryname}>My Spots</Text>
                        <View style={styles.textrow}>
                            <Text style={styles.subname}>Your selected spots this week</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SpotsScreen')}>
                               <Text style={styles.link}>View All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <FlatList
                            data={mySpots}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => navigation.navigate('DiscoverScreen')} activeOpacity={0.6}>
                                <Card item={item}/>
                            </TouchableOpacity>
                            }
                        />

                        {/* <FlatList
                            data={mySpots}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => navigation.navigate('DiscoverScreen')} activeOpacity={0.6}>


                                <Card
                                    title={item.title} address={item.address}
                                    timing={item.timing}
                                    matches={item.matches}
                                    img={item.img}
                                />

                            </TouchableOpacity>
                            }
                        /> */}
                    </View>
                </View>

                <View style={styles.categorysection}>
                    <View style={styles.categoryheader}>
                        <Text style={styles.categoryname}>Hot Spots</Text>
                        <View style={styles.textrow}>
                            <Text style={styles.subname}>Trending spots this week</Text>
                            <TouchableOpacity  onPress={() => navigation.navigate('SpotsScreen')}>
                               <Text style={styles.link}>View All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <FlatList
                            data={hotSpots}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => setShowModal_LimitSpots(true)} activeOpacity={0.6}>
                                <Card item={item}/>
                            </TouchableOpacity>
                            }
                        />
                    </View>
                </View>

                <View style={styles.categorysection}>
                    <View style={styles.categoryheader}>
                        <Text style={styles.categoryname}>NYC Classics</Text>
                        <View style={styles.textrow}>
                            <Text style={styles.subname}>Timeless favorites</Text>
                            <TouchableOpacity  onPress={() => navigation.navigate('SpotsScreen')}>
                               <Text style={styles.link}>View All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <FlatList
                            data={nycClassics}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => setShowModal_AddSpot(true)} activeOpacity={0.6}>
                                <Card item={item}/>
                            </TouchableOpacity>
                            }
                        />
                    </View>
                </View>


            </View>
            </ScrollView>
        </SafeAreaView>
        

        <WelcomeModal showModal_Welcome={showModal_Welcome} setShowModal_Welcome={setShowModal_Welcome}> </WelcomeModal>
        <SelectSpotModal showModal_SelectSpot={showModal_SelectSpot} setShowModal_SelectSpot={setShowModal_SelectSpot}></SelectSpotModal>
        <LimitSpotsModal showModal_LimitSpots={showModal_LimitSpots} setShowModal_LimitSpots={setShowModal_LimitSpots}></LimitSpotsModal>
        <AddSpotModal showModal_AddSpot={showModal_AddSpot} setShowModal_AddSpot={setShowModal_AddSpot}></AddSpotModal>
     

        </View>
    )
};



export default HomeScreen;