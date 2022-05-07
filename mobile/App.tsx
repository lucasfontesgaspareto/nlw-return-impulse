import 'react-native-gesture-handler'

import React from 'react';
import { View } from 'react-native';
import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import Widget from './src/components/Widget';
import AppLoading from 'expo-app-loading';
import { theme } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />

      <Widget />
    </View>
  );
}
