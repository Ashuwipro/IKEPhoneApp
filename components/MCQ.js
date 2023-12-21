import React from "react";
import { TextInput, RadioButton } from "react-native-paper";
import { SafeAreaView, View, StyleSheet, Text, Modal } from "react-native";
import { ThemedButton } from "react-native-really-awesome-button";
import AddFile from "./AddFile";

function MCQ(props) {
  const [question, setQuestion] = React.useState("");
  const [optionA, setOptionA] = React.useState("");
  const [optionB, setOptionB] = React.useState("");
  const [optionC, setOptionC] = React.useState("");
  const [optionD, setOptionD] = React.useState("");
  const [rbValue, setRBValue] = React.useState("");
  const [checkEnabled, setCheckEnabled] = React.useState(false);
  const [resetEnabled, setResetEnabled] = React.useState(false);
  const [opCheck, setOpCheck] = React.useState(0.3);
  const [opReset, setOpReset] = React.useState(0.3);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [numOpt, setNumOpt] = React.useState(new Array(props.opt).fill(1));

  React.useEffect(() => {
    setNumOpt(new Array(props.opt).fill(1));
  }, [props.opt]);

  const printDetails = () =>
    console.log({
      question: question,
      optionA: optionA,
      optionB: optionB,
      optionC: optionC,
      optionD: optionD,
      correctOption: rbValue,
    });

  const resetDetails = () => {
    setQuestion("");
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
    setRBValue("");
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  React.useEffect(() => {
    if (question && optionA && optionB && optionC && optionD && rbValue) {
      setCheckEnabled(true);
      setOpCheck(1);
    } else {
      if (optionA === "" && rbValue === "OptionA") setRBValue("");
      if (optionB === "" && rbValue === "OptionB") setRBValue("");
      if (optionC === "" && rbValue === "OptionC") setRBValue("");
      if (optionD === "" && rbValue === "OptionD") setRBValue("");
      setCheckEnabled(false);
      setOpCheck(0.3);
    }

    if (question || optionA || optionB || optionC || optionD || rbValue) {
      setResetEnabled(true);
      setOpReset(1);
    } else {
      setResetEnabled(false);
      setOpReset(0.3);
    }
  }, [question, optionA, optionB, optionC, optionD, rbValue]);

  const submitQuestion = async () => {
    const data = {
      question: question,
      optionA: optionA,
      optionB: optionB,
      optionC: optionC,
      optionD: optionD,
      correctAnswer: rbValue,
    };
    const url = "http://localhost:8080/api/mcq";
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <RadioButton.Group
      onValueChange={(newValue) => setRBValue(newValue)}
      value={rbValue}
    >
      <SafeAreaView style={{ backgroundColor: "white" }}>
        {numOpt &&
          numOpt.map((item) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <View style={{ marginLeft: "5%", marginVertical: "5%" }}>
                <RadioButton.Android
                  value="OptionA"
                  backgroundColor="white"
                  color="blue"
                  disabled={optionA === "" ? true : false}
                />
              </View>
              <TextInput
                style={style.optionInput}
                mode="outlined"
                label="Option A"
                placeholder="Enter Option A"
                outlineColor="black"
                multiline
                activeOutlineColor="blue"
                value={optionA}
                onChangeText={(text) => setOptionA(text)}
              />
            </View>
          ))}
        {/* <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: 5,
          }}
        >
          <View style={{ marginLeft: "5%", marginVertical: "5%" }}>
            <RadioButton.Android
              value="OptionB"
              backgroundColor="white"
              color="blue"
              disabled={optionB === "" ? true : false}
            />
          </View>
          <TextInput
            style={style.optionInput}
            mode="outlined"
            label="Option B"
            placeholder="Enter Option B"
            outlineColor="black"
            multiline
            activeOutlineColor="blue"
            value={optionB}
            onChangeText={(text) => setOptionB(text)}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: 5,
          }}
        >
          <View style={{ marginLeft: "5%", marginVertical: "5%" }}>
            <RadioButton.Android
              value="OptionC"
              backgroundColor="white"
              color="blue"
              disabled={optionC === "" ? true : false}
            />
          </View>
          <TextInput
            style={style.optionInput}
            mode="outlined"
            label="Option C"
            placeholder="Enter Option C"
            outlineColor="black"
            multiline
            activeOutlineColor="blue"
            value={optionC}
            onChangeText={(text) => setOptionC(text)}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: 5,
          }}
        >
          <View style={{ marginLeft: "5%", marginVertical: "5%" }}>
            <RadioButton.Android
              value="OptionD"
              backgroundColor="white"
              color="blue"
              disabled={optionD === "" ? true : false}
            />
          </View>
          <TextInput
            style={style.optionInput}
            mode="outlined"
            label="Option D"
            placeholder="Enter Option D"
            outlineColor="black"
            multiline
            activeOutlineColor="blue"
            value={optionD}
            onChangeText={(text) => setOptionD(text)}
          />
        </View> */}

        {/* <Modal transparent={true} visible={isModalVisible} animationType="fade">
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Question : {question}
              </Text>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                }}
              ></View>
              <Text style={{ fontSize: 20 }}>Option A : {optionA}</Text>
              <Text style={{ fontSize: 20 }}>Option B : {optionB}</Text>
              <Text style={{ fontSize: 20 }}>Option C : {optionC}</Text>
              <Text style={{ fontSize: 20 }}>Option D : {optionD}</Text>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                }}
              ></View>
              <Text style={{ fontSize: 20 }}>Correct Answer : {rbValue}</Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ThemedButton
                  name="bruce"
                  type="primary"
                  backgroundColor="red"
                  width={150}
                  disabled={false}
                  raiseLevel={5}
                  onPress={toggleModal}
                >
                  CANCEL
                </ThemedButton>
                <ThemedButton
                  name="bruce"
                  type="primary"
                  backgroundColor="green"
                  width={150}
                  disabled={false}
                  raiseLevel={5}
                  onPress={toggleModal}
                >
                  SUBMIT
                </ThemedButton>
              </View>
            </View>
          </View>
        </Modal> */}
      </SafeAreaView>
    </RadioButton.Group>
  );
}

const style = StyleSheet.create({
  questionInput: {
    marginHorizontal: "5%",
    marginBottom: "2%",
    marginTop: "20%",
    backgroundColor: "white",
    minHeight: "15%",
  },
  optionInput: {
    marginRight: "5%",
    marginLeft: "5%",
    backgroundColor: "white",
    flex: 1.5,
  },
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

export default MCQ;
