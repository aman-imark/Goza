import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../../utils/Colors'
import { Divider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const VipCard = ({
    time,
    amount
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.row1}>
                <Image source={require('../../assets/Images/Profile/Vip_image.png')} style={styles.vipimage} />
                <View style={styles.atbox}>
                    <Text style={styles.atext}>
                        ${amount}
                    </Text>
                    <Text style={styles.ttext}>
                        /{time}
                    </Text>
                </View>
            </View>
            <Divider />
            <View style={styles.row2}>
                <View style={{flexDirection:'row',gap:20}}>
                    <Icon name={'check'} size={20} color={colors.txtgrey} />
                    <Text style={styles.mtext}>
                        Unlimited Swiping & Likes
                    </Text>
                </View>
                <View style={{flexDirection:'row', gap:20}}>
                    <Icon name={'check'} size={20} color={colors.txtgrey} />
                    <Text style={styles.mtext}>
                        Remove Restrictions & Ads
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default VipCard

const styles = StyleSheet.create({
    card: {
        height: 210,
        width: '100%',
        backgroundColor: '#1F222A',
        borderWidth: 1,
        borderColor: colors.txtgrey,
        borderRadius: 5,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row1: {
        width: '100%',
        alignItems: 'center',
        height: '60%',
        borderBottomWidth: .3,
        borderColor: colors.txtgrey
    },
    row2: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    vipimage: {
        height: 35,
        width: 40,
        resizeMode: 'contain',
        tintColor: colors.txtgrey
    },
    atbox: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6
    },
    atext: {
        fontSize: 25,
        color: colors.white,
        fontFamily: 'Superclarendon-Bold',

    },
    ttext: {
        fontSize: 15,
        color: colors.white,
        fontFamily: 'Superclarendon-Bold',

    },
    mtext: {
        fontSize: 13,
        color: colors.white,
        fontFamily: 'Superclarendon-Regular',

    }

});