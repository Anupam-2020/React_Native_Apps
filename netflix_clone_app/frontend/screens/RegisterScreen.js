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

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [correctInput, setCorrectInput] = useState('');

  const userEmail = (email) => {
    setEmail(email);
  };

  const userPassword = (password) => {
    setPassword(password);
  };

  const navigateToRegister = () => {
    password.length > 5 && email.includes('@') ? [navigation.navigate('Plan', {
      email, 
      password
    }) , setCorrectInput('user found')] : setCorrectInput('Wrong Credentials');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={{ marginTop: 180, width: "100%", alignItems: "center" }}>
          <Image
            style={styles.netflixImage}
            source={{
              uri: "https://i0.wp.com/www.downloadfonts.io/wp-content/uploads/2021/09/Netflix-Logo-Font.png?fit=1024%2C581&ssl=1",
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
          <Pressable
            style={
              password.length > 5 && email.includes('@')
                ? [
                    styles.signInButton,
                    { backgroundColor: "red", borderWidth: 0 },
                  ]
                : styles.signInButton
            }
            onPress={navigateToRegister}
          >
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.text}>Welcome To Netflix</Text>
          </Pressable>
          <Text style={[styles.text, correctInput === 'Wrong Credentials' ? {display: 'flex'} : {display: "none"}]}>
            Please enter valid details
          </Text>
          <Text style={[styles.text, correctInput === 'user found' ? {display: 'flex'} : {display: 'none'}]}>User already exists.</Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

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
    // paddingRight: 240,
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
