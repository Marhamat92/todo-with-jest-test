import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native' 
import tw from 'twrnc';  
 

function Button({title,onClick}) {
  return (
    <TouchableOpacity onPress={onClick} testID='button-touchable' style={tw`bg-green-500 px-8 py-2 rounded-md mt-2`}>
        <Text testID='button-title' style={tw`text-white font-bold text-lg`} >{title}</Text>
    </TouchableOpacity>
  )
}

export default Button