import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Normalize } from '../../utils/Size';
import { colors } from '../../utils/Colors';
import { Chip } from 'react-native-paper';
import globalStyle from '../../utils/globalStyle';



const Ethnicity = ({setProgress}) => {

  const EthnicityList =
    [
      { id: '1', name: 'African American' },
      { id: '2', name: 'Asian' },
      { id: '3', name: 'Black' },
      { id: '4', name: 'White/Caucasian' },
      { id: '5', name: 'Indian' },
      { id: '6', name: 'Mixed' },
      { id: '7', name: 'Middle Eastern' },
      { id: '8', name: 'Native American' },
      { id: '9', name: 'Prefer not to say' },
      { id: '10', name: 'Other' }
    ]
    const [ethnicity, setEthnicity] = useState('');
  return (
    <View style={styles.namecard}>
      <View style={styles.inputcard}>
        <Text style={styles.lebel}>Ethnicity:</Text>
        <View style={[styles.row]}>
          {
            EthnicityList.map((item,i) =>
                  <TouchableOpacity  key={i}  mode='outlined' style={[styles.chip, { backgroundColor: ethnicity === item.name ? colors.white : '#1E1F28', }]}
                         onPress={() => { setTimeout(() => { setProgress((pre) => pre + 0.1); 
                              //   console.log("pressed!");
                          }, 500), setEthnicity(item.name) }}>
                    <Text style={[styles.chipText, { color: ethnicity === item.name ? colors.black : colors.white }]}>
                        {item.name}
                    </Text>
                  </TouchableOpacity>
            )
          }
        </View>
      </View>
    </View>
  )
}

export default Ethnicity

const styles = StyleSheet.create({

  namecard: {
    marginTop: 55,
    
  },

  lebel: {
    fontSize: 21,
    color: colors.white,
    lineHeight: 32,
    fontFamily: 'Superclarendon-Regular',
  },
  inputcard: {
    width: '100%',
    // marginTop: 30
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15
  },
  chip: {
    backgroundColor: colors.AppDefaultColor,
    borderWidth: 1,
    borderRadius: 35,
    borderColor: colors.white,
    minHeight: 36,
    paddingHorizontal: 15,
    justifyContent: 'center',
    margin:6
  },
  chipText: {
    fontSize: 14,
    color: colors.textPlaceHolder,
    lineHeight: 20,
    fontFamily: 'Superclarendon-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
});