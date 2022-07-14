import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import CustomInput from "../components/CustomInput";
import Logo from "../assets/logo.png";
import CustomButton from "../components/Button";
import { baseUrl } from "../api/url";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [dongho, setDongho] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const response = await axios.post(`${baseUrl}/user/login`, {
        "dongho": dongho,
        "password": password
      });
      await AsyncStorage.setItem("access-token", response.data.accessToken);
      navigation.navigate("Home");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.root}>
      <View style={styles.logoWrapper}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.loginInputWrapper}>
        <View style={styles.loginInput}>
          <CustomInput
            placeholder="동호수를 입력해주세요"
            value={dongho}
            setValue={setDongho}
          />
          <CustomInput
            placeholder="비밀번호를 입력해주세요"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.loginButton}>
          <CustomButton
            title="로그인"
            onPress={loginUser}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginInputWrapper: {
    flex: 1,
  },
  loginInput: {
    flex: 1,
    alignItems: "center",
  },
  loginButton: {
    flex: 1.5,
    alignItems: "center",
  },
});
