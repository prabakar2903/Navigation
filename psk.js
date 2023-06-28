import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
export default function Psk() {
  return (
    <View>
      <Text>good night</Text>
      <Button title='submit'/>
      <Image source = {{uri:'https://assets.bcci.tv/bcci/photos/1045/ab8ee36b-10e8-41c3-8170-9886779efc6b.jpg'}}
   style = {{ width: 600, height: 200 }}
   />

    </View>
  )
}

const styles = StyleSheet.create({})