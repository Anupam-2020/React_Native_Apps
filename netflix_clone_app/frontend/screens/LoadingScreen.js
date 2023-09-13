import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const LoadingScreen = ({navigation}) => {

    useEffect(() => {
        const id = setTimeout(() => {
            navigation.navigate('Home')
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