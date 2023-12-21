import React from "react";
import { ThemedButton } from "react-native-really-awesome-button";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./components/MainScreen";
import UploadQuestions from "./components/UploadQuestions";
import PlayQuiz from "./components/PlayQuiz";
import QuizFilter from "./components/QuizFilter";
import MCQQuiz from "./components/MCQQuiz";
import MCAQuiz from "./components/MCAQuiz";
import QuestionsDetails from "./components/QuestionsDetails";
import LoginOrRegister from "./components/LoginOrRegister";
import Register from "./components/Register";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Upload Questions" component={UploadQuestions} />
        {/* <Stack.Screen name="Play Quiz" component={PlayQuiz} /> */}
        <Stack.Screen name="Choose Type" component={QuizFilter} />
        <Stack.Screen name="MCQ Quiz" component={MCQQuiz} />
        <Stack.Screen name="MCA Quiz" component={MCAQuiz} />
        <Stack.Screen name="Questions" component={QuestionsDetails} />
        <Stack.Screen
          name="Login to your account"
          component={LoginOrRegister}
        />
        <Stack.Screen name="Create New Account" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
