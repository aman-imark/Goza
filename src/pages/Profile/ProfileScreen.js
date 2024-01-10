import { View, Text, StatusBar, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Appbar, IconButton, Searchbar } from 'react-native-paper'
import { styles } from './ProfileStyle'
import { colors } from '../../utils/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import RowCard from '../../components/Profile/RowCard'

import { storeData, getData, removeData, clearData } from '../../services/storageService';
import { postApiCall, getApiCall } from '../../services/apiCall';



const ProfileScreen = ({ navigation }) => {

    useEffect(() => {
        getStoreData();
    }, [ ])


    const getStoreData = async () => {
        const data = await getData('setUser').then( (data) => {
            console.table(data);
            getUserProfile();
            // setResponse(data);
        });
    };



    const getUserProfile = () => {
        console.log('uehfuwh');
        getApiCall('/my-spots', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTk3ZjNkOTRhMDg5ZDhlMDNjZTE5MGQ2MmU4ZjFjYTk0M2JkNWMyNmNmYzFkNWMzZDcwMTdmMTcyMGUyZWViZjFjMTk1MmNmNTI0MzI5MWEiLCJpYXQiOjE2ODI0MDI3NzguODA4OTY1OTIxNDAxOTc3NTM5MDYyNSwibmJmIjoxNjgyNDAyNzc4LjgwODk3MDkyODE5MjEzODY3MTg3NSwiZXhwIjoxNzE0MDI1MTc4Ljc5MDI5Nzk4NTA3NjkwNDI5Njg3NSwic3ViIjoiMTkiLCJzY29wZXMiOltdfQ.j1Pi4AZYILXkJfFBLH2XHq5yk4I8KCckO4llhT1XFyU9Vrnojti2grnUlytv6zuDb111JWUilRnxYBa6z1tQ8L8GIN15vOPFR050mDhDBsr4Yf45k9sKNh75IG7e1h2g9VVsNHN0u52M1SOrGWOhtMgqPCLO_5nA0BhVZHGZkcCkHcT0wdup5qsmyfk4CPCFz2v6_IWvAKkNM0_xxKI5uTii3U_4o841g5VgdPtz82M99j6ELusCD2yGfRlOaDdiYTdZyDYWeEVRcp6U40vOgMjzNp7KM9QtqwsOpOItPzsWehpev4xC6BZYOilpyxkqLhMmJn1Y_qCiK6HTa-xK51JKVrV0LNvSJS-F75CNLyeIEsmqxnxEkpEaygxZ5AyWg4SGwisSkl5S72IukWew6cd3wMeyqIC2jIUR9BgGGg0SJ3_jYs43Elwh3EffTEdCbICNFCCf9ZdNPIITTtBlsMalXIa8DGcmP8n6fRW5Umg6JW6gcvcU1Y--QOtPsAf5qAib6mRRkAXlQK1z9ZbgmmldiajVFwR3G5_ny_v_g9jq2iWvZjOylhOgej9bcDxOejlXs5Ssyx6SXfmWgfTMVYhlFlo9cMyX0jUlZYZi5lSVvtKUwjy1kDjFciq_MafGzVUCdfyuUM6QwDjHaxrFrzxIgef6yZozHgpjP92sKis').then( (res) => {
            console.log(res);
        }).catch( (err) => { console.log(err) });
    }
    



    const data = [
        {
            id: 1,
            btnICon: 'cog-outline',
            title: 'Settings',
            screen:'Setting'
        },
        {
            id: 2,
            btnICon: 'pencil-box',
            title: 'Contact Us',
            screen:'Contact'
        },
        {
            id: 3,
            btnICon: 'account-group-outline',
            title: 'Invite Friends',
            screen:'Invite'
        },
        {
            id: 4,
            btnICon: 'compass',
            title: 'Dating Preferences',
            screen:'D_Preferences'
        },
    ];





    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'transparent'} />
            <Appbar.Header style={styles.appbar} >
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}
                    color={colors.textdefult}
                    size={25}
                />
                <Appbar.Content title="My Profile"

                    // color={colors.textdefult}
                    titleStyle={styles.headertitle} />
                <Appbar.Action icon="dots-horizontal"
                    size={25}
                    color={colors.textdefult}
                    style={styles.icon} onPress={() => { }} />
            </Appbar.Header>



            
            <View style={styles.profilecard}>
                <Image source={require('../../assets/Images/Uploaded/uploaded_2.png')} style={styles.profile_img} />
                <Text 
                onPress={getUserProfile} 
                style={styles.edit}>
                    Edit  <Icon name='pencil-outline' size={15} color={colors.textdefult} />
                </Text>
            </View>
            <View style={styles.main}>
                <View style={styles.vip_card}>
                    <Text style={styles.title}>
                        Get unlimited likes
                    </Text>
                    <View style={styles.vip_row}>
                        <View style={styles.vip_content}>
                            <Text style={styles.vip_contentText}>
                                Enjoy unlimited likes
                                without restrictions
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('VipAccess')} style={styles.vip_btn}>
                                <Text style={styles.vip_btnText}>
                                    Get VIP Access
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image source={require('../../assets/Images/Profile/Vip_image.png')} style={styles.vip_image} />
                        </View>
                    </View>
                </View>

                <View style={styles.box}>
                    {data.map(({id,title,btnICon,screen}, i) => {
                        return (
                            <TouchableOpacity onPress={()=>navigation.navigate(screen)} key={i}>
                                <RowCard
                                    id={ id}
                                    title={ title}
                                    btnICon={ btnICon}
                                    goto={()=>navigation.navigate(screen)}
                                />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>

        </View>
    )
}

export default ProfileScreen