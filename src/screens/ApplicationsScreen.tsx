import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const applications = [
  { id: '1', service: 'Passport Application', status: 'In Progress', date: '2024-01-15' },
  { id: '2', service: 'Driving License Renewal', status: 'Completed', date: '2024-01-10' },
  { id: '3', service: 'Aadhaar Update', status: 'Pending', date: '2024-01-20' },
];

export default function ApplicationsScreen() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return '#10b981';
      case 'In Progress': return '#f59e0b';
      case 'Pending': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const renderApplication = ({ item }: any) => (
    <View style={styles.applicationCard}>
      <Text style={styles.serviceName}>{item.service}</Text>
      <Text style={[styles.status, { color: getStatusColor(item.status) }]}>
        {item.status}
      </Text>
      <Text style={styles.date}>Applied: {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Applications</Text>
      <FlatList
        data={applications}
        renderItem={renderApplication}
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
  applicationCard: {
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
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
});