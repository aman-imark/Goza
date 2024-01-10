import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SelfieVerification from '../../components/Profile/SelfieVerification'

const SelfieScreen = ({navigation}) => {
    const [svmodal, setSvmodal] = useState(false)
    
    useEffect(() => {
      setSvmodal(true)
    
    }, [ ])
    
    return (
        <View style={styles.Container}>
            <View style={styles.bottomlayout}>
                <TouchableOpacity style={styles.circlebtn}>
                    <Icon name='circle' size={60} color={'#F7214E'} />
                </TouchableOpacity>
            </View>
            <SelfieVerification svmodal={svmodal} setSvmodal={setSvmodal} />
        </View>
    )
}

export default SelfieScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#C9C9C9',
    },
    bottomlayout: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '10%'

    },
    circlebtn: {
        height: 80,
        width: 80,
        // opacity:0.5,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#F7214Eaa',
        borderWidth: 8,
    }
})