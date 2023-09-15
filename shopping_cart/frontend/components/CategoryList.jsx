import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { categoryList } from '../json/categoryList';

const CategoryList = () => {
    const renderList = (item) => {
        return(
            <Pressable style={styles.categoryListContainer}>
                <Image style={styles.image} source={{uri: item.image}}/>
                <Text>{item.name}</Text>
            </Pressable>
        )
    }

  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}  
            renderItem={(item) => renderList(item.item)} 
            keyExtractor={(item) => item.id}
        />
    </View>
  )
}

export default CategoryList

const styles = StyleSheet.create({
    categoryListContainer: {
        height: 100, 
        justifyContent: 'center', 
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    image: {
        width: 60, 
        height: 60, 
        objectFit: 'contain'
    }
})