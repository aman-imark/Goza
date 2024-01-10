
import { View, Text, StatusBar, TouchableOpacity, ScrollView, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './SpotsStyle'
import { Appbar, Searchbar } from 'react-native-paper';
// import { SearchBar } from 'react-native-elements';

import { Button, Title, Paragraph } from 'react-native-paper';
import { Tabs,TabScreen,useTabIndex,useTabNavigation} from 'react-native-paper-tabs';

import { colors } from '../../../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Fontisto';
import IconO from 'react-native-vector-icons/Octicons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ConfirmSpotsModal from '../../../modals/ConfirmSpotsModal';
import ConfirmFiveSpotsModal from '../../../modals/ConfirmFiveSpotsModal';


const Tab = createMaterialTopTabNavigator();

const { width, height } = Dimensions.get('screen');
console.log(height);



const SpotsScreen = ({ navigation }) => {

    const [showModal_ConfirmSpots, setShowModal_ConfirmSpots] = useState(false);
    const [showModal_ConfirmFiveSpots, setShowModal_ConfirmFiveSpots] = useState(false);

    const [category_index, setCategory_index] = useState(0);

    const [selectedSpots, setSelectedSpots] = useState([]);

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
  

    useEffect(() => {
        setTimeout(() => {
            // setShowModal_ConfirmSpots(true);
        }, 2500);
        // setTimeout(() => {
        //     setShowModal_ConfirmFiveSpots (true);
        // }, 10000);
    }, [ ])






    const categories = [
        {
            id: 1,
            title: 'Food/Drinks'
        },
        {
            id: 2,
            title: 'Music/Arts'
        },
        {
            id: 3,
            title: 'Sports'
        },
        {
            id: 4,
            title: 'Outdoors'
        },
        {
            id: 5,
            title: 'Hiking'
        },

    ]

    const spots = [
        {
            id: 1,
            title: 'Don Angie',
            location: 'Manhattan, NY',
            Link: 'Menu Link',
            category: 'Food/Drinks',
            image: require('../../../assets/Images/Home/Category/food1.png')
        },
        {
            id: 2,
            title: 'Misi',
            location: 'Manhattan, NY',
            Link: 'Menu Link',
            type: 'Italian',
            category: 'Food/Drinks',
            image: require('../../../assets/Images/Home/Category/food1.png')
        },
        {
            id: 3,
            title: 'Restaurant Su',
            location: 'Manhattan, NY',
            Link: 'Menu Link',
            type: 'Drinks',
            category: 'Food/Drinks',
            image: require('../../../assets/Images/Home/Category/food1.png')
        },
        {
            id: 4,
            title: 'Pizza Place',
            location: 'Manhattan, NY',
            Link: 'Menu Link',
            type: 'Food',
            category: 'Food/Drinks',
            image: require('../../../assets/Images/Home/Category/food1.png')
        },
        {
            id: 5,
            title: 'Burger King',
            location: 'Capetown, NY',
            Link: 'Menu Link',
            type: 'Food',
            category: 'Food/Drinks',
            image: require('../../../assets/Images/Home/Category/food1.png')
        },
        {
            id: 6,
            title: 'Donuts Cake',
            location: 'NewYork, NY',
            Link: 'Menu Link',
            type: 'Food/Cake',
            category: 'Food/Drinks',
            image: require('../../../assets/Images/Home/Category/food1.png')
        },
    ]


    
    const rnd = 0
    useEffect(() => {
        const nr = rnd + 1
        console.log(nr)
    }, [])



    const handlespotsPress = (spot) => {
        console.log(spot)
        if (selectedSpots.includes(spot)) {
            setSelectedSpots(selectedSpots.filter((item) => item !== spot));
        } else {
            setSelectedSpots([...selectedSpots, spot]);
        }
    };



    function Explore() {
        const goTo = useTabNavigation();
        const index = useTabIndex();

    return (
        <View style={styles.tab}>
           <View style={{marginHorizontal: 15, alignItems: 'flex-end', marginTop: 4}}>
                <Searchbar
                  placeholder="Search"
                  onChangeText={onChangeSearch}
                  value={searchQuery}
            
                  placeholderTextColor="#ABB4BD"
                  inputStyle={{ fontSize: 16.5, color: '#fff',fontFamily: 'Superclarendon-Regular', }}
                  searchIcon={{ size: 24, color: '#ABB4BD' }}
                  style={styles.searchBarPaper}
                  iconColor={colors.txtgrey}
                />
            </View>
            
            <View style={{paddingHorizontal: 15, flex: 1}}>
                <FlatList
                    data={spots}
                    alwaysBounceVertical
                    contentContainerStyle={{ gap: 16, }}
                    renderItem={({ item }) =>

                    <View style={[styles.card, { backgroundColor: selectedSpots.includes(item.title) ? colors.secondColor : '#2A2C36' }]}>
                        <View style={styles.cardimage}>
                            <View style={{alignItems: 'center'}}>
                              <Image source={item.image} style={styles.image} />
                            </View>                                
                            <View style={styles.innercard}>
                                <View style={styles.toptags}>
                                    <TouchableOpacity activeOpacity={0.9} style={[styles.tagbtn, { top: 10, left: '10%', paddingHorizontal: 8, backgroundColor:'#c21f22'}]}>
                                        <Text style={styles.btntext}>New</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.toptags}>
                                    <TouchableOpacity activeOpacity={0.9} style={[styles.tagbtn, {  bottom: 32,  paddingHorizontal: 8, backgroundColor: '#345c9c'}]}>
                                        <Text style={styles.btntext}>Popular</Text>
                                        <View style={{marginLeft: 5, borderColor: '#fff', borderWidth: 0.8, borderRadius: 4, padding: 1}}><Icon name='trending-up' size={10} color={'#fff'} /></View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cardcontent}>
                            <View style={styles.corner}>
                                <View style={{flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'Superclarendon-Light', fontSize: 14.5, lineHeight: 20, color: selectedSpots.includes(item.title) ? colors.black : '#9796A1' }}>Mexican</Text>                        
                                    <Icon name='circle-small' size={15} color={'#C4C4C4'} />
                                    <Text style={{ fontFamily: 'Superclarendon-Regular', fontSize: 14.5, lineHeight: 20, color:  selectedSpots.includes(item.title) ? colors.black : '#9796A1' }}>{item.Link}</Text>  
                                    <IconF name='link' style={{marginLeft: 10, fontSize: 14.5}} color={selectedSpots.includes(item.title) ? colors.black : '#fff'} />
                                </View>
                                <Text style={[styles.nametext, { color: selectedSpots.includes(item.title) ? colors.black : colors.white }]}>
                                    {item.title}
                                </Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                   <Text style={[styles.addtext, { color: selectedSpots.includes(item.title) ? colors.black : '#9796A1' }]}>
                                       {item.location}
                                   </Text>
                                   <Text style={[styles.ctext, { color: selectedSpots.includes(item.title) ? colors.black : colors.white }]}>$$$$</Text>
                                </View>
                                <View style={{position: 'absolute', right: 0, top: -6}}>
                                  <TouchableOpacity onPress={() => handlespotsPress(item.title
                                  )} style={[styles.heartbox, {  backgroundColor: selectedSpots.includes(item.title) ? '#9E8954' : '#C4C4C4', borderWidth: selectedSpots.includes(item.title) ? 2 : 0, borderColor: selectedSpots.includes(item.title) ? colors.white : '#2A2C36' }]}>
                                      <IconO name={selectedSpots.includes(item.title) ? 'check' : 'heart-fill'} size={16} color={selectedSpots.includes(item.title) ? colors.white : '#2A2C36'} />
                                  </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    }
                />
            </View>
            </View>
        );
    }

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'transparent'} translucent />

            <Appbar.Header mode='center-aligned' style={{ color: '#fff', backgroundColor: '#181A20', position: 'relative', top: 0 }}>
              <Appbar.BackAction icon="chevron-left" size={25} color="#fff" onPress={() => navigation.navigate('HomeScreen')}/>
        
              <Appbar.Content title={<View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[styles.headerTitle]}>Select Your 5 Spots</Text></View>} />
        
              {/* <Appbar.Action icon="magnify" color="#fff" size={25} onPress={()=>navigation.navigate('BonusSpotsScreen')}/> */}
            </Appbar.Header>

            <Text style={styles.selectedspot}>0 / 5 spots selected</Text>

            <View style={{flex: 1, marginTop: 20 }}>
                <Tab.Navigator
                    overScrollMode={'auto'}
                    tabBarOptions={{
                        tabStyle: { width: 'auto' },
                      }}
                    screenOptions={{
                        tabBarScrollEnabled: true, 
                        tabBarStyle: { backgroundColor: colors.AppDefaultColor, borderTopWidth: 1,
                            borderBottomWidth: 1, borderTopColor: colors.white, borderBottomColor: colors.white },
                        tabBarActiveTintColor: colors.white,
                        tabBarInactiveTintColor: colors.txtgrey,
                        tabBarGap: 0,
                        tabBarLabelStyle: {
                            fontSize: 16.5, fontFamily: 'Superclarendon-Bold', textTransform: 'none',
                        }, 
                        tabBarIndicatorStyle: { columnGap: 0,height: 2.5,borderRadius: 20, 
                        backgroundColor: colors.white }
                    }}>
                    {categories.map((item) =>
                        <Tab.Screen name={item.title} key={item.id} component={Explore} />
                    )}

                </Tab.Navigator>
            </View>
  

            <ConfirmFiveSpotsModal showModal_ConfirmFiveSpots={showModal_ConfirmFiveSpots} setShowModal_ConfirmFiveSpots={setShowModal_ConfirmFiveSpots}></ConfirmFiveSpotsModal>
            <ConfirmSpotsModal showModal_ConfirmSpots={showModal_ConfirmSpots} setShowModal_ConfirmSpots={setShowModal_ConfirmSpots}></ConfirmSpotsModal>
        </View >
    )
}




