import React, { useState } from 'react'
import {
 Text, StyleSheet, TouchableOpacity
} from 'react-native'

export function SkillCard() {
 return (
  <TouchableOpacity key="1" style={styles.buttonSkill}>
   <Text style={styles.textSkill}>
    skill
   </Text>
  </TouchableOpacity>
 )

}

const styles = StyleSheet.create({
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