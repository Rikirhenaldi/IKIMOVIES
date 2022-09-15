import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faChevronLeft,
    faStar
  } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const HeadersFullList = () => {
   const navigation = useNavigation()
  return (
    <View style={styles.parent}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonBack}>
        <FontAwesomeIcon icon={faChevronLeft} color={'white'} size={14}/>
      </TouchableOpacity>
      <View>
        <Text style={styles.textTitle}>Most Populer</Text>
      </View>
      <TouchableOpacity style={styles.buttonBack}>
        <FontAwesomeIcon icon={faStar} color={'white'} size={14}/>
      </TouchableOpacity>
    </View>
  )
}

export default HeadersFullList

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
   },
   textTitle: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 18,
    top:4
},
})