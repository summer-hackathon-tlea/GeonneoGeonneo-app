import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Location from "../assets/location.png";

export default function WithCard(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.withCard}>
        <Text style={styles.title}>{props.withCard.title}</Text>
        <View style={styles.attribute}>
          <Image source={Location} />
          <Text style={styles.attribute.title}>{props.withCard.dongho}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  withCard: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  attribute: {
    width: "100%",
    flexDirection: "row",
    title: {
      flex: 1,
      justifyContents: "center",
      alignItems: "center",
      width: 100,
      fontSize: 20,
      color: "#808080",
      paddingTop: 0.5,
    },
  },
});
