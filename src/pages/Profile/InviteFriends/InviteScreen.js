import { StyleSheet, Text, Image, View, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import Headerbar from '../../../components/Headerbar'
import { colors } from '../../../utils/Colors'

const InviteScreen = ({ navigation }) => {
  const frienslist = [
    {
      id: 1,
      name: 'Maryland Winkles',
      contact: '+1-300-555-0135'
    },
    {
      id: 2,
      name: 'Maryland Winkles',
      contact: '+1-300-555-0135'
    },
    {
      id: 3,
      name: 'Maryland Winkles',
      contact: '+1-300-555-0135'
    },
    {
      id: 4,
      name: 'Maryland Winkles',
      contact: '+1-300-555-0135'
    },
    {
      id: 5,
      name: 'Maryland Winkles',
      contact: '+1-300-555-0135'
    }
  ]

  const InviteRow = () => {
    return (
      <View style={styles.row}>
        <Image source={require('../../../assets/Images/Profile/Avatar/Ellipse.png')} />
        <View style={styles.contentbox}>
          <Text style={styles.contentTitle}>
            Maryland Winkles
          </Text >
          <Text style={styles.contentPhone}>
            54745454545
          </Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>
            Invite
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={'transparent'} />
      <Headerbar
        goBack={() => navigation.goBack()}
        title={'Invite Friends'}
        icon="dots-horizontal"
      />
      <View style={styles.main}>
        <View style={styles.rowcontainer}>
          <InviteRow/>
          <InviteRow/>
          <InviteRow/>
          <InviteRow/>
          <InviteRow/>
          <InviteRow/>
          <InviteRow/>
          <InviteRow/>
        </View>
      </View>
    </View>
  )
}

export default InviteScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.AppDefaultColor,
  },
  main: {
    width: '100%',
    height: '100%',
    paddingVertical: 25,
    paddingHorizontal: '8%',
  },
  rowcontainer: {
    width: '100%',
    gap: 25,

  },
  row: {
    height: 45,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contentbox: {
    height: '100%',
    width: '60%',
    justifyContent: 'space-between',
    paddingLeft: 15
  },
  contentTitle: {
    color: colors.white,
    fontSize: 15,
    fontFamily: 'Superclarendon-Regular',
  },
  contentPhone: {
    color: '#E0E0E0',
    fontSize: 12,
    fontFamily: 'Superclarendon-Regular',
  },
  image: {
    height: 45,
    width: 45,
    resizeMode: 'contain'
  },
  btn: {
    width: '25%',
    height: 30,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 85,

  },
  btntext: {
    color: colors.black,
    fontSize: 15,
    fontFamily: 'Superclarendon-Regular',
    letterSpacing: .2
  }
})