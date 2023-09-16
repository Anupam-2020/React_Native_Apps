import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import NewsHeadlines from '../components/NewsHeadlines'
import Category from '../components/Category'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Category />
      <NewsHeadlines />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? 40 : 0, 
        backgroundColor: '#dfd3ca',
        flex: 1
    }
})