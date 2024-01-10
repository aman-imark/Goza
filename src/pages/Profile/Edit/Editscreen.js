import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../utils/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Appbar } from 'react-native-paper';
import ViewProfile from '../../../components/Profile/ViewProfile';
import EditProfile from '../../../components/Profile/EditProfile';


const { width, height } = Dimensions.get('screen');

const Editscreen = ({ navigation }) => {
    const [screen, setScreen] = useState('view');
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
                <Image source={require('../../../assets/Images/Uploaded/uploaded_2.png')} style={styles.profile_img} />
                <Text onPress={()=>navigation.navigate('EditScreen')} style={styles.edit}>
                    Edit  <Icon name='pencil-outline' size={15} color={colors.textdefult} />
                </Text>
            </View>

            {/* <View style={styles.profilecard}>
                <TouchableOpacity activeOpacity={1}>
                    <Image source={require('../../../assets/Images/Uploaded/uploaded_2.png')} style={styles.profile_img} />
                </TouchableOpacity>
            </View> */}
            <View style={styles.navrow}>
                <TouchableOpacity onPress={() => setScreen('view')} style={[styles.linkbtn, { borderBottomColor: screen === 'view' ? colors.textdefult : colors.AppDefaultColor, }]}>
                    <Text style={styles.linktext}>Public View</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setScreen('edit')} style={[styles.linkbtn, { borderBottomColor: screen === 'edit' ? colors.textdefult : colors.AppDefaultColor, }]}>
                    <Text style={styles.linktext}>Edit Profile</Text>
                </TouchableOpacity>
            </View>



            <View style={styles.main}>
                {/* <EditProfile/> */}
                {
                    screen === 'view' ?
                        <ViewProfile />
                        : screen === 'edit' ? <EditProfile /> : <></>
                }
            </View>

            
        </View>
    )
}

export default Editscreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.AppDefaultColor,
    },
    appbar: {
        backgroundColor: colors.AppDefaultColor
    },
    headertitle: {
        color: colors.textdefult,
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center'
    },
    icon: {

    },
    profilecard: {
        height: 150,
        width: width - 100,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '4%',
    },
    profile_img: {
        height: 150,
        width: 150,
        borderRadius: 150,
        resizeMode: 'cover'
    },
    edit: {
        color: colors.textdefult,
        fontSize: 14,
        lineHeight: 22,
        fontFamily: 'Superclarendon-Regular',
        position: 'absolute',
        right: 0
    },
    main: {
        width: width,
        // paddingVertical: '4%',  
    },
    navrow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 35,
        backgroundColor: colors.AppDefaultColor,
        paddingVertical: 10,
        marginTop: 15
    },
    linkbtn: {
        borderBottomColor: colors.AppDefaultColor,
        borderBottomWidth: 2,
        padding: 3
    },
    linktext: {
        color: colors.textdefult,
        fontSize: 16,
        fontFamily: 'Superclarendon-Regular',

    }
})