import React, { useState } from 'react'
import {
 View, Text, StyleSheet, TextInput,
 Platform, TouchableOpacity
} from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
 const [newSkill, setNewSkills] = useState('');
 const [mySkill, setMySkill] = useState([]);

 function handleAddNewSkill() {
  setMySkill(oldState => [...oldState, newSkill])
  setNewSkills('')
 }

 return (
  <View style={styles.container}>

   <Text style={styles.title}>Welcome, Pessoa!!</Text>

   <TextInput
    style={styles.input}
    placeholder="New skill"
    placeholderTextColor="#555"
    onChangeText={setNewSkills}
   />

   <Button />

   <Text style={[styles.title, { marginVertical: 30 }]}>
    MySkills
   </Text>

   {mySkill.map(skill => (
    <SkillCard />
   ))
   }

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
 },
 title: {
  color: '#fff',
  fontSize: 24,
  fontWeight: 'bold'
 },
 buttonSkill: {
  backgroundColor: '#1f1e25',
  padding: 15,
  marginBottom: 10,
  alignItems: 'center',
  borderRadius: 50
 },
 textSkill: {
  color: '#fff',
  fontSize: 22,
  fontWeight: 'bold'
 }
})