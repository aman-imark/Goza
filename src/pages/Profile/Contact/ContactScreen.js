import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, 
  StatusBar,SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { colors } from '../../../utils/Colors'
import Headerbar from '../../../components/Headerbar';
const { width, height } = Dimensions.get('screen');

const ContactScreen = ({ navigation }) => {
  const [screen,setScreen] = useState('contact');
  useEffect(() => {
    setScreen('contact')     
  }, [ ])
  
  return (
    <View style={styles.container}>
      <Headerbar
        goBack={() => navigation.goBack()}
        title={'Contact Us'}
      />
      <View style={styles.main}>
      {/* <Contact setScreen={setScreen}/> */}
        {
          screen==='contact'?
          <Contact setScreen={setScreen}/>:
          screen==='thankyou'?
          <Thankyou goHome={()=>navigation.navigate('Home')} />:
           navigation.navigate('Home')
        }
      </View>
      </View>
 
  )
}

export default ContactScreen;

const Contact = ({setScreen}) => {
  return (
    <ScrollView>
    <KeyboardAvoidingView  behavior="padding" style={styles.contactform} 
                    keyboardVerticalOffset={Platform.select({ ios: 0, android: 50 })}>
  
              
    {/* <View style={styles.contactform}> */}
      <Text style={styles.title}>
        We want to hear {'\n'}from you
      </Text>
      <View style={[styles.inputcard]}>
        <Text style={styles.lebel}>Message Topic</Text>
        <View style={styles.inpucotainer}>
          <TextInput
            style={styles.inputFeild}
            // onChangeText={newText => setCardName(newText)}
          // value={cardName}
          />
        </View>
      </View>
      <View style={[styles.inputcard]}>
        <Text style={styles.lebel}>Message </Text>
        <View style={[styles.inpucotainer, { height: 160, alignItems: 'center', justifyContent: 'center' }]}>
          <TextInput
            style={[styles.inputFeild, { height: 140 }]}
            numberOfLines={10}
            multiline={true}
          // onChangeText={newText => setCardName(newText)}
          // value={cardName}
          />
        </View>
      </View>
      <View style={[styles.inputcard]}>
        <Text style={styles.lebel}>Best Email/Number to Reach You </Text>
        <View style={[styles.inpucotainer,]}>
          <TextInput
            style={[styles.inputFeild]}
            numberOfLines={10}
          // onChangeText={newText => setCardName(newText)}
          // value={cardName}
          />
        </View>
      </View>
 
      <TouchableOpacity onPress={()=>{setScreen('thankyou')}} style={[styles.btn]}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
     
    {/* </View> */}
  
   
    </KeyboardAvoidingView>
    </ScrollView>

  )
}


const Thankyou = ({goHome}) => {
  return (
    <View style={styles.thankyoucard}>
      <View style={styles.contentcard}>
        <Text style={styles.contentText}>
          Thank you for your message.
        </Text>
        <Text style={styles.contentText}>
          We will review it and be in touch soon!
        </Text>
      </View>
      <TouchableOpacity onPress={goHome} style={styles.returnBtn}>
        <Text style={styles.btnText}>
          Return to Homepage
        </Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: height,
    backgroundColor: colors.AppDefaultColor,
  },
  main: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    paddingHorizontal: '8%',
    gap: 20
  },
  contactform: {
    flex: 1,
    // paddingTop: '6%',
    // paddingHorizontal: '2%',
    gap: 20,
    // marginBottom: '100%'
  },
  title: {
    color: colors.white,
    fontSize: 24,
    lineHeight: 35,
    fontFamily: 'Superclarendon-Regular',
  },
  inpucotainer: {
    width: '100%',
    backgroundColor: colors.textdefult,
    borderRadius: 4,
    height: 55,
    borderColor: '#E8E6EA',
  },
  inputcard: {
    width: '100%',
    gap: 5
  },
  lebel: {
    fontSize: 14,
    color: colors.textdefult,
    fontFamily: 'Superclarendon-Regular',

  },
  inputFeild: {
    paddingLeft: 15,
    borderRadius: 15,
    color: colors.black,
    height: 55,
    fontSize: 14,
    fontFamily: 'Superclarendon-Regular',
    width: '100%',
    textAlignVertical: 'top'
  },
  btn: {
    width: '100%',
    height: 45,
    backgroundColor: colors.secondColor,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5
  },
  btnText: {
    color: colors.black,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Superclarendon-Bold',
    letterSpacing: .2
  },
  thankyoucard: {
    // width: '100%',
  },
  contentcard: {
    padding: 20,
    gap: 30
  },
  contentText: {
    color: colors.white,
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Superclarendon-Regular',

  },
  returnBtn:{
    width: '100%',
    height: 60,
    backgroundColor: colors.secondColor,
    borderRadius: 85,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20
  }
})