// const Card = ({ title,
//     category,
//     type,
//     Link,
//     location,
//     image,
//     setSelectedSpots,
//     selectedSpots
// }) => {
//     const handlespotsPress = (spot) => {
//         if (selectedSpots.includes(spot)) {
//             setSelectedSpots(selectedSpots.filter((item) => item !== spot));
//         } else {
//             setSelectedSpots([...selectedSpots, spot]);
//         }
//     };
//     console.log(selectedSpots)
//     return (

//         <View style={[styles.card, { backgroundColor: selectedSpots.includes(title) ? colors.secondColor : '#2A2C36' }]}>

//             {/* <View style={styles.cardimage}>
//                 <Image source={image} style={styles.image} />
//                 <View style={styles.innercard}>
//                     <View style={styles.toptags}>
//                         <TouchableOpacity style={[styles.tagbtn, { top: -10, left: -5 }]}>
//                             <Text style={styles.btntext}>
//                                 New
//                             </Text>
//                         </TouchableOpacity>

                        
//                         <TouchableOpacity style={[styles.tagbtn, { backgroundColor: '#bc7c34', bottom: -10, left: -5 }]}>
//                             <Text style={styles.btntext}>
//                                 Popular
//                             </Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//             <View style={styles.cardcontent}>
//                 <Text style={[styles.linktext, { color: selectedSpots.includes(title) ? colors.black : '#9796A1' }]}>
//                     {type}<Icon name='circle-small' size={15} color={selectedSpots.includes(title) ? colors.black : '#9796A1'} />Menu Link
//                 </Text>
//                 <Text style={[styles.nametext, { color: selectedSpots.includes(title) ? colors.black : colors.white }]}>
//                     {title}
//                 </Text>
//                 <Text style={[styles.addtext, { color: selectedSpots.includes(title) ? colors.black : '#9796A1' }]}>
//                     {location}
//                 </Text>
//                 <View style={styles.corner}>
//                     <TouchableOpacity onPress={() => handlespotsPress(title
//                     )} style={[styles.heartbox, { backgroundColor: selectedSpots.includes(title) ? '#9E8954' : '#C4C4C4', borderWidth: selectedSpots.includes(title) ? 2 : 0, borderColor: selectedSpots.includes(title) ? colors.white : '#2A2C36' }]}>
//                         <Icon name={selectedSpots.includes(title) ? 'check' : 'heart'} size={20} color={selectedSpots.includes(title) ? colors.white : '#2A2C36'} />
//                     </TouchableOpacity>
//                     <Text style={[styles.ctext, { color: selectedSpots.includes(title) ? colors.black : colors.white }]}>
//                         $$$$
//                     </Text>

//                 </View>
//             </View> */}
//         </View>
//     )
// }


export default SpotsScreen;