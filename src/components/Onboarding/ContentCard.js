import { Dimensions, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import React from 'react'
import { colors } from '../../utils/Colors';
import globalStyle from '../../utils/globalStyle';
 
const { width, height } = Dimensions.get('screen');


const ContentCard = ({ContentText, btnName,handleNextPress}) => {
    return (
        <View style={[globalStyle.center, styles.content]}>
            <View style={{width: '70%'}}>
            <Text style={[globalStyle.h3, globalStyle.pdt1, globalStyle.txtCenter]}>
                {ContentText}
            </Text>
            </View>

            <View style={{width: '88%', position: 'absolute', bottom: '12%'}}>
            <TouchableOpacity onPress={handleNextPress} style={[globalStyle.customButton ]} >
                <Text style={[globalStyle.fRegular, { color: '#fff', fontSize: 16 }]}> 
                  {btnName} 
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default ContentCard

const styles = StyleSheet.create({
    content: {
        // flex: 1,
        backgroundColor: colors.AppDefaultColor,
        // backgroundColor: 'rgba(0,0,0,0.9)',

        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 322,
        width: '100%'
    }
})