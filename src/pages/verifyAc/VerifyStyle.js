import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../utils/Colors';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { Normalize } from '../../utils/Size';



const { width, height } = Dimensions.get('screen');

 export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.AppDefaultColor,
    },
    main: {
        width: width,
        alignItems: 'center',
        paddingHorizontal: 25,

    },
    header: {
        width: width,
        alignItems: 'center',
        marginTop: '20%'
    },
    logo: {
        height: 48,
        width: 159,
        resizeMode: 'contain',

    },
    title:{
        fontSize: 24,
        fontFamily: 'Superclarendon-ExtraBold',
        // letterSpacing:2,
        color: '#FFFCFC',
        lineHeight: 36
    },
    card:{
        width:'100%',
        marginTop:'6%',
        lineHeight: 20,
        gap: 30
    },
    input:{
        fontSize: 16,
        height:65,
        color:colors.white,
        backgroundColor:colors.AppDefaultColor,
        fontFamily: 'Superclarendon-Light',  
    },
    p1:{
        // color:colors.white,
        color: "#F6F6F6",
        fontSize: 16,
        lineHeight:22,
        fontFamily: 'Superclarendon-Light',  
    },
    p2:{
        color:colors.white,
        fontSize: 13,
        lineHeight:20,
        fontFamily: 'Superclarendon-Regular',
        letterSpacing:.5
    },
    p3:{
        color:colors.white,
        fontSize: 12,
        lineHeight:20,
        fontFamily: 'Superclarendon-Light',
        letterSpacing:.5,
        marginVertical:'2%',
    },
    btn: {
        backgroundColor: '#D3C6A5',
        justifyContent: 'center',
        alignItems: 'center',
        height: 58,
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: "10%",
        width: '100%',
    },
    btnText: {
        color: colors.black,
        fontSize: 16,
        fontFamily: 'Superclarendon-Bold',
        alignSelf: 'center',
        letterSpacing: 0.2,
        lineHeight: 23,
    },
    refbtn: {
        backgroundColor: colors.AppDefaultColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D3C6A5',
        borderWidth: 1,
        height: 58,
        justifyContent: 'center',
        borderRadius: 4,
         width: '100%',
        marginTop:'7%'
    },
    refbtnText: {
        color: '#D3C6A5',
        fontSize: 16,
        fontFamily: 'Superclarendon-Bold',
        alignSelf: 'center',
        letterSpacing: 0.2,
        lineHeight: 23,
    },
});