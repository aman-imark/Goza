
import { View, Text, StatusBar, TouchableOpacity, ScrollView, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Appbar } from 'react-native-paper';

import { colors } from '../../../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Fontisto';
import IconO from 'react-native-vector-icons/Octicons';



const { width, height } = Dimensions.get('screen');
console.log(height);



const BonusSpotsScreen = ({ navigation }) => {

    const [category_index, setCategory_index] = useState(0);


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

    const [selectedSpots, setSelectedSpots] = useState([]);

    const handlespotsPress = (spot) => {
        console.log(spot)
        if (selectedSpots.includes(spot)) {
            setSelectedSpots(selectedSpots.filter((item) => item !== spot));
        } else {
            setSelectedSpots([...selectedSpots, spot]);
        }
    };

    
    const rnd = 0
    useEffect(() => {
        const nr = rnd + 1
        console.log(nr)
    }, [])


    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

  


    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'transparent'} translucent />
            <Appbar.Header style={styles.appbar} >
               <Appbar.BackAction onPress={() => navigation.navigate('SpotsScreen')} color={colors.textdefult} size={25}/>
               <Appbar.Content title={<View style={{alignItems: 'center', justifyContent: 'center' }}>
                 <Text style={[styles.nameTitle]}>Bonus: Select Hot Spots!</Text>
                 <Text style={[styles.nameTitle]}>February 6-12</Text></View>} />
               {/* <Appbar.Action icon="magnify" color="#fff" size={25} onPress={()=>navigation.navigate('SearchScreen')}/> */}
            </Appbar.Header>


            <View style={styles.midbox}>
                <Text style={styles.titletext}>You can select unlimited Hot Spots</Text>
            </View>
            <View style={styles.main}>
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

            <View style={styles.bottomrow}>
                <TouchableOpacity onPress={() => navigation.navigate('SpotsScreen')} 
                    style={[styles.btn, { backgroundColor: '#2A2C36', borderColor: '#F6F6F6', borderWidth: 1, borderStyle: 'solid' }]}>
                    <Text style={[styles.btnText, { color: colors.white }]}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SpotsScreen')}  style={[styles.btn]}>
                    <Text style={styles.btnText}>Finished</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
 

export default BonusSpotsScreen;



const styles = StyleSheet.create({
    Container: {
        flex: 1,
        height: height,
        backgroundColor: colors.AppDefaultColor,
    },
    nameTitle: {
        fontFamily: 'Superclarendon-Regular',
        color: colors.textdefult,
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center',
      },
      detailSubTitle: {
        fontFamily: 'Superclarendon-Regular',
        color: colors.textdefult,
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center'
      },

    appbar: {
        backgroundColor: colors.AppDefaultColor
    },


    titletext: {
        color: '#F5F5F5',
        opacity: 0.8,
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'center',
        fontFamily: 'Superclarendon-Regular',
        // position: 'absolute',
        // top: 75,
        alignSelf: 'center'
    },
    midbox: {
        width: '100%',
        alignItems: 'center',
        marginTop: 28,
        marginBottom: 10,
     },
    pragraphtext: {
        color: colors.textdefult,
        fontSize: 15,
        lineHeight: 17,
        textAlign: 'center',
        position: 'absolute',
        fontFamily: 'Superclarendon-Regular',
         // marginVertical:25
    },
    main: {
        flex: 0.885,
        // height: '100%',
        width:'100%',
        padding:15,
        gap:16,
    },
    card: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        // height: 10,
        borderRadius: 10,
        backgroundColor: '#2A2C36',
        // overflow: 'hidden',
        // padding: 17, 
    },
    cardimage: {
        height: 110,
        width: '26%', 
        justifyContent:'center'
    },
    image: {
        width: 66,
        height: 66,
        resizeMode: 'cover',
        borderRadius: 6,
        opacity: 0.8
    },
    nametext: {
        color: colors.textdefult,
        fontSize: 16,
        fontFamily: 'Superclarendon-Regular',
        
    },
    addtext: {
        color: colors.txtgrey,
        fontSize: 13.5,
        lineHeight: 18,
        fontFamily: 'Superclarendon-Light',
    },
    linktext: {
        color: colors.textdefult,
        fontSize: 13,
        fontFamily: 'Superclarendon-Regular',
        textAlignVertical: 'center'
    },

    cardcontent: {
        width: '74%',  
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        flex: 1,
        position: 'relative',
    },

    corner: {
        flex: 1,
        position: 'relative',
    },
   

    ctext: {
        color: colors.textdefult,
        fontSize: 22,
        fontFamily: 'Superclarendon-Regular',
        
    },
    heartbox:{
        height: 28,
        width: 28,
        borderRadius:25,
        backgroundColor:'#C4C4C4',
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    typetext: {
        color: colors.txtgrey,
        fontSize: 10,
        fontFamily: 'Superclarendon-Regular',
        
    },
    innercard: { 
        top: 0,
        bottom: 0,
        left: 0,
        position:'absolute'
    },
    
    toptags: {
        height: '100%',
        justifyContent: 'space-between',
    },
    tagbtn: {
        height: 22,
        borderRadius: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    btntext: {
        color: '#F7F7F7',
        fontSize: 12.5,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Superclarendon-Regular',
    },
    selectbtn: {
        backgroundColor: '#D3C6A5',
        height: 18,
        // width:34,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
    },


    bottomrow:{
        position:'absolute',
        bottom:0,
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        gap: 30,
        height:70,
        alignItems:'center',
        backgroundColor: '#2A2C36',
    },
    
    btn: {
        // width: '45%',
        height: 40,
        backgroundColor: '#D3C6A5',
        borderRadius: 6,
        paddingHorizontal:20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    btnText: {
        color: colors.black,
        fontSize: 18,
        lineHeight: 25,
        fontFamily: 'Superclarendon-Regular',
        letterSpacing: .2
    }
});