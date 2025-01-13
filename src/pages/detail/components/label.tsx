import { ReactNode } from 'react';
import { StyleSheet, View, Text } from 'react-native'

interface LabelProps {
  label: string;
  name?: string;
}

export function Label({ label, name }: LabelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{label}</Text>
      <Text style={styles.title}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    color: "#444"
  },
  title: {
    color: "#000",
    fontWeight: '500'
  }
})