import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'

export default ReviewDetail = ({ navigation, route }) => {
  // const handlePress = () => {
  //   navigation.goBack()
  //   // meme comportement
  //   // navigation.pop()
  // }

  // pour recuperer les donnes transmis par l'home on va dans l'object route 
  // injecté par le HOC de navigation puis dans params
  const { title, body, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
      {/* <Text>Review Details</Text> */}
      {/* <Button
        title='go back home'
        onPress={handlePress}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
})
