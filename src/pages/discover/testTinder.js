import React, {useRef, useState} from 'react';
import {Button, SafeAreaView, Text, View, StyleSheet, Image, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('screen');
import SwipeCards from 'react-native-swipe-cards';



const TinderSc = () => {

   
    const cards = [
        { id: 1, name: 'John', age: 25, image: require('../../assets/Images/blackwidow.jpeg') },
        { id: 2, name: 'Mary', age: 23, image: require('../../assets/test-user.png') },
        { id: 3, name: 'Peter', age: 27, image: require('../../assets/test-user.png') },
      ];
    
      const Card = ({ card }) => {
        return (
          <View style={styles.card}>
            <Image style={styles.image} source={card.image} />
            <Text style={styles.name}>{card.name}, {card.age}</Text>
          </View>
        );
      };


      return ( 
      <SwipeCards
         cards={cards}
         cardKey="id"
         cardStyle={styles.cardContainer}
         renderCard={(card) => <Card card={card} />}
         handleYup={() => console.log('Yup')}
         handleNope={() => console.log('Nope')}
      />
      )

      
}
export default TinderSc;



const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        height: 400
    },
    card: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
      overflow: 'hidden',
      borderColor: 'red',
      borderWidth: 1
    },
    image: {
    //   width: '100%',
    //   height: '80%',
      borderColor: 'red',
      borderWidth: 1,
      resizeMode: 'cover'
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10,
    },
  });
  