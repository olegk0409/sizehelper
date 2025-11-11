import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { SetStateAction } from 'react'
import Colors from '@/constants/Colors';
import { sizes } from '../utils/data';
import Fonts from '@/constants/Fonts';
import { Size } from '../utils/types';

type Props = {
  selectedSize: Size | '';
  setSelectedSize: React.Dispatch<SetStateAction<Size | ''>>;
  setSizeValue: React.Dispatch<SetStateAction<string | ''>>;
}

const SizeSelector: React.FC<Props> = ({selectedSize, setSelectedSize, setSizeValue}) => {
  const handleSizeChange = (item: Size) => {
    setSizeValue('');
    setSelectedSize(item);
  }

  return (
    <View style={styles.container}>
      {sizes.map((size, index) => (
        <TouchableOpacity 
          key={size + index}
          style={[styles.button, selectedSize === size && styles.activeButton]} 
          onPress={() => handleSizeChange(size)}

        >
          <Text style={styles.buttonText}>{size}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default SizeSelector;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 6,
    backgroundColor: Colors.secondary,
    borderWidth: 1,
    borderColor: Colors.border
  },
  buttonText: {
    fontFamily: Fonts.text,
    fontSize: 10,
    color: Colors.text
  },
  activeButton: {
    backgroundColor: Colors.button
  },
})
