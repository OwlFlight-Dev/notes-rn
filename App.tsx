import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import AppNavigator from './src/navigation/AppNavigator';
import { ToastProvider } from './src/context/ToastContext';

enableScreens();

export default function App() {
  return (
    <ToastProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ToastProvider>
  );
}
