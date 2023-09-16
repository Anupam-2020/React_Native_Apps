import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { category } from "../CategoryList/category";
import { useDispatch } from "react-redux";
import { getNews } from "../store/categorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(1);
  const setCategory = (category) => {
    dispatch(getNews(category !== null ? category : "general"));
  };

  const renderCategories = (item, index) => {
    return (
      <Pressable
        onPress={() => {
          setCategory(item.category);
          setSelected(item.id);
          // console.log(selected);
        }}
        style={
          selected === item.id
            ? [styles.category, { backgroundColor: "#e53c3c" }]
            : styles.category
        }
      >
        <Text style={{ color: "white", textAlign: "center" }}>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <View style={{ marginTop: 4 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={category}
        renderItem={(item, index) => renderCategories(item.item, index)}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    backgroundColor: "#5a5454",
    marginLeft: 4,
    marginRight: 4,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginVertical: 8,
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
