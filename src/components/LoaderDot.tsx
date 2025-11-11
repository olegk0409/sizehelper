import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Fonts from "@/constants/Fonts";
import Colors from "@/constants/Colors";

type Props = {
  time: number;
}

const LoaderDot: React.FC<Props> = ({time}) => {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.text}>Loading</Text>
      <Text style={[styles.dot, time < 1 && { opacity: 0 }]}>.</Text>
      <Text style={[styles.dot, time < 2 && { opacity: 0 }]}>.</Text>
      <Text style={[styles.dot, time < 3 && { opacity: 0 }]}>.</Text>
    </View>
  );
};

export default LoaderDot;

const styles = StyleSheet.create({
  loadingContainer: {
    flexDirection: "row",
  },
  text: {
    fontFamily: Fonts.textBold,
    fontSize: 44,
    color: Colors.text,
  },
  dot: {
    fontFamily: Fonts.textBold,
    color: Colors.text,
    fontSize: 44,
    opacity: 1,
  },
})
