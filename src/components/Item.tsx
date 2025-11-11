import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import Fonts from '@/constants/Fonts';

type Props = {
  name: string;
  size: string;
  press: () => void;
}

const Item: React.FC<Props> = ({name, size, press}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={press}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{size}</Text>
    </TouchableOpacity>
  )
}

export default Item;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.border,
  },
  text: {
    fontFamily: Fonts.title,
    color: Colors.text,
    fontSize: 16
  }
})
