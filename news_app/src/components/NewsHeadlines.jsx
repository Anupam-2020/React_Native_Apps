import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const NewsHeadlines = () => {
  const navigation = useNavigation();
  const {news, loading} = useSelector(state => state.category);
  // console.log(news);

  const navigateToWebView = (news) => {
    navigation.navigate('Web', {
      news
    })
  }

  return (
    <ScrollView>
      {!loading ? news && news?.slice(0,30).map((data, index) => {
        return (
            <View style={styles.container} key={index}>
              <Image style={styles.image} source={{uri: data.urlToImage}}/>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.desc}>{data.description}</Text>
              <View style={styles.viewForDateAndReadMore}>
              <Text style={{marginTop: 12, marginBottom: 12}}>{data.publishedAt.toString().slice(0,10)}</Text>
              <Pressable onPress={() => navigateToWebView(data.url)} style={styles.readMoreButton}>
                <Text style={{color: 'white'}}>Read More →</Text>
              </Pressable>
              </View>
              
              <View style={styles.text}>
                <Text style={{color: 'white'}}>{data.source.name}</Text>
              </View>
            </View>
        )
      }) : (<Text>Loading...</Text>)}
    </ScrollView>
  )
}

export default NewsHeadlines;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 6,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250
  },
  title: {
    fontSize: 14, 
    fontWeight: 'bold', 
    marginBottom:6, 
    marginTop: 6
  },
  desc: {
    color: '#3d3c3c', 
    marginBottom: 10
  },
  text: {
    position: 'absolute', 
    left: 250, 
    backgroundColor: '#e53c3c', 
    alignItems:'center', 
    justifyContent: 'center', 
    width: 120, 
    paddingVertical: 6, 
    borderRadius: 6,
    marginTop: 4
  },
  viewForDateAndReadMore: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  readMoreButton: {
    backgroundColor: '#e53c3c',
    width: 120,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8
  }
})