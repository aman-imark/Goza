import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../utils/Colors';
import { Normalize } from '../../utils/Size';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get('screen');
console.log(width);
export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.AppDefaultColor,
    },
    main: {
        width: '85%',
        alignSelf:'center',
        alignItems: 'center',
        marginTop: 20,

        // paddingHorizontal: 50,
        // borderWidth: 1,
        // borderColor: 'green'
    },
    progress: {
        marginTop: 70,
        marginBottom: 0,
        alignSelf:'center',
        height: 10
    },
    logo: {
        height: 48,
        width: 159,
        resizeMode: 'contain',
         
    },
    emailinputCard: {
        marginTop: 55,
         width: '100%'
    },

    lebel: {
        fontSize: 21,
        color: colors.white,
        lineHeight: 32,
        fontStyle: 'normal',
        fontFamily: 'Superclarendon-Regular',
    },
    inputEmail: {
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
    defaultBox: {
        // borderColor: 'green',
        // borderWidth: 1,
    },
    errorBox: {
      borderColor: '#FF3B30',
      borderWidth: 1.5,
    },
    errorText: {    
        fontFamily: 'Superclarendon-Regular',
        fontSize: 15,
        color: '#FF3B30',
        letterSpacing: 0.2,
        lineHeight: 22,
        top: 10
      }
});
