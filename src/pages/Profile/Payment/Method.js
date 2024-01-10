import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './PaymentStyle'
import Headerbar from '../../../components/Headerbar'
import { TextInput } from 'react-native-paper';
import MethodButton from '../../../components/Profile/MethodButton';
// import { TextInput } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../../utils/Colors';

const Method = ({ props, navigation }) => {
    const [showAddCard, setShowAddCard] = useState(false);
    const [cardName, setCardName] = useState('')
    const [cardNum, setCardNum] = useState('')
    const [expDate, setExpDate] = useState(new Date())
    const [cvv, setCvv] = useState('')
    const [open, setOpen] = useState(false)
    const methods = [
        {
            id: 1,
            method: 'google',
            title: 'Google Pay',
            icon: require('../../../assets/icons/google.png')
        },
        {
            id: 2,
            method: 'apple',
            title: 'Apple Pay',
            icon: require('../../../assets/icons/apple.png')
        },
        {
            id: 3,
            method: 'mastercard',
            title: '•••• •••• •••• •••• 4679',
            icon: require('../../../assets/icons/mastercard.png')
        }
    ]

    const handleCardNumberChange = (text) => {
        // Remove any non-digit characters from the input
        const cleanedText = text.replace(/\D/g, '');

        // Insert a space after every 4 digits
        const formattedText = cleanedText.replace(/(.{4})/g, '$1 ');

        // Update the state with the formatted text
        setCardNum(formattedText);
    };

    /* -------------add mastercard Code-------------- */

    const Addcard = () => {
        return (
            <View style={styles.addcard}>
                <View style={[styles.inputcard]}>
                    <Text style={styles.lebel}>Card Name</Text>
                    <TextInput
                        mode='outlined'
                        textColor={colors.white}
                        activeOutlineColor='#1F222A'
                        outlineColor='#1F222A'
                        placeholder='Card Name'
                        placeholderTextColor={'#9E9E9E'}
                        style={styles.inputFeild}
                        onChangeText={newText => setCardName(newText)}
                        value={cardName}

                    />
                </View>

                <View style={[styles.inputcard]}>
                    <Text style={styles.lebel}>Card Number</Text>
                    <TextInput
                        mode='outlined'
                        textColor={colors.white}
                        activeOutlineColor='#1F222A'
                        outlineColor='#1F222A'
                        placeholder='Card Number'
                        textContentType='creditCardNumber'
                        placeholderTextColor={'#9E9E9E'}
                        style={styles.inputFeild}
                        onChangeText={handleCardNumberChange}
                        value={cardNum}
                        keyboardType={'number-pad'}

                    />
                </View>
                <View style={styles.inputRow}>
                    <View style={[styles.inputcard, { width: '45%', gap: 10 }]}>
                        <Text style={styles.lebel}>Expiry Date</Text>
                        <TextInput
                            // placeholder='Select'
                            disabled
                            onPressIn={() => setOpen(true)}
                            placeholderTextColor={'#9E9E9E'}
                            style={styles.inputFeild}
                            textColor={colors.white}
                            onChangeText={newText => setExpDate(newText)}
                            value={expDate.toLocaleDateString()}
                            right={<TextInput.Icon
                                onPress={() => setOpen(true)}
                                iconColor={colors.white}
                                icon="calendar-month-outline" />}
                        />
                    </View>
                    <View style={[styles.inputcard, { width: '45%' }]}>
                        <Text style={styles.lebel}>CVV</Text>
                        <TextInput
                            mode='outlined'
                            activeOutlineColor='#1F222A'
                            outlineColor='#1F222A'
                            placeholder='***'
                            textColor={colors.white}
                            placeholderTextColor={'#9E9E9E'}
                            style={styles.inputFeild}
                            onChangeText={newText => setCvv(newText)} value={cvv}
                            keyboardType={'number-pad'}

                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Summary')} style={[styles.continuebtn, { marginTop: 40 }]}>
                    <Text style={styles.cText}>
                        Continue
                    </Text>
                </TouchableOpacity>
                <DatePicker
                    modal
                    mode="date"
                    open={open}
                    date={expDate}
                    onConfirm={(date) => {
                        setOpen(false)
                        setExpDate(date)
                        console.log(expDate, '-----------');
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
        )
    }

    /*---------------all methods component---------------- */

    const Allmethods = () => {
        return (
            <>
                <View style={styles.methodbox}>
                    <Text onPress={() => navigation.goBack()} style={styles.title}>
                        Select the payment method you want to use.
                    </Text>

                    {methods.map((item, i) => {
                        return (
                            <TouchableOpacity key={i} onPress={() => setChecked(item.method
                            )}>
                                <MethodButton
                                    title={item.title}
                                    method={item.method}
                                    icon={item.icon}
                                    checked={checked}
                                />
                            </TouchableOpacity>
                        )
                    })}


                    <Text onPress={() => setShowAddCard(true
                    )} style={styles.addtext}>
                        + Add New Card
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Summary')} style={styles.continuebtn}>
                    <Text style={styles.cText}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </>
        )
    }


    const [checked, setChecked] = useState('')
    return (
        <View style={styles.Container} >
            <StatusBar backgroundColor={'transparent'} />
            <Headerbar
                goBack={() => navigation.goBack()}
                title={'Payment Method'}
                icon="dots-horizontal"
            />
            <View style={styles.main}>
                {
                    showAddCard ?
                        <Addcard /> :
                        <Allmethods />
                }

            </View>
        </View >
    )
}

export default Method


/* -------------add mastercard Code-------------- */
