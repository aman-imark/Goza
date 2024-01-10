import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { Normalize } from '../../utils/Size';
import { colors } from '../../utils/Colors';

import DatePicker from 'react-native-date-picker'
import { Picker } from '@react-native-picker/picker';
import globalStyle from '../../utils/globalStyle';



const BirthHeight = ({ setProgress }) => {
    const [birthday, setBirthday] = useState(new Date())
    const [height, setHeight] = useState(new Date())

    const lengthData = {
        1: "4 feet",
        2: "4 feet 1 inches",
        3: "4 feet 2 inches",
        4: "4 feet 3 inches",
        5: "4 feet 4 inches",
        6: "4 feet 5 inches",
        7: "4 feet 6 inches",
        8: "4 feet 7 inches",
        9: "4 feet 8 inches",
        10: "4 feet 9 inches",
        11: "4 feet 10 inches",
        12: "4 feet 11 inches",
        13: "5 feet",
        14: "5 feet 1 inches",
        15: "5 feet 2 inches",
        16: "5 feet 3 inches",
        17: "5 feet 4 inches",
        18: "5 feet 5 inches",
        19: "5 feet 6 inches",
        20: "5 feet 7 inches",
        21: "5 feet 8 inches",
        22: "5 feet 9 inches",
        23: "5 feet 10 inches",
        24: "5 feet 11 inches",
        25: "6 feet ",
        26: "6 feet  1 inches",
        27: "6 feet  2 inches",
        28: "6 feet  3 inches",
        29: "6 feet  4 inches",
        30: "6 feet  5 inches",
        31: "6 feet  6 inches",
        32: "6 feet  7 inches",
        33: "6 feet  8 inches",
        34: "6 feet  9 inches",
        35: "6 feet  10 inches",
        36: "6 feet  11 inches",
        37: "7 feet  "
    };


    // const [height, setHeight] = useState('')

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)




    const input1 = useRef()
    const input2 = useRef()

    return (
        <View style={styles.namecard}>
            <View style={[styles.inputcard, globalStyle.mrb1]}>
                <Text style={styles.lebel}>Birthday: </Text>
                {/* <TouchableOpacity onPress={() =>setOpen(true)}> */}
                <TextInput
                    // placeholder='Select'
                    ref={input1}
                    onPressIn={() => setOpen(true)}
                    placeholderTextColor={'#9E9E9E'}
                    style={styles.inputFeild}
                    onChangeText={newText => setBirthday(newText)}
                    value={birthday.toLocaleDateString()}
                    onSubmitEditing={() => input2.current.focus()}
                    editable = {false}
                />
                {/* </TouchableOpacity> */}
            </View>

            <View style={[styles.inputcard, globalStyle.mrt2]}>
                <Text style={styles.lebel}>Height:</Text>
                <TextInput
                    ref={input2}
                    // autoFocus={true}
                    onPressIn={() => setOpen2(true)}
                    placeholder='Select'
                    placeholderTextColor={'#9E9E9E'}
                    style={styles.inputFeild}
                    onChangeText={newText => setHeight(newText)}
                    value={height.toLocaleTimeString()}
                    // onSubmitEditing={() => }
                    editable = {false}
                />
                 
            </View>
            <DatePicker
                title = "Select Date"
                modal
                mode="date"
                open={open}
                date={birthday}
                onConfirm={(date) => {
                    setOpen(false)
                    setBirthday(date)
                    console.log(birthday, '-----------');
                    // input2.current.focus()
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            <DatePicker
                title = "Select Height"
                modal
                mode="time"
                open={open2}
                date={height}
                onConfirm={(height) => {
                    setOpen2(false)

                 const time =  height.toLocaleTimeString();
                 console.log(time);

                 const format = time.split(':');
                 const feet = time[0];
                 const inches = time[2];

                 console.log(feet);
                 console.log(inches);

                const heightValue = time[0]+'Feet '+time[2]+'Inche ';
                console.log(heightValue);
           

                    setHeight(height);
                    setProgress((prev)=> prev+ 0.10)
                    // console.log(height.toLocaleTimeString());

                    // console.log(height, '-----------');
                    // input2.current.focus()
                }}
                onCancel={() => {
                    setOpen2(false)
                }}
            />
        </View>
    )
}

export default BirthHeight

const styles = StyleSheet.create({

    namecard: {
        marginTop: 55,
        width: '100%'
    },

    lebel: {
        fontSize: 21,
        color: colors.white,
        lineHeight: 32,
        fontFamily: 'Superclarendon-Regular',
    },
    inputFeild: {
        backgroundColor: '#1E1F28', 
        paddingLeft: 30,
        justifyContent: 'center',
        borderRadius: 4,
        color: colors.white,
        height: 58,
        marginTop: 16,
        fontSize: 16,
        fontFamily: 'Superclarendon-Regular',

    },
    inputcard: {
        width: '100%',
        // marginTop: 30
    }
});