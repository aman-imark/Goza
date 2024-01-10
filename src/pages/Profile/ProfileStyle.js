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
        height: height,
        backgroundColor: colors.AppDefaultColor,
    },
    appbar: {
        backgroundColor: colors.AppDefaultColor
    },
    headertitle: {
        color: colors.textdefult,
        fontSize: 18,

        lineHeight: 22,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center'
    },
    icon: {

    },
    profilecard: {
        height: 150,
        width: width - 100,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '4%',
    },
    profile_img: {
        height: 150,
        width: 150,
        borderRadius: 150,
        resizeMode: 'cover'
    },
    edit: {
        color: colors.textdefult,
        fontSize: 14,
        lineHeight: 22,
        fontFamily: 'Superclarendon-Regular',
        position: 'absolute',
        right: 0
    },
    main: {
        width: width,

    },
    vip_card: {
        width: width - 50,
        // height: 145,
        paddingHorizontal: 25,
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: colors.txtgrey,
        borderRadius: 4,
        alignSelf: 'center',
        marginTop: '8%',
        marginBottom: '4%'
    },
    title: {
        fontSize: 20,
        fontStyle: 'normal',
        lineHeight: 24,
        fontFamily: 'Superclarendon-Bold',
        color: colors.secondColor
    },
    vip_row: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    vip_content: {
        width: '70%',
        height: '100%',
        gap: 15,
        // borderColor: 'red',
        // borderWidth: 1
    },
    vip_image: {
        height: 68.33,
    },
    vip_contentText: {
        marginTop: 8,
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Superclarendon-Regular',
        color: colors.white
    },
    vip_btn: {
        width: '90%',
        height: 35,
        borderRadius: 85,
        paddingHorizontal: 13,
        justifyContent: "center",
        backgroundColor: colors.secondColor
    },
    vip_btnText: {
        fontSize: 15.75,
        lineHeight: 22,
        letterSpacing: .16,
        textAlign: 'center',
        fontFamily: 'Superclarendon-Bold',
        color: '#030303'
    },
    box: {
        width: '100%',
        paddingHorizontal: 30,
        gap:20,
        marginTop:'5%'
    },
    box_row: {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
    },
    iconBtn: {
        height: 40,
        width: 40,
        borderRadius: 85,
        backgroundColor: '#2A2C36',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box_col: {
        display: 'flex',
        height: 40,
        width:"90%",
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal:20
    },
    box_title:{
        fontSize:16,
        letterSpacing:.2,
        fontFamily: 'Superclarendon-Regular',
        color:colors.white
    }
});