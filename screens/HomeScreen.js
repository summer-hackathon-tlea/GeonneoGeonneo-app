import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import LightLogo from "../assets/lightLogo.png";
import axios from "axios";
import { baseUrl } from "../api/url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WithCard from "../components/WithCard";

export default function HomeScreen({ navigation }) {

  const [withs, setWiths] = useState([]);

  useEffect(() => {
    navigation.addListener('focus', getWiths);
  }, [navigation]);

  const getWiths = async () => {
    const accessToken = await AsyncStorage.getItem("access-token");
    try {
      const response = await axios.get(`${baseUrl}/with`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setWiths([...response.data]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Image source={LightLogo} style={styles.lightLogo} />
      </View>
      <View style={styles.withsWrapper}>
        <ScrollView style={styles.withs}>
          {
            withs.map(w => (
              <WithCard
                withCard={w}
                onPress={() => {
                  navigation.navigate("WithDetail", {
                    withId: w.id,
                  })
                }}
              />
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: "#f8f8f8",
    },
    header: {
      flex: 1,
      paddingLeft: 20,
      paddingTop: 80,
    },
    lightLogo: {},
    withsWrapper: {
      flex: 7,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    withs: {
      width: "90%",
    },
  },
);
