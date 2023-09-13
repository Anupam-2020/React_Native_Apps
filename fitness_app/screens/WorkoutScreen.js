import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FitnessContext } from "../Context";

const WorkoutScreen = ({ route, navigation }) => {
  const { completed, setCompleted } = useContext(FitnessContext);
  const name = route.params.name;
  const image = route.params.image;
  const exercises = route.params.exercises;

  const renderExerciseGifs = (item) => {
    return (
      <View style={styles.workoutContainer}>
        <View style={styles.gifRender}>
          <Image
            source={{ uri: item.image }}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
        <View style={styles.gifText}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.name}</Text>
          <Text>x{item.sets}</Text>
        </View>
        {completed.includes(item.name) ? (<Text>✅</Text>) : null}
      </View>
    );
  };

  const moveToHomeScreen = () => {
    navigation.navigate("Home");
  };

  const moveToFitScreen = () => {
    navigation.navigate("FitScreen", {
      exercises: exercises,
    });
    setCompleted([]);
  };

  return (
    <View style={styles.workoutHeader}>
      <Image style={styles.workoutHeaderImage} source={{ uri: image }} />
      <Ionicons
        name="arrow-back"
        size={30}
        color="white"
        style={{ position: "absolute", top: 10, left: 10 }}
        onPress={moveToHomeScreen}
      />
      <FlatList
        data={exercises}
        keyExtractor={(item, index) => {
          return index;
        }}
        renderItem={(item) => renderExerciseGifs(item.item)}
      />
      <View style={{ backgroundColor: "#ddcdcd" }}>
        <Pressable
          style={styles.startButtonPressable}
          onPress={moveToFitScreen}
        >
          <Text style={styles.startButton}>Start</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  workoutHeader: {
    marginTop: 40,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  workoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'space-between'
  },
  workoutHeaderImage: {
    height: 180,
    width: "100%",
  },
  gifRender: {
    height: 100,
    width: 100,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 10,
  },
  startButtonPressable: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  startButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  gifText: {
    width: 230
  }
});
