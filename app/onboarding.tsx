import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import Sizes from "@/constants/Sizes";
import RegularButton from "@/src/components/RegularButton";
import { withScreenLayout } from "@/src/hoc/withScreenLayout";
import { onboardingSlides } from "@/src/utils/data";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const OnboardingScreen = () => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const router = useRouter();

  const isLastScreen = activeScreenIndex === 2;

  const navigateToTabs = () => {
    router.replace("/(tabs)");
  };

  const { desc, image } = onboardingSlides[activeScreenIndex];

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.icon} resizeMode="contain"/>

      <View style={styles.textContainer}>
        <Text style={styles.desc}>{desc}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <RegularButton
          title={isLastScreen ? "Start" : "Next"}
          press={navigateToTabs}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  topContainer: {
    width: "100%",
    alignItems: "flex-end",
  },
  icon: {
    width: Sizes.screenWidth * 0.9,
    height: (Sizes.screenWidth * 0.9)
  },
  textContainer: {
    alignItems: "center",
    gap: 30,
  },
  desc: {
    fontFamily: Fonts.textBold,
    fontSize: 18,
    color: Colors.text,
    textAlign: "center",
  },
  bottomContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default withScreenLayout(OnboardingScreen);
