import { StyleSheet, Text, SafeAreaView, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import questions from "../data/questions";
import { AntDesign, Entypo } from "@expo/vector-icons";

const QuizScreen = ({ navigation }) => {
  const data = questions;
  const totalQuestions = data.length;
  // points.
  const [points, setPoints] = useState(0);

  // index of the question.
  const [index, setIndex] = useState(0);

  // answer Status(true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  // answers
  const [answers, setAnswers] = useState([]);

  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // counter
  const [counter, setCounter] = useState(15);

  // interval
  let interval = null;

  // progress bar.
  const progressPrecentage = Math.floor((index / totalQuestions) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        setAnswerStatus(true);
        answers.push({
          question: index + 1,
          answer: true,
        });
      } else {
        setAnswerStatus(false);
        answers.push({
          question: index + 1,
          answer: false,
        });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((counter) => counter - 1);
      }
      if (counter === 0) {
        setIndex(index + 1);
        setCounter(15);
      }
    };

    interval = setTimeout(myInterval, 1000);

    // clean up.
    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > totalQuestions) {
      clearTimeout(interval);
      navigation.navigate("Results", {
        answers: answers,
        points: points,
        totalQuestions: data.length
      });
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];

  const moveToResultsScreen = () => {
    navigation.navigate("Results", {
      answers: answers,
      points: points,
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.quizHeader}>
        <View style={styles.quizHeaderLeft}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Quiz Challenge
          </Text>
          <Text style={{ fontWeight: "bold" }}>Your Progress</Text>
        </View>
        <View>
          <Text style={styles.timer}>{counter}</Text>
          <Text>
            ({index}/{totalQuestions}) answered
          </Text>
        </View>
      </View>
      {/* progressbar*/}
      <View style={styles.progressBar}>
        <Text
          style={[styles.progressText, { width: `${progressPrecentage}%` }]}
        />
      </View>
      <View style={styles.questionsContainer}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          {currentQuestion?.question}
        </Text>
        <View style={{ marginTop: 10 }}>
          {currentQuestion?.options.map((item, index) => {
            return (
              <Pressable
                onPress={() =>
                  selectedAnswerIndex === null && setSelectedAnswerIndex(index)
                }
                style={
                  selectedAnswerIndex === index &&
                  index === currentQuestion.correctAnswerIndex
                    ? [styles.options, { backgroundColor: "green" }]
                    : selectedAnswerIndex !== null &&
                      selectedAnswerIndex === index
                    ? [styles.options, { backgroundColor: "red" }]
                    : styles.options
                }
                key={index}
              >
                {selectedAnswerIndex === index &&
                index === currentQuestion?.correctAnswerIndex ? (
                  <AntDesign
                    style={styles.optionsOption}
                    name="checkcircle"
                    size={24}
                    color="white"
                  />
                ) : selectedAnswerIndex !== null &&
                  selectedAnswerIndex === index ? (
                  <Entypo
                    style={styles.optionsOption}
                    name="circle-with-cross"
                    size={24}
                    color="white"
                  />
                ) : (
                  <Text style={styles.optionsOption}>{item.option}</Text>
                )}

                <Text>{item.answer}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
      <View style={answerStatus === null ? null : styles.answerStatusCheck}>
        {answerStatus === null ? null : (
          <Text
            style={{ fontSize: 17, textAlign: "center", fontWeight: "bold" }}
          >
            {answerStatus === true ? "Correct Answer" : "Wrong Answer"}
          </Text>
        )}
        {index + 1 >= totalQuestions && answerStatus !== null ? (
          <Pressable
            onPress={moveToResultsScreen}
            style={styles.completionButton}
          >
            <Text style={{ color: "white" }}>Done</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
            style={styles.completionButton}
          >
            <Text style={{ color: "white" }}>Next Question</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  quizHeader: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  timer: {
    left: "40%",
    backgroundColor: "magenta",
    paddingHorizontal: 14,
    paddingVertical: 10,
    width: "60%",
    borderRadius: 20,
    marginBottom: 5,
    borderColor: "magenta",
    borderWidth: 1,
    textAlign: "center",
    color: "white",
  },
  quizHeaderLeft: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-around",
  },
  questionsContainer: {
    backgroundColor: "#d8e9ee",
    padding: 10,
    marginTop: 10,
  },
  options: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 14,
    // overflow: 'hidden'
  },
  optionsOption: {
    marginRight: 10,
    borderRadius: 20,
    borderColor: "blue",
    borderWidth: 1,
    padding: 8,
    textAlign: "center",
    width: 40,
  },
  completionButton: {
    backgroundColor: "green",
    padding: 10,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 20,
    borderRadius: 6,
  },
  progressBar: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 10,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: 20,
  },
  progressText: {
    backgroundColor: "#ffc0cb",
    borderRadius: 12,
    position: "absolute",
    left: 0,
    height: 10,
    right: 0,
    marginTop: 20,
  },
  answerStatusCheck: {
    marginTop: 45,
    backgroundColor: "#f0f8ff",
    padding: 10,
    borderRadius: 7,
    height: 120,
  },
});
