import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const FavouritesScreen = ({route}) => {
  const listOfMovies = route.params.listOfMovies;

    const data = useSelector(state => state.fav);
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';
    // const [movie, setMovie] = useState();

    console.log(data)
  return (
    <ScrollView>
      {
        listOfMovies ? listOfMovies.map((movie, index) => {
          return (
            <View key={index} style={styles.favContainer}>
              <View>
                <Image style={styles.image} source={{uri: IMAGE_BASE_URL+movie.poster_path}}/>
                <Text style={[styles.textStyle, {fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 15}]}>{movie.name}</Text>
                <Text style={[styles.textStyle, {color: '#6b6969'}]}>Release Date : {movie.first_air_date ? movie.first_air_date : movie.release_date}</Text>
                <Text style={[styles.textStyle, {color: '#6b6969'}]}>Rating - {movie.vote_average}</Text>
                <Text style={[styles.textStyle, {fontSize: 24}]}>{movie.overview}</Text> 
              </View>
            </View>
          )
        }) : 
          (<View style={{ 
            backgroundColor: 'black', 
          }}>
            <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>No Movies Found</Text>
          </View>)
      }
    </ScrollView>
  )
}

export default FavouritesScreen

const styles = StyleSheet.create({
  favContainer: {
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: 400,
    objectFit: 'contain'
  },
  textStyle: {
    color: 'white'
  }
})