import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      {/* Full-height form sheet; its header lives in the nested stack below. */}
      <Stack.Screen name="sheet" options={{ headerShown: false, presentation: 'formSheet' }} />
    </Stack>
  );
}
