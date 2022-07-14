import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { baseUrl } from "../api/url";
import Before from "../assets/before.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Location from "../assets/location.png";
import Member from "../assets/member.png";

export default function WithDetail({ navigation, route }) {

  const withId = route.params.withId;
  const [withDetail, setWithDetail] = useState({});

  useEffect(() => {
    getWithDetail();
  }, []);

  const getWithDetail = async () => {
    const accessToken = await AsyncStorage.getItem("access-token");
    try {
      const response = await axios.get(`${baseUrl}/with/${withId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setWithDetail({ ...response.data });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image source={Before} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.content.title}>{withDetail.title}</Text>
        <View style={styles.content.attribute}>
          <Image source={Location} />
          <Text style={styles.content.attribute.title}>{withDetail.dongho}</Text>
          <Image source={Member}/>
          <Text style={styles.content.attribute.title}>
            ( {withDetail.currentNumberOfPeople} / {withDetail.maxNumberOfPeople} ) 명
          </Text>
        </View>
        <Text style={styles.content.content}>{withDetail.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    root: {
      width: "100%",
    }
    ,
    header: {
      width: "100%",
      paddingLeft: 20,
      paddingTop: 80,
    },
    content: {
      paddingTop: 50,
      paddingHorizontal: 40,
      title: {
        fontWeight: "700",
        fontSize: 35,
        paddingBottom: 10,
      },
      attribute: {
        paddingBottom: 50,
        width: "100%",
        flexDirection: "row",
        title: {
          flex: 1,
          justifyContents: "center",
          alignItems: "center",
          width: 50,
          fontSize: 20,
          color: "#808080",
          paddingTop: 0.5,
          paddingLeft: 5,
        },
      },
      content: {
        fontSize: 25,
        color: "#4F4F4F",
        fontWeight: "600",
      }
    },
  },
);
