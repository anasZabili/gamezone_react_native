import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'

export default Home = (props) => {
  const [reviews, setReviews] = useState([
    { title: 'Zelda the breath of the wild', rating: 5, body: "it's a great Game i swear", key: '1' },
    { title: 'Just dance', rating: 3, body: "it's not just about dance", key: '2' },
    { title: 'The witcher 3', rating: 1, body: "it's a garbadge game", key: '3' },
  ])
  // const handleOnpress = () => {
  //   props.navigation.navigate('ReviewDetails')
  //   // ou alors 
  //   // les deux solution on le meme comportement
  //   // props.navigation.push('ReviewDetails')
  // }
  const handlePressReview = (item) => {
    // console.log("je passe dans le handle en recevant les données :", item)
    props.navigation.navigate('ReviewDetails', item)
  }

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePressReview(item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <Text style={globalStyles.titleText}>Home screen</Text> */}
      {/* <Button
        title='Go to review dets'
        onPress={handleOnpress}
      /> */}
    </View>
  )
}
