import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CategoryList from '../components/CategoryList';
import PrimeDaySale from '../components/PrimeDaySale';
import TrendingDeals from '../components/TrendingDeals';
import TodaysDeals from '../components/TodaysDeals';


const HomeScreen = () => {
  return (
    <SafeAreaView style={{
      paddingTop: Platform.OS === 'android' ? 40: 0,
      flex: 1,
      backgroundColor: '#e1dcd3'
    }}>
      <View style={styles.navBarContainer}>
        <View style={styles.navBar}>
          <Feather name="search" size={24} color="black" />
          <TextInput placeholder='Search Amazon.in' style={styles.searhTextInput}/>
        </View>
        <Feather name="mic" size={24} color="black" />
      </View>
      <ScrollView>
        <View style={styles.addressBar}>
          <EvilIcons name="location" size={26} color="black" />
          <Text style={{marginLeft: 10, fontSize: 16, marginRight: 10}}>
            Deliver to Anupam - Patna 800014
          </Text>
          <AntDesign name="down" size={16} color="black" />
        </View>
        <CategoryList />
        <PrimeDaySale />
        <TrendingDeals />
        <TodaysDeals />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  navBarContainer: {
    backgroundColor: "#008E97", 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  navBar: {
    backgroundColor: 'white', 
    width: '85%',
    flexDirection: 'row',
    marginVertical: 10,
    paddingVertical: 8,
    paddingLeft: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 5
  },
  searhTextInput: {
    marginLeft: 10, 
    width: '85%', 
    fontSize: 18,
  },
  addressBar: {
    flexDirection: 'row', 
    backgroundColor: '#3bc5cf', 
    paddingLeft: 10, 
    paddingVertical: 16, 
    alignItems: 'center'
  }
});