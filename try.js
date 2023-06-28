import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

export default function Try({navigation}) {
  return (
    <View>
      <Text>good afternoon</Text>
      <Button title='submit' onPress={()=>navigation.navigate ('Psk')} />
      <Image source = {{uri:'https://assets.bcci.tv/bcci/photos/1045/c1c6df6d-87f2-4fec-94cd-a037e15c6cca.jpg'}}
   style = {{ width: 700, height: 300 }}
   />

    </View>
  )
}

const styles = StyleSheet.create({})