import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ChatScreen() {
  return (
    <View style={styles.root}>
      <Text>chat</Text>
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
