import React, { forwardRef, SetStateAction, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import { TextInput } from "react-native-gesture-handler";
import { Gender, Human } from "../utils/types";
import GenderSelector from "./GenderSelector";
import RegularButton from "./RegularButton";
import HumanLayout from "./HumanLayout";
import Dropdown from "./Dropdown";
import { selectionData } from "../utils/data";
import { saveDashboardItems } from "../utils/functions";

type Props = {
  closeSheet: () => void;
  setItems: React.Dispatch<SetStateAction<Human[]>>
  items: Human[]
}

const CustomBottomSheet = forwardRef<BottomSheet, Props>(({ closeSheet, setItems, items }, ref) => {
  const [activePage, setActivePage] = useState(0);
  const [name, setName] = useState('');
  const [selectedGender, setSelectedGender] = useState<'' | Gender>('');
  const [values, setValues] = useState<{ [key: string]: string }>({
    A: '',
    B: '',
    C: '',
    D: '',
    E: '',
  });
  const [selectedSize, setSelectedSize] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) {
      setTimeout(() => setIsError(!isError), 1500)
    }
  }, [isError])

  const nextPress = () => {
    if (activePage === 0) {
      const isAvailable = name && selectedGender;

      if (isAvailable) {
        setActivePage(prev => prev + 1);
      } else {
        setIsError(true)
        return;
      }
    } if (activePage === 1) {
        const isAllValuesNotEmpty = Object.values(values).every(value => value.trim() !== '');
        const isKidsAllValuesNotEmpty = Object.values(values).slice(0, 2).every(value => value.trim() !== '');
        const isAvailable = selectedGender === 'Kids' ? isKidsAllValuesNotEmpty : isAllValuesNotEmpty;

        if (isAvailable) {
          setActivePage(prev => prev + 1);
        } else {
          setIsError(true)
          return;
        }
    } if (activePage === 2) {
      if (selectedSize) {
        handleSave()
      } else {
        setIsError(true)
        return;
      }
    }
  }

  const handleValue = (key: string, text: string) => {
    setValues(prevValues => ({
      ...prevValues,
      [key]: text,
    }));
  }

  const handleClose = () => {
    setValues({
    A: '',
    B: '',
    C: '',
    D: '',
    E: '',
    });
    setSelectedSize('');
    setSelectedGender('');
    setName('');
    setActivePage(0);
    closeSheet();
  }

  const handleSave = async () => {
    const itemForSave = {
      name,
      gender: selectedGender,
      values,
      size: selectedSize
    };
    setItems(prev => [...prev, itemForSave])
    await saveDashboardItems('items', [...items, itemForSave])
    closeSheet();
  }

  const renderPage = () => {
    switch (activePage) {
      case 0:
        return (
          <View style={styles.pageContent}>
            <View style={styles.descContainer}>
              <Text style={styles.desc}>Enter your body measurements to get accurate size recommendations</Text>
            </View>

            <View style={styles.itemContainer}>
              <Text style={styles.label}>Add name</Text>
              <TextInput
                value={name}
                placeholder="Enter name"
                placeholderTextColor={"#bfb8b0"}
                inputMode="numeric"
                keyboardType="numeric"
                onChangeText={(text) => setName(text)}
                maxLength={20}
                style={[styles.inputAmount, isError && styles.errorBorder]}
              />
            </View>

            <View style={[styles.itemContainer, isError && styles.errorBorder]}>
              <Text style={styles.label}>Gender Tabs</Text>
              <GenderSelector selectedGender={selectedGender} setSelectedGender={setSelectedGender}/>
            </View>
          </View>
        );
      case 1:
        return (
          <View style={styles.pageContent}>
            <HumanLayout gender={selectedGender ? selectedGender : 'Men'} a={'A'} b={'B'} c={'C'} d={'D'} e={'E'}/>

            <View style={{gap: 4, alignItems: 'center'}}>
              {(selectedGender === 'Kids' ? ['A', 'B'] : ['A', 'B', 'C', 'D', 'E']).map(item => (
                <View key={item} style={[{width: '50%', flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.secondary, borderWidth: 1, borderRadius: 10, borderColor: Colors.border, paddingLeft: 20, paddingRight: 10, justifyContent: 'space-between'}, isError && styles.errorBorder]}>
                  <Text style={{color: Colors.textInacitve}}>{item}</Text>
                  <TextInput
                    value={values[item]}
                    placeholder="0 cm"
                    placeholderTextColor={"#bfb8b0"}
                    inputMode="numeric"
                    keyboardType="numeric"
                    onChangeText={(text) => handleValue(item, text)}
                    maxLength={3}
                    style={{backgroundColor: Colors.background, width: '30%', borderRadius: 10, color: Colors.text, textAlign: 'center'}}
                  />
              </View>
              ))}
            </View>
          </View>
        );
      case 2:
        return (
          <View style={styles.pageContent}>
            <Text style={styles.title}>Select your size</Text>
            <View style={isError ? styles.errorBorder : {}}>
              <Dropdown data={selectionData[selectedGender as keyof typeof selectionData]['International']} selected={selectedSize} onSelect={setSelectedSize} inBottomSheet={true}/>
            </View>
          </View>
        )
      default:
        return null;
    }
  };


  return (

      <BottomSheet 
        ref={ref} 
        index={-1}
        snapPoints={["20%", "60","100%"]}
        onChange={(index) => {
          return index <= 0 ? handleClose() : () => {}
        }}
        backgroundStyle={styles.sheetBackground}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.5}
            pressBehavior="none"
            disappearsOnIndex={-1}
          />
        )}
      >
        <BottomSheetView style={styles.sheetContent}>
          <View style={styles.containerXButton}>
            <Text style={styles.title}>Add Measurements</Text>

            <TouchableOpacity onPress={closeSheet}>
              <Ionicons name="close-circle" size={30} color={Colors.text} />
            </TouchableOpacity>
          </View>

          {renderPage()}
          <RegularButton title={activePage === 2 ? 'Save' : 'Next'} press={nextPress}/>
        </BottomSheetView>
      </BottomSheet>
  );
});

const styles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: Colors.bottomSheet,
    width: '100%',
  },
  sheetContent: {
    flex: 1,
    padding: 16,
    gap: 20
  },
  pageContent: {
    flex: 1,
    width: '100%',
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.title,
    color: Colors.text,
  },
  containerXButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  descContainer: {
    alignItems: 'center',
  },
  desc: {
    fontFamily: Fonts.text,
    fontSize: 14,
    color: Colors.text,
    width: '70%',
    textAlign: 'center'
  },
  label: {
    fontSize: 10,
    color: Colors.textInacitve,
  },
  inputAmount: {
    width: '100%',
    backgroundColor: Colors.secondary,
    borderColor: Colors.border,
    borderWidth: 1,
    color: Colors.text,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
  },
  itemContainer: {
    gap: 6
  },
  absoluteBottom: {
    marginTop: 100,
  },
  errorBorder: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red'
  }
});

export default CustomBottomSheet;
