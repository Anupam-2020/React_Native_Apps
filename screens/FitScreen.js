import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { FitnessContext, FitnessItems } from "../Context";

const FitScreen = ({ route, navigation }) => {
  const {
    completed,
    workout,
    calories,
    minutes,
    setCompleted,
    setWorkout,
    setCalories,
    setMinutes,
  } = useContext(FitnessContext);

  console.log(completed);

  const [index, setIndex] = useState(0);

  const exercises = route.params.exercises;
  const exerciseValue = exercises[index];
  // console.log(exercises[index]);

  const moveToRestScreen = () => {
    setWorkout((workout) => workout + 1);
    setCalories((calories) => calories + 6);
    setMinutes((minutes) => minutes + 2.5);
    setCompleted([...completed, exerciseValue.name]);
    if (index >= exercises.length - 1) {
      navigation.navigate("Home");
    } else {
      setIndex((index) => index + 1);
      navigation.navigate("Rest");
    }
    // console.log(index)
  };

  const moveToPreviousWorkout = () => {
    if (index > 0) {
      setIndex((index) => index - 1);
    } else {
      navigation.navigate("Home");
    }
  };

  const moveToNextWorkout = () => {
    if (index < exercises.length - 1) {
      setIndex((index) => index + 1);
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.parentContainer}>
      <Image style={styles.imageStyle} source={{ uri: exerciseValue.image }} />
      <View style={styles.workoutInfoContainer}>
        <Text style={styles.workoutName}>{exerciseValue.name}</Text>
        <Text style={styles.workoutReps}>x{exerciseValue.sets}</Text>
        <Pressable style={styles.doneButton} onPress={moveToRestScreen}>
          <Text style={styles.doneButtonText}>Done</Text>
        </Pressable>
        <View style={styles.workoutChangeView}>
          <Pressable
            style={styles.workoutChangeButton}
            onPress={moveToPreviousWorkout}
          >
            <Text style={styles.workoutChangeButtonText}>Prev</Text>
          </Pressable>
          <Pressable
            style={styles.workoutChangeButton}
            onPress={moveToNextWorkout}
          >
            <Text style={styles.workoutChangeButtonText}>Skip</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default FitScreen;

const styles = StyleSheet.create({
  parentContainer: {
    marginTop: 40,
  },
  imageStyle: {
    height: 300,
    width: "100%",
  },
  workoutInfoContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: 60,
  },
  workoutName: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  workoutReps: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
  },
  doneButton: {
    backgroundColor: "blue",
    paddingHorizontal: 90,
    paddingVertical: 6,
    marginTop: 30,
    borderRadius: 25,
  },
  doneButtonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  workoutChangeView: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  workoutChangeButton: {
    backgroundColor: "green",
    marginHorizontal: 12,
    borderRadius: 20,
  },
  workoutChangeButtonText: {
    color: "white",
    paddingHorizontal: 16,
    paddingVertical: 4,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
});
