
import { StyleSheet } from 'react-native';
import { colors } from './Colors';



export default StyleSheet.create({

  fLight: {
    fontFamily: 'Superclarendon-Light'
  },
  fRegular: {
    fontFamily: 'Superclarendon-Regular'
  },
  fBold: {
    fontFamily: 'Superclarendon-Bold'
  },
  fExtraBold: {
    fontFamily: 'Superclarendon-ExtraBold'
  },

  h1: {
    fontFamily: 'Superclarendon-Regular',
    fontSize: 37,
    color: '#fff'
  },
  h2 : {
    fontFamily: 'Superclarendon-Regular',
    fontSize: 32,
    color: '#fff'
  },
  h3 : {
    fontFamily: 'Superclarendon-Regular',
    fontSize: 28,
    lineHeight: 40,
    color: '#fff'
  },
  h4 : {
    fontFamily: 'Superclarendon-Regular',
    fontSize: 24,
    color: '#fff'
  },
  h5 : {
    fontFamily: 'Superclarendon-Regular',
    fontSize: 18,
    color: '#fff'
  },
  h6 : {
    fontFamily: 'Superclarendon-Bold',
    fontSize: 16,
    color: '#fff'
  },
  p : {
    fontFamily: 'Superclarendon-Regular',
    fontSize: 14,
    color: '#fff'
  },
  pSmall : {
    fontFamily: 'Superclarendon-Regular',
    fontSize: 10,
    color: '#fff'
  },
  title : {
    fontFamily: 'Superclarendon-Regular',
    fontSize: 20,
    color: '#fff'
  },
  subTitle : {
    fontFamily: 'Superclarendon-Light',
    fontSize: 15,
    color: '#fff',
    letterSpacing: 0.5,
  },
  center : {
    alignItems: 'center',
  },
  txtCenter : {
    textAlign: 'center'
  },
  border : {
    borderColor: 'red',
    borderWidth: 1
  },
  customButton : {
    fontFamily: 'Superclarendon-Regular',
    // backgroundColor: '#2A2C36', // '#1F222A',
    backgroundColor: colors.btnColor,
    color: '#ffffff',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    borderColor: '#35383F',
    borderWidth: 1,
    height: 58
  },

  customButtonShadow: {
  },

  mrt1 : {
    marginTop: 30 
  },
  mrb1 : {
    marginBottom: 30 
  },
  mrr1 : {
    marginRight: 30 
  },
  mrl1 : {
    marginLeft: 30 
  },

  mrt2 : {
    marginTop: 10
  },
  mrb2 : {
    marginBottom: 10
  },
  mrr2 : {
    marginRight: 10
  },
  mrl2 : {
    marginLeft: 10
  },


  pdt1 : {
    paddingTop: 30 
  },
  pdb1 : {
    paddingBottom: 30 
  },
  pdr1 : {
    paddingRight: 30 
  },
  pdl1 : {
    paddingLeft: 30 
  },


  pdt2 : {
    paddingTop: 10 
  },
  pdb2 : {
    paddingBottom: 10
  },
  pdr2 : {
    paddingRight: 10 
  },
  pdl2 : {
    paddingLeft: 10
  },

});
