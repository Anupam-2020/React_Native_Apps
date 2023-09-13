import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import { FitnessContext, FitnessItems } from "./Context";

export default function App() {
  return (
    <FitnessItems>
      <StackNavigator />
    </FitnessItems>
  );
}

const styles = StyleSheet.create({});
