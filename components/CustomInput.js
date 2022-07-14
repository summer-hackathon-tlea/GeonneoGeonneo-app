import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function CustomInput({ value, setValue, placeholder, secureTextEntry }) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: "#fff",
    height: 52,
    borderRadius: 20,
    borderColor: "#F4978E",
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: "100%",
    paddingLeft: 10,
  },
});
