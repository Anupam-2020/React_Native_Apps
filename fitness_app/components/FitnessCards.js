import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const navigation = useNavigation();

  const fitnessData = fitness;

  const navigateToWorkoutScreen = (item) => {
    navigation.navigate("Workout", {
      image: item.image,
      name: item.name,
      exercises: item.excersises
    });
  };

  return (
    <View>
      {fitnessData.map((item, index) => {
        return (
          <Pressable
            key={index}
            style={styles.imageStyle}
            onPress={() => navigateToWorkoutScreen(item)}
          >
            <Image
              style={{ height: 140, width: "100%", borderRadius: 7 }}
              source={{ uri: item.image }}
            />
            <View style={styles.imageTextView}>
              <Text style={styles.imageText}>{item.name}</Text>
            </View>
            <View>
              <Ionicons
                style={styles.ioniconStyle}
                name="md-flash"
                size={24}
                color="white"
              />
            </View>
          </Pressable>
        );
      })}
      {/* <Text></Text> */}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({
  imageStyle: {
    paddingVertical: 10,
    position: "relative",
  },
  imageTextView: {
    position: "absolute",
    top: 20,
    left: 6,
  },
  imageText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  ioniconStyle: {
    position: "absolute",
    bottom: 10,
    left: 6,
  },
});
