import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const FloatingButton = ({color, route}) => {
 const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate(route)} style={color === 'white' ? styles.parent : styles.parent2}>
      <Text style={color === 'white' ? styles.text2 : styles.text}>Next</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    parent: {
        paddingHorizontal: 14,
        paddingVertical: 21,
        borderRadius: 100,
        backgroundColor: '#b1060f'
    },
    parent2: {
        paddingHorizontal: 14,
        paddingVertical: 21,
        borderRadius: 100,
        backgroundColor: '#FFFFFF'
    },
    text: {
        fontFamily: 'Manrope-Bold',
        fontSize: 14,
        color: '#b1060f'
    },
    text2: {
        fontFamily: 'Manrope-Bold',
        fontSize: 14,
        color: '#FFFFFF' 
    }
})

export default FloatingButton