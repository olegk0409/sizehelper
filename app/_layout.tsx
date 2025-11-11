import { useFonts } from "expo-font";
import * as Linking from "expo-linking";
import { Stack, useRouter } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Platform } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const [loaded, error] = useFonts({
    Inter400: require('../assets/fonts/Inter_24pt-Regular.ttf'),
    Inter500: require('../assets/fonts/Inter_28pt-Medium.ttf'),
    Inter600: require('../assets/fonts/Inter_24pt-SemiBold.ttf'),
    Inter700: require('../assets/fonts/Inter_28pt-Bold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    // prevent portrait app from changing orientation
    const lockOrientation = async () => {
      if (Platform.OS === 'android') {
        await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
      }
    };

    lockOrientation();
  }, []);

  useEffect(() => {
    // ensure deeplink opens on index
    const handleDeepLink = (url: string | null) => {
      if (!url || (globalThis as any).__deeplinkRedirected) return;

      (globalThis as any).__deeplinkRedirected = true;
      router.replace("/");
    };

    Linking.getInitialURL().then(handleDeepLink);
  }, []);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
          <Stack.Screen name="selectedItem" options={{ headerShown: false }} />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
