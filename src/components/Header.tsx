import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View></View>

        <Text style={styles.title}>{title}</Text>

        <View></View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    backgroundColor: Colors.secondary,
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: Fonts.semiTitle,
    fontSize: 32,
    color: Colors.text,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
