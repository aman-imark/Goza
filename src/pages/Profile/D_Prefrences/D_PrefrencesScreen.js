import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../utils/Colors'
import Headerbar from '../../../components/Headerbar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Slider } from '@miblanchard/react-native-slider'


const D_PrefrencesScreen = ({ navigation }) => {
  const [value, setValue] = useState('')
  const [Maxvalue, setMaxValue] = useState(65)
  const [Minvalue, setMinValue] = useState(22)

  const [rangeValues, setRangeValues] = useState([20, 80]);

  const handleValuesChange = values => {
    setRangeValues(values);
  };
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={'transparent'} />
      <Headerbar
        goBack={() => navigation.goBack()}
        title={'Dating Preferences'}
      />
      <View style={styles.main}>
        <View style={styles.LocSection}>
          <Text style={styles.title}>
            Location
          </Text>
          <Text style={[styles.title, { color: colors.txtgrey }]}>
            New York, US <Icon name='chevron-right' size={20} color={colors.txtgrey} />
          </Text>
        </View>
        <View style={styles.inputcard}>
          <Text style={styles.lebel}>Interested:</Text>
          <SegmentedControlTab
            tabStyle={{
              backgroundColor: '#2A2C36',
              borderColor: '#2A2C36',
              // borderRadius: 10,
            }}
            tabTextStyle={{
              color: colors.white,
              fontFamily: 'Superclarendon-Regular',
            }}
            activeTabStyle={{ backgroundColor: colors.white, borderRadius: 10 }}
            activeTabTextStyle={{
              color: colors.black,
              fontSize: 12,
              fontFamily: 'Superclarendon-Regular',
              letterSpacing: .5
            }}
            tabsContainerStyle={styles.segmentBtn}
            borderRadius={10}
            values={["Women", "Men", "Both"]}
            selectedIndex={value}
            onTabPress={setValue}
          />
        </View>
        <View style={styles.inputcard}>
          <View style={styles.LocSection}>
            <Text style={styles.lebel}>Age:</Text>
            <Text style={[styles.lebel,]}>20 - 28</Text>
          </View>
          <Slider
            value={value}
            maximumValue={Maxvalue}
            minimumValue={Minvalue}
            trackMarkstrackStyle={{ height: 5 }}
            thumbTintColor={colors.textdefult}
            minimumTrackTintColor={colors.textdefult}
            onValueChange={value => setValue(value)}
            trackMarks
          />


        </View>

        <View style={styles.inputcard}>
          <View style={styles.LocSection}>
            <Text style={styles.lebel}>Height:</Text>
            <Text style={[styles.lebel,]}>5’6 - 5’11</Text>
          </View>
          <Slider
            value={value}
            maximumValue={Maxvalue}
            minimumValue={Minvalue}
            trackMarks
            onValueChange={value => setValue(value)}
            trackStyle={{ height: 5 }}
            thumbTintColor={colors.textdefult}
            minimumTrackTintColor={colors.textdefult}
          />

        </View>
        <View style={styles.inputcard}>
          <View style={styles.LocSection}>
            <Text style={styles.lebel}>Distance:</Text>
            <Text style={styles.lebel}>40 miles</Text>
          </View>
          <Slider
            value={value}
            maximumValue={Maxvalue}
            minimumValue={Minvalue}
            trackMarks
            trackStyle={{ height: 5 }}
            thumbTintColor={colors.textdefult}
            minimumTrackTintColor={colors.textdefult}
            onValueChange={value => setValue(value)}
          />

        </View>
        <TouchableOpacity style={[styles.inputFeild, { justifyContent: 'space-between', flexDirection: 'row' }]}>
          <Text style={[styles.btnText]}>
            Ethnicity
          </Text>
          <Text style={[styles.btnText, { fontSize: 15, color: colors.txtgrey }]}>
            Open to all <Icon name='chevron-right' size={20} color={colors.txtgrey} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.inputFeild, { justifyContent: 'space-between', flexDirection: 'row' }]}>
          <Text style={[styles.btnText]}>
            Religion
          </Text>
          <Text style={[styles.btnText, { fontSize: 15, color: colors.txtgrey }]}>
            Open to all <Icon name='chevron-right' size={20} color={colors.txtgrey} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '100%', height: 56, backgroundColor: colors.white, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Text style={[styles.btnText, { color: colors.AppDefaultColor, fontFamily: 'Superclarendon-Bold', }]}>
            Save changes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default D_PrefrencesScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.AppDefaultColor,
  },
  main: {
    width: '100%',
    paddingHorizontal: '10%'
  },
  LocSection: {
    flexDirection: 'row',
    paddingHorizontal: '2%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: colors.textdefult,
    fontSize: 16,
    letterSpacing: .2,
    fontFamily: 'Superclarendon-Regular',
    lineHeight: 24

  },
  lebel: {
    fontSize: 16,
    color: colors.textdefult,
    lineHeight: 32,
    fontFamily: 'Superclarendon-Regular',
  },

  segmentBtn: {
    height: 55,
    borderRadius: 10,
    backgroundColor: '#1E1F28',
    justifyContent: 'center',
    borderColor: '#1E1F28',
    marginTop: 16,

  },
  inputFeild: {
    backgroundColor: '#1E1F28',
    justifyContent: 'space-between',
    borderRadius: 4,
    color: colors.lightygrey,
    height: 58,
    marginTop: 16,
    paddingHorizontal: 10

  },
  inputcard: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: '2%',
  },
  btnText: {
    color: colors.white,
    fontSize: 17,
    fontFamily: 'Superclarendon-Regular',
    textAlignVertical: 'center',
    alignSelf: 'center',
    lineHeight: 23
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
  },
  markerLeft: {
    marginLeft: -9,
  },
  markerRight: {
    marginRight: -9,
  },
})