import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BreadDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bread Category</Text>
    </View>
  )
}

export default BreadDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDBF50",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Tillana",
  },
})