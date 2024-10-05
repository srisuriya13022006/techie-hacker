import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

import { NativeWindStyleSheet } from "nativewind";
import { useFonts } from 'expo-font';
import { DataContextProvider } from './context/DataContext';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    RobotoBold: require('./assets/fonts/RobotoSlab-Bold.ttf'),
    RobotoBlack: require('./assets/fonts/RobotoSlab-Black.ttf'),
    Roboto: require('./assets/fonts/RobotoSlab-Regular.ttf'),
    RobotoSemiBold: require('./assets/fonts/RobotoSlab-SemiBold.ttf'),
    RobotoMedium: require('./assets/fonts/RobotoSlab-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <DataContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataContextProvider>
  );
}
