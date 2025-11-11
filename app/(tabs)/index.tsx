import AddButton from "@/src/components/AddButton";
import CustomBottomSheet from "@/src/components/CustomBottomSheet";
import Item from "@/src/components/Item";
import NoItemPreview from "@/src/components/NoItemPreview";
import { withScreenLayout } from "@/src/hoc/withScreenLayout";
import useProjectStore from "@/src/store/projectStore";
import { loadDashboardItems } from "@/src/utils/functions";
import { Human } from "@/src/utils/types";
import BottomSheet from "@gorhom/bottom-sheet";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const [items, setItems] = useState<Human[]>([]);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const {setSelectedItem} = useProjectStore((state) => state);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      loadDashboardItems("items", setItems);
    }, [])
  );

  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const openSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleItemPress = (item: Human) => {
    setSelectedItem(item);
    router.push('/selectedItem');
  }

  return (
    <View style={styles.container}>
      {(!items || items.length < 1) ? (
        <>
        <NoItemPreview />
        </>
      ) : items.map(item => (
        <Item key={item.name + item.gender + item.size} name={item.name} size={item.size} press={() => handleItemPress(item)}/>
      ))}
        <TouchableOpacity style={styles.absoulteBottmRight} onPress={() => openSheet()}>
          <AddButton />
        </TouchableOpacity>
      <CustomBottomSheet ref={bottomSheetRef} closeSheet={closeSheet} setItems={setItems} items={items}/>
    </View>
  );
};

export default withScreenLayout(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 16,
    gap: 16,
  },
  absoulteBottmRight: {
    position: 'absolute',
    bottom: 100,
    right: 30,
  },
});
