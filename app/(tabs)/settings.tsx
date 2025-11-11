import RegularButton from "@/src/components/RegularButton";
import { withScreenLayout } from "@/src/hoc/withScreenLayout";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WebView from "react-native-webview";

const SettingsScreen = () => {
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);

  if (isWebViewVisible) {
    return (
      <View style={{ flex: 1, position: "relative", paddingBottom: 40 }}>
        <TouchableOpacity
          onPress={() => setIsWebViewVisible(false)}
          style={{
            position: "absolute",
            top: "2%",
            right: "6%",
            zIndex: 10,
            width: 60,
            height: 35,
            backgroundColor: "#460e14ff",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white" }}>Close</Text>
        </TouchableOpacity>

        <WebView
          source={{ uri: "https://github.com/olegk0409" }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <RegularButton
          title="Privacy Policy"
          press={() => setIsWebViewVisible(true)}
        />
        <RegularButton
          title="Terms of Use"
          press={() => setIsWebViewVisible(true)}
        />
      </View>
    </View>
  );
};

export default withScreenLayout(SettingsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
    gap: 40,
  },
});
