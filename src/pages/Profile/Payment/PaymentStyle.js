import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../utils/Colors';
import { Normalize } from '../../../utils/Size';
const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        height: height,
        backgroundColor: colors.AppDefaultColor,
    },
    main: {
        width: '100%',
        height: '100%',
        paddingVertical:25,
        paddingHorizontal: '8%',
    },
    methodbox: {
        width: '100%',
        gap: 20
    },
    title: {
        color: colors.white,
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Superclarendon-Regular',
    },
    btn: {
        height: 70,
        width: '100%',
        backgroundColor: '#1F222A',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        justifyContent: 'space-between'
    },
    btnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    paymentText: {
        fontSize: 18,
        color: colors.white,
        fontFamily: 'Superclarendon-Bold',
    },
    addtext: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.white,
        fontFamily: 'Superclarendon-Bold',
        paddingHorizontal: 20,
        letterSpacing: .2
    },
    continuebtn: {
        width: '100%',
        height: 50,
        backgroundColor: '#35383F',
        borderRadius: 85,
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        // bottom: 140,
        alignSelf: 'center',
        marginTop: 140
    },
    cText: {
        color: colors.white,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Superclarendon-Bold',
        letterSpacing: .2
    },


    /* Summary Screen styling */
    summaryMain: {
        width: '100%',
        gap: 20
    },
    priceCard: {
        width: '100%',
        backgroundColor: '#1F222A',
        elevation: 10,
        borderRadius: 16,
        padding: 20,
        gap: 16
    },
    priceRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    priceText: {
        fontSize: 14,
        color: '#E0E0E0',
        fontFamily: 'Superclarendon-Regular',

    },


    /* add card screen */
    addcard:{
        width:'100%',
        gap:20
    },
    lebel: {
        fontSize:  16,
        color: colors.white,
        lineHeight: 32,
        fontStyle: 'normal',
        fontFamily: 'Superclarendon-Bold',
        letterSpacing:.2
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
    inputRow:{
        width:'100%',
         display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'

    },
    inputcard: {
        width: '100%',
         
    }

});