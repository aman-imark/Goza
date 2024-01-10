import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity,Text, View, Image, Button } from 'react-native';
import { Appbar } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import globalStyle from '../../utils/globalStyle';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../../utils/Colors';

import { storeData, getData, removeData, clearData } from '../../services/storageService';


const Login = ({ navigation }) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  useEffect(() => {
 
  }, []);

  

  const handleNavigationBottom = () => {
    // navigation.navigate('HomeScreen');

  }


  loginWithGoogle = async () => {
      const userData = {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
              street: "Kulas Light",
              suite: "Apt. 556",
              city: "Gwenborough",
              zipcode: "92998-3874",
              geo: {
                lat: "-37.3159",
                lng: "81.1496"
              }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org"
      };

      // const userData = {
      //   firstname: "Bret",
      //   lastname: "",
      //   email: "Sincere@april.biz",
      //   phone: "1-770-736-8031 x56442"
      // };

      await storeData('setUser', userData);
      getAuthStatus();
  };


  loginWithFacebook = async () => {
      const userData = {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
              street: "Kulas Light",
              suite: "Apt. 556",
              city: "Gwenborough",
              zipcode: "92998-3874",
              geo: {
                lat: "-37.3159",
                lng: "81.1496"
              }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org"
      };
      await storeData('setUser', userData);
      getAuthStatus();
  }


  // const getAuthStatus = async () => {
  //   try {
  //     const data = await getData('setUser').then( (res) => {
  //       console.log(res);
  //       if(res) {
  //       // navigation.navigate('BottomNavigation');   
  //       handleNavigationBottom()
  //       // navigation.navigate('BottomNavigation', { screen: 'Home' });

  //       // navigation.navigate('BottomNavigation', {
  //       //   screen: 'Home',
  //       //   params: {
  //       //     screen: 'HomeScreen',            
  //       //   },
  //       // });

  //       // navigation.navigate('Root', {
  //       //   screen: 'Settings',
  //       //   params: {
  //       //     screen: 'Sound',
  //       //     params: {
  //       //       screen: 'Media',
  //       //     },
  //       //   },
  //       // });

  //       } else {
  //         navigation.replace('Login');
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     navigation.replace('Login');
  //   }
  // };


  const getAuthStatus = async () => {
    try {
      const data = await getData('setUser').then( (data) => {
        console.log(data);
        // const username = data.username;
        // const email = data.email;
        if (data) {
          navigation.replace('HomeScreen');
        } else {
          navigation.replace('Login');
        }
      });
    } catch (error) {
      console.log(error);
      navigation.replace('Login');
    }
  };



  return (
    <View style={styles.container}>
      <View style={[globalStyle.center, globalStyle.mrt1, globalStyle.mrb1]}>
        <Image source={require('../../assets/logo.png')}  style={{height:50, resizeMode: 'contain' }} />
        <Text>{"\n"}</Text>
      </View>



      <View style={[globalStyle.center, globalStyle.mrt2, globalStyle.mrb1,]}>
        <Text style={[globalStyle.h1, globalStyle.txtCenter]}>Login</Text>
        <Text style={[globalStyle.pdt2, styles.subTitle, globalStyle.mrt2]}>We never post to your social media</Text>
      </View>



      <View style={[globalStyle.mrt2, {width: '88%'}]}>
        <TouchableOpacity style={styles.container2} onPress={loginWithGoogle}>
          <View style={styles.leftSection}>
              <Image  style={{ marginRight: 8, height: 26, resizeMode: 'contain'}} source={require('../../assets/google-icon.png')} />
          </View>
          <View style={styles.rightSection}>
              <Text style={[globalStyle.fRegular, { color: '#fff', fontSize: 16, letterSpacing: 0.2 }]}>Login with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container2} onPress={loginWithFacebook}>
          <View style={styles.leftSection}>
              <Image  style={{ marginRight: 8, height: 26, resizeMode: 'contain'}} source={require('../../assets/fb-icon.png')} />
          </View>
          <View style={styles.rightSection}>
              <Text style={[globalStyle.fRegular, { color: '#fff', fontSize: 16, letterSpacing: 0.2 }]}>Login with Facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container2} onPress={() => navigation.navigate('Verify')}>
          <View style={styles.leftSection}>
              <Image  style={{ marginRight: 8, height: 26, resizeMode: 'contain'}} source={require('../../assets/sms-icon.png')} />
          </View>
          <View style={styles.rightSection}>
              <Text style={[globalStyle.fRegular, { color: '#fff', fontSize: 16, letterSpacing: 0.2}]}>Login with SMS</Text>
          </View>
        </TouchableOpacity>

      </View>

      <View style={[globalStyle.center, globalStyle.pdb1, {width: '80%'}]}>
        <View style={[globalStyle.mrt2, globalStyle.mrb2, {display: 'flex', flexDirection: 'row'}]}>
            <Text style={[styles.p, globalStyle.fLight, globalStyle.mrr2]}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('GetStarted')}>
                <Text style={[styles.p, globalStyle.fBold]}>Sign Up</Text>
            </TouchableOpacity>
        </View>

        <Text style={[styles.subTitle, globalStyle.pdt2 , {textAlign: 'center', opacity: 0.8}]}>By continuing, you agree to the Terms of Service & Privacy Policy.</Text>
      </View>

    </View>
  );


}


export default Login;


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
