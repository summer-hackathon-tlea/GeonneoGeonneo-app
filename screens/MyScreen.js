import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MyScreen() {
  return (
    <View style={styles.root}>
      <Text>my</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
  },
});
