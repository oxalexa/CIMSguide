import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { tocStructure } from './table-of-contents';
import { guideSections } from './UserGuidePDFContent';

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 12, fontFamily: 'Helvetica' },
  cover: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16, color: '#304661' },
  subtitle: { fontSize: 18, marginBottom: 8, color: '#99AE4C' },
  tocTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: '#304661' },
  tocItem: { marginBottom: 6, fontSize: 14 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 24, marginBottom: 8, color: '#304661' },
  text: { marginBottom: 8, lineHeight: 1.5 },
});

const CoverPage = () => (
  <Page style={styles.page}>
    <View style={styles.cover}>
      <Text style={styles.title}>Chefland Inventory Management System (CIMS) v1.10</Text>
      <Text style={styles.subtitle}>User Guide</Text>
      <Text>15 May 2025</Text>
      <Text style={{ marginTop: 40, fontSize: 14, color: '#888' }}>www.chefland.ch</Text>
    </View>
  </Page>
);

const TOCPage = () => (
  <Page style={styles.page}>
    <Text style={styles.tocTitle}>Table of Contents</Text>
    {tocStructure.map(item => (
      <View key={item.id} style={{ marginLeft: (item.level - 1) * 16 }}>
        <Text style={styles.tocItem}>{item.text}</Text>
        {item.children && item.children.map((child: any) => (
          <View key={child.id} style={{ marginLeft: (child.level - 1) * 16 }}>
            <Text style={styles.tocItem}>{child.text}</Text>
            {child.children && child.children.map((grand: any) => (
              <View key={grand.id} style={{ marginLeft: (grand.level - 1) * 16 }}>
                <Text style={styles.tocItem}>{grand.text}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    ))}
  </Page>
);

const MainContentPages = () =>
  guideSections.map(section => (
    <Page key={section.id} style={styles.page}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      {section.content.map((line, idx) => (
        <Text key={idx} style={styles.text}>{line}</Text>
      ))}
    </Page>
  ));

export default function UserGuidePDF() {
  return (
    <Document>
      <CoverPage />
      <TOCPage />
      <MainContentPages />
    </Document>
  );
}
