import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { colors, fonts } from '../api/theme';

const { width } = Dimensions.get('window');

const FullContentModal = ({ visible, onClose, content }) => {
  if (!content) return null;

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>×</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.modalBody}>
        <Image source={{ uri: content.mainImage }} style={styles.mainImage} />
        <View style={styles.infoRow}>
          <Image source={{ uri: content.logo }} style={styles.logo} />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{content.title}</Text>
            <Text style={styles.subtitle}>{content.subTitle}</Text>
          </View>
        </View>
        <View style={styles.htmlWrap}>
          <RenderHtml
            contentWidth={width - 36}
            source={{ html: content.text }}
            baseStyle={styles.htmlText}
          />
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'flex-end', padding: 14, backgroundColor: colors.background },
  closeBtn: { padding: 6 },
  modalBody: { backgroundColor: colors.background, paddingHorizontal: 18 },
  mainImage: { width: '100%', height: 200, borderRadius: 10, marginBottom: 10 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  logo: { width: 32, height: 32, borderRadius: 8, marginRight: 10 },
  title: { fontWeight: 'bold', fontSize: 18, color: colors.text },
  subtitle: { fontSize: 13, color: colors.subtitle, marginTop: 2 },
  htmlWrap: { marginTop: 8 },
  htmlText: { color: colors.text, fontSize: 15, fontFamily: fonts.regular, lineHeight: 22 }
});

export default FullContentModal;