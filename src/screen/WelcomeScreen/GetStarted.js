import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Image,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import {useDispatch} from 'react-redux';
  import {SetCaroselName} from '../../redux/actions/global';
  import {useNavigation} from '@react-navigation/native';

const GetStarted = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(SetCaroselName('get-started'));
    });
    return unsubscribe;
  }, [navigation]);
  console.log('ini get started');

  return (
    <View style={styles.parent}>
        <Image
        source={require('../../assets/img/gettingStarted.jpg')}
        style={styles.image}
        />
      <View style={styles.textWrapper}>
        <Text style={styles.titleWhite}>Get Started</Text>
        <Text style={styles.subtTitleWhite}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic explicabo dolor, ratione nobis </Text>
      </View>
    </View>
  )
}

export default GetStarted

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
        borderRadius: 250, 
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