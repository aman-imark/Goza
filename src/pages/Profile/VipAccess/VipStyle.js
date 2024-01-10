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
    main:{
        width:'100%',
        paddingVertical:10,
        paddingHorizontal:'10%',
        gap:20
    },
    heading:{
        fontSize:15,
        color:colors.white,
        fontFamily: 'Superclarendon-Bold',
        letterSpacing:.2,
        textAlign:'center',
        paddingTop:10,
        lineHeight:20
    }
});