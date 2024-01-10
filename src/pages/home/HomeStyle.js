import { StyleSheet, Dimensions } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions"; 
import { colors } from '../../utils/Colors';
import { Normalize } from '../../utils/Size';

const { width, height } = Dimensions.get('screen');



export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.AppDefaultColor,
    },
    header: {
        width: width,
        height: 150,
        justifyContent: 'space-between',
        marginBottom: 12,
        resizeMode: 'contain'
    },
    logocard: {
        alignItems: 'center',
        paddingTop: 16
    },
    logoimg: {
        height: 35,
        resizeMode: 'contain'
    },
    headerContent: {
        width: width,
        paddingHorizontal: '4%',
        marginBottom: 12
    },
    headerTitle: {
        color: '#F7F7F7',
        fontSize: 24,
        lineHeight: 30,
        fontFamily: 'Superclarendon-Regular',
    },
    // headercrow: {
    //     width: width,
    //     flexDirection: 'row',
    //     paddingHorizontal:10,
    //     justifyContent:'space-between',
    //     paddingTop:6
    //  },
    headerSubtitle: {
        fontSize: 15,
        color: '#F6F6F6',
        lineHeight: 20,
        opacity: 0.9,
        marginLeft: 4,
        fontFamily: 'Superclarendon-Regular',
    },
    headerdate: {
        fontSize: 11,
        color:colors.txtgrey,
        fontFamily: 'Superclarendon-Regular',
    },
    main:{
       flex: 1,
    //    borderColor: 'red',
    //    borderWidth: 1,
    },
    section:{

    },




    categorysection: {
        width: width,
        // marginTop: 15,
        // borderWidth: 1,
        // borderColor: 'red'
    },

    categoryheader: {
        width: '100%',
        paddingHorizontal: '5%',
        // gap: 4,
    },
    categoryname: {
        color: '#F7F7F7',
        fontSize: 22,
        lineHeight: 28,
        fontFamily: 'Superclarendon-Regular',
    },
    textrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    subname: {
        fontSize: 15,
        lineHeight: 20,
        color: '#ABB4BD',
        fontFamily: 'Superclarendon-Regular',
    },
    link: {
        fontSize: 15,
        lineHeight: 20,
        color: '#F7F7F7',
        fontFamily: 'Superclarendon-Regular',
    },
    row: {
        flexDirection: 'row',
    },

    card: {
        backgroundColor: colors.AppDefaultColor,
        width: 165,
        height: 270,
        // marginLeft: "5%",
        padding: 16,
        // borderColor: 'red',
        // borderWidth: 1
    },
    cardimage: {
        height: "70%",
        width: '100%',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 10
    },
    cardcontent: {
        // height: "25%",
        gap: 3.5,
        marginVertical: 3,
    },
    address: {
        fontSize: 13.5,
        color: '#ABB4BD',
        fontFamily: 'Superclarendon-Regular',
    },
    title: {
        color: '#F7F7F7',
        fontSize: 15,
        fontFamily: 'Superclarendon-Regular',
    },
    timing: {
        color: '#ABB4BD',
        fontSize: 12,
        fontFamily: 'Superclarendon-Regular',
    },
    matches: {
        color: '#777777',
        fontSize: 10,
        fontFamily: 'Superclarendon-Regular',
    }
});