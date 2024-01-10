import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../utils/Colors';
// import { colors } from '../../Utils/Colors';
import { Normalize } from '../../utils/Size';
// import { Normalize } from '../../Utils/Size';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
   Container: {
      flex: 1,
      backgroundColor: colors.AppDefaultColor,
   },
   video: {
      height: height,
      width: width,
      // resizeMode:'contain'
   },

   slide: {
      flex: 1,
      display:'flex'
   },
   topPart: {
      // borderColor: 'yellow',
      // borderWidth: 1,
      height: Dimensions.get('window').height - 405,
      justifyContent:'center',
   },
   text: {
      color: '#fff',
      fontSize: 30,
      fontFamily: 'Superclarendon-Regular',
   },
   massageCard1: {

      height: 56,
      paddingHorizontal: 20,
      backgroundColor: 'rgba(255,255,255,0.07)',
      borderRadius: 12,
      borderBottomLeftRadius: 0,
      justifyContent: 'center',
      alignItems: 'center'
   },
   massageCard2: {
      height: 56,
      paddingHorizontal: 20,

      backgroundColor: 'rgba(255,255,255,0.5)',
      borderRadius: 12,
      borderBottomEndRadius: 0,
      justifyContent: 'center',
      alignItems: 'center'
   },
   massageCard3: {
      height: 56,
      paddingHorizontal: 18,

      backgroundColor: 'rgba(255,255,255,0.07)',
      borderRadius: 12,
      borderBottomLeftRadius: 0,
      justifyContent: 'center',
      alignItems: 'center'
   },
   mText: {
      fontSize: 14,
      color: colors.white,
      lineHeight: 25,
      fontFamily: 'Superclarendon-Regular',
   },
   item1: {
      position: 'absolute',
      left: 57,
      top: 110,
   },
   item2: {
      position: 'absolute',
      right: 50,
      top: 220,
      alignItems:'flex-end'
   },
   item3: {
      position: 'absolute',
      left: 57,
      top: 330,
   },
   time: {
      fontSize: 12,
      color: '#5E5E5E',
      lineHeight: 18,
      fontFamily: 'Superclarendon-Regular',
   },

   slideimage: {
      height: '100%',
     width: '100%',
     resizeMode: 'cover',
   //   borderWidth: 1,
   //   borderColor: 'green',
     justifyContent: 'center',
     alignContent: 'center',
     alignItems: 'center'
   }

});