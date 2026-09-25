import { Stack } from 'expo-router';

export default function SheetLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: 'transparent' },
        headerTitle: 'Sheet',
        headerTransparent: true,
      }}
    />
  );
}
