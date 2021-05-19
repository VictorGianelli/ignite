import React from 'react'
import {
 View, Text, StyleSheet, TextInput,
 Platform, TouchableOpacity
} from 'react-native'

export function Home() {
 return (
  <View style={styles.container}>

   <Text style={styles.title}>Welcome, Pessoa!!</Text>

   <TextInput
    style={styles.input}
    placeholder="New skill"
    placeholderTextColor="#555"
   />

   <TouchableOpacity
    style={styles.button}
    activeOpacity={.7}
   >
    <Text style={styles.buttonText}>Add</Text>
   </TouchableOpacity>
   <Text style={[styles.title, { marginTop: 30 }]}>My Skills</Text>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  paddingHorizontal: 50,
  paddingVertical: 70,
  backgroundColor: "#121015"
 },
 title: {
  color: '#fff',
  fontSize: 24,
  fontWeight: 'bold'
 },
 input: {
  backgroundColor: '#1f1e25',
  color: '#fff',
  fontSize: 18,
  padding: Platform.OS === 'ios' ? 15 : 10,
  marginTop: 20,
  borderRadius: 5
 },
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
 }
})