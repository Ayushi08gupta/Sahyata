import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const services = [
  { id: '1', name: 'Passport Services', description: 'Apply for new passport or renewal' },
  { id: '2', name: 'Driving License', description: 'Get or renew your driving license' },
  { id: '3', name: 'Aadhaar Services', description: 'Update or get new Aadhaar card' },
  { id: '4', name: 'PAN Card', description: 'Apply for PAN card services' },
  { id: '5', name: 'Voter ID', description: 'Register to vote or update details' },
];

export default function ServicesScreen({ navigation }: any) {
  const renderService = ({ item }: any) => (
    <TouchableOpacity style={styles.serviceCard}>
      <Text style={styles.serviceName}>{item.name}</Text>
      <Text style={styles.serviceDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Government Services</Text>
      <FlatList
        data={services}
        renderItem={renderService}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
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
  serviceCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
  },
});