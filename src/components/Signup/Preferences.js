import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useCallback } from 'react'
import { colors } from '../../utils/Colors';
import { Normalize } from '../../utils/Size'; 
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Slider } from '@miblanchard/react-native-slider';
import globalStyle from '../../utils/globalStyle';


const { width, height } = Dimensions.get('screen');


const Preferences = ({ setProgress }) => {

    const [Maxvalue, setMaxValue] = useState(65)
    const [Minvalue, setMinValue] = useState(18)
    // const [value, setValue] = useState('')
    const [value, setValue] = useState('')
    return (
        <>
            <View style={styles.namecard}>
                <Text style={[styles.title, globalStyle.fRegular]}>Your preferences:</Text>
                <View style={styles.inputcard}>
                    <Text style={styles.lebel}>Interested:</Text>
                    <SegmentedControlTab
                        tabStyle={{
                            backgroundColor: '#2A2C36',
                            borderColor: '#2A2C36',
                            // borderRadius: 10,
                        }}
                        tabTextStyle={{ color: colors.white }}
                        activeTabStyle={{ backgroundColor: colors.white, borderRadius: 10 }}
                        activeTabTextStyle={{
                            color: colors.black,
                            fontSize: 12,
                            fontFamily: 'Superclarendon-Regular',
                            letterSpacing: .5
                        }}
                        tabsContainerStyle={styles.segmentBtn}
                        borderRadius={10}
                        values={["Women", "Men", "Both"]}
                        selectedIndex={value}
                        onTabPress={setValue}
                    />
                </View>
                <View style={styles.inputcard}>
                    <Text style={styles.lebel}>Age:</Text>
                    <Slider
                        value={value}
                        maximumValue={Maxvalue}
                        minimumValue={Minvalue}
                        trackMarks
                        onValueChange={value => setValue(value)}
                    />

                </View>
                <View style={styles.inputcard}>
                    <Text style={styles.lebel}>Height:</Text>
                    <Slider
                        value={value}
                        maximumValue={Maxvalue}
                        minimumValue={Minvalue}
                        trackMarks
                        onValueChange={value => setValue(value)}
                    />

                </View>
                <View style={styles.inputcard}>
                    <Text style={styles.lebel}>Distance:</Text>
                    <Slider
                        value={value}
                        maximumValue={Maxvalue}
                        minimumValue={Minvalue}
                        trackMarks
                        onValueChange={value => setValue(value)}
                    />

                </View>
                <TouchableOpacity  style={[styles.inputFeild, { }]}>
                    <Text style={[styles.btnText]}>
                    Ethnicity
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => setProgress((prev) => prev + 0.1)} style={styles.btn}>
                <Text style={styles.btnText}>
                    Continue
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default Preferences


const styles = StyleSheet.create({

    namecard: {
        marginTop: 30,
        width: '100%'
    },

    title: {
        fontSize: 21,
        color: colors.white,
        lineHeight: 32,
        fontFamily: 'Superclarendon-Regular',
    },
    lebel: {
        fontSize: 16,
        color: colors.white,
        lineHeight: 32,
        fontFamily: 'Superclarendon-Regular',
    },

    segmentBtn: {
        height: 55,
        borderRadius: 10,
        backgroundColor: '#1E1F28',
        justifyContent: 'center',
        borderColor: '#1E1F28',
        marginTop: 16,

    },
    inputFeild: {
        backgroundColor: '#1E1F28',
        paddingLeft: 30,
        justifyContent: 'center',
        borderRadius: 4,
        color: colors.lightygrey,
        height: 58,
        marginTop: 16,
        fontSize: 16,
        fontFamily: 'Superclarendon-Regular',

    },
    inputcard: {
        width: '100%',
        marginTop: 20,
    },
    addtext: {
        color: colors.lightygrey,
        fontSize: 12,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'right',
        lineHeight: 17,
        letterSpacing: 0.2,
        marginTop: 15,
    },
    btn: {
        backgroundColor: '#2A2C36',
        justifyContent: 'center',
        alignItems: 'center',
        height: 58,
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 5,
        width: width - 40,

    },
    btnText: {
        color: colors.white,
        fontSize: 17,
        fontFamily: 'Superclarendon-Regular',
        alignSelf: 'center',
        letterSpacing: 2.2,
        lineHeight: 23
    }
});