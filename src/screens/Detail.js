import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Detail = () => {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Detail