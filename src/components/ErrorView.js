import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../api/theme';

const ErrorView = ({ message, onRetry }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{message || "Something went wrong"}</Text>
    <TouchableOpacity onPress={onRetry} style={styles.btn}>
      <Text style={styles.btnText}>Retry</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background },
  text: { color: colors.error, fontSize: 16, marginBottom: 10 },
  btn: { backgroundColor: colors.accent, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 6 },
  btnText: { color: "#fff", fontWeight: 'bold' }
});

export default ErrorView;