import { View, Text, StatusBar, TouchableOpacity, BlurView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './SettingStyle'
import Headerbar from '../../../components/Headerbar'
import RowCard from '../../../components/Profile/RowCard'
import Logout from '../../../components/Profile/Logout'
import DeleteModal, { PauseAcc } from '../../../components/Profile/DeleteModal'

const SettingScreen = ({ navigation }) => {

    const [logoutmodal, setLogoutmodal] = useState(false)
    const [deleteopen, setDeleteopen] = useState(false)
    const [pauseMod, setPauseMod] = useState(false)

    const settigOptions = [
        {
            id: 1,
            btnICon: 'account',
            title: 'Personal Information',
            screen: 'Personalinfo'
        },
        {
            id: 2,
            btnICon: 'bell',
            title: 'Notifications',
            screen: 'Notification'
        },
        {
            id: 3,
            btnICon: 'information',
            title: 'About Goza',
            screen: 'Setting'
        },

    ]
    const accountOptions = [
        {
            id: 1,
            title: 'Pause My Account',
            screen: 'Setting'
        },
        {
            id: 2,
            title: 'Delete Account',
            screen: 'Contact'
        },
        {
            id: 3,
            title: 'Logout',
            screen: ''
        },
    ]

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'transparent'} />
            <Headerbar
                goBack={() => navigation.goBack()}
                title={'Settings'}
            />
            <View style={styles.main}>
                <View style={styles.card}>

                    {settigOptions.map(({ id, title, btnICon, screen }, i) => {
                        return (
                            <TouchableOpacity onPress={ () => navigation.navigate(screen)} key={i}>
                                <RowCard
                                    id={id}
                                    title={title}
                                    btnICon={btnICon}
                                    // goto={() => navigation.navigate(screen)}
                                />
                            </TouchableOpacity>
                        )
                    })}
                </View>

                
                <View>
                    <TouchableOpacity style={{marginVertical: 5}}
                        onPress={() => setPauseMod(true)} >
                        <RowCard title={'Pause My Account'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginVertical: 5}}
                        onPress={() => setDeleteopen(true)}>
                        <RowCard title={'Delete Account'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginVertical: 5}}
                        onPress={() => setLogoutmodal(true)} >
                        <RowCard title={'Logout'}/>
                    </TouchableOpacity>
                </View>
            </View>

            <PauseAcc pauseMod={pauseMod} setPauseMod={setPauseMod} />
            <DeleteModal setDeleteopen={setDeleteopen} deleteopen={deleteopen} setPauseMod={setPauseMod} />
            <Logout logoutmodal={logoutmodal} setLogoutmodal={setLogoutmodal} />
        </View> 
    )
}

export default SettingScreen