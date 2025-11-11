import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import ConvertationModal from "@/src/components/ConvertationModal";
import Dropdown from "@/src/components/Dropdown";
import GenderSelector from "@/src/components/GenderSelector";
import RegularButton from "@/src/components/RegularButton";
import SizeSelector from "@/src/components/SizeSelector";
import { withScreenLayout } from "@/src/hoc/withScreenLayout";
import { selectionData } from "@/src/utils/data";
import { Gender, Size } from "@/src/utils/types";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const SizeScreen = () => {
  const [selectedGender, setSelectedGender] = useState<'' | Gender>('');
  const [from, setFrom] = useState<'' | Size>('');
  const [into, setInto] = useState<'' | Size>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [sizesArray, setSizesArray] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isModalAvailable = selectedGender && from && into && selectedSize;

  useEffect(() => {
    if (selectedGender && from) {
      setSizesArray(selectionData[selectedGender][from])
    }
  }, [selectedGender, from]);

  const converSize = () => {
    if (isModalAvailable) {
      const selectedIndex = sizesArray.indexOf(selectedSize);
      const intoArray = selectionData[selectedGender][into];
      return intoArray[selectedIndex]
    } else {
      throw ('No converted size')
    }
  }

  return (
    <View style={styles.fullContainer}>
      <GenderSelector selectedGender={selectedGender} setSelectedGender={setSelectedGender}/>

      <View style={styles.selectorContainer}>
        <View style={styles.selectorInnerContainer}>
          <Text style={styles.semiTitle}>Convert from</Text>
          <SizeSelector selectedSize={from} setSelectedSize={setFrom} setSizeValue={setSelectedSize}/>
        </View>

        <View style={styles.selectorInnerContainer}>
          <Text style={styles.semiTitle}>Convert to</Text>
          <SizeSelector selectedSize={into} setSelectedSize={setInto} setSizeValue={setSelectedSize}/>
        </View>

        <View style={styles.selectorInnerContainer}>
          <Text style={styles.semiTitle}>Size</Text>
          <Dropdown data={sizesArray} selected={selectedSize} onSelect={setSelectedSize}/>
        </View>
      </View>

      <RegularButton press={() => setIsModalVisible(true)} title="Convert size" disabled={!isModalAvailable}/>

      {(isModalVisible && isModalAvailable) && (
        <ConvertationModal visible={isModalVisible} setVisible={setIsModalVisible} fromType={from} fromSize={selectedSize} toType={into} toSize={converSize()}/>
      )}
    </View>
  );
};

export default withScreenLayout(SizeScreen);

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    padding: 20,
  },
  selectorContainer: {
    gap: 16,
    marginTop: 26,
    marginBottom: 200,
  },
  semiTitle: {
    fontSize: 10,
    fontFamily: Fonts.semiTitle,
    color: Colors.textInacitve
  },
  selectorInnerContainer: {
    gap: 4,
  },
});
