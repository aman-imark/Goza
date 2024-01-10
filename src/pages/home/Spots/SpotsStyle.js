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
    headerTitle: {
        color: colors.textdefult,
        fontSize: 18,
        lineHeight: 25,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center'
    },
    icon: {

    },
    selectedspot: {
        color: '#F5F5F5',
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',
        fontFamily: 'Superclarendon-Regular',
    },
    categoriesrow: {
        // height:45,
        // width:'100%',
        backgroundColor: 'maroon',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: colors.textdefult,
        borderBottomWidth: 1,
        borderBottomColor: colors.textdefult,
        marginTop: 15
    },
    categorytext: {
        color: colors.textdefult,
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center',
        
        padding: 12,
        fontFamily: 'Superclarendon-Regular',
    },
    tab: {
        flex: 1,
        width: '100%',
        gap: 16,
        backgroundColor:colors.AppDefaultColor,
    },

    searchBarPaper: {
        width: '100%',
        backgroundColor: '#2A2C36',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 25,
    },
    card: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        // height: 10,
        borderRadius: 10,
        backgroundColor: '#2A2C36',
        // overflow: 'hidden',
        // padding: 17, 
    },
    cardimage: {
        height: 110,
        width: '26%', 
        justifyContent:'center'
    },
    image: {
        width: 66,
        height: 66,
        resizeMode: 'cover',
        borderRadius: 6,
        opacity: 0.8
    },
    nametext: {
        color: colors.textdefult,
        fontSize: 16,
        fontFamily: 'Superclarendon-Regular',
        
    },
    addtext: {
        color: colors.txtgrey,
        fontSize: 13.5,
        lineHeight: 18,
        fontFamily: 'Superclarendon-Light',
    },
    linktext: {
        color: colors.textdefult,
        fontSize: 13,
        fontFamily: 'Superclarendon-Regular',
        textAlignVertical: 'center'
    },

    cardcontent: {
        width: '74%',  
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        flex: 1,
        position: 'relative',
    },

    corner: {
        flex: 1,
        position: 'relative',
    },
   

    ctext: {
        color: colors.textdefult,
        fontSize: 22,
        fontFamily: 'Superclarendon-Regular',
        
    },
    heartbox:{
        height: 28,
        width: 28,
        borderRadius:25,
        backgroundColor:'#C4C4C4',
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    typetext: {
        color: colors.txtgrey,
        fontSize: 10,
        fontFamily: 'Superclarendon-Regular',
        
    },
    innercard: { 
        top: 0,
        bottom: 0,
        left: 0,
        position:'absolute'
    },
    
    toptags: {
        height: '100%',
        justifyContent: 'space-between',
    },
    tagbtn: {
        height: 22,
        borderRadius: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    btntext: {
        color: '#F7F7F7',
        fontSize: 12.5,
        alignItems: 'center',
        justifyContent: 'center',
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
    }
});