import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  BackHandler,
  Button,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";

const ResultsScreen = ({ route, navigation }) => {
  console.log(route.params);
  const answers = route.params.answers;
  const points = route.params.points;
  const totalQuestions = route.params.totalQuestions;
  console.log(points);

  const attemptedQuestions = answers.filter((answer) => {
    return answer.answer !== null;
  });

  const returnToHome = () => {
    navigation.navigate("Home");
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", returnToHome);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", returnToHome);
    };
  }, []);

  // console.log(attemptedQuestions.length);

  return (
    <View style={styles.parentContainer}>
      <Text>Your Results</Text>
      <View style={styles.answerStatus}>
        <Text>Questions Answered</Text>
        <Text>
          ({attemptedQuestions.length}/{totalQuestions})
        </Text>
      </View>
      <View style={styles.scoreCard}>
        <Text style={{ color: "magenta", textAlign: "center", fontSize: 20 }}>
          Score Card
        </Text>
        <View>
          {answers.length === 0 ? (
            <Text style={{ textAlign: "center", marginTop: 10 }}>
              No questions attempted
            </Text>
          ) : (
            answers.map((answer, index) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    padding: 5,
                    justifyContent: "space-around",
                  }}
                  key={index}
                >
                  <Text>{answer.question}</Text>
                  <Text>{answer.answer === true ? "✔" : "❌"}</Text>
                </View>
              );
            })
          )}
        </View>
      </View>
      <Pressable style={styles.return} onPress={returnToHome}>
        <Text style={{ color: "white", fontSize: 16 }}>Return to Home</Text>
      </Pressable>
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  parentContainer: {
    marginTop: 30,
    marginHorizontal: 10,
    alignItems: "center",
    flexDirection: "column",
    // borderColor: "black",
    // borderWidth: 1,
  },
  answerStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "80%",
  },
  scoreCard: {
    marginTop: 45,
    backgroundColor: "#f0f8ff",
    padding: 10,
    borderRadius: 7,
    width: "100%",
  },
  return: {
    backgroundColor: "magenta",
    padding: 10,
    borderRadius: 8,
    marginTop: 30,
  },
});
