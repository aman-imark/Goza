import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity,Text, View, Image, Button, Alert } from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';
import { Appbar } from 'react-native-paper';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import globalStyle from '../../utils/globalStyle';

// import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/Colors';

import Icon from 'react-native-vector-icons/Ionicons';

import { storeData, getData, removeData, clearData } from '../../services/storageService';
import { postApiCall, getApiCall } from '../../services/apiCall';


import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { Settings, LoginButton, AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk-next';

import Loading from '../../components/loading/Loading';



const GetStarted = () => {
  const [showModal_Loading, setShowModal_Loading] = useState(false);

  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate('Login');
  }

  function handleNavigationSMS(){
    navigation.navigate('Verify');
  }


  function handleNavigationDiscover(){
    // navigation.navigate('Discover');
    navigation.navigate('BottomNavigation');
  }



  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      // webClientId: '996674728299-psuls53dthl10a8sgsblnoibicu70ike.apps.googleusercontent.com',  // client ID of type WEB for your server (needed to verify user ID and offline access)
      iosClientId: '996674728299-4vei8usq5q6sld1ac7dpc8fh82cbpa66.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
    Settings.setAppID('184636184394057');
  }, [ ])



  signupWithGoogle = async () => { 
      try {
        await GoogleSignin.hasPlayServices();
        // const userInfo = await GoogleSignin.signIn();
        // console.log(userInfo);

        await GoogleSignin.signOut();
        
        const userInfo = await GoogleSignin.signIn().then(async (res) => {
            if(res.idToken){
              Alert.alert('Success:', 'Google SignUp success.', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
              // const userData = {
              //   token: res.idToken,
              //   name: res.user.name,
              //   email: res.user.email,
              //   avatar: res.user.photo,
              //   phone: '',
              //   address: {
              //     street: 'Kulas Light',
              //     suite: 'Apt. 556',
              //     city: 'Gwenborough',
              //     zipcode: '92998-3874',
              //     geo: {
              //       lat: '-37.3159',
              //       lng: '81.1496'
              //     }
              //   }
              // };
              const googleUserData = {
                firstname: res.user.givenName,
                lastname: res.user.familyName,
                email: res.user.email,
                // phone: res.user.phone       
                phone: ""         
              }
              socialMediaApi_Post(googleUserData);
            }else{
              Alert.alert('Failed!', 'Google SignUp failed!', [
                {text: 'OK', onPress: () => {
                //  console.log('OK Pressed') 
                }},
              ]);          
            };          
        });
        // {"idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk2OTcxODA4Nzk2ODI5YTk3MmU3OWE5ZDFhOWZmZjExY2Q2MWIxZTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5OTY2NzQ3MjgyOTktNHZlaTh1c3E1cTZzbGQxYWM3ZHBjOGZoODJjYnBhNjYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5OTY2NzQ3MjgyOTktNHZlaTh1c3E1cTZzbGQxYWM3ZHBjOGZoODJjYnBhNjYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTgxOTA3MTg4MjU5OTgzNzI0ODEiLCJoZCI6ImltYXJraW5mb3RlY2guY29tIiwiZW1haWwiOiJzYXVyYWJoLmNoYXVoYW5AaW1hcmtpbmZvdGVjaC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IlVtQmVsOHdFV1dMYVVuS0d4WmhhamciLCJub25jZSI6ImdhVzZqUzgtWXVNZDhPQ3Y4RE5HNFZ6dFpuQ05hS2Vhby1VV05kc0t5U0EiLCJuYW1lIjoiU2F1cmFiaCBDaGF1aGFuIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FHTm15eGExWXJLM0RjZmQxaXlvVkJtU1Atc2J6YVF1NzZ4aXg1dGhOWWVUSWc9czk2LWMiLCJnaXZlbl9uYW1lIjoiU2F1cmFiaCIsImZhbWlseV9uYW1lIjoiQ2hhdWhhbiIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjgxODkyMzEzLCJleHAiOjE2ODE4OTU5MTN9.u1L723TtEwc-W2AlGnhk4alHW-yJ957nmoel0a-PGFUVc1a7Aj2BARFUMTaFsH-VIEyVM80S1cemvngNW_10_4MXseKn6FN_eAokgr0f3TNOkI7Z4QMWdSQ7cy3LfQgFWftiIqhAP2LIX_Njs6LATkNUm96gCKSQQjTZIm0q1iDMwUn7pdkF4FkG6TsNR1Tm7BeS5Y7gImE22fXrX5D1pe7w1FDPMXzgwSwYvbllIpHJz4PBwPukImFuD7ZW9kA7gMti6viE1rpxPnQo3a7MjEvQjCWjgPv7w6ikFrqkoB8q8CwWWwJUoNkh1MzrYgRERqEQdwB2aUvBTBAFrJuclQ", "scopes": ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email", "openid"], 
        // "serverAuthCode": null, "user": {"email": "saurabh.chauhan@imarkinfotech.com", "familyName": "Chauhan", "givenName": "Saurabh", "id": "118190718825998372481", "name": "Saurabh Chauhan", "photo": "https://lh3.googleusercontent.com/a/AGNmyxa1YrK3Dcfd1iyoVBmSP-sbzaQu76xix5thNYeTIg=s120"}}
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          console.log('User cancelled the sign-up process');
          Alert.alert('Cancelled!', 'User cancelled the SignUp process', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        } else if (error.code === statusCodes.IN_PROGRESS) {
          console.log('SignUp process is already in progress');
          Alert.alert('In Progress!', 'SignUp process is already in progress', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]); 
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          console.log('Play Services not available or outdated');
          Alert.alert('In Progress!', 'Play Services not available or outdated', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);          
        } else {
          console.log('Error:', error);
          Alert.alert('Error!', error, [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
      }
  };



  signupWithFacebook = async () => {
   
    // LoginManager.logOut();

    // try {
    // const result = await LoginManager.logInWithPermissions(['public_profile']);
    //   if (result.isCancelled) {
    //     console.log('User cancelled login');
    //   } else {
    //     const data = await AccessToken.getCurrentAccessToken();
    //     console.log(data.accessToken.toString());
    //   }
    // } catch (error) {
    //   console.log('Error: ', error);
    // }


    // return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
    //   result => {
    //     console.log("fb result-> ", result);
    //   }
    // )


      // AccessToken.getCurrentAccessToken()
      //     .then((data) => {
      //       console.log(data);

      //       const accessToken = data.accessToken.toString();

      //       const request = new GraphRequest('/me', { accessToken }, this._responseInfoCallback);
      //       new GraphRequestManager().addRequest(request).start();
      //     });
      

      // const userData = {
      //   token: 'eww',
      //   name: 'Leanne Graham',
      //   email: 'Sincere@april.biz',
      //   avatar: 'duwh',
      //   phone: '',
      //   address: {
      //     street: 'Kulas Light',
      //     suite: 'Apt. 556',
      //     city: 'Gwenborough',
      //     zipcode: '92998-3874',
      //     geo: {
      //       lat: '-37.3159',
      //       lng: '81.1496'
      //     }
      //   }
      // };
      // await storeData('setUser', userData);
      // getAuthStatus();
  }





  const socialMediaApi_Post = async (socialData) => {
    setShowModal_Loading(true);
    postApiCall('/social-login', socialData, '').then(async (res) => {
      console.log(res);
      if(res.status === 'success'){
        const userData = {
          token: res.token,
          is_user: res.is_user,
          email: res.data.email,
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          phone: res.data.phone
        };
        console.log('Storage works...')
        await storeData('setUser', userData);
        getAuthStatus();
        setShowModal_Loading(false);
        // Call your API or perform your task that requires loading here...
      }else{
        setShowModal_Loading(false);
        Alert.alert('Failed', 'Somthing wrong, please try again!', [
           {text: 'OK'},
        ]); 
      }

      setTimeout(() => {
        setShowModal_Loading(false);
      }, 8000);
    }).catch( (err) => { console.log(err) });
  };


  
  const getAuthStatus = async () => {
    try {
      const data = await getData('setUser').then( (res) => {
        // console.log(data.email);
        const token = res.token;
        const email = res.email;
        // if (token !== null && email !== null) {
        //   navigation.navigate('BottomNavigation');
        // } else {
        //   navigation.navigate('GetStarted');
        // }
      }).catch ( (err) => { console.log(err) } );
    } catch (error) {
      console.log(error);
      navigation.navigate('GetStarted');
    }
  };



  
  return (
    <View style={styles.container}>
      <View style={[globalStyle.center, globalStyle.mrt1, globalStyle.mrb1]}>
        <Image source={require('../../assets/logo.png')}  style={{height:50, resizeMode: 'contain' }} />
        <Text>{"\n"}</Text>
      </View>


      <View style={[globalStyle.center, globalStyle.mrt2, globalStyle.mrb1,]}>
        <Text style={[globalStyle.h1, globalStyle.txtCenter]}>Get started</Text>
        <Text style={[globalStyle.pdt2, styles.subTitle, globalStyle.mrt2]}>We never post to your social media</Text>
      </View>


      <View style={[globalStyle.mrt2, {width: '88%'}]}>
        <TouchableOpacity style={styles.container2} onPress={signupWithGoogle}>
          <View style={styles.leftSection}>
              <Image  style={{ marginRight: 8, height: 26, resizeMode: 'contain'}} source={require('../../assets/google-icon.png')} />
          </View>
          <View style={styles.rightSection}>
              <Text style={[globalStyle.fRegular, { color: '#fff', fontSize: 16, letterSpacing: 0.2}]} >Sign up with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container2} onPress={signupWithFacebook}>
          <View style={styles.leftSection}>
              <Image  style={{ marginRight: 8, height: 26, resizeMode: 'contain'}} source={require('../../assets/fb-icon.png')} />
          </View>
          <View style={styles.rightSection}>
              <Text style={[globalStyle.fRegular, { color: '#fff', fontSize: 16, letterSpacing: 0.2 }]}>Sign up with Facebook</Text>
          </View>
        </TouchableOpacity>

{/* <LoginButton
  onLoginFinished={
    (error, result) => {
      if (error) {
        console.log('Login failed with error: ', error);
      } else if (result.isCancelled) {
        console.log('Login was cancelled');
      } else {
        AccessToken.getCurrentAccessToken()
          .then((data) => {
            console.log(data);
            const accessToken = data.accessToken.toString();
            const request = new GraphRequest('/me', { accessToken }, this._responseInfoCallback);
            new GraphRequestManager().addRequest(request).start();
          });
      }
    }
  }
  onLogoutFinished={() => console.log('User logged out')} /> */}



        <TouchableOpacity style={styles.container2}  onPress={handleNavigationSMS}>
          <View style={styles.leftSection}>
              <Image  style={{ marginRight: 8, height: 26, resizeMode: 'contain'}} source={require('../../assets/sms-icon.png')} />
          </View>
          <View style={styles.rightSection}>
              <Text style={[globalStyle.fRegular, { color: '#fff', fontSize: 16, letterSpacing: 0.2}]}>Sign up with SMS</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View style={[globalStyle.center, globalStyle.pdb1, {width: '80%'}]}>
        <View style={[globalStyle.mrt2, globalStyle.mrb2, {display: 'flex', flexDirection: 'row'}]}>
            <Text style={[styles.p, globalStyle.fLight, globalStyle.mrr2]}>Already have an account?</Text>
            <TouchableOpacity onPress={handleNavigation}>
                <Text style={[styles.p, globalStyle.fBold]}>Login</Text>
            </TouchableOpacity>
        </View>

        <Text style={[styles.subTitle, globalStyle.pdt2, {textAlign: 'center', opacity: 0.8}]}>By continuing, you agree to the Terms of Service & Privacy Policy.</Text>
      </View>

      <Loading showModal_Loading={showModal_Loading} setShowModal_Loading={setShowModal_Loading}></Loading>
    </View>
  );
}




export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    color: '#ffffff',
    width: '100%',
    alignItems: 'center',
  },


    container2: {
      backgroundColor: colors.btnColor2,
      flexDirection: 'row', 
      // alignItems: 'center',
      // justifyContent: 'center',
      borderRadius: 15,
      marginBottom: '5%',
      width: '100%',
      borderColor: '#35383F',
      borderWidth: 1,
      height: 58

    },
    leftSection: {
      flex: 1.1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      width: '100%',
    },
    rightSection: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
    },
    subTitle : {
      fontFamily: 'Superclarendon-Regular',
      fontSize: 15,
      color: '#fff',
      letterSpacing: 0.2,
      lineHeight: 22
    },
    p:{
      fontFamily: 'Superclarendon-Regular',
      fontSize: 16.5,
      color: '#fff'
    }
});
