import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { withScreenLayout } from "@/src/hoc/withScreenLayout";
import LoaderDot from "@/src/components/LoaderDot";

const PreLoader = () => {
  const [time, setTime] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/onboarding');
    }, 1000)
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (time === 0) {
        setTime(1);
        return;
      }
      if (time === 1) {
        setTime(2);
        return;
      }
      if (time === 2) {
        setTime(3);
        return;
      }
      if (time === 3) {
        setTime(0);
        return;
      }
    }, 500);
  }, [time]);

  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <LoaderDot time={time}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
});

export default withScreenLayout(PreLoader);
