import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const SplashedScreen = () => {
    const navigation = useNavigation()
    const auth = useSelector(store => store.auth);
    useEffect(() => {
      setTimeout(() => {
          if(auth.tokenLogin === '' && auth.firstOpenApp === true){
              navigation.reset({
                index: 0,
                routes: [{ name: 'get-started'}],
            }) 
          }else if(auth.tokenLogin === '' && auth.firstOpenApp === false){
            navigation.reset({
                index: 0,
                routes: [{ name: 'login'}],
            }) 
          }else{
            navigation.reset({
                index: 0,
                routes: [{ name: 'home'}],
            }) 
          }
      }, 1000);
    })
    
  return (
    <SafeAreaView style={styles.parent}>
        <View style={styles.boxRow}>
            <Image
            source={require("../../assets/icon/logo.png")}
            style={styles.logo}/>
            <Text style={styles.title}>IKI MOVIES</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    boxRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    title: {
       fontFamily: 'FugazOne-Regular',
       fontSize: 26,
       color: '#ff4155',
       marginLeft: 15, 
    }
})

export default SplashedScreen