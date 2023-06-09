import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { mainStyles } from "./MainStyles";
const { background, avatarWrap, title, profileWrapper } = mainStyles;

export const ProfileScreen = () => {
  return (
    <ImageBackground style={background} source={ require("../../assets/images/photoBG.jpeg") }>
      <View style={profileWrapper}>
        <View style={avatarWrap}>
          <Image />
        </View>
        <Text style={title}>Login</Text>
      </View>
    </ImageBackground>
  );
};
