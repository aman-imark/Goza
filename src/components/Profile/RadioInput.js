import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RadioInput = () => {
    return (
        <View style={styles.btn}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Lottie source={require('../../../assets/icons/Lottie/google.json')} autoPlay loop style={{ height: 60, width: 60 }} autoSize />
                <Text style={styles.paymentText}>
                    Google Pay
                </Text>
            </View>
            <RadioButton
                
                value="Google"
                status={checked === 'Google' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Google')}
                color={'#9610FF'}
            />
        </View>
    )
}

export default RadioInput

const styles = StyleSheet.create({ 
    
    btn:{
        height:70,
        width:'100%',
        backgroundColor:'#1F222A',
        padding:20,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:18,
        justifyContent:'space-between'
    },
    paymentText:{
        fontSize:18,
        color:colors.white,
        fontFamily: 'Superclarendon-Bold',

    }
})