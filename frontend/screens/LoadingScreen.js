import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const LoadingScreen = ({navigation, route}) => {
  const username = route.params.username;
  const listOfMovies = route.params.list;

    useEffect(() => {
        const id = setTimeout(() => {
            navigation.navigate('Home', {
              username: username,
              listOfMovies
            })
        },1000)
        return () => {
          clearTimeout(id);
        }
    },[]);
    
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size='large' color='red'/>
    </View>
  )
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black'
    }
})