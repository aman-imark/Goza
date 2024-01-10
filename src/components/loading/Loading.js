import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

import { Divider, Modal } from 'react-native-paper';



const Loading = ({ showModal_Loading, setShowModal_Loading }) => {

  return (
    <Modal visible={showModal_Loading} contentContainerStyle={styles.containerStyle} animationType="fade"
    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
        <View style={{ width: '100%', height: 70,   backgroundColor: "#2A2C36", borderRadius: 6}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontFamily: 'Superclarendon-Bold', fontSize: 20, color: '#fff',
                     letterSpacing: 4, lineHeight: 22, marginRight: 20}}>Loading...</Text>
              <ActivityIndicator color={'#fff'} animating={true} size={'large'} />
            </View> 
        </View>
    </Modal>
  );
};



export default Loading;

const styles = StyleSheet.create({
  containerStyle: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent : 'center',
    elevation: 10,
    shadowOpacity: .5,
    alignSelf: 'center',
  }
});
 
