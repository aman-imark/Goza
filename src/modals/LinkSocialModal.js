import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar, IconButton, Searchbar } from 'react-native-paper'
import { colors } from '../utils/Colors'
import { Normalize } from '../utils/Size'


const Headerbar = ({
    navigation,
    title
}) => {
    return (
        <Appbar.Header style={styles.appbar} >
            <Appbar.BackAction
                onPress={() =>{ navigation.goBack()}}
                color={colors.textdefult}
                size={25}
            />
            <Appbar.Content title={title}

                // color={colors.textdefult}
                titleStyle={styles.headertitle} />
            <Appbar.Action icon="dots-horizontal"
                size={25}
                color={colors.textdefult}
                style={styles.icon} onPress={() => { }} />
        </Appbar.Header>
    )
}

export default Headerbar

const styles = StyleSheet.create({
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
})