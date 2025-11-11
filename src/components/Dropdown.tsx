import Colors from '@/constants/Colors';
import Fonts from '@/constants/Fonts';
import React, { SetStateAction, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

type Props = {
  data: string[];
  selected: string;
  onSelect: React.Dispatch<SetStateAction<string>>;
  inBottomSheet?: boolean;
}

const Dropdown: React.FC<Props> = ({ data, selected, onSelect, inBottomSheet = false, }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={[styles.dropdownButton, isOpen && styles.dropdownButtonOpen]}>
        <Text style={styles.dropdownText}>
          {selected ? selected : 'Select size'}
        </Text>

        <Feather name="chevron-down" size={30} color={Colors.textInacitve} />
      </TouchableOpacity>

      {isOpen && (
        <View style={[styles.dropdownListContainer, inBottomSheet && {maxHeight: 600}]}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item, index) => index + item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item)} style={styles.item}>
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdownButton: {
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 26,
    borderColor: Colors.border,
    borderRadius: 10,
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownButtonOpen: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  dropdownText: {
    fontFamily: Fonts.text,
    fontSize: 16,
    color: Colors.text,
  },
  dropdownListContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: Colors.secondary,
    borderWidth: 1,
    borderColor: Colors.border,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderRadius: 5,
    maxHeight: 200,
    zIndex: 1,
  },
  item: {
    paddingVertical: 14,
    paddingHorizontal: 26,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  itemText: {
    fontSize: 16,
    color: Colors.text,
  },
});

export default Dropdown;