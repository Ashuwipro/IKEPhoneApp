import React from "react";
import {
  SafeAreaView,
  View,
  BackHandler,
  Alert,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import MCA from "./MCA";

import DropDownPicker from "react-native-dropdown-picker";
import { ThemedButton } from "react-native-really-awesome-button";
import AddFile from "./AddFile";

import { HeaderBackButton } from "@react-navigation/elements";
import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";

export default function UploadQuestions(props) {
  const [isOpenType, setIsOpenType] = React.useState(false);
  const [currentValueType, setCurrentValueType] = React.useState("MCA");
  const [isOpenOpt, setIsOpenOpt] = React.useState(false);
  const [currentValueOpt, setCurrentValueOpt] = React.useState(2);
  const [question, setQuestion] = React.useState("");
  const [numData, setNumData] = React.useState([
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
  ]);

  const [checkEnabled, setCheckEnabled] = React.useState(false);
  const [resetEnabled, setResetEnabled] = React.useState(false);

  const [childTrigger, setChildTrigger] = React.useState(0);

  const [display, setDisplay] = React.useState(true);

  const data = [
    { label: "Multiple Choice Question", value: "MCQ" },
    {
      label: "Multiple Correct Answer",
      value: "MCA",
    },
  ];

  // const numOpt = [
  //   { label: 2, value: 2 },
  //   { label: 3, value: 3 },
  //   { label: 4, value: 4 },
  //   { label: 5, value: 5 },
  // ];

  const resetDetails = () => {
    setQuestion("");
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
    setRBValue("");
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const changeDisplay = () => {
    console.log("upload question file width:=", windowWidth);
    console.log("upload question file height:=", windowHeight);
    setDisplay(!display);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  //handle deletion of file on pressing back button from header
  React.useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerLeft: (prop) => (
        <HeaderBackButton
          {...prop}
          style={{ marginLeft: 0 }}
          onPress={() => {
            setChildTrigger((childTrigger) => childTrigger + 1);
            props.navigation.navigate("Home");
          }}
        />
      ),
    });
  }, []);

  //handle deletion of file on pressing mobile back button
  React.useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "YES",
          onPress: () => {
            setChildTrigger((childTrigger) => childTrigger + 1);
            props.navigation.navigate("Home");
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          marginTop: "5%",
          zIndex: 5,
          marginHorizontal: "3%",
          display: display ? "block" : "none",
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
      <View
        style={{
          height: 150,
          marginTop: "5%",
          marginHorizontal: "3%",
          display: display ? "block" : "none",
        }}
      >
        <TextInput
          style={{
            backgroundColor: "white",
            minHeight: 140,
          }}
          mode="outlined"
          label="Question"
          placeholder="Enter your question here"
          outlineColor="black"
          numberOfLines={3}
          multiline
          activeOutlineColor="blue"
          value={question}
          onChangeText={(text) => {
            setQuestion(text);
          }}
        />
      </View>

      <AddFile childTrigger={childTrigger} display={changeDisplay} />

      <View
        style={{
          width: "20%",
          marginTop: "4%",
          alignSelf: "flex-end",
          marginRight: "4%",
          zIndex: 2,
          display: display ? "block" : "none",
        }}
      >
        <DropDownPicker
          items={numData}
          open={isOpenOpt}
          setOpen={() => setIsOpenOpt(!isOpenOpt)}
          value={currentValueOpt}
          setValue={(val) => setCurrentValueOpt(val)}
          maxHeight={200}
          closeOnBackPressed={true}
          placeholder="Number of option"
        />
      </View>

      <View style={{ display: display ? "block" : "none" }}>
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

      <View>
        <View
          style={{
            marginHorizontal: "3%",
            marginTop: "5%",
            display: display ? "block" : "none",
          }}
        >
          <ThemedButton
            name="bruce"
            type="primary"
            backgroundColor="green"
            width={"100%"}
            // disabled={!checkEnabled}
            // onPress={submitQuestion}
            disabled={false}
            onPress={toggleModal}
            raiseLevel={5}
          >
            PREVIEW
          </ThemedButton>
        </View>
        <View
          style={{
            marginHorizontal: "3%",
            marginTop: "5%",
            display: display ? "block" : "none",
          }}
        >
          <ThemedButton
            name="bruce"
            type="primary"
            backgroundColor="red"
            width={"100%"}
            disabled={!resetEnabled}
            onPress={resetDetails}
            raiseLevel={5}
          >
            RESET
          </ThemedButton>
        </View>
      </View>
    </SafeAreaView>
  );
}
