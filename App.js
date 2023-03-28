import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomBottomSheet from './bottomsheet/CustomBottomSheet';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
export default function App() {
  const [showBottomSheet, SetShowBottomSheet] = useState(false)
  return (
    // <Provider>
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="auto" />
      <Button
        onPress={() => SetShowBottomSheet(!showBottomSheet)}
        title="Show bottom sheet" />
      <CustomBottomSheet show={showBottomSheet} onDismiss={() => SetShowBottomSheet(false)}>
        <ScrollView>
          <Text style={{ height: 2000 }}>
            skhg
          </Text>
        </ScrollView>
      </CustomBottomSheet>

    </GestureHandlerRootView>
    // </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
