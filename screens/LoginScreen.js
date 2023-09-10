import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const NETFLIX_LOGO = 'http://pngimg.com/uploads/netflix/netflix_PNG12.png';

  const userEmail = (e) => {
    setEmail(e);
  };

  const userPassword = (e) => {
    setPassword(e);
  };

  const navigateToLoadingPage = () => {
    // email && password.length > 5 ? navigation.navigate('Loading') : null
    navigation.navigate('Loading');
  }

  const navigateToRegister = () => {
    navigation.navigate('Register')
  }


  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={{ marginTop: 180, width: "100%", alignItems: "center" }}>
          <Image
            style={styles.netflixImage}
            source={{
              uri: NETFLIX_LOGO,
            }}
          />
          <View style={styles.loginDetails}>
            <TextInput
              placeholder="email"
              style={[styles.loginTextInput, { marginBottom: 22 }]}
              placeholderTextColor="white"
              onChangeText={userEmail}
            />
            <TextInput
              textContentType="password"
              secureTextEntry={true}
              placeholder="Password"
              style={styles.loginTextInput}
              placeholderTextColor="white"
              onChangeText={userPassword}
            />
          </View>
          <Pressable onPress={navigateToLoadingPage} style={password.length > 5 ?  [styles.signInButton,{backgroundColor: 'red', borderWidth: 0}] : styles.signInButton}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>
          <Pressable onPress={navigateToRegister}>

          <Text style={styles.text}>New To Netflix? Sign Up Now</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  netflixImage: {
    width: 160,
    height: 40,
  },
  loginDetails: {
    marginTop: 80,
  },
  loginTextInput: {
    backgroundColor: "#888787",
    color: "white",
    borderRadius: 5,
    paddingVertical: 6,
    paddingLeft: 15,
    width: 320,
  },
  signInButton: {
    borderColor: "white",
    borderWidth: 1,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 110,
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    color: "white",
    marginTop: 20,
  },
});
