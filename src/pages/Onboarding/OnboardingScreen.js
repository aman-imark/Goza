import { View, Text, TouchableOpacity, Button, StatusBar, Image, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'

import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import ContentCard from '../../components/Onboarding/ContentCard';
import { styles } from './OnboardingStyle';
import globalStyle from '../../utils/globalStyle';
import { colors } from '../../utils/Colors';



const OnboardingScreen = ({ navigation }) => {

    const swiperRef = useRef(null);
    const [ ispaused, setIspaused] = useState(false)
    const [index, setIndex] = useState(0)
    console.log(index)
    const handleNextPress = () => {
        // console.log(swiperRef.current);
        if (swiperRef.current) {
            swiperRef.current.scrollBy(1);
            setIspaused(true)
            index < 4 && setIndex(index + 1)
        }
    };

    function handleNavigation() {
        navigation.navigate('GetStarted')
    }

    return (
        // <StatusBar backgroundColor='transparent' barStyle="light-content" ></StatusBar>
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.AppDefaultColor}}>
            <StatusBar backgroundColor='transparent' barStyle="light-content" ></StatusBar>
        <View style={[styles.Container]}>
            <Swiper
              dot={
                <View
                  style={{
                    backgroundColor: 'rgba(255,255,255,.3)',
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 5,
                    marginRight: 5
                  }}
                />
              }
              activeDot={
                <View
                  style={{
                    backgroundColor: '#fff',
                    width: 26,
                    height: 8,
                    borderRadius: 8,
                    marginLeft: 5,
                    marginRight: 5,
                  }}
                />
              }
              paginationStyle={{
                bottom: 150
              }}

              loop={false} ref={swiperRef} >

                <View style={[styles.slide]}>
                    <View style={styles.topPart}>
                    <Image 
                       source={require('../../assets/on-board1.png')}
                       resizeMode={'contain'} style={styles.slideimage} />

                    {/* <Video
                        source={require('../../assets/Onboarding_video.mp4')}
                        rate={1.0}
                        volume={1.0}
                        paused={ispaused}
                        muted={false}
                        resizeMode={"cover"}
                        repeat
                        style={styles.video}
                    /> */}
                    </View>
                    <ContentCard ContentText="First dates you’ll actually enjoy" btnName='Next' handleNextPress={handleNextPress} />
                </View>

                <View style={styles.slide}>
                    <View style={styles.topPart}>
                        <View style={styles.item1}>
                            <View style={styles.massageCard1}>
                                <Text style={styles.mText}>
                                    How was your weekend?
                                </Text>
                            </View>
                            <Text style={styles.time}>
                                10:20
                            </Text>
                        </View>
                        <View style={styles.item2}>
                            <View style={styles.massageCard2}>
                                <Text style={styles.mText}>
                                    Good, wbu
                                </Text>
                            </View>
                            <Text style={styles.time}>
                                10:22
                            </Text>
                        </View>
                        <View style={styles.item3}>
                            <View style={styles.massageCard3}>
                                <Text style={styles.mText}>
                                    Same
                                </Text>
                            </View>
                            <Text style={styles.time}>
                                10:25
                            </Text>
                        </View>
                    </View>
                    <ContentCard ContentText="Skip the boring small talk" btnName='Next' handleNextPress={handleNextPress} />
                </View>


                <View style={styles.slide}>
                   <View style={[styles.topPart, globalStyle.pdt1, globalStyle.pdb1]}>
                      {/* <Image 
                      source={require('../../assets/onimage3.png')}
                      resizeMethod={'resize'} style={styles.slideimage} /> */}

                      <Video
                        source={require("../../assets/IntroforApp.mp4")}
                        style={styles.video}
                        muted={true}
                        repeat={true}
                        playInBackground={false}
                        playWhenInactive={false}
                        resizeMode={"cover"}
                        rate={1.0}
                        ignoreSilentSwitch={"obey"}
                      />


         {/* <Video
            source={ this.props.videoURL }
            ref={ (ref) => { this.player = ref }}
            rate={1.0}
            volume={1.0}
            paused={ this.state.paused }
            resizeMode="contain"
            muted={false}
            repeat={false}
            playInBackground={false}
            playWhenInactive={false}
            ignoreSilentSwitch={"ignore"}
            progressUpdateInterval={250.0}
            onEnd={ () => this._onEnd() }
            onFullscreenPlayerDidDismiss={ () => this._onEnd() }
            setControls={true}
            controls={true}
            style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
          /> */}
            
            
            
                    </View>
                    <ContentCard ContentText="Find your last first date" btnName='Get started' handleNextPress={handleNavigation} />
                </View>
            </Swiper>
        
        </View>
        </SafeAreaView>
    )
}

export default OnboardingScreen