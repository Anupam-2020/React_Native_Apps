import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { getNewsFromInput } from '../store/categorySlice';

const Header = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('technology');
  const HEADER_LOGO = 'https://freeappsforme.com/wp-content/uploads/2019/11/inshorts-788x788.png';

  const getNews = (query) => {
    // console.log(query);
    setQuery(query);
  }

  useEffect(() => {
    const time = setTimeout(() => {
      dispatch(getNewsFromInput(query));
    },1000)

    return () => {
      clearTimeout(time);
    }
  },[query])
  

  return (
    <View style={styles.container}>
      <Image source={{uri: HEADER_LOGO}} style={styles.image}/>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <TextInput onChangeText={getNews} placeholder='search news' style={styles.textInput}/>
        <AntDesign name="search1" size={24} color="black" />
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10
    },
    image: {
        width: 80,
        height: 50,
        objectFit: 'contain'
    },
    textInput: {
      fontSize: 20, 
      marginBottom: 7,
      marginRight: 5, 
      paddingHorizontal: 10, 
      width: 200
    }
})