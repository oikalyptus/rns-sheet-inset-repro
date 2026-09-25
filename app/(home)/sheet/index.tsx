import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Sheet() {
  const { delayed } = useLocalSearchParams<{ delayed: string }>();
  const [isReady, setIsReady] = useState(delayed !== '1');

  useEffect(() => {
    if (isReady) return;
    const timeout = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(timeout);
  }, [isReady]);

  if (!isReady) return <View style={styles.loading} />;

  return (
    <ScrollView>
      <View style={styles.hero}>
        <Text style={styles.heroText}>This block should touch the top of the sheet</Text>
      </View>
      <Text style={styles.body}>
        When the ScrollView is mounted before the screen attaches, the tab's
        overrideScrollViewContentInsetAdjustmentBehavior switches it to "automatic" and the content
        is pushed down by the header height.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: { fontSize: 16, padding: 24 },
  hero: { alignItems: 'center', backgroundColor: 'red', height: 300, justifyContent: 'center' },
  heroText: { color: 'white', fontSize: 18, fontWeight: '600' },
  loading: { flex: 1 },
});
