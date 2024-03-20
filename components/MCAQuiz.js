import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Modal } from "react-native";
import { ThemedButton } from "react-native-really-awesome-button";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { Checkbox, RadioButton } from "react-native-paper";
import * as Progress from "react-native-progress";
// import { Data as result } from "./../assets/data.json";

export default function MCAQuiz() {
  function myFunc(count) {
    var arr = new Array(count);
    for (x = 0; x < count; x++) {
      arr[x] = x;
    }
    return arr;
  }

  const result = [
    // {
    //   id: 1,
    //   question:
    //     "Which of the following option leads to the portability and security of Java?",
    //   optionA: "Bytecode is executed by JVM",
    //   optionB: "The applet makes the Java code secure and portable",
    //   // optionC: "Use of exception handling",
    //   // optionD: "Dynamic binding between objects",
    //   correctAnswer: ["optionA", "optionB"],
    //   type: "MCA",
    //   numOpt: 2,
    // },
    // {
    //   id: 2,
    //   question: "Which of the following is not a Java features?",
    //   optionA: "Dynamic",
    //   optionB: "Architecture Neutral",
    //   optionC: "Use of pointers",
    //   // optionD: "Object-oriented",
    //   correctAnswer: ["optionB", "optionC"],
    //   type: "MCA",
    //   numOpt: 3,
    // },
    // {
    //   id: 3,
    //   question:
    //     "What is the return type of the hashCode() method in the Object class?",
    //   optionA: "Object",
    //   optionB: "int",
    //   optionC: "long",
    //   optionD: "void",
    //   correctAnswer: ["optionC", "optionD"],
    //   type: "MCA",
    //   numOpt: 4,
    // },
    {
      id: 4,
      question:
        "Which of the following option leads to the portability and security of Java?",
      optionA: "Bytecode is executed by JVM",
      optionB:
        "The applet makes the Java code secure and portable and the the cnde s andjkekdfkjdjgjfk adgjkds agsjn afjnvjdvfjn gjkgkjskgs afjdnnfbj sdfgjvndvjxjfdjdf fsjbgjdfxv fsbeednvj dfjngjks",
      // optionC: "Use of exception handling",
      // optionD: "Dynamic binding between objects",
      correctAnswer: ["optionA"],
      type: "MCQ",
      numOpt: 2,
    },
    {
      id: 5,
      question: "Which of the following is not a Java features?",
      optionA: "Dynamic",
      optionB: "Architecture Neutral",
      optionC: "Use of pointers",
      // optionD: "Object-oriented",
      correctAnswer: ["optionB"],
      type: "MCQ",
      numOpt: 3,
    },
    {
      id: 6,
      question:
        "What is the return type of the hashCode() method in the Object class?",
      optionA: "Object",
      optionB: "int",
      optionC: "long",
      optionD: "void",
      correctAnswer: ["optionC"],
      type: "MCQ",
      numOpt: 4,
    },
  ];

  const [question, setQuestion] = React.useState("");
  const [optionA, setOptionA] = React.useState("");
  const [optionB, setOptionB] = React.useState("");
  const [optionC, setOptionC] = React.useState("");
  const [optionD, setOptionD] = React.useState("");
  const [optionE, setOptionE] = React.useState("");
  const [optAColor, setOptAColor] = React.useState("white");
  const [optBColor, setOptBColor] = React.useState("white");
  const [optCColor, setOptCColor] = React.useState("white");
  const [optDColor, setOptDColor] = React.useState("white");
  const [optEColor, setOptEColor] = React.useState("white");
  const [optionARaise, setOptionARaise] = React.useState(5);
  const [optionBRaise, setOptionBRaise] = React.useState(5);
  const [optionCRaise, setOptionCRaise] = React.useState(5);
  const [optionDRaise, setOptionDRaise] = React.useState(5);
  const [optionERaise, setOptionERaise] = React.useState(5);

  const [currentQues, setCurrentQues] = React.useState(0);
  const [totalQues, setTotalQues] = React.useState(0);
  const [lastQuestion, setLastQuestion] = React.useState(false);
  const [correctAnsCount, setCorrectAnsCount] = React.useState(0);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [tempArray, setTempArray] = React.useState([]);
  const [array, setArray] = React.useState([]);

  const [progress, setProgress] = React.useState(0);
  const [numOpt, setNumOpt] = React.useState(
    myFunc(result[currentQues]["numOpt"])
  );
  const [display, setDisplay] = React.useState(false);

  const [heightA, setHeightA] = React.useState(0);
  const [heightB, setHeightB] = React.useState(0);
  const [heightC, setHeightC] = React.useState(0);
  const [heightD, setHeightD] = React.useState(0);
  const [heightE, setHeightE] = React.useState(0);

  let i = 0;

  function compare(a1, a2) {
    if (a1.length === a2.length) {
      a1.sort();
      a2.sort();
      for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  const optAPress = () => {
    if (result[currentQues].type === "MCQ") {
      tempArray.push("optionA");
      if (tempArray.includes("optionB")) {
        tempArray.splice(tempArray.indexOf("optionB"), 1);
      }
      if (tempArray.includes("optionC")) {
        tempArray.splice(tempArray.indexOf("optionC"), 1);
      }
      if (tempArray.includes("optionD")) {
        tempArray.splice(tempArray.indexOf("optionD"), 1);
      }
      if (tempArray.includes("optionE")) {
        tempArray.splice(tempArray.indexOf("optionE"), 1);
      }
      setOptAColor("yellow");
      setOptBColor("white");
      setOptCColor("white");
      setOptDColor("white");
      setOptEColor("white");
    } else {
      if (tempArray.includes("optionA")) {
        tempArray.splice(tempArray.indexOf("optionA"), 1);
      } else {
        tempArray.push("optionA");
      }
      if (tempArray.includes("optionA")) {
        setOptAColor("yellow");
      } else {
        setOptAColor("white");
      }
    }
    console.log("TempArray:=", tempArray);
  };

  const optBPress = () => {
    if (result[currentQues].type === "MCQ") {
      tempArray.push("optionB");
      if (tempArray.includes("optionA")) {
        tempArray.splice(tempArray.indexOf("optionA"), 1);
      }
      if (tempArray.includes("optionC")) {
        tempArray.splice(tempArray.indexOf("optionC"), 1);
      }
      if (tempArray.includes("optionD")) {
        tempArray.splice(tempArray.indexOf("optionD"), 1);
      }
      if (tempArray.includes("optionE")) {
        tempArray.splice(tempArray.indexOf("optionE"), 1);
      }
      setOptAColor("white");
      setOptBColor("yellow");
      setOptCColor("white");
      setOptDColor("white");
      setOptEColor("white");
    } else {
      if (tempArray.includes("optionB")) {
        tempArray.splice(tempArray.indexOf("optionB"), 1);
      } else {
        tempArray.push("optionB");
      }
      if (tempArray.includes("optionB")) {
        setOptBColor("yellow");
      } else {
        setOptBColor("white");
      }
    }
    console.log("TempArray:=", tempArray);
  };

  const optCPress = () => {
    if (result[currentQues].type === "MCQ") {
      tempArray.push("optionC");
      if (tempArray.includes("optionA")) {
        tempArray.splice(tempArray.indexOf("optionA"), 1);
      }
      if (tempArray.includes("optionB")) {
        tempArray.splice(tempArray.indexOf("optionB"), 1);
      }
      if (tempArray.includes("optionD")) {
        tempArray.splice(tempArray.indexOf("optionD"), 1);
      }
      if (tempArray.includes("optionE")) {
        tempArray.splice(tempArray.indexOf("optionE"), 1);
      }
      setOptAColor("white");
      setOptBColor("white");
      setOptCColor("yellow");
      setOptDColor("white");
      setOptEColor("white");
    } else {
      if (tempArray.includes("optionC")) {
        tempArray.splice(tempArray.indexOf("optionC"), 1);
      } else {
        tempArray.push("optionC");
      }
      if (tempArray.includes("optionC")) {
        setOptCColor("yellow");
      } else {
        setOptCColor("white");
      }
    }
    console.log("TempArray:=", tempArray);
  };

  const optDPress = () => {
    if (result[currentQues].type === "MCQ") {
      tempArray.push("optionD");
      if (tempArray.includes("optionA")) {
        tempArray.splice(tempArray.indexOf("optionA"), 1);
      }
      if (tempArray.includes("optionB")) {
        tempArray.splice(tempArray.indexOf("optionB"), 1);
      }
      if (tempArray.includes("optionC")) {
        tempArray.splice(tempArray.indexOf("optionC"), 1);
      }
      if (tempArray.includes("optionE")) {
        tempArray.splice(tempArray.indexOf("optionE"), 1);
      }
      setOptAColor("white");
      setOptBColor("white");
      setOptCColor("white");
      setOptDColor("yellow");
      setOptEColor("white");
    } else {
      if (tempArray.includes("optionD")) {
        tempArray.splice(tempArray.indexOf("optionD"), 1);
      } else {
        tempArray.push("optionD");
      }
      if (tempArray.includes("optionD")) {
        setOptDColor("yellow");
      } else {
        setOptDColor("white");
      }
    }
    console.log("TempArray:=", tempArray);
  };

  const optEPress = () => {
    if (result[currentQues].type === "MCQ") {
      tempArray.push("optionE");
      if (tempArray.includes("optionA")) {
        tempArray.splice(tempArray.indexOf("optionA"), 1);
      }
      if (tempArray.includes("optionB")) {
        tempArray.splice(tempArray.indexOf("optionB"), 1);
      }
      if (tempArray.includes("optionC")) {
        tempArray.splice(tempArray.indexOf("optionC"), 1);
      }
      if (tempArray.includes("optionD")) {
        tempArray.splice(tempArray.indexOf("optionD"), 1);
      }
      setOptAColor("white");
      setOptBColor("white");
      setOptCColor("white");
      setOptDColor("white");
      setOptEColor("yellow");
    } else {
      if (tempArray.includes("optionE")) {
        tempArray.splice(tempArray.indexOf("optionE"), 1);
      } else {
        tempArray.push("optionE");
      }
      if (tempArray.includes("optionE")) {
        setOptEColor("yellow");
      } else {
        setOptEColor("white");
      }
    }
    console.log("TempArray:=", tempArray);
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
    const timer = setTimeout(() => {
      setDisplay(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
    setNumOpt(myFunc(result[currentQues]["numOpt"]));
  }, [currentQues]);

  const nextPress = () => {
    setDisplay(false);
    if (compare(result[currentQues].correctAnswer, tempArray)) {
      setCorrectAnsCount(correctAnsCount + 1);
    }
    setTempArray([]);
    setCurrentQues(currentQues + 1);
    setProgress(progress + 1 / totalQues);
    setOptAColor("white");
    setOptBColor("white");
    setOptCColor("white");
    setOptDColor("white");
    const timer = setTimeout(() => {
      setDisplay(true);
    }, 500);
    return () => clearTimeout(timer);
  };

  const prevPress = () => {
    setDisplay(false);
    setCurrentQues(currentQues - 1);
    setProgress(progress - 1 / totalQues);
    setOptAColor("white");
    setOptBColor("white");
    setOptCColor("white");
    setOptDColor("white");
    const timer = setTimeout(() => {
      setDisplay(true);
    }, 500);
    return () => clearTimeout(timer);
  };

  const submitPress = () => {
    setProgress(progress + 1 / totalQues);
    if (compare(result[currentQues].correctAnswer, tempArray)) {
      setCorrectAnsCount(correctAnsCount + 1);
    }
    setIsModalVisible(true);
  };

  React.useEffect(() => {
    getQuestions();
  }, []);

  const Opt = [
    [optAColor, optAPress, "optionA", optionA, heightA, setHeightA],
    [optBColor, optBPress, "optionB", optionB, heightB, setHeightB],
    [optCColor, optCPress, "optionC", optionC, heightC, setHeightC],
    [optDColor, optDPress, "optionD", optionD, heightD, setHeightD],
    [optEColor, optEPress, "optionE", optionE, heightE, setHeightE],
  ];

  return (
    <SafeAreaView
      style={{ backgroundColor: "white", width: "100%", height: "100%" }}
    >
      <View style={{ marginVertical: 30, marginHorizontal: "5%" }}>
        <Progress.Bar
          width={390}
          progress={progress}
          height={15}
          borderRadius={5}
          color="blue"
          unfilledColor="yellow"
        />
      </View>
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

      {numOpt &&
        numOpt.map((item) => (
          <View key={item} style={{ marginHorizontal: "4%", marginTop: "5%" }}>
            {display && (
              <ThemedButton
                name="bruce"
                type="primary"
                backgroundColor={Opt[item][0]}
                textColor="black"
                width={"100%"}
                height={Opt[item][4]}
                disabled={false}
                raiseLevel={5}
                onPress={Opt[item][1]}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    display: "flex",
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      marginVertical: "3%",
                    }}
                  >
                    {result[currentQues].type === "MCQ" ? (
                      <RadioButton.Android
                        backgroundColor={
                          tempArray.includes(Opt[item][2]) ? "yellow" : "white"
                        }
                        color="blue"
                        status={
                          tempArray.includes(Opt[item][2])
                            ? "checked"
                            : "unchecked"
                        }
                      />
                    ) : (
                      <Checkbox.Android
                        status={
                          tempArray.includes(Opt[item][2])
                            ? "checked"
                            : "unchecked"
                        }
                        onPress={() => {
                          console.log("optionA pressed");
                        }}
                        backgroundColor={
                          tempArray.includes(Opt[item][2]) ? "yellow" : "white"
                        }
                        color="blue"
                      />
                    )}
                  </View>
                  <View
                    style={{
                      marginVertical: "5%",
                      marginRight: "15%",
                      marginLeft: "2%",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        textAlign: "justify",
                      }}
                    >
                      {Opt[item][3]}
                    </Text>
                  </View>
                </View>
              </ThemedButton>
            )}
            {!display && (
              <View
                onLayout={(event) => {
                  if (event.nativeEvent.layout.height > 80) {
                    Opt[item][5](event.nativeEvent.layout.height);
                  } else {
                    Opt[item][5](80);
                  }
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 2,
                }}
              >
                <View
                  style={{
                    marginVertical: "3%",
                  }}
                >
                  {result[currentQues].type === "MCQ" ? (
                    <RadioButton.Android
                      backgroundColor={
                        tempArray.includes(Opt[item][2]) ? "yellow" : "white"
                      }
                      color="blue"
                      status={
                        tempArray.includes(Opt[item][2])
                          ? "checked"
                          : "unchecked"
                      }
                    />
                  ) : (
                    <Checkbox.Android
                      status={
                        tempArray.includes(Opt[item][2])
                          ? "checked"
                          : "unchecked"
                      }
                      onPress={() => {
                        console.log("optionA pressed");
                      }}
                      backgroundColor={
                        tempArray.includes(Opt[item][2]) ? "yellow" : "white"
                      }
                      color="blue"
                    />
                  )}
                </View>
                <View
                  style={{
                    marginVertical: "5%",
                    marginRight: "15%",
                    marginLeft: "2%",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      textAlign: "justify",
                    }}
                  >
                    {Opt[item][3]}
                  </Text>
                </View>
              </View>
            )}
          </View>
        ))}

      {/* <View style={{ marginHorizontal: 20, marginTop: 20 }}>
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
          {result[currentQues].type === "MCQ" ? (
            <RadioButton.Android
              backgroundColor={
                tempArray.includes("optionB") ? "yellow" : "white"
              }
              color="blue"
              status={tempArray.includes("optionB") ? "checked" : "unchecked"}
            />
          ) : (
            <Checkbox.Android
              status={tempArray.includes("optionB") ? "checked" : "unchecked"}
              onPress={() => {
                console.log("optionB pressed");
              }}
              backgroundColor={
                tempArray.includes("optionB") ? "yellow" : "white"
              }
              color="blue"
            />
          )}
          <Text style={{ fontWeight: "bold" }}>{optionB}</Text>
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
          {result[currentQues].type === "MCQ" ? (
            <RadioButton.Android
              backgroundColor={
                tempArray.includes("optionC") ? "yellow" : "white"
              }
              color="blue"
              status={tempArray.includes("optionC") ? "checked" : "unchecked"}
            />
          ) : (
            <Checkbox.Android
              status={tempArray.includes("optionC") ? "checked" : "unchecked"}
              onPress={() => {
                console.log("optionC pressed");
              }}
              backgroundColor={
                tempArray.includes("optionC") ? "yellow" : "white"
              }
              color="blue"
            />
          )}
          <Text style={{ fontWeight: "bold" }}>{optionC}</Text>
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
          {result[currentQues].type === "MCQ" ? (
            <RadioButton.Android
              backgroundColor={
                tempArray.includes("optionD") ? "yellow" : "white"
              }
              color="blue"
              status={tempArray.includes("optionD") ? "checked" : "unchecked"}
            />
          ) : (
            <Checkbox.Android
              status={tempArray.includes("optionD") ? "checked" : "unchecked"}
              onPress={() => {
                console.log("optionD pressed");
              }}
              backgroundColor={
                tempArray.includes("optionD") ? "yellow" : "white"
              }
              color="blue"
            />
          )}
          <Text style={{ fontWeight: "bold" }}>{optionD}</Text>
        </ThemedButton>
      </View> */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View style={{ marginHorizontal: 20, marginVertical: 50 }}>
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
            marginVertical: 50,
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
