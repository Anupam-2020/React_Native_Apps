import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BackHandler = () => {
    const navigation = useNavigation();
    const backHandler = () => {
        navigation.navigate('Home')
    }

  return (
    <Pressable onPress={backHandler}>
      <Ionicons name="arrow-back" size={24} color="red" />
    </Pressable>
  )
}

export default BackHandler

const styles = StyleSheet.create({})