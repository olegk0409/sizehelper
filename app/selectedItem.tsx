import React, { useMemo } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { withScreenLayout } from "@/src/hoc/withScreenLayout";
import useProjectStore from "@/src/store/projectStore";
import Header from "@/src/components/Header";
import Entypo from '@expo/vector-icons/Entypo';
import Colors from "@/constants/Colors";
import HumanLayout from "@/src/components/HumanLayout";
import Fonts from "@/constants/Fonts";
import { selectionData } from "@/src/utils/data";
import { useRouter } from "expo-router";


const SelectedItemScreen = () => {
  const {selectedItem} = useProjectStore((state) => state);
  const { name, size, gender, values } = selectedItem;
  const router = useRouter();

  const converSize = () => {
    const sizesArray = selectionData[gender]['International'];
    const selectedIndex = sizesArray.indexOf(size);
    const sizeUS = selectionData[gender]['US'][selectedIndex];
    const sizeEU = selectionData[gender]['EU'][selectedIndex];
    const sizeUK = selectionData[gender]['UK'][selectedIndex];
    return {sizeUS, sizeEU, sizeUK}
  }
  
  const {sizeUS, sizeEU, sizeUK} = useMemo(() => converSize(), []);

  return (
    <View style={styles.fullContainer}>
      <Header title={name}/>
      <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)')}>
        <Entypo name="chevron-left" size={24} color={Colors.navigationText} />
        <Text style={styles.navigationText}>Back</Text>
      </TouchableOpacity>

      <HumanLayout gender={gender} a={values['A']} b={values['B']} c={values['C']} d={values['D']} e={values['E']}/>

      <View style={{padding: 12, gap: 8}}>
        <Text style={styles.label}>Your size</Text>
        <View style={styles.itemContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Image source={require('@/assets/images/fashion.png')}/>
            <Text style={styles.text}>Clothes</Text>
          </View>

          <Text style={styles.text}>{`${size} (US ${sizeUS} / EU ${sizeEU} / UK ${sizeUK})`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{translateY: '-120%'}, {translateX: '5%'}]
  },
  navigationText: {
    color: Colors.navigationText,
    fontSize: 16
  },
  label: {
    fontFamily: Fonts.title,
    fontSize: 10,
    color: Colors.textInacitve,
  },
  text: {
    fontFamily: Fonts.text,
    fontSize: 15,
    color: Colors.text
  },
  itemContainer: {
    backgroundColor: Colors.secondary,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

export default withScreenLayout(SelectedItemScreen);
