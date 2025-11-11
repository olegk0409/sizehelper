import Colors from "@/constants/Colors"
import { LinearGradient } from "expo-linear-gradient"
import { KeyboardAvoidingView, StatusBar, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export function withScreenLayout<T extends Object>(WrappedComponent: React.FC<T>) {

  return (props: T) => {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <KeyboardAvoidingView
          style={styles.keyboardContainer}
          behavior={"padding"}
          keyboardVerticalOffset={0}
        >
          <StatusBar
            hidden={false}
            backgroundColor="#000"
            barStyle="light-content"
          />
          <LinearGradient
            colors={[Colors.secondary, Colors.background]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.background}
          >
            <WrappedComponent {...props} />
          </LinearGradient>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.secondary
  },
  keyboardContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});