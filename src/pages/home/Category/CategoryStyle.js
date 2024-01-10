import { StyleSheet, Dimensions } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions"; 
import { colors } from '../../../utils/Colors';
import { Normalize } from '../../../utils/Size';

const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        height: height,
        backgroundColor: colors.AppDefaultColor,
    },
    appbar: {
        backgroundColor: colors.AppDefaultColor
    },
    headertitle: {
        color: colors.textdefult,
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 22,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center'
    },
    icon: {

    },
    titletext: {
        color: '#F5F5F5',
        fontSize: 18,
        lineHeight: 22,
        textAlign: 'center',
        fontFamily: 'Superclarendon-Regular',
        position: 'absolute',
        top: 75,
        alignSelf: 'center'
    },
    midbox: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 25,
     },
    pragraphtext: {
        color: colors.textdefult,
        fontSize: 15,
        lineHeight: 17,
        textAlign: 'center',
        position: 'absolute',
        fontFamily: 'Superclarendon-Regular',
         // marginVertical:25
    },
    main: {
        width:'100%',
        padding:15,
        gap:16
    },

    card: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 100,
        borderRadius: 10,
        backgroundColor: '#2A2C36',
        overflow: 'hidden'
    },
    cardcontent: {
        width: '50%',
        justifyContent: 'center',
        paddingLeft: 25,
        gap: 3
    },
    cardimage: {
        width: '50%',
        height: '100%'
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    nametext: {
        color: colors.textdefult,
        fontSize: 15,
        lineHeight: 25,
        fontFamily: 'Superclarendon-Regular',
    },
    addtext: {
        color: colors.txtgrey,
        fontSize: 12,
        lineHeight: 12,
        fontFamily: 'Superclarendon-Regular',
    },
    linktext: {
        color: colors.textdefult,
        fontSize: 10,
        lineHeight: 10,
        fontFamily: 'Superclarendon-Regular',
    },
    corner: {
        position: 'absolute',
        top: 5,
        right: 5,
        alignItems: 'flex-end'

    },
    ctext: {
        color: colors.textdefult,
        fontSize: 12,
        fontFamily: 'Superclarendon-Regular',
    },
    typetext: {
        color: colors.txtgrey,
        fontSize: 10,
        fontFamily: 'Superclarendon-Regular',
    },
    innercard: {
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10,
        height: '100%',
        width: '100%',
        alignItems: 'flex-end'
    },
    toptags: {
        flexDirection: 'row',
        gap: 6
    },
    tagbtn: {
        backgroundColor: '#6d93c3',
        height: 18,
        // width:34,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
     },
    btntext: {
        color: colors.textdefult,
        fontSize: 10,
        lineHeight: 12,
        fontFamily: 'Superclarendon-Regular',
    },
    selectbtn: {
        backgroundColor: '#D3C6A5',
        height: 18,
        // width:34,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    bottomrow:{
        position:'absolute',
        bottom:0,
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        gap:15,
        height:60,
        alignItems:'center',
        backgroundColor: '#2A2C36',
    },
    
    btn: {
        // width: '45%',
        height: 35,
        backgroundColor: '#D3C6A5',
        borderRadius: 4,
        paddingHorizontal:20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    bottombtnt: {
        color: colors.black,
        fontSize: 16,
        lineHeight: 25,
        fontFamily: 'Superclarendon-Regular',
        letterSpacing: .2
    }
});