import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext } from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessContext } from "../Context";

const HomeScreen = () => {
  const { workout, calories, minutes } = useContext(FitnessContext);
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.homeWorkoutText}>Home Workout</Text>
      </View>
      <View style={styles.workoutCheck}>
        <View>
          <Text style={styles.workoutCheckValue}>{workout}</Text>
          <Text style={styles.workoutCheckText}>Workouts</Text>
        </View>
        <View>
          <Text style={styles.workoutCheckValue}>{calories}</Text>
          <Text style={styles.workoutCheckText}>Kcal</Text>
        </View>
        <View>
          <Text style={styles.workoutCheckValue}>{minutes}</Text>
          <Text style={styles.workoutCheckText}>Mins</Text>
        </View>
      </View>
      {/* <View style={styles.fitnessImageView}>
          <Image
            style={styles.fitnessImage}
            source={{
              uri: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
          />
        </View> */}
      <FitnessCards />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#f19419",
    paddingHorizontal: 30,
    paddingTop: 20,
    width: "100%",
    flex: 1,
  },
  homeWorkoutText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  workoutCheck: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    marginBottom: 18,
  },
  workoutCheckValue: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  workoutCheckText: {
    textTransform: "uppercase",
    color: "white",
  },
  fitnessImageView: {
    marginTop: 20,
  },
  fitnessImage: {
    height: 180,
    width: "100%",
    borderRadius: 6,
  },
});
