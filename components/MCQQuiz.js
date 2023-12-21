import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Modal } from "react-native";
import { ThemedButton } from "react-native-really-awesome-button";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { RadioButton } from "react-native-paper";

export default function MCQQuiz() {
  const [question, setQuestion] = React.useState("");
  const [optionA, setOptionA] = React.useState("");
  const [optionB, setOptionB] = React.useState("");
  const [optionC, setOptionC] = React.useState("");
  const [optionD, setOptionD] = React.useState("");
  const [optAColor, setOptAColor] = React.useState("white");
  const [optBColor, setOptBColor] = React.useState("white");
  const [optCColor, setOptCColor] = React.useState("white");
  const [optDColor, setOptDColor] = React.useState("white");

  const [currentQues, setCurrentQues] = React.useState(0);
  const [totalQues, setTotalQues] = React.useState(0);
  const [lastQuestion, setLastQuestion] = React.useState(false);
  const [correctAnsCount, setCorrectAnsCount] = React.useState(0);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  let i = 0;

  const result = [
    {
      id: 1,
      question:
        "Which of the following option leads to the portability and security of Java?",
      optionA: "Bytecode is executed by JVM",
      optionB: "The applet makes the Java code secure and portable",
      optionC: "Use of exception handling",
      optionD: "Dynamic binding between objects",
      correctAnswer: "optionA",
    },
    {
      id: 2,
      question: "Which of the following is not a Java features?",
      optionA: "Dynamic",
      optionB: "Architecture Neutral",
      optionC: "Use of pointers",
      optionD: "Object-oriented",
      correctAnswer: "optionC",
    },
    {
      id: 3,
      question:
        "What is the return type of the hashCode() method in the Object class?",
      optionA: "Object",
      optionB: "int",
      optionC: "long",
      optionD: "void",
      correctAnswer: "optionB",
    },
  ];

  const optAPress = () => {
    if (result[currentQues].correctAnswer === "optionA") {
      setCorrectAnsCount(correctAnsCount + 1);
    }
    setOptAColor("yellow");
    setOptBColor("white");
    setOptCColor("white");
    setOptDColor("white");
    storedResult.set(currentQues, {
      optionA: "yellow",
      optionB: "white",
      optionC: "white",
      optionD: "white",
    });
    console.log(storedResult);
  };

  const optBPress = () => {
    if (result[currentQues].correctAnswer === "optionB") {
      setCorrectAnsCount(correctAnsCount + 1);
    }
    setOptAColor("white");
    setOptBColor("yellow");
    setOptCColor("white");
    setOptDColor("white");
    storedResult.set(currentQues, {
      optionA: "white",
      optionB: "yellow",
      optionC: "white",
      optionD: "white",
    });
    console.log(storedResult);
  };

  const optCPress = () => {
    if (result[currentQues].correctAnswer === "optionC") {
      setCorrectAnsCount(correctAnsCount + 1);
    }
    setOptAColor("white");
    setOptBColor("white");
    setOptCColor("yellow");
    setOptDColor("white");
    storedResult.set(currentQues, {
      optionA: "white",
      optionB: "white",
      optionC: "yellow",
      optionD: "white",
    });
    console.log(storedResult);
  };

  const optDPress = () => {
    if (result[currentQues].correctAnswer === "optionD") {
      setCorrectAnsCount(correctAnsCount + 1);
    }
    setOptAColor("white");
    setOptBColor("white");
    setOptCColor("white");
    setOptDColor("yellow");
    storedResult.set(currentQues, {
      optionA: "white",
      optionB: "white",
      optionC: "white",
      optionD: "yellow",
    });
    console.log(storedResult);
  };

  const getQuestions = () => {
    // const url = "http://localhost:8080/api/mcq/1";
    // let result = await fetch(url);
    // result = await result.json();

    // result = [
    //   {
    //     id: 1,
    //     question:
    //       "Which of the following option leads to the portability and security of Java?",
    //     optionA: "Bytecode is executed by JVM",
    //     optionB: "The applet makes the Java code secure and portable",
    //     optionC: "Use of exception handling",
    //     optionD: "Dynamic binding between objects",
    //     correctAnswer: "optionA",
    //   },
    //   {
    //     id: 2,
    //     question: "Which of the following is not a Java features?",
    //     optionA: "Dynamic",
    //     optionB: "Architecture Neutral",
    //     optionC: "Use of pointers",
    //     optionD: "Object-oriented",
    //     correctAnswer: "optionC",
    //   },
    //   {
    //     id: 3,
    //     question:
    //       "What is the return type of the hashCode() method in the Object class?",
    //     optionA: "Object",
    //     optionB: "int",
    //     optionC: "long",
    //     optionD: "void",
    //     correctAnswer: "optionB",
    //   },
    // ];

    setTotalQues(result.length);
    setQuestion(result[currentQues].question);
    setOptionA(result[currentQues].optionA);
    setOptionB(result[currentQues].optionB);
    setOptionC(result[currentQues].optionC);
    setOptionD(result[currentQues].optionD);
  };

  React.useEffect(() => {
    if (currentQues + 1 === result.length) {
      setLastQuestion(true);
    } else {
      setLastQuestion(false);
    }
    setQuestion(result[currentQues].question);
    setOptionA(result[currentQues].optionA);
    setOptionB(result[currentQues].optionB);
    setOptionC(result[currentQues].optionC);
    setOptionD(result[currentQues].optionD);
  }, [currentQues]);

  const nextPress = () => {
    setCurrentQues(currentQues + 1);
    setOptAColor("white");
    setOptBColor("white");
    setOptCColor("white");
    setOptDColor("white");
  };

  const prevPress = () => {
    setCurrentQues(currentQues - 1);
    setOptAColor("white");
    setOptBColor("white");
    setOptCColor("white");
    setOptDColor("white");
  };

  const submitPress = () => {
    setIsModalVisible(true);
  };

  React.useEffect(() => {
    getQuestions();
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: "white", width: "100%", height: "100%" }}
    >
      <Text>Progress Bar</Text>
      <Text style={{ fontWeight: "bold", fontSize: 40, marginHorizontal: 20 }}>
        Question {currentQues + 1}/{totalQues}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>
      <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>{question}</Text>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor={optAColor}
          textColor="black"
          width={"100%"}
          height={70}
          disabled={false}
          raiseLevel={5}
          onPress={optAPress}
        >
          {optionA}
        </ThemedButton>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor={optBColor}
          textColor="black"
          width={"100%"}
          height={70}
          disabled={false}
          raiseLevel={5}
          onPress={optBPress}
        >
          {optionB}
        </ThemedButton>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor={optCColor}
          textColor="black"
          width={"100%"}
          height={70}
          disabled={false}
          raiseLevel={5}
          onPress={optCPress}
        >
          {optionC}
        </ThemedButton>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor={optDColor}
          textColor="black"
          width={"100%"}
          height={70}
          disabled={false}
          raiseLevel={5}
          onPress={optDPress}
        >
          {optionD}
        </ThemedButton>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View style={{ marginHorizontal: 20, marginVertical: 100 }}>
          <ThemedButton
            name="bruce"
            type="primary"
            backgroundColor="blue"
            width={150}
            height={70}
            disabled={currentQues === 0 ? true : false}
            raiseLevel={5}
            onPress={prevPress}
          >
            PREVIOUS
          </ThemedButton>
        </View>
        <Modal transparent={true} visible={isModalVisible} animationType="fade">
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Quiz Completed !!!
              </Text>

              <Text style={{ fontSize: 20 }}>
                Your Score : {correctAnsCount}/{totalQues}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ThemedButton
                  name="bruce"
                  type="primary"
                  backgroundColor="green"
                  width={150}
                  disabled={false}
                  raiseLevel={5}
                  onPress={() => {
                    setIsModalVisible(false);
                  }}
                >
                  SUBMIT
                </ThemedButton>
              </View>
            </View>
          </View>
        </Modal>
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 100,
          }}
        >
          {lastQuestion ? (
            <ThemedButton
              name="bruce"
              type="primary"
              backgroundColor="green"
              width={150}
              height={70}
              raiseLevel={5}
              onPress={submitPress}
            >
              SUBMIT
            </ThemedButton>
          ) : (
            <ThemedButton
              name="bruce"
              type="primary"
              backgroundColor="green"
              width={150}
              height={70}
              raiseLevel={5}
              onPress={nextPress}
            >
              NEXT
            </ThemedButton>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    padding: 40,
    margin: 10,
    borderRadius: 5,
    shadowColor: "black",
    elevation: 5,
  },
});
