import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { deals } from '../json/dealsList';

const TrendingDeals = () => {

    const ShowDeals = ({deal}) => {
        return (
            <View>
                <Image 
                    style={styles.image} 
                    source={{uri: deal.image}}
                />
            </View>
        )
    }

  return (
    <View style={styles.trendingContainer}>
        <Text 
            style={styles.text}>
                Trending deals of the week
        </Text>
      {deals.map((deal) => (
        <View key={deal.id}>
            <ShowDeals deal={deal} />
        </View>
        ))}
        <View style={styles.divider}></View>
    </View>
  )
}

export default TrendingDeals;

const styles = StyleSheet.create({
    trendingContainer: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        backgroundColor: 'white', 
        marginRight: 4
    },
    text: {
        textAlign:'left', 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginLeft: 8, 
        marginTop: 8
    },
    divider: {
        width: '100%', 
        height: 5, 
        backgroundColor: '#666161'
    },
    image: {
        width: 190, 
        height: 300, 
        objectFit: 'contain'
    }
});