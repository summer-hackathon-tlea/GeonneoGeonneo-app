import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Before from "../assets/before.png";
import Member from "../assets/member.png";
import Send from "../assets/send.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "../api/url";

export default function WriteWithScreen({ navigation }) {

  const [withTitle, setWithTitle] = useState("");
  const [withMaxNumberOfPeople, setWithMaxNumberOfPeople] = useState("2");
  const [withContent, setWithContent] = useState("");

  const createWith = async () => {
    const accessToken = await AsyncStorage.getItem("access-token");
    try {
      await axios.post(`${baseUrl}/with/`, {
          title: withTitle,
          maxNumberOfPeople: parseInt(withMaxNumberOfPeople),
          content: withContent,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      navigation.navigate("Home");
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
        <TextInput
          value={withTitle}
          style={styles.content.title}
          placeholder="제목을 입력해주세요"
          onChangeText={setWithTitle}
        />
        <View style={styles.content.attribute}>
          <Image source={Member} />
          <TextInput
            value={withMaxNumberOfPeople}
            style={styles.content.attribute.title}
            onChangeText={setWithMaxNumberOfPeople}
          />
        </View>
        <TextInput
          value={withContent}
          style={styles.content.content}
          placeholder="내용을 입력해주세요"
          onChangeText={setWithContent}
          multiline={true}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={createWith} style={styles.footer.send}>
          <Image source={Send} />
        </TouchableOpacity>
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
        marginBottom: 10,
        borderBottomWidth: 2,
        borderBottom: 1,
        borderBottomColor: "#F4978E",
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
        height: 480,
      },
    },
    footer: {
      height: 100,
      borderTopColor: "#E8E8E8",
      borderTopWidth: 2,
      send: {
        alignItems: "flex-end",
        paddingTop: 10,
        paddingRight: 15,
      },
    },
  });
