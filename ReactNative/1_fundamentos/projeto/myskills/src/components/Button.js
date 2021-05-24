import React, { useState } from 'react'
import {
 Text, StyleSheet, TouchableOpacity
} from 'react-native'

export function Button({ onPress }) {
 return (
  <TouchableOpacity
   style={styles.button}
   activeOpacity={.7}
   onPress={onPress}
  >
   <Text style={styles.buttonText}>Add</Text>
  </TouchableOpacity>
 )

}

const styles = StyleSheet.create({
 button: {
  backgroundColor: '#A370F7',
  padding: 10,
  marginTop: 25,
  alignItems: 'center',
  borderRadius: 5
 },
 buttonText: {
  color: '#fff',
  fontSize: 17,
  fontWeight: 'bold'
 },
})