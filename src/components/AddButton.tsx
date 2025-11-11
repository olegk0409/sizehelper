import { View, StyleSheet } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import Colors from '@/constants/Colors';

const AddButton = () => {
  return (
    <View style={styles.conitainer}>
      <Feather name="plus" size={24} color={Colors.text} />
    </View>
  )
}

export default AddButton;

const styles = StyleSheet.create({
  conitainer: {
    width: 50,
    height: 50,
    backgroundColor: Colors.button,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
})
