import { Dimensions, StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Headerbar from '../../../components/Headerbar';
import { TextInput, TextInputMask } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
 const { width, height } = Dimensions.get('screen');

const Personalinfo = ({ navigation }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState(new Date())
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPass, setConfirmNewPass] = useState('')
    const [open, setOpen] = useState(false)



    const Input = ({ value, setValue, title, iconName, setOpen }) => {
        return (
            <View style={[styles.inputcard]}>
                <TextInput
                    mode='outlined'
                    textColor={colors.white}
                    activeOutlineColor={colors.AppDefaultColor}
                    outlineColor={colors.AppDefaultColor}
                    placeholder={title}
                    placeholderTextColor={colors.white}
                    cursorColor={colors.white}
                    contentStyle={{ fontFamily: 'Superclarendon-Regular', }}

                    style={styles.inputFeild}
                    onChangeText={text => setValue(text)}
                    value={value}
                    right={<TextInput.Icon
                        onPress={() => setOpen(true)}
                        iconColor={colors.white}
                        icon={iconName} />}
                />
            </View>
        )
    }
    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'transparent'} />
            <Headerbar
                goBack={() => navigation.goBack()}
                title={'Personal Information'}
            />
            <ScrollView contentContainerStyle={styles.main}>
                <View style={styles.card1}>

                    <Input
                        value={firstName}
                        setValue={setFirstName}
                        title='FirstName' />
                    <Input
                        value={lastName}
                        setValue={setLastName}
                        title='LastName'
                    />
                    <Input
                        setValue={setDob}
                        setOpen={setOpen}
                        value={dob.toLocaleDateString()}
                        iconName={"calendar-month-outline"}
                    />
                    <Input
                        value={gender}
                        setValue={setGender}
                        title='Gender' />
                    <Input
                        value={email}
                        setValue={setEmail}
                        title='Email' />
                    <Input title='Phone' 
                    value={phone}
                    setValue={setPhone}
                    />
                </View>
                {/* <View style={styles.card2}>
                    <Text style={styles.changeText}>
                        Change Password
                    </Text>
                    <TextInput
                        mode='outlined'
                        textColor={colors.white}
                        activeOutlineColor={colors.AppDefaultColor}
                        outlineColor={colors.AppDefaultColor}
                        placeholder={'Old Password'}
                        placeholderTextColor={colors.white}
                        contentStyle={{ fontFamily: 'Superclarendon-Regular', }}
                        style={[styles.inputFeild, { backgroundColor: '#2A2C36' }]}

                    // onChangeText={handleCardNumberChange}
                    // value={cardNum}  
                    />
                    <TextInput
                        mode='outlined'
                        textColor={colors.white}
                        activeOutlineColor={colors.AppDefaultColor}
                        outlineColor={colors.AppDefaultColor}
                        placeholder={'New Password'}
                        placeholderTextColor={colors.white}
                        style={[styles.inputFeild, { backgroundColor: '#2A2C36' }]}
                        contentStyle={{ fontFamily: 'Superclarendon-Regular', }}
                    // onChangeText={handleCardNumberChange}
                    // value={cardNum}  
                    />
                    <TextInput
                        mode='outlined'
                        textColor={colors.white}
                        activeOutlineColor={colors.AppDefaultColor}
                        outlineColor={colors.AppDefaultColor}
                        placeholder={'Confirm New Password'}
                        placeholderTextColor={colors.white}
                        contentStyle={{ fontFamily: 'Superclarendon-Regular', }}
                        style={[styles.inputFeild, { backgroundColor: '#2A2C36' }]}

                    // onChangeText={handleCardNumberChange}
                    // value={cardNum}  
                    />
                </View> */}
                <TouchableOpacity style={[styles.confirmBtn, {marginTop: 20}]}>
                    <Text style={styles.btnText}>
                        Save
                    </Text>
                </TouchableOpacity>
            </ScrollView>
            <DatePicker
                modal
                mode="date"
                open={open}
                date={dob}
                onConfirm={(date) => {
                    setOpen(false)
                    setDob(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            
        </View >
    )
}

export default Personalinfo

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        height: height,
        backgroundColor: colors.AppDefaultColor,
    },
    main: {
        width: '100%',
        // height: '80%',
        padding: '5%',
    },
    card1: {
        width: '100%',
        gap: 10
    },
    card2: {
        width: '100%',
        gap: 10,
        padding: 15,
        marginVertical: 20
    },
    inputcard: {
        width: "100%",
        backgroundColor: colors.AppDefaultColor
    },
    inputFeild: {
        backgroundColor: '#1F222A',
        paddingLeft: 15,
        justifyContent: 'center',
        borderRadius: 15,
        color: colors.white,
        height: 50,
        fontSize: 14,
        fontFamily: 'Superclarendon-Regular',

    },
    changeText: {
        fontSize: 16,
        color: colors.white,
        alignSelf: 'center',
        fontFamily: 'Superclarendon-Regular',

    },
    confirmBtn: {
        width: '50%',
        height: 55,
        backgroundColor: '#D3C6A5',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'

    },
    btnText: {
        fontSize: 14,
        color: colors.black,
        fontFamily: 'Superclarendon-Regular',

    }
})