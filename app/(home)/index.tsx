import { Link } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Both buttons open the same sheet. The red block should start at the very top of the sheet,
        under the transparent header.
      </Text>
      <Link href={{ pathname: '/sheet', params: { delayed: '0' } }} asChild>
        <Button title="Open (ScrollView on first frame): shifted" />
      </Link>
      <Link href={{ pathname: '/sheet', params: { delayed: '1' } }} asChild>
        <Button title="Open (ScrollView after 300ms): correct" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, gap: 16, justifyContent: 'center', padding: 24 },
  text: { fontSize: 16 },
});
