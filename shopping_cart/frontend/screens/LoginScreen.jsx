import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const LoginScreen = ({navigation}) => {

  const navigateToHomePage = () => {
    navigation.navigate('Bottom');
  }

  return (
    <View style={styles.loginContainer}>
      <Image style={styles.logo} source={{uri: 'https://www.demandsphere.com/wp-content/uploads/2018/02/Amazon_logo.png'}}/>
      <Text style={styles.loginText}>Login to your Account</Text>
     <View style={[styles.inputField, {marginTop: 120}]}>
      <Entypo name="mail" size={24} color="black" />
      <TextInput style={styles.textInput} placeholder='enter your email'/>
     </View>
     <View style={styles.inputField}>
      <AntDesign name="lock1" size={24} color="black" />
      <TextInput secureTextEntry style={styles.textInput} placeholder='enter your password'/>
     </View>
     <Pressable onPress={navigateToHomePage} style={styles.loginButton}>
      <Text style={{color: '#f7f4f4', fontWeight: 'bold'}}>Login</Text>
     </Pressable>
     <Text>Don't have an account? Sign Up</Text>
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 130,
    objectFit: 'contain'
  },
  loginText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  inputField: {
    backgroundColor: '#c4bdbd',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    width: 350,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6
  },
  loginButton: {
    backgroundColor: '#d3aa03',
    paddingVertical: 8,
    paddingHorizontal: 70,
    textAlign: 'center',
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 20,
    borderRadius: 6,
    shadowColor: '#efc51a',
  },
  textInput: {
    marginLeft: 8, 
    width: '90%', 
    fontSize: 18
  }
})