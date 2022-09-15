import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {SetCaroselName} from '../../redux/actions/global';
import {useNavigation} from '@react-navigation/native';

const OpenAndStart = () => {
const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(SetCaroselName('open-accept'));
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.parent}>
      <Image
        source={require('../../assets/img/open.png')}
        style={styles.image}
        />
      <View style={styles.textWrapper}>
        <Text style={styles.titleWhite}>Start and See List Movie</Text>
        <Text style={styles.subtTitleWhite}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic explicabo dolor, ratione nobis </Text>
      </View>
    </View>
  )
}

export default OpenAndStart

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 250, 
        borderWidth: 4,
        borderColor: '#e50913',
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
        color: '#b1060f',
        marginBottom: 15
    },
    subtTitleWhite: {
        fontFamily: 'Manrope-Bold',
        fontSize: 14,
        color: '#b1060f',
        textAlign: 'center'
    },
})