import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function VisualGuidanceScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Visual Guidance</Text>
      
      <View style={styles.stepCard}>
        <Text style={styles.stepNumber}>1</Text>
        <Text style={styles.stepText}>Select the service you need from the Services tab</Text>
      </View>
      
      <View style={styles.stepCard}>
        <Text style={styles.stepNumber}>2</Text>
        <Text style={styles.stepText}>Gather required documents using the Document Scanner</Text>
      </View>
      
      <View style={styles.stepCard}>
        <Text style={styles.stepNumber}>3</Text>
        <Text style={styles.stepText}>Fill out the application form with your details</Text>
      </View>
      
      <View style={styles.stepCard}>
        <Text style={styles.stepNumber}>4</Text>
        <Text style={styles.stepText}>Submit your application and track progress</Text>
      </View>
      
      <Text style={styles.helpText}>
        Need help? Use the Voice Assistant for step-by-step guidance!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2563eb',
  },
  stepCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stepNumber: {
    backgroundColor: '#2563eb',
    color: 'white',
    width: 30,
    height: 30,
    borderRadius: 15,
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 15,
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  helpText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
});