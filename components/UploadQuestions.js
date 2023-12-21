import React from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import MCQ from "./MCQ";
import MCA from "./MCA";

import DropDownPicker from "react-native-dropdown-picker";
import { ThemedButton } from "react-native-really-awesome-button";

import AddFile from "./AddFile";

export default function UploadQuestions() {
  const [isOpenType, setIsOpenType] = React.useState(false);
  const [currentValueType, setCurrentValueType] = React.useState("MCA");
  const [isOpenOpt, setIsOpenOpt] = React.useState(false);
  const [currentValueOpt, setCurrentValueOpt] = React.useState(2);
  const [question, setQuestion] = React.useState("");

  const [checkEnabled, setCheckEnabled] = React.useState(false);
  const [resetEnabled, setResetEnabled] = React.useState(false);

  const data = [
    { label: "Multiple Choice Question", value: "MCQ" },
    {
      label: "Multiple Correct Answer",
      value: "MCA",
    },
  ];

  const numOpt = [
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
  ];

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

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          marginTop: 20,
          maxHeight: "17%",
          zIndex: 2,
          marginHorizontal: 10,
        }}
      >
        <DropDownPicker
          items={data}
          open={isOpenType}
          setOpen={() => setIsOpenType(!isOpenType)}
          value={currentValueType}
          setValue={(val) => setCurrentValueType(val)}
          maxHeight={100}
          placeholder="Type of Quiz"
        />
      </View>

      <View>
        <TextInput
          style={{
            marginHorizontal: "5%",
            marginBottom: "2%",
            marginTop: "5%",
            backgroundColor: "white",
            minHeight: "15%",
          }}
          mode="outlined"
          label="Question"
          placeholder="Enter your question here"
          outlineColor="black"
          multiline
          activeOutlineColor="blue"
          value={question}
          onChangeText={(text) => setQuestion(text)}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <AddFile />
      </View>

      <View
        style={{
          width: "20%",
          marginTop: "2%",
          alignSelf: "flex-end",
          marginRight: "5%",
          zIndex: 2,
        }}
      >
        <DropDownPicker
          items={numOpt}
          open={isOpenOpt}
          setOpen={() => setIsOpenOpt(!isOpenOpt)}
          value={currentValueOpt}
          setValue={(val) => setCurrentValueOpt(val)}
          maxHeight={200}
          placeholder="Number of Option"
        />
      </View>
      <View>
        <MCA opt={currentValueOpt} type={currentValueType} />
      </View>

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

      <View style={{ marginHorizontal: 15, marginVertical: 15, marginTop: 20 }}>
        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor="green"
          width={400}
          // disabled={!checkEnabled}
          // onPress={submitQuestion}
          disabled={false}
          onPress={toggleModal}
          raiseLevel={5}
        >
          PREVIEW
        </ThemedButton>
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor="red"
          width={400}
          disabled={!resetEnabled}
          onPress={resetDetails}
          raiseLevel={5}
        >
          RESET
        </ThemedButton>
      </View>
    </SafeAreaView>
  );
}
