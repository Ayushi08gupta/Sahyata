import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function DocumentScannerScreen() {
  const openCamera = () => {
    Alert.alert('Document Scanner', 'Camera would open here for document scanning');
  };

  const selectFromGallery = () => {
    Alert.alert('Document Scanner', 'Gallery would open here to select documents');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Document Scanner</Text>
      <Text style={styles.subtitle}>Scan or upload your documents</Text>
      
      <TouchableOpacity style={styles.button} onPress={openCamera}>
        <Text style={styles.buttonText}>📷 Take Photo</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={selectFromGallery}>
        <Text style={styles.buttonText}>📁 Choose from Gallery</Text>
      </TouchableOpacity>
      
      <Text style={styles.helpText}>
        Supported formats: PDF, JPG, PNG{'\n'}
        Make sure documents are clear and well-lit
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
  button: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  helpText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
});