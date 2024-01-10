import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Normalize } from '../../utils/Size'
import { colors } from '../../utils/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const RowCard = ({
    title,
    id,
    btnICon,
    goto
}) => {
    return (
        <View style={styles.box_row}>
            {btnICon && <TouchableOpacity style={styles.iconBtn}>
                <Icon name={btnICon} size={20} color={colors.white} />
            </TouchableOpacity>}
            <View style={[styles.box_col, {width:btnICon?'90%':'100%' }]}>
                <Text style={styles.box_title}>{title}</Text>
                <TouchableOpacity disabled={goto && false} onPress={goto}>
                    <Icon name='chevron-right' size={30} color={colors.white} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RowCard;

const styles = StyleSheet.create({
    box_row: {
        flexDirection: 'row',
        height: 40,
    },
    iconBtn: {
        height: 40,
        width: 40,
        borderRadius: 85,
        backgroundColor: '#2A2C36',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box_col: {
        height: 40,
        width: "90%",
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '4%',
    },
    box_title: {
        fontSize: 18,
        letterSpacing: .2,
        fontFamily: 'Superclarendon-Regular',
        color: colors.white
    }
})