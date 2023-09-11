import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useApi from '../util/useApi';
import { useNavigation } from '@react-navigation/native';

const Header = ({listOfMovies}) => {

  const NETFLIX_LOGO = 'http://pngimg.com/uploads/netflix/netflix_PNG12.png';

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

  const [randomImage, setRandomImage] = useState();

  const results = useApi('trending/movie/week');

  const navigation = useNavigation();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * results?.results?.length - 1)
    setRandomImage(IMAGE_BASE_URL+results?.results[randomNumber]?.poster_path);
  },[results])

  const navigateToFavScreen = () => {
    navigation.navigate('Favourite', {
      listOfMovies
    });
  }

  return (
    <View style={{ marginTop: 30}}>
      <ImageBackground source={{uri: randomImage}} style={styles.imageBackground}>
        <View style={styles.header}>
          <Image style={styles.headerImage} source={{uri: NETFLIX_LOGO}}/>
          <FontAwesome5 name="search" size={24} color="white" />
        </View>
        <View style={styles.list}>
          <Pressable>
            <Text style={styles.headerText}>TV Shows</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.headerText}>Movies</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.headerText}>Categories</Text>
          </Pressable>
        </View>
      </ImageBackground>
      <View style={styles.middlePart}>
        <Pressable onPress={navigateToFavScreen} style={{alignItems: 'center'}}>
          <AntDesign name="plus" size={24} color="white" />
          <Text style={styles.middleText}>My List</Text>
        </Pressable>
        <Pressable style={styles.middlePressable}>
          <MaterialIcons name="play-arrow" size={24} color="black" />
          <Text style={[styles.middleText,{color: 'black'}]}>Play</Text>
        </Pressable>
        <View>
        <MaterialCommunityIcons name="information-outline" size={24} color="white" />
        <Text style={styles.middleText}>Info</Text>
        </View>
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%', 
    height: 500, 
    objectFit: 'contain',
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 13
  },
  headerImage: {
    width: 160, 
    height: 30, 
    objectFit: 'contain'
  },
  headerText: {
    color: 'white',
    fontSize: 16
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  middleText: {
    color: 'white'
  },
  middlePart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 8
  },
  middlePressable: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 14,
    borderRadius: 6,
    paddingVertical: 3,
    paddingHorizontal: 9,
    width: 100
  }
})