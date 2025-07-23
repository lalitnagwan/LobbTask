import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { getContent } from '../api/api';
import Loader from './Loader';
import ErrorView from './ErrorView';
import FullContentModal from './FullContentModal';
import { colors, fonts } from '../api/theme';

const HomeScreen = ({ token }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);

  const fetchContent = async () => {
    setLoading(true);
    setError("");
    try {
      const c = await getContent(token);
      setContent(c);
    } catch (e) {
      setError("Failed to load content.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorView message={error} onRetry={fetchContent} />;

  if (!content) return null;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.date}>MONDAY 21 NOVEMBER</Text>
        <Text style={styles.vs}>VS</Text>
      </View>
      <Text style={styles.today}>Today</Text>
      {/* Card */}
      <TouchableOpacity style={styles.card} activeOpacity={0.92} onPress={() => setModal(true)}>
        <Image source={{ uri: content.thumbNailImage }} style={styles.cardImage} />
        <View style={styles.cardFooter}>
          <Image source={{ uri: content.logo }} style={styles.logo} />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{content.title}</Text>
            <Text style={styles.subtitle}>{content.subTitle}</Text>
          </View>
          <TouchableOpacity
            style={styles.refreshBtn}
            onPress={fetchContent}
            testID="refresh-btn"
          >
            <Text style={styles.refreshText}>REFRESH</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {/* Full Content Modal */}
      <FullContentModal
        visible={modal}
        onClose={() => setModal(false)}
        content={content}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 18, paddingTop: 8 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  date: { fontSize: 13, color: colors.subtitle, fontFamily: fonts.regular, textTransform: 'uppercase', letterSpacing: 1 },
  vs: { fontWeight: 'bold', fontSize: 17, color: colors.accent },
  today: { fontSize: 32, fontWeight: 'bold', marginVertical: 13, color: colors.text },
  card: {
    backgroundColor: colors.card,
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: "#aaa",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 12
  },
  cardImage: { width: '100%', height: 220, resizeMode: 'cover' },
  cardFooter: { flexDirection: 'row', alignItems: 'center', padding: 14 },
  logo: { width: 38, height: 38, borderRadius: 8, marginRight: 10 },
  title: { fontWeight: 'bold', fontSize: 17, color: colors.text },
  subtitle: { fontSize: 13, color: colors.subtitle, marginTop: 2 },
  refreshBtn: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.accent,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 7,
    marginLeft: 10
  },
  refreshText: { color: colors.accent, fontWeight: 'bold', fontSize: 13 }
});

export default HomeScreen;