import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faChevronLeft,
    faHeart
  } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const HeadersDetail = () => {
   const navigation = useNavigation()
  return (
    <View style={styles.parent}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonBack}>
        <FontAwesomeIcon icon={faChevronLeft} color={'white'} size={14}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBack}>
        <FontAwesomeIcon icon={faHeart} color={'white'} size={14}/>
      </TouchableOpacity>
    </View>
  )
}

export default HeadersDetail

const styles = StyleSheet.create({
   parent: {
       width: '100%',
       backgroundColor: 'transparent',
       height: 90,
       paddingHorizontal: 30,
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
   },
   buttonBack: {
       width: 40,
       height: 40,
       borderRadius: 40,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#242734'
   } 
})