import Colors from "@/constants/Colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fonts from "@/constants/Fonts";

const iconMap: Record<string, keyof typeof MaterialCommunityIcons.glyphMap> = {
  index: 'book',
  size: 'resize',
  settings: 'nut',
};

export const nameMap: Record<string, string> = {
  index: 'MySize',
  size: 'Size',
  settings: 'Settings',
}

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        insets && { bottom: insets.bottom ? insets.bottom : 8 },
      ]}
    >
      <LinearGradient
        colors={[Colors.background, Colors.background]}
        start={{ x: -0.6, y: 0 }}
        end={{ x: 1.6, y: 0 }}
        style={styles.topBorder}
      />

      <View style={styles.tabRow}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tabButton}
              activeOpacity={0.8}
            >
              <View style={styles.circle}>
                <MaterialCommunityIcons name={iconMap[route.name]} size={30} color={isFocused ? Colors.text : Colors.textInacitve} />
                <Text style={[styles.text, isFocused && {color: Colors.text}]}>{nameMap[route.name]}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.fadeDark,
    overflow: "hidden",
  },
  topBorder: {
    height: 1,
    width: "100%",
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    width: '30%',
  },
  circle: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: '100%',
    gap: 2,
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    fontFamily: Fonts.semiTitle,
    fontSize: 10,
    color: Colors.textInacitve,
  },
});

