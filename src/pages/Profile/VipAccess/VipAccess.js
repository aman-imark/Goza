import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Appbar, IconButton, Searchbar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './VipStyle'
import { colors } from '../../../utils/Colors'
import Headerbar from '../../../components/Headerbar'
import VipCard from '../../../components/Profile/VipCard'

const VipAccess = ({ navigation }) => {
    const vipaccess = [
        {
            id: 1,
            time: 'month',
            amount: '9.99'
        },
        {
            id: 2,
            time: '6 months',
            amount: '49.99'
        },
        {
            id: 3,
            time: '12 months',
            amount: '89.99'
        }
    ]
    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'transparent'} />
            <Headerbar  
            goBack={()=>navigation.goBack() } 
            title={'VIP Access'} 
            icon="dots-horizontal"
            />
            <ScrollView contentContainerStyle={styles.main}>
                <Text style={styles.heading}>
                    Enjoy unlimited likes
                </Text>
                {
                    vipaccess.map((item) => {
                        return (
                            <TouchableOpacity 
                            key={item.id}
                            onPress={() => navigation.navigate('Method')}>

                                <VipCard
                                     amount={item.amount}
                                    time={item.time}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default VipAccess
