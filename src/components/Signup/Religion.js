import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Normalize } from '../../utils/Size';
import { colors } from '../../utils/Colors';
import { Chip } from 'react-native-paper';

const Religion = ({ setProgress }) => {
  const religionsList =
    [
      { id: '1', name: 'Not religious' },
      { id: '1', name: 'Christian' },
      { id: '1', name: 'Catholic' },
      { id: '1', name: 'Buddhist' },
      { id: '1', name: 'Muslim' },
      { id: '1', name: 'Jewish' },
      { id: '1', name: 'Sikh' },
      { id: '1', name: 'Hindu' },
      { id: '1', name: 'Anglican' },
      { id: '1', name: 'Spiritual' },
      { id: '1', name: 'Other' }
    ]
  const [religion, setReligion] = useState('')
  return (
    <View style={styles.namecard}>
      <View style={styles.inputcard}>
        <Text style={styles.lebel}>Religion:</Text>
        <View style={styles.row}>
          {
            religionsList.map((item, i) =>
              <TouchableOpacity key={i} mode='outlined' style={[styles.chip, { backgroundColor: religion === item.name ? colors.white : '#1E1F28' }]}
                onPress={() => {
                  setTimeout(() => {
                    setProgress((pre) => pre + 0.1);
                    //   console.log("pressed!");
                  }, 500), setReligion(item.name)
                }}>
                <Text style={[styles.chipText, { color: religion === item.name ? colors.black : colors.white }]}>
                  {item.name}
                </Text>
              </TouchableOpacity>

              // <Chip  key={i} onPress={()=>{setReligion(item.name), setProgress((prev)=>prev+0.1) }} mode='outlined'
              //        style={[styles.chip, {marginRight: 12, marginBottom: 12}]}>
              //        <Text style={styles.chipText}>{item.name}</Text>
              // </Chip>     
            )
          }
        </View>
      </View>
    </View>
  )
}

export default Religion

const styles = StyleSheet.create({
  namecard: {
    marginTop: 55,
    width: '100%'
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