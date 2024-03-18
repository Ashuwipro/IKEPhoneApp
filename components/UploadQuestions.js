import React from "react";
import {
  SafeAreaView,
  View,
  BackHandler,
  Alert,
  Dimensions,
  Modal,
  StyleSheet,
  Text,
} from "react-native";
import { TextInput } from "react-native-paper";
import MCA from "./MCA";
import { Image } from "expo-image";
import { Video, ResizeMode, Audio } from "expo-av";

import DropDownPicker from "react-native-dropdown-picker";
import { ThemedButton } from "react-native-really-awesome-button";
import AddFile from "./AddFile";

import { HeaderBackButton } from "@react-navigation/elements";
import PreviewModal from "./PreviewModal";

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

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [checkEnabled, setCheckEnabled] = React.useState(false);
  const [resetEnabled, setResetEnabled] = React.useState(false);

  const [childTrigger, setChildTrigger] = React.useState(0);
  const [fileAdded, setFileAdded] = React.useState(false);
  const [optionsAdded, setOptionsAdded] = React.useState(false);
  const [optArr, setOptArr] = React.useState(false);

  const [fileType, setFileType] = React.useState("");
  const [filePath, setFilePath] = React.useState({});

  const [display, setDisplay] = React.useState(true);

  const data = [
    { label: "Multiple Choice Question", value: "MCQ" },
    {
      label: "Multiple Correct Answer",
      value: "MCA",
    },
  ];

  const options = [
    ["OptionA", "Optiona"],
    ["OptionB", "Optionb"],
    ["OptionC", "Optionc"],
    ["OptionD", "Optiond"],
    ["OptionE", "Optione"],
  ];

  const fileChange = (path, type) => {
    setFilePath(path);
    setFileType(type);
    setFileAdded(true);
  };

  const fileRemove = () => {
    setFilePath({});
    setFileType("");
    setFileAdded(false);
  };

  const optionChange = () => {
    setOptionsAdded(true);
  };

  const optionEmpty = () => {
    setOptionsAdded(false);
  };

  const someOptChange = () => {
    setOptArr(true);
  };

  // const numOpt = [
  //   { label: 2, value: 2 },
  //   { label: 3, value: 3 },
  //   { label: 4, value: 4 },
  //   { label: 5, value: 5 },
  // ];

  React.useEffect(() => {
    if (question && fileAdded && optionsAdded) {
      setCheckEnabled(true);
    } else if (question || fileAdded || optArr) {
      setResetEnabled(true);
    } else {
      setResetEnabled(false);
      setCheckEnabled(false);
    }
  }, [question, fileAdded, optionsAdded, optArr]);

  const resetDetails = () => {
    setQuestion("");
    setChildTrigger((childTrigger) => childTrigger + 1);
    setResetEnabled(false);
    setOptionsAdded(false);
    setCheckEnabled(false);
    setOptArr(false);
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

      <AddFile
        fileChange={fileChange}
        childTrigger={childTrigger}
        display={changeDisplay}
        fileRemove={fileRemove}
      />

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
        <MCA
          optionChange={optionChange}
          optionEmpty={optionEmpty}
          childTrigger={childTrigger}
          opt={currentValueOpt}
          type={currentValueType}
          someOptChange={someOptChange}
        />
      </View>

      {isModalVisible && (
        <PreviewModal
          question={question}
          fileType={fileType}
          filePath={filePath}
          numOpt={currentValueOpt}
          type={currentValueType}
          opt={""}
          toggleModal={toggleModal}
        />
      )}

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
            disabled={!checkEnabled}
            // onPress={submitQuestion}
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
