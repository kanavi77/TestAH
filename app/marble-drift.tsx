import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from './theme';

interface MarbleDriftProps {
  onBack: () => void;
}

export default function MarbleDrift({ onBack }: MarbleDriftProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Marble Drift</Text>
        <Text style={styles.description}>
          Find your balance as you guide the marble through a peaceful journey...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightTerracotta,
    padding: 20,
  },
  backButton: {
    marginTop: 40,
    padding: 10,
  },
  backText: {
    color: Colors.darkGray,
    fontSize: 18,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.darkGray,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: Colors.darkGray,
    textAlign: 'center',
  },
});