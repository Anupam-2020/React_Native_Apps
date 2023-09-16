import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {

    const SPLASH_LOGO_URL = 'https://whatisthebusinessmodelof.com/wp-content/uploads/2019/09/Inshorts-Business-Model.png';

    useEffect(() => {
        const time = setTimeout(() => {
            navigation.navigate('Home')
        },2000)
        return () => {
            clearTimeout(time);
        }
    })

  return (
    <View style={styles.container}>
      <Animatable.Image 
        animation="fadeInDownBig"  
        duration={2000} 
        style={styles.image} 
        source={{uri: SPLASH_LOGO_URL}}/>
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#912e2e'
    },
    image: {
        width: 200, 
        height: 300, 
        objectFit: 'contain'
    }
})