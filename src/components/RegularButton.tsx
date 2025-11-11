import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  press: () => void;
  title: string;
  disabled?: boolean;
};

const RegularButton: React.FC<Props> = ({ press, title, disabled = false }) => {
  return (
    <View style={[styles.container, disabled && {opacity: 0.5}]}>
      <LinearGradient
        colors={[Colors.button, Colors.button]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradient}
      >
        <TouchableOpacity onPress={press} style={styles.button} disabled={disabled}>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  gradient: {
    
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
  },
  text: {
    color: Colors.text,
    fontFamily: Fonts.textBold,
    fontSize: 18,
  },
});

export default RegularButton;
