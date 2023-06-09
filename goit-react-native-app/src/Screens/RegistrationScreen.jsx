import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { authStyles } from "./AuthStyles";
import { SubmitBtn } from "../Components/SubmitBtn";
import Toast from "react-native-root-toast";

const { avatarWrap, title, inputWrap, input, passwordWrap, showBtn, showBtnText, btn, btnText, link, linkText, image, regWrapper, } = authStyles;

const initialFormState = {
  login: "",
  email: "",
  password: "",
};

const initialFocusState = {
  login: false,
  email: false,
  password: false,
};

export const RegistrationScreen = ({ navigation }) => {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [onFocus, setOnFocus] = useState(initialFocusState);
  const [formState, setFormState] = useState(initialFormState);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const keyboardHide = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  const handleFocus = (inputName) => {
    setIsKeyboardShow(true),
    setOnFocus((prevState) => ({ ...prevState, [inputName]: true }));
  };

  const outFocus = (inputName) => {
    setOnFocus((prevState) => ({ ...prevState, [inputName]: false }));
    setIsKeyboardShow(false);
  };

  const handleSubmit = () => {
    const {login, email, password } = formState;
    if (!email || !password) {
      Toast.show("Please, fill out the form completely++");
      return;
    }
    console.log('Login:', login);
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate("Home");
    setFormState(initialFormState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground style={image} source={require("../../assets/images/photoBG.jpeg")} >
        <KeyboardAvoidingView behavior={Platform.OS == "ios" && "padding"}>
          <TouchableWithoutFeedback onPress={keyboardHide}>
            <View onPress={keyboardHide} style={{ ...regWrapper,
                                                  paddingBottom: isKeyboardShow ? 32 : 78,}}
            >
            <View style={avatarWrap}>
              <Image />
            </View>
            <Text style={title}>Registration</Text>
            <View style={inputWrap}>
              <TextInput style={{ ...input,
                                  borderColor: onFocus.login ? "#FF6C00" : "#E8E8E8",}}
                  placeholder="Login"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => handleFocus("login")}
                  onEndEditing={() => outFocus("login")}
                  onChangeText={(value) => setFormState( (prevState) => ( { ...prevState, login: value, } ) ) }
              />
              <TextInput style={{ ...input,
                                  borderColor: onFocus.email ? "#FF6C00" : "#E8E8E8", }}
                  placeholder="Email"
                  placeholderTextColor="#BDBDBD"
                  keyboardType="email-address"
                  onFocus={() => handleFocus("email")}
                  onEndEditing={() => outFocus("email")}
                  onChangeText={ (value) => setFormState( (prevState) => ( { ...prevState, email: value, } ) ) }
              />
              <View style={passwordWrap}>
                  <TextInput
                    style={{
                      ...input,
                      borderColor: onFocus.password ? "#FF6C00" : "#E8E8E8",
                    }}
                    secureTextEntry={isPasswordHidden}
                    placeholder="Password"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => handleFocus("password")}
                    onEndEditing={() => outFocus("password")}
                    onChangeText={ (value) => setFormState((prevState) => ({ ...prevState, password: value, } ) ) }
                  />
                  <TouchableOpacity style={showBtn} onPress={() => setIsPasswordHidden((prevState) => !prevState) }>
                      <Text style={showBtnText}>
                        {isPasswordHidden ? "Show" : "Hide"}
                      </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {!isKeyboardShow && (
                <View style={{ marginTop: 43 }}>
                  <SubmitBtn text="Submit" handleSubmit={handleSubmit}/>
                  <TouchableOpacity onPress={ () => navigation.navigate("Login") } style={link} activeOpacity={0.7}>
                      <Text style={linkText}>Already have account? Log in.</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
