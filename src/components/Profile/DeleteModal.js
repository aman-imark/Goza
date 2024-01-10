import { StyleSheet, Text, TouchableOpacity, View, TextInput, BlurView } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/Colors'
import { Divider, Modal } from 'react-native-paper';


const DeleteModal = ({ deleteopen, setDeleteopen, setPauseMod }) => {

    const [reasonMod, setReasonMod] = useState(false)

    const Reason = ({ reasonMod, setReasonMod }) => {
        return (
        <Modal visible={reasonMod} animationType="fade"
               contentContainerStyle={styles.containerStyle}
               style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '100%'}}>

            <View style={{width: '100%'}}>    
            <View style={styles.card}>
                <Text style={styles.title}>Reason for Deletion</Text>
                <Text style={[styles.pragraph, { textAlign: 'left', }]}>
                      Please let us know why{'\n'}
                      you deleted Goza so {'\n'}we can improve
                </Text>
                <View style={styles.inputView}>
                <TextInput
                    multiline
                    placeholder='Type reason. . .'
                    textColor={colors.white}
                    placeholderTextColor={'#9E9E9E'}
                    style={styles.inputFeild}/>
                </View>
      
            </View>
            {/* <Card />*/}
            <TouchableOpacity onPress={() => setReasonMod(false)} style={[styles.btn, { height: 40, width: '55%', alignSelf: 'center' }]}>
                <Text style={styles.btntext}>Submit</Text>
            </TouchableOpacity>
            </View> 
        </Modal>)
    };



    return (
        <>
        <Modal visible={deleteopen} animationType="fade"
               contentContainerStyle={styles.containerStyle}
               style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '100%'}}>

            <View style={{width: '100%'}}>
            <View style={styles.card}>
                <Text style={[styles.title]}>Delete</Text>
                <Divider />
                <View style={styles.pCard}>
                    <Text style={[styles.pragraph]}>Are you sure you want to delete{'\n'} your account?</Text>
                    <Text style={styles.pragraph}>This cannot be undone</Text>
                </View>
            </View>    
            {/* <Card />*/}
            <View style={styles.btnrow}>
                <TouchableOpacity onPress={() => setDeleteopen(false)} style={[styles.btn]}>
                    <Text style={styles.btntext}>No, don’t!</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setDeleteopen(false), setReasonMod(true) }} style={[styles.btn, { backgroundColor: colors.black }]}>
                    <Text style={[styles.btntext, { color: colors.white }]}>Yes, delete</Text>
                </TouchableOpacity>
            </View>
            <Text onPress={() => { setDeleteopen(false), setPauseMod(true) }} style={styles.pauseAcc}>
                Pause my account instead
            </Text>
            </View>
        </Modal>
        <Reason reasonMod={reasonMod} setReasonMod={setReasonMod} />
        </>
    )
}

export default DeleteModal;


export const PauseAcc = ({pauseMod, setPauseMod}) => {
    const [accPausedOpen, setAccPausedOpen] = useState(false)

    return (
        <>
        <Modal visible={pauseMod} animationType="fade"
               contentContainerStyle={styles.containerStyle}
               style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '100%'}}>

            <View style={{width: '100%'}}>
                <View style={styles.card}>
                    <Text style={[styles.title,]}>Pause account</Text>
                    <Divider />
                    <View style={styles.pCard}>
                        <Text style={[styles.pragraph]}>
                            Pausing your account will{'\n'} remove you from search feeds.{'\n'} You can still engage with your matches.
                        </Text>
                        <Text style={styles.pragraph}>
                            Are you sure you want pause{'\n'} your account?
                        </Text>
                    </View>
                </View>

                {/* <Card />*/}
                <View style={styles.btnrow}>
                    <TouchableOpacity onPress={() => setPauseMod(false)} style={[styles.btn]}>
                        <Text style={styles.btntext}>No, don’t!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setPauseMod(false), setAccPausedOpen(true) }} style={[styles.btn, { backgroundColor: colors.black }]}>
                        <Text style={[styles.btntext, { color: colors.white }]}>Yes, pause it</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        <AccPaused accPausedOpen={accPausedOpen} setAccPausedOpen={setAccPausedOpen} />
        </>
    )
};

const AccPaused = ({ accPausedOpen, setAccPausedOpen }) => {
    return (
        <Modal visible={accPausedOpen} animationType="fade"
               contentContainerStyle={styles.containerStyle}
               style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '100%'}}>

            <View style={{width: '100%'}}>
            <View style={[styles.card]}>
                <Text style={[styles.title]}>Account paused</Text>
                <Divider />
                <Text style={[styles.pragraph,]}>Your account is paused.</Text>
            </View>
            {/* <Card />*/}
            <TouchableOpacity onPress={() => setAccPausedOpen(false)} style={[styles.btn, { height: 40, width: '60%', alignSelf: 'center', backgroundColor: colors.secondColor }]}>
                <Text style={styles.btntext}>Unpause Account</Text>
            </TouchableOpacity>
            </View>
        </Modal>
    )
};



const styles = StyleSheet.create({
    containerStyle: {
        // height: '60%',
        // width: '90%',
        // borderRadius: 10,
        // elevation: 10,
        // shadowOpacity: .5,
        // backgroundColor: '#1F222A',
        // alignSelf: 'center',
        // padding: 25,
        // marginHorizontal: 20

        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent : 'center',
        borderRadius: 10,
        elevation: 10,
        shadowOpacity: .5,
        backgroundColor:  '#1F222A',
        alignSelf: 'center',
        padding: 25,
    },
    card: {
        // width: '100%',
        marginHorizontal: 10,
        gap: 20
    },
    title: {
        color: colors.white,
        fontSize: 20,
        lineHeight: 25,
        fontFamily: 'Superclarendon-Bold',
        textAlign: 'center'
    },
    inputView: {
        minHeight: 80,
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 1,    
        elevation: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    inputFeild: {
        color: colors.white,
        fontSize: 15,
        letterSpacing: .5,
    },
    pCard: {
        gap: 5
    },
    pragraph: {
        color: colors.white,
        fontSize: 14,
        lineHeight: 23,
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center',
        padding: 5
    },
    btnrow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    btn: {
        width: '45%',
        height: 53,
        backgroundColor: colors.white,
        borderRadius: 4, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    btntext: {
        color: colors.AppDefaultColor,
        fontSize: 14.5,
        fontFamily: 'Superclarendon-Regular',
        letterSpacing: .2
    },
    pauseAcc: {
        fontSize: 15,
        color: '#ABB4BD',
        fontFamily: 'Superclarendon-Regular',
        textAlign: 'center',
        marginTop: 25,
        textDecorationLine: 'underline',
    }
});