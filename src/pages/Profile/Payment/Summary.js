import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Headerbar from '../../../components/Headerbar'
import { styles } from './PaymentStyle'
import VipCard from '../../../components/Profile/VipCard'
import { Divider } from 'react-native-paper'
import VIPModal from '../../../components/Profile/VIPModal'

const Summary = ({ navigation }) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <View style={styles.Container} >
      <StatusBar backgroundColor={'transparent'} />
      <Headerbar
        goBack={() => navigation.goBack()}
        title={'Payment Summary'} 
        icon="dots-horizontal"/>
      <View style={styles.main}>
        <View style={styles.summaryMain}>
          <VipCard
            amount={'9.99'}
            time={'month'}

          />
          <View style={styles.priceCard}>
            <View style={styles.priceRow}>
              <Text style={styles.priceText}>
                Amount
              </Text>
              <Text style={styles.priceText}>
                $9.99
              </Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceText}>
                Tax
              </Text>
              <Text style={styles.priceText}>
                $1.99
              </Text>
            </View>
            <Divider />
            <View style={styles.priceRow}>
              <Text style={styles.priceText}>
                Total
              </Text>
              <Text style={styles.priceText}>
                $11.99
              </Text>
            </View>
          </View>
          <View style={styles.btn}>
            <View style={styles.btnRow}>
              <Image source={require('../../../assets/icons/mastercard.png')} style={{ height: 25, width: 25 }} resizeMode='contain' />
              <Text style={styles.paymentText}>
                •••• •••• •••• •••• 4679
              </Text>
            </View>
            <Text style={[styles.priceText, {
              fontFamily: 'Superclarendon-Bold',
            }]} >
              Change
            </Text>
          </View>
          <TouchableOpacity onPress={()=>setOpenModal(true)} style={[styles.continuebtn,{marginTop:30}]}>
            <Text style={styles.cText}>
            Confirm Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <VIPModal open={openModal} setOpen={setOpenModal}/>
    </View>
  )
}

export default Summary