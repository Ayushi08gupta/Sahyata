import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function VoiceAssistanceScreen() {
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    setIsListening(true);
    // Voice recognition would be implemented here
    Alert.alert('Voice Assistant', 'Voice recognition would start here');
    setTimeout(() => setIsListening(false), 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Assistant</Text>
      <Text style={styles.subtitle}>Ask me about government services</Text>
      
      <TouchableOpacity 
        style={[styles.micButton, isListening && styles.listening]}
        onPress={startListening}
        disabled={isListening}
      >
        <Text style={styles.micText}>
          {isListening ? '🎤 Listening...' : '🎤 Tap to Speak'}
        </Text>
      </TouchableOpacity>
      
      <Text style={styles.helpText}>
        Try saying: "How do I apply for a passport?" or "What documents do I need for Aadhaar?"
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2563eb',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    color: '#666',
    textAlign: 'center',
  },
  micButton: {
    backgroundColor: '#2563eb',
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  listening: {
    backgroundColor: '#dc2626',
  },
  micText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  helpText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});