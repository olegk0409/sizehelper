import { View, Text, Image } from 'react-native'
import React from 'react'
import Fonts from '@/constants/Fonts'
import Colors from '@/constants/Colors'

const NoItemPreview = () => {
  return (
    <View style={{position: 'absolute', top: '50%', left: '50%', transform: [{translateX: '-50%'}, {translateY: '-50%'}], alignItems: 'center'}}>
      <Image source={require('@/assets/images/angular.png')}/>
      <Text style={{fontFamily: Fonts.title, fontSize: 20, color: Colors.textInacitve}}>Add Measurements</Text>
    </View>
  )
}

export default NoItemPreview