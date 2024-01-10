import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Headerbar from '../../../components/Headerbar'
import { colors } from '../../../utils/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Switch } from 'react-native-paper'

const Notification = ({ navigation }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={'transparent'} />
            <Headerbar
                goBack={() => navigation.goBack()}
                title={'Notifictions'}
            />
            <View style={styles.main}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', }}>
                    <Text style={{
                        color: colors.white, fontSize: 16, fontFamily: 'Superclarendon-Regular',

                    }}>
                        Show Messages Previews
                    </Text>
                    <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)}
                        trackColor={'#35383F'}
                        color={colors.white}
                        thumbColor={colors.white}
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Text style={{
                        color: colors.white, fontSize: 16, fontFamily: 'Superclarendon-Regular',

                    }}>
                        New Message
                    </Text>
                    <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)}
                        trackColor={'#35383F'}
                        color={colors.white}
                        thumbColor={colors.white}
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Text style={{
                        color: colors.white, fontSize: 16, fontFamily: 'Superclarendon-Regular',

                    }}>
                        New Match
                    </Text>
                    <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)}
                        trackColor={'#35383F'}
                        color={colors.white}
                        thumbColor={colors.white}
                        style={{}}
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Text style={{
                        color: colors.white, fontSize: 16, fontFamily: 'Superclarendon-Regular',

                    }}>
                        Match Around Me
                    </Text>
                    <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)}
                        trackColor={'#35383F'}
                        color={colors.white}
                        thumbColor={colors.white}
                        style={{}}
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Text style={{
                        color: colors.white, fontSize: 16, fontFamily: 'Superclarendon-Regular',

                    }}>
                        You Got Likes
                    </Text>
                    <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)}
                        trackColor={'#35383F'}
                        color={colors.white}
                        thumbColor={colors.white}
                        style={{}}
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Text style={{
                        color: colors.white, fontSize: 16, fontFamily: 'Superclarendon-Regular',

                    }}>
                        New Updates
                    </Text>
                    <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)}
                        trackColor={'#35383F'}
                        color={colors.white}
                        thumbColor={colors.white}
                        style={{}}
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Text style={{
                        color: colors.white, fontSize: 16, fontFamily: 'Superclarendon-Regular',

                    }}>
                        VIP Status
                    </Text>
                    <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)}
                        trackColor={'#35383F'}
                        color={colors.white}
                        thumbColor={colors.white}
                        style={{}}
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Text style={{
                        color: colors.white, fontSize: 16, fontFamily: 'Superclarendon-Regular',

                    }}>
                        New Services
                    </Text>
                    <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)}
                        trackColor={'#35383F'}
                        color={colors.white}
                        thumbColor={colors.white}
                        style={{}}
                    />
                </View>
            </View>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        height: '100%',
        backgroundColor: colors.AppDefaultColor,
    },
    main: {
        width: '100%',
        height: '100%',
        paddingVertical: 30,
        paddingHorizontal: 30,
        gap:28
    },
})