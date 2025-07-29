import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Index from './app/index';

export default function App() {
  return (
    <SafeAreaProvider>
      <Index />
    </SafeAreaProvider>
  );
} 