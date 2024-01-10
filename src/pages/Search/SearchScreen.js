import React, { useState, useEffect } from 'react';

import { View, Text, StatusBar, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import NoLikeModal from '../../modals/NoLikeModal';
import UnlockStatusModal from '../../modals/UnlockStatusModal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import globalStyle from '../../utils/globalStyle';
import { colors } from '../../utils/Colors';
 

const SearchScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='transparent' barStyle="light-content" ></StatusBar>
      <Appbar.Header mode='center-aligned' style={{ color: '#fff', backgroundColor: '#181A20', position: 'relative', top: 0 }}>
        <Appbar.BackAction icon="chevron-left" color="#fff" size={25} 
        // onPress={() => navigation.navigate('Home')}
        onPress={() => navigation.goBack()} 
        />
  
        <Appbar.Content title={<View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={[styles.headerTitle]}>Search Screen</Text></View>} />
  
      </Appbar.Header>

      <View style={{marginHorizontal: 30}}>
          <Searchbar
                placeholder="Search"
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
                style={styles.searchbar}
                iconColor={colors.txtgrey}
                placeholderTextColor={colors.txtgrey}
          />
      </View>
    </View>
  )
}

export default SearchScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    color: '#ffffff',
    width: '100%',
  },
  headerTitle: {
    fontFamily: 'Superclarendon-Regular',
    color: '#F7F7F7',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center'
  },
  searchbar: {
    backgroundColor: '#2A2C36',
    marginTop: 20,
    borderRadius: 25,
    fontSize: 14,
    color: 'red',
    fontFamily: 'Superclarendon-Regular',
},
});