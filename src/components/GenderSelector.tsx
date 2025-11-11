import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { SetStateAction } from 'react'
import Colors from '@/constants/Colors';
import { humans } from '../utils/data';
import Fonts from '@/constants/Fonts';
import { Gender } from '../utils/types';

type Props = {
  selectedGender: Gender | '';
  setSelectedGender: React.Dispatch<SetStateAction<Gender | ''>>
}

const GenderSelector: React.FC<Props> = ({selectedGender, setSelectedGender}) => {

  return (
    <View style={styles.container}>
      {humans.map((human, index) => (
        <TouchableOpacity 
          key={human + index}
          style={[styles.button, selectedGender === human && styles.activeButton]} 
          onPress={() => setSelectedGender(human)}

        >
          <Text style={styles.buttonText}>{human}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default GenderSelector;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    borderWidth: 1,
    borderColor: Colors.border
  },
  button: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 4,
  },
  buttonText: {
    fontFamily: Fonts.text,
    fontSize: 16,
    color: Colors.text
  },
  activeButton: {
    backgroundColor: Colors.button
  },
})
