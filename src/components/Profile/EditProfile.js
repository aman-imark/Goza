import { StyleSheet, Text, View, StatusBar, Pressable, Image, Dimensions, 
         ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { colors } from '../../utils/Colors'
import Icon from 'react-native-vector-icons/Octicons';
import { Appbar, Divider } from 'react-native-paper';
import { Platform } from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import globalStyle from '../../utils/globalStyle';
const { width, height } = Dimensions.get('screen');

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const EditProfile = () => {

    const navigation = useNavigation();
    
      takePicture = async () => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data.uri);
        }
      };


    const interestsList = [
        { id: '1', name: 'Travel' },
        { id: '2', name: 'Music' },
        { id: '3', name: 'Outdoors' },
        { id: '4', name: 'Books' },
        { id: '5', name: 'Beer' },
        { id: '6', name: 'Dogs' },
        { id: '7', name: 'Movies' },
        { id: '8', name: 'Gym' },
    ]

    const politicstsList = [
        { id: '1', name: ' Liberal' },
        { id: '2', name: 'Conservative' },
        { id: '3', name: 'Not Political' },
        { id: '4', name: 'Moderate' },
        { id: '5', name: 'Other' },
        { id: '6', name: 'Prefer not to say' },
    ]

    const education = [
        { id: '1', name: ' College' },
        { id: '2', name: 'Postgrad' },
        { id: '4', name: 'High School' },
        { id: '5', name: 'Prefer not to say' },
    ]


    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [selectedInterest, setSelectedInterest] = useState([]);


    const handleInterestPress = (interest) => {
        if (selectedInterest.includes(interest)) {
            setSelectedInterest(selectedInterest.filter((item) => item !== interest));
        } else {
            setSelectedInterest([...selectedInterest, interest]);
        }
    };



    
    return (
        <ScrollView style={styles.Container}>
            <View>
                <View style={styles.titlebox}>
                    <Text style={styles.title}>Your Best Photos</Text>
                    <TouchableOpacity  onPress={()=> navigation.navigate('SelfieScreen')}>
                        <Icon name='pencil' size={20} color={colors.AppDefaultColor} />
                    </TouchableOpacity>
                </View>
         
                
                {/* <ScrollView contentContainerStyle={styles.photosrow}>
                    <View style={styles.imagecard}>
                        <Image source={require('../../assets/Images/Uploaded/uploaded_06.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                        <View  style={{opacity: 10, position: 'absolute', bottom: '10%', right: '10%'}}>
                            <TouchableOpacity onPress={()=> navigation.navigate('SelfieScreen')}> 
                               <Icon name='pencil' size={15} color={'#000'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.imagecard}>
                        <Image source={require('../../assets/Images/Uploaded/uploaded_05.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    
                        <View  style={{opacity: 10, position: 'absolute', bottom: '10%', right: '10%'}}>
                            <TouchableOpacity> 
                               <Icon name='pencil' size={15} color={'#000'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.imagecard}>
                        <Image source={require('../../assets/Images/Uploaded/uploaded_03.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    
                        <View  style={{opacity: 10, position: 'absolute', bottom: '10%', right: '10%'}}>
                            <TouchableOpacity> 
                               <Icon name='pencil' size={15} color={'#000'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.imagecard}>
                        <Image source={require('../../assets/Images/Uploaded/uploaded_05.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    
                        <View  style={{opacity: 10, position: 'absolute', bottom: '10%', right: '10%'}}>
                            <TouchableOpacity> 
                               <Icon name='pencil' size={15} color={'#000'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView> */}

                <View style={styles.photosrow}>
                    <View style={styles.imagecard}>
                        <Image source={require('../../assets/Images/Uploaded/uploaded_06.png')} 
                        style={{ height: '100%', width: '100%', resizeMode: 'contain', padding: 8 }} />
                        <View  style={{opacity: 10, position: 'absolute', bottom: '10%', right: '15%'}}>
                            <TouchableOpacity onPress={()=> navigation.navigate('SelfieScreen')}> 
                               <Icon name='pencil' size={15} color={'#000'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.imagecard}>
                        <Image source={require('../../assets/Images/Uploaded/uploaded_05.png')} 
                        style={{ height: '100%', width: '100%', resizeMode: 'contain', padding: 8 }} />
                    
                        <View  style={{opacity: 10, position: 'absolute', bottom: '10%', right: '15%'}}>
                            <TouchableOpacity> 
                               <Icon name='pencil' size={15} color={'#000'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.imagecard}>
                        <Image source={require('../../assets/Images/Uploaded/uploaded_03.png')} 
                        style={{ height: '100%', width: '100%', resizeMode: 'contain', padding: 8 }} />
                    
                        <View  style={{opacity: 10, position: 'absolute', bottom: '10%', right: '15%'}}>
                            <TouchableOpacity> 
                               <Icon name='pencil' size={15} color={'#000'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.imagecard}>
                        <Image source={require('../../assets/Images/Uploaded/uploaded_05.png')} 
                        style={{ height: '100%', width: '100%', resizeMode: 'contain', padding: 8 }} />
                    
                        <View  style={{opacity: 10, position: 'absolute', bottom: '10%', right: '15%'}}>
                            <TouchableOpacity> 
                               <Icon name='pencil' size={15} color={'#000'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>



                <View style={[styles.section, { width: '85%', marginTop: '4%' }]}>
                    <View style={styles.titlebox}>
                        <Text style={styles.title}>Your background:</Text>
                    </View>
                    <View style={styles.backcard}>
                        <View style={[styles.inpucotainer,  {marginBottom: '4%' }]}>
                            <TextInput
                                style={styles.inputFeild}
                                placeholder={'Job title'}
                                placeholderTextColor={colors.txtgrey}
                                numberOfLines={10}                            
                            // onChangeText={newText => setCardName(newText)}
                            // value={cardName}
                            />
                        </View>
                        <View style={[styles.inpucotainer,  {marginBottom: '4%' }]}>
                            <TextInput
                                style={styles.inputFeild}
                                placeholder={'Company'}
                                placeholderTextColor={colors.txtgrey}
                                numberOfLines={10}
                            // onChangeText={newText => setCardName(newText)}
                            // value={cardName}
                            />
                        </View>
                        <View style={[styles.inpucotainer,  {marginBottom: '4%' }]}>
                            <TextInput
                                style={styles.inputFeild}
                                placeholder={'College/University'}
                                placeholderTextColor={colors.txtgrey}
                                numberOfLines={10}
                            // onChangeText={newText => setCardName(newText)}
                            // value={cardName}
                            />
                        </View>
                        <TouchableOpacity>
                          <Text style={styles.addtext}>+ add more education</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={[styles.section, { width: '85%' }]}>
                    <View style={styles.titlebox}>
                        <Text style={styles.title}>Height:</Text>
                    </View>
                    <View style={styles.backcard}>
                        <View style={[styles.inpucotainer,]}>
                            <TextInput
                                style={[styles.inputFeild,]}
                                placeholder={'5’ 11”'}
                                placeholderTextColor={colors.txtgrey}
                                numberOfLines={10}
                            // onChangeText={newText => setCardName(newText)}
                            // value={cardName}
                            />
                        </View>
                    </View>
                </View>

                
                <View style={[styles.section, { width: '95%'}]}>
                    <View style={styles.titlebox}>
                        <Text style={styles.title}>About Me:</Text>
                    </View>
                    <View style={styles.backcard}>
                        <View style={[styles.inpucotainer, { height: 90, borderRadius: 10, paddingVertical: 5 }]}>
                            <TextInput
                                style={[styles.inputFeild, { textAlignVertical: 'top' }]}
                                placeholder={'write a short intro, including hobbies, interests, dreams, thing you want to do, or anything!'}
                                placeholderTextColor={colors.txtgrey}
                                multiline={true}
                            // onChangeText={newText => setCardName(newText)}
                            // value={cardName}
                            />
                        </View>
                        <Text style={styles.limitText}>500 character limit</Text>
                    </View>
                </View>


                <View style={[styles.section, { width: '95%'}]}>
                    <View style={styles.titlebox}>
                        <Text style={styles.title}>
                         <Text style={[styles.title, {textDecorationLine: 'underline'}]}>Prompt 1:</Text> The two most important things you should know about me are
                        </Text>
                    </View>
                    <View style={styles.backcard}>
                        <View style={[styles.inpucotainer, { height: 65, borderRadius: 10, paddingVertical: 5 }]}>
                            <TextInput
                                style={[styles.inputFeild, { textAlignVertical: 'top' }]}
                                placeholder={'type your answer...'}
                                placeholderTextColor={colors.txtgrey}

                                multiline={true}
                            // onChangeText={newText => setCardName(newText)}
                            // value={cardName}
                            />
                        </View>
                        <Text style={styles.limitText}>200 character limit</Text>
                    </View>
                </View>


                <View style={[styles.section, { width: '95%'}]}>
                    <View style={styles.titlebox}>
                        <Text style={styles.title}>
                         <Text style={[styles.title, {textDecorationLine: 'underline'}]}>Prompt 2:</Text> Let’s talk about...
                        </Text>
                    </View>
                    <View style={styles.backcard}>
                        <View style={[styles.inpucotainer, { height: 65, borderRadius: 10, paddingVertical: 5 }]}>
                            <TextInput
                                style={[styles.inputFeild, { textAlignVertical: 'top' }]}
                                placeholder={'type your answer...'}
                                placeholderTextColor={colors.txtgrey}
                                multiline={true}
                            // onChangeText={newText => setCardName(newText)}
                            // value={cardName}
                            />
                        </View>
                        <Text style={styles.limitText}>200 character limit</Text>
                        {/* <Text>
                            500 character limit
                        </Text> */}
                    </View>
                </View>


                <View style={styles.containerStyle}>
                    <View>
                        <View style={styles.headrow}>
                            <Text style={styles.title}>Interests:</Text>                   
                        </View>
                        <View style={styles.secbody}>
                            {
                                interestsList.map((item, i) =>
                                    <TouchableOpacity key={i} mode='outlined' style={[styles.chip2, { backgroundColor: selectedInterest && !selectedInterest.includes(item.name) ? colors.textdefult : '#1E1F28' }]}
                                        onPress={() => handleInterestPress(item.name)} >
                                        <Text style={[styles.chipText2, { color: selectedInterest && !selectedInterest.includes(item.name) ? colors.black : colors.white }]}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                            )}
                          
                            <TouchableOpacity mode='outlined' style={[ { backgroundColor : '#F5F5F5', height: 25, marginVertical: 4, marginHorizontal: '.8%',
                            alignItem: 'center', justifyContent: 'center', paddingHorizontal: 8, borderRadius: 4, borderWidth: 1, borderColor: '#ABB4BD'}]}>
                                <Text style={{ color: '#93979B'}}>+ Add </Text>
                            </TouchableOpacity>
                     
                        </View>
                    </View>
                    <Divider style={{ marginVertical: 15, color: "#ABB4BD" }} />


                    <View>
                        <View style={styles.headrow}>
                            <Text style={styles.title}>Politics:</Text>     
                            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'flex-end' }}>                  
                           
                            <CheckBox                         
                            style={{height: 14, width: 14, marginRight: 5, alignItems: 'center', justifyContent: 'center'}}
                            boxType='square'
                            onCheckColor="black"
                            onTintColor="black"
                            animationDuration={0.2}
                            lineWidth={1.3}  
                            />
                            <Text style={styles.textside}>Hide from profile</Text>                 
                        </View>
                        </View>
                        <View style={styles.secbody}>
                            {
                             politicstsList.map((item, i) =>
                                    <TouchableOpacity key={i} mode='outlined' style={[styles.chip2, { backgroundColor: selectedInterest && !selectedInterest.includes(item.name) ? colors.textdefult : '#1E1F28' }]}
                                        onPress={() => handleInterestPress(item.name)} >
                                        <Text style={[styles.chipText2, { color: selectedInterest && !selectedInterest.includes(item.name) ? colors.black : colors.white }]}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                           )}
                        </View>
                    </View>
                    <Divider style={{ marginVertical: 15, color: "#ABB4BD" }} />


                    <View>
                        <View style={styles.headrow}>
                            <Text style={styles.title}>Highest Education Level:</Text>                   
                        </View>
                        <View style={styles.secbody}>
                            {
                                education.map((item, i) =>
                                    <TouchableOpacity key={i} mode='outlined' style={[styles.chip2, { backgroundColor: selectedInterest && !selectedInterest.includes(item.name) ? colors.textdefult : '#1E1F28' }]}
                                        onPress={() => handleInterestPress(item.name)} >
                                        <Text style={[styles.chipText2, { color: selectedInterest && !selectedInterest.includes(item.name) ? colors.black : colors.white }]}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                            )}   
                        </View>
                    </View>
                    <Divider style={{ marginVertical: 15, color: "#ABB4BD" }} />


                    <View>
                        <View style={styles.headrow}>
                            <Text style={styles.title}>Ethnicity:</Text>                   
                        </View>
                        <View style={styles.secbody}>
                            {
                                education.map((item, i) =>
                                    <TouchableOpacity key={i} mode='outlined' style={[styles.chip2, { backgroundColor: selectedInterest && !selectedInterest.includes(item.name) ? colors.textdefult : '#1E1F28' }]}
                                        onPress={() => handleInterestPress(item.name)} >
                                        <Text style={[styles.chipText2, { color: selectedInterest && !selectedInterest.includes(item.name) ? colors.black : colors.white }]}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                            )}   
                        </View>
                    </View>
                    <Divider style={{ marginVertical: 15, color: "#ABB4BD" }} />


                    <View>
                        <View style={styles.headrow}>
                            <Text style={styles.title}>Religion:</Text>                   
                        </View>
                        <View style={styles.secbody}>
                            {
                                education.map((item, i) =>
                                    <TouchableOpacity key={i} mode='outlined' style={[styles.chip2, { backgroundColor: selectedInterest && !selectedInterest.includes(item.name) ? colors.textdefult : '#1E1F28' }]}
                                        onPress={() => handleInterestPress(item.name)} >
                                        <Text style={[styles.chipText2, { color: selectedInterest && !selectedInterest.includes(item.name) ? colors.black : colors.white }]}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                            )}   
                        </View>
                    </View>
                    <Divider style={{ marginVertical: 15, color: "#ABB4BD" }} />

           
                    <View>
                        <View style={styles.headrow}>
                            <Text style={styles.title}>Religion:</Text>                   
                        </View>
                        <View style={styles.secbody}>
                            {
                                education.map((item, i) =>
                                    <TouchableOpacity key={i} mode='outlined' style={[styles.chip2, { backgroundColor: selectedInterest && !selectedInterest.includes(item.name) ? colors.textdefult : '#1E1F28' }]}
                                        onPress={() => handleInterestPress(item.name)} >
                                        <Text style={[styles.chipText2, { color: selectedInterest && !selectedInterest.includes(item.name) ? colors.black : colors.white }]}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                            )}   
                        </View>
                    </View>
                    <Divider style={{ marginVertical: 15, color: "#ABB4BD" }} />


                    {/* <KeyboardAvoidingView  behavior="padding" style={{ flex: 1 }} 
                    keyboardVerticalOffset={Platform.select({ ios: 0, android: 50 })}
                    keyboardVerticalOffset={-1000}
                    > */}
                    <View style={[styles.section, {marginBottom: '5%'}]}>
                        <View style={{flexDirection: 'row', alignItems :'center'}}>
                            <Image style={{ height: 35, width: 35, marginRight: 6 }} resizeMode={'cover'} source={require('../../assets/icons/Instagram.png')}></Image>
                            <Text style={styles.title}>Instagram</Text>
                        </View>
                        <View style={{ borderColor: '#2A2C36', borderWidth: 1,
                           borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, marginHorizontal: 4}}>
                           <TextInput
                           placeholder='Insert URL'
                           placeholderTextColor={'#ABB4BD'}></TextInput>
                        </View>
                    </View>
 
                    <View style={[styles.section, {marginBottom: '5%'}]}>
                        <View style={{flexDirection: 'row', alignItems :'center'}}>
                            <Image style={{ height: 35, width: 35, marginRight: 6 }} resizeMode={'cover'} source={require('../../assets/icons/Facebook.png')}></Image>
                            <Text style={styles.title}>Facebook</Text>
                        </View>
                        <View style={{ borderColor: '#2A2C36', borderWidth: 1,
                           borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, marginHorizontal: 4}}>
                           <TextInput
                           placeholder='Insert URL'
                           placeholderTextColor={'#ABB4BD'}></TextInput>
                        </View>
                    </View>
          
                    <View style={[styles.section, {marginBottom: '5%'}]}>
                        <View style={{flexDirection: 'row', alignItems :'center'}}>
                            <Image style={{ height: 35, width: 35, marginRight: 6 }} resizeMode={'cover'} source={require('../../assets/icons/LinkedIn.png')}></Image>
                            <Text style={styles.title}>Linkedin</Text>
                        </View>
                        <View style={{ borderColor: '#2A2C36', borderWidth: 1,
                           borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, marginHorizontal: 4}}>
                           <TextInput
                           placeholder='Insert URL'
                           placeholderTextColor={'#ABB4BD'}></TextInput>
                        </View>
                    </View>
              
                    <View style={[styles.section, {marginBottom: '100%'}]}>
                        <View style={{flexDirection: 'row', alignItems :'center'}}>
                            <Image style={{ height: 25, width: 25, marginRight: 6 }} resizeMode={'cover'} source={require('../../assets/icons/tik-tok.png')}></Image>
                            <Text style={styles.title}>Tik Tok</Text>
                        </View>
                        <View style={{ borderColor: '#2A2C36', borderWidth: 1,
                           borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, marginHorizontal: 4}}>
                           <TextInput
                           placeholder='Insert URL'
                           placeholderTextColor={'#ABB4BD'}></TextInput>
                        </View>               
                    </View>         
                    {/* </KeyboardAvoidingView>  */}
                </View>
                </View>
        </ScrollView>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    Container: {
        // flex: 1,
        // borderColor: 'red',
        // borderWidth: 1,
        height: '60%',
        width: '100%',
        backgroundColor: colors.textdefult, 
        paddingTop: 15,
    },
    section: {
        gap: 10,
        marginBottom: '3.5%'
    },
    titlebox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20
    },
    title: {
        color: colors.AppDefaultColor,
        fontSize: 16,
        fontFamily: 'Superclarendon-Regular',
        lineHeight: 24
    },
    photosrow: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 15,
        // borderColor: 'red',
        // borderWidth: 1,
    },
    imagecard: {
        width: '25%',
        height: 105,
        borderRadius: 12,
        // marginHorizontal: '2.5%',
        position: 'relative',
    },
    backcard: {
        paddingHorizontal: 20,
        // gap: 15
    },
    inpucotainer: {
        width: '100%',
        backgroundColor: colors.textdefult,
        borderRadius: 4,
        borderWidth: 0.8,
        borderColor: '#1E1F28',
        height: 55,
    },

    inputFeild: {
        paddingLeft: 15,
        borderRadius: 15,
        color: colors.black,
        height: '100%',
        fontSize: 14,
        fontFamily: 'Superclarendon-Regular',
        width: '100%',
    },
    addtext: {
        fontSize: 14,
        lineHeight: 15,
        fontFamily: 'Superclarendon-Bold',
        color: '#6D6D6D',
        alignSelf: 'flex-end'
    },
    limitText: {
        fontSize: 12,
        lineHeight: 15,
        opacity: 0.6,
        fontFamily: 'Superclarendon-Regular',
        color: '#6D6D6D',
        alignSelf: 'flex-end',
        paddingHorizontal: 8,
        marginTop: 5
    },



    containerStyle: {
        // flex: 1,
        borderRadius: 10,
        backgroundColor: colors.textdefult, 
        alignSelf: 'center',
        // paddingVertical: 22,
        paddingHorizontal: 20,
        marginBottom: '2%'
    },
    headrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    textside: {
        fontSize: 13,
        color: "#93979B",
        fontFamily: 'Superclarendon-Regular',
        justifyContent: 'center',
    },
    secbody: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        alignItems: 'center',
        // marginBottom: '3.5%'
    },
    chip2: {
        backgroundColor: colors.AppDefaultColor,
        borderWidth: 1,
        borderRadius: 35,
        borderColor: colors.white,
        minHeight: 32,
        paddingHorizontal: 13,
        justifyContent: 'center',
        marginHorizontal: '.8%',
        marginVertical: 4,
        borderWidth: 1,
        borderColor: colors.black,
    },
    chipText2: {
        fontSize: 12,
        color: colors.textPlaceHolder,
        fontFamily: 'Superclarendon-Regular',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        letterSpacing: 0.2
    }
})