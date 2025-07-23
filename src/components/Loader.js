import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../api/theme';

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={colors.accent} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background
  }
});

export default Loader;