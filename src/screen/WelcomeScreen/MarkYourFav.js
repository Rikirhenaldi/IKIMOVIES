import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {SetCaroselName} from '../../redux/actions/global';
import {useNavigation} from '@react-navigation/native';

const MarkYourFav = () => {
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route.name);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(SetCaroselName('mark-your-fav'));
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.parent}>
      <Image
        source={require('../../assets/img/mark.png')}
        style={styles.image}
        />
      <View style={styles.textWrapper}>
        <Text style={styles.titleWhite}>Add Movies to Your Fav</Text>
        <Text style={styles.subtTitleWhite}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic explicabo dolor, ratione nobis </Text>
      </View>
    </View>
  )
}

export default MarkYourFav

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#e50913',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
      width: 250,
      height: 250,
      borderRadius: 200, 
      borderWidth: 4,
      borderColor: '#b1060f',
      marginBottom: 20
  },
  textWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 30
  },
  titleWhite: {
      fontFamily: 'Manrope-Bold',
      fontSize: 24,
      color: '#FFFFFF',
      marginBottom: 15
  },
  subtTitleWhite: {
      fontFamily: 'Manrope-Bold',
      fontSize: 14,
      color: '#FFFFFF',
      textAlign: 'center'
  },
})