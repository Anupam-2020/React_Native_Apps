import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';

const WebScreen = ({route}) => {
    const news = route.params.news;
  return (
    <WebView source={{uri: news}}/>
  )
}

export default WebScreen

const styles = StyleSheet.create({})