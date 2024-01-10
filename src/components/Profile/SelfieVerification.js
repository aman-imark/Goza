import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Modal } from 'react-native-paper'
import { colors } from '../../utils/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SelfieVerification = ({
    svmodal,
    setSvmodal
}) => {

    const [submitmodal, setSubmitmodal] = useState(false)
    const [pendingmod, setPendingmod] = useState(false)
    const [verifiedmodal, setVerifiedmodal] = useState(false)
    const handleClose = () => {
        setSvmodal(false);
        setSubmitmodal(true)
    }
    return (
        <>
            <Modal visible={svmodal} contentContainerStyle={styles.containerStyle}>
                <Pressable onPress={handleClose} style={{ position: 'absolute', top: 20, right: 20 }}>
                    <Icon name={'close'} size={25} color={colors.txtgrey} />
                </Pressable>
                <Image source={require('../../assets/Images/Profile/Medallions.png')} style={{ height: 45, width: 45, resizeMode: 'contain', alignSelf: 'center', }} />
                <Text style={[styles.title, { fontSize: 20 }]}>
                    Verify Your Account
                </Text>
                <Text style={[styles.subtitle, { marginHorizontal: 50 }]}>
                    Take & upload a {'\n'}selfie using this pose
                </Text>

                <Image source={require('../../assets/Images/Profile/selfie.png')} style={{ height: 130, width: 120, resizeMode: 'contain', alignSelf: 'center', marginTop: 15 }} />

                <Text style={styles.pragraph}>
                    We use this selfie to verify you {'\n'}match the photos in your profile
                </Text>
                <Text style={[styles.pragraph, { fontFamily: 'Superclarendon-Bold' }]}>
                    We do not post this selfie
                </Text>
                {/* <Card />*/}
                <TouchableOpacity onPress={handleClose} style={[styles.btn, { width: 210 }]}>
                    <Text style={styles.btntext}>Take selfie</Text>
                </TouchableOpacity>
            </Modal>

            <Selfiesubmit submitmodal={submitmodal} setPendingmod={setPendingmod} setSubmitmodal={setSubmitmodal} />
            <Pending pendingmod={pendingmod} setPendingmod={setPendingmod} setVerifiedmodal={setVerifiedmodal} />
            <Verified verifiedmodal={verifiedmodal} setVerifiedmodal={setVerifiedmodal} />
        </>
    )
}

export default SelfieVerification

const Selfiesubmit = ({
    submitmodal,
    setSubmitmodal,
    setPendingmod
}) => {
    return (
        <Modal visible={submitmodal} contentContainerStyle={[styles.containerStyle, {}]}>
            <Pressable onPress={() => setSubmitmodal(false)} style={{ position: 'absolute', top: 20, right: 20 }}>
                <Icon name={'close'} size={25} color={colors.txtgrey} />
            </Pressable>
            <Image source={require('../../assets/Images/Profile/Medallions.png')} style={{ height: 45, width: 45, resizeMode: 'contain', alignSelf: 'center', }} />
            <Text style={[styles.title, { fontSize: 20 }]}>
                Ready to submit?
            </Text>
            <Text style={[styles.subtitle, { marginHorizontal: 50 }]}>
                Your photo must be clear & match the pose.
            </Text>

            <View style={styles.selfiecard}>
                <View style={styles.demoselfie}>
                    <Image source={require('../../assets/Images/Profile/selfie.png')} style={{ height: 85, width: 80, resizeMode: 'contain', alignSelf: 'center', }} />
                </View>
                <View style={styles.userselfie}>
                    <Image source={require('../../assets/Images/Profile/selfie.png')} style={{ height: 150, width: 140, resizeMode: 'contain', alignSelf: 'center', }} />
                </View>
            </View>


            {/* <Card />*/}
            <TouchableOpacity onPress={() => { setSubmitmodal(false), setPendingmod(true) }} style={[styles.btn, { width: 210 }]}>
                <Text style={styles.btntext}>
                    Submit selfie
                </Text>
            </TouchableOpacity>
                <Text style={{
                    color: colors.grey,
                    fontSize: 15,
                    fontFamily: 'Superclarendon-Bold',
                    textDecorationLine: 'underline',
                    textAlign: 'center',
                    marginTop: 20
                }}>Retake selfie</Text>
        </Modal>
    )
}

const Pending = ({

    pendingmod,
    setPendingmod,
    setVerifiedmodal
}) => {
    useEffect(() => {
        setTimeout(() => {
            setPendingmod(false)
        }, 5000);
    }, [])
    return (
        <Modal visible={pendingmod} contentContainerStyle={[styles.containerStyle, { paddingVertical: 20, paddingHorizontal: 20 }]}>

            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', paddingVertical: 10 }}>
                <Image source={require('../../assets/Images/Profile/Medallions.png')} style={{ height: 45, width: 45, resizeMode: 'contain', alignSelf: 'center', }} />
                <View style={styles.col}>
                    <Text style={[{
                        color: colors.black,
                        fontSize: 16,
                        fontFamily: 'Superclarendon-Bold',
                    }]}>
                        Verification Pending
                    </Text>
                    <Text style={[{
                        color: colors.black,
                        fontSize: 13,
                        fontFamily: 'Superclarendon-Regular',
                    }]}>
                        Your verification {'\n'}application is under review
                    </Text>
                </View>
            </View>

        </Modal>
    )
}

const Verified = ({
    verifiedmodal,
    setVerifiedmodal
}) => {
    return (
        <Modal visible={verifiedmodal} contentContainerStyle={[styles.containerStyle, { paddingVertical: 20, paddingHorizontal: 20 }]}>

            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <Image source={require('../../assets/Images/Profile/Medallions.png')} style={{ height: 45, width: 45, resizeMode: 'contain', alignSelf: 'center', }} />
                <View style={styles.col}>
                    <Text style={[{
                        color: colors.black,
                        fontSize: 16,
                        fontFamily: 'Superclarendon-Bold',
                    }]}>
                        Verification Approved!
                    </Text>
                    <Text style={[{
                        color: colors.black,
                        fontSize: 13,
                        fontFamily: 'Superclarendon-Regular',
                    }]}>
                        You’re verified!
                    </Text>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: '88%',
        // height: '60%',
        // width: '100%',
        borderRadius: 10,
        elevation: 10,
        shadowOpacity: .5,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 40,
        alignSelf: 'center',
        borderWidth: 1,
        bordeColor: 'red',
    },
    title: {
        color: colors.black,
        fontSize: 18,
        fontFamily: 'Superclarendon-Bold',
        textAlign: 'center'
    },
    subtitle: {
        color: colors.black,
        fontSize: 16,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center',
        marginTop: 20
    },
    pragraph: {
        color: colors.grey,
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center',
        marginTop: 20
    },
    btn: {
        width: '80%',
        height: 55,
        backgroundColor: '#D3C6A5',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 25,
        alignSelf: 'center'

    },
    btntext: {
        color: colors.black,
        fontSize: 16,
        lineHeight: 25,
        fontFamily: 'Superclarendon-Regular',
        // letterSpacing: .2
    },
    selfiecard: {
        height: 150,
        paddingHorizontal: 60,
        width: '100%',
        flexDirection: 'row',
        marginTop: 15
    },
    demoselfie: {
        height: '100%',
        justifyContent: 'flex-end',
        marginLeft: 10
    },
    col: {
        justifyContent: 'space-between',

    }
})