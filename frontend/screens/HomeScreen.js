import { ScrollView, StyleSheet, Text, View, } from 'react-native'
import React, {useState, useEffect } from 'react'
import Header from '../components/Header'
import TrendingComponent from '../components/TrendingComponent';
import { apis } from '../data/apis';

const HomeScreen = () => {

  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <Header />
            {apis.map((api, index) => (
              <View key={index}>
                <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 12, marginTop: 10}}>{api[1]}</Text>
                <TrendingComponent middleComponentOfApi={api[0]}/>
              </View>
              )
            )}
    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})