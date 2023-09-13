import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  const moveToQuizScreen = () => {
    navigation.navigate("Quiz")
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://media.istockphoto.com/id/1290210769/vector/quiz-time-neon-sign-style-text.jpg?s=612x612&w=0&k=20&c=pfeOdmUD4bYS-LZUuC0f1PDOMU2YNhngvzoUuHW20us=",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>QUIZ RULE</Text>
        <View style={styles.quizRuleContainer}>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <Text style={[styles.quizListText, { marginRight: 10 }]}>•</Text>
            <Text style={styles.quizRuleText}>
              For Each correct answer ypu get 5 points.
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <Text style={[styles.quizListText, { marginRight: 10 }]}>•</Text>
            <Text style={styles.quizRuleText}>
              There is no negetive marking for wrong answer.
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <Text style={[styles.quizListText, { marginRight: 10 }]}>•</Text>
            <Text style={styles.quizRuleText}>
              You will get 15 seconds for answer a question.
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.quizListText, { marginRight: 10 }]}>•</Text>
            <Text style={styles.quizRuleText}>
              You should answer the question compulsarily.
            </Text>
          </View>
        </View>
        <Pressable
          style={styles.startButton}
          android_ripple={{ color: "#dba3cd", radius: 55 }}
          onPress={moveToQuizScreen}
        >
          <Text style={styles.startButtonText}>Start Quiz</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  textContainer: {
    marginTop: 25,
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fa0bbe",
    fontSize: 20,
  },
  quizRuleContainer: {
    backgroundColor: "#f75252",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 6,
    marginTop: 14,
  },
  quizRuleText: {
    fontSize: 16,
    textAlign: "center",
  },
  quizListText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  startButton: {
    backgroundColor: "magenta",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 50,
    width: 120,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 25,
    overflow: "hidden",
  },
  startButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
