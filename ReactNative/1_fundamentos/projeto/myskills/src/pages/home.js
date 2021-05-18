import React from 'react'
import { View, Text } from 'react-native'

export function Home() {
 return (
  <>
   <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF"
   }}>
    <Text>React Native</Text>
   </View>
   <Text>Ignite</Text>
  </>
 )
}