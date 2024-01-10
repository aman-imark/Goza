import { View, Text, StatusBar, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Searchbar } from 'react-native-paper'
 import { styles } from './CategoryStyle'
import { colors } from '../../../utils/Colors'

const CategoryScreen = ({navigation}) => {
    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'transparent'} translucent />
            <Appbar.Header style={styles.appbar} >
                <Appbar.BackAction
                    onPress={() => navigation.navigate('HomeScreen')}
                    color={colors.textdefult}
                    size={25}
                />
                <Appbar.Content title="Bonus: Select Hot Spots! "

                    // color={colors.textdefult}
                    titleStyle={styles.headertitle} />
                <Appbar.Action icon="magnify"
                    size={25}
                    color={colors.textdefult}
                    style={styles.icon} onPress={() => { }} />
            </Appbar.Header>

            <Text style={styles.titletext}>
                February 6-12
            </Text>
            <View style={styles.midbox}>
                <Text style={styles.pragraphtext}>
                    You can select unlimited Hot Spots
                </Text>
            </View>
            <View style={styles.main}>
                <Card />
                <Card />
                <Card />
                <Card />
            </View>
            <View style={styles.bottomrow}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: '#2A2C36', borderColor: colors.white, borderWidth: 1, }]}>
                    <Text style={[styles.bottombtnt, { color: colors.white }]}>
                        Skip
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn]}>
                    <Text style={styles.bottombtnt}>
                        Finished
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CategoryScreen;




const Card = () => {
    return (
        <View style={styles.card}>
            <View style={styles.cardcontent}>
                <Text style={styles.nametext}>
                    Don Angie
                </Text>
                <Text style={styles.addtext}>
                    Saturday @ 8 p.m.
                </Text>
                <Text style={styles.addtext}>
                    Manhattan, NY
                </Text>
                <Text style={styles.linktext}>
                    Menu Link
                </Text>
                <View style={styles.corner}>
                    <Text style={styles.ctext}>
                        $$$$
                    </Text>
                    <Text style={styles.typetext}>
                        Mexican
                    </Text>
                </View>
            </View>
            <View style={styles.cardimage}>
                <Image source={require('../../../assets/Images/Home/Spots/spot_1.png')} style={styles.image} />
                <View style={styles.innercard}>
                    <View style={styles.toptags}>
                        <TouchableOpacity style={styles.tagbtn}>
                            <Text style={styles.btntext}>
                                New
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity style={styles.selectbtn}>
                        <Text style={[styles.btntext, { color: colors.black }]}>
                            Select Spot
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}