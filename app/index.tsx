import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MarbleDrift from './marble-drift';
import PulseKeeper from './pulse-keeper';
import { Colors } from './theme';
import WindWhisper from './wind-whisper';

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const handleGamePress = (gameName: string) => {
    if (gameName === "Wind Whisper") {
      setCurrentScreen('wind-whisper');
    } else if (gameName === "Marble Drift") {
      setCurrentScreen('marble-drift');
    } else if (gameName === "Pulse Keeper") {
      setCurrentScreen('pulse-keeper');
    } else {
      Alert.alert(`Opening ${gameName}`, `${gameName} coming soon...`);
    }
  };

  if (currentScreen === 'wind-whisper') return <WindWhisper onBack={() => setCurrentScreen('home')} />;
  if (currentScreen === 'marble-drift') return <MarbleDrift onBack={() => setCurrentScreen('home')} />;
  if (currentScreen === 'pulse-keeper') return <PulseKeeper onBack={() => setCurrentScreen('home')} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Artistry Heals</Text>
        <Text style={styles.subtitle}>Choose Your Healing Journey</Text>
      </View>
      
      <View style={styles.cardsContainer}>
        {/* Marble Drift Card */}
        <TouchableOpacity 
          style={[styles.card, styles.marbleCard]}
          onPress={() => handleGamePress("Marble Drift")}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Marble Drift</Text>
            <Text style={styles.cardDescription}>Find balance through gentle movement</Text>
            <Text style={styles.cardEmoji}>🌿</Text>
          </View>
        </TouchableOpacity>

        {/* Wind Whisper Card */}
        <TouchableOpacity 
          style={[styles.card, styles.windCard]}
          onPress={() => handleGamePress("Wind Whisper")}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Wind Whisper</Text>
            <Text style={styles.cardDescription}>Breathe and release with soothing sounds</Text>
            <Text style={styles.cardEmoji}>🎐</Text>
          </View>
        </TouchableOpacity>

        {/* Pulse Keeper Card */}
        <TouchableOpacity 
          style={[styles.card, styles.pulseCard]}
          onPress={() => handleGamePress("Pulse Keeper")}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Pulse Keeper</Text>
            <Text style={styles.cardDescription}>Sync with your inner rhythm</Text>
            <Text style={styles.cardEmoji}>💓</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.supportingCream,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.darkGray,
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.supportingSage,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  cardsContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 24,
  },
  card: {
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    marginHorizontal: 4,
  },
  cardContent: {
    padding: 28,
    alignItems: 'center',
  },
  marbleCard: {
    backgroundColor: Colors.lightTerracotta,
    borderLeftWidth: 5,
    borderLeftColor: Colors.primarySoftBrown,
  },
  windCard: {
    backgroundColor: Colors.softPeach,
    borderLeftWidth: 5,
    borderLeftColor: Colors.primaryTerracotta,
  },
  pulseCard: {
    backgroundColor: Colors.warmBeige,
    borderLeftWidth: 5,
    borderLeftColor: Colors.deepRose,
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.darkGray,
    marginBottom: 8,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 16,
    color: Colors.darkGray,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 12,
  },
  cardEmoji: {
    fontSize: 28,
    textAlign: 'center',
  },
});
