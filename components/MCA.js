import React from "react";
import { TextInput, Checkbox, RadioButton } from "react-native-paper";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { ThemedButton } from "react-native-really-awesome-button";

function MCA(props) {
  function myFunc(count) {
    var arr = new Array(count);
    for (x = 0; x < count; x++) {
      arr[x] = x;
    }
    return arr;
  }

  const [optionA, setOptionA] = React.useState("");
  const [optionB, setOptionB] = React.useState("");
  const [optionC, setOptionC] = React.useState("");
  const [optionD, setOptionD] = React.useState("");
  const [optionE, setOptionE] = React.useState("");

  const [optAchecked, setOptAchecked] = React.useState(false);
  const [optBchecked, setOptBchecked] = React.useState(false);
  const [optCchecked, setOptCchecked] = React.useState(false);
  const [optDchecked, setOptDchecked] = React.useState(false);
  const [optEchecked, setOptEchecked] = React.useState(false);

  const [correctAns, setCorrectAns] = React.useState([]);
  const [rbValue, setRBValue] = React.useState("");

  const [opCheck, setOpCheck] = React.useState(0.3);
  const [opReset, setOpReset] = React.useState(0.3);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const [numOpt, setNumOpt] = React.useState(myFunc(props.opt));

  const Opt = [
    [
      optionA,
      (text) => {
        setOptionA(text);
      },
      "Option A",
      optAchecked,
      () => {
        setOptAchecked(!optAchecked);
      },
      "OptionA",
    ],
    [
      optionB,
      (text) => {
        setOptionB(text);
      },
      "Option B",
      optBchecked,
      () => {
        setOptBchecked(!optBchecked);
      },
      "OptionB",
    ],
    [
      optionC,
      (text) => {
        setOptionC(text);
      },
      "Option C",
      optCchecked,
      () => {
        setOptCchecked(!optCchecked);
      },
      "OptionC",
    ],
    [
      optionD,
      (text) => {
        setOptionD(text);
      },
      "Option D",
      optDchecked,
      () => {
        setOptDchecked(!optDchecked);
      },
      "OptionD",
    ],
    [
      optionE,
      (text) => {
        setOptionE(text);
      },
      "Option E",
      optEchecked,
      () => {
        setOptEchecked(!optEchecked);
      },
      "OptionE",
    ],
  ];

  React.useEffect(() => {
    setNumOpt(myFunc(props.opt));
  }, [props.opt]);

  React.useEffect(() => {
    console.log(correctAns);
  }, [correctAns]);

  React.useEffect(() => {
    if (optAchecked) {
      setCorrectAns([...correctAns, "optionA"]);
    } else {
      setCorrectAns(correctAns.filter((item) => item != "optionA"));
    }
  }, [optAchecked]);

  React.useEffect(() => {
    if (optBchecked) {
      setCorrectAns([...correctAns, "optionB"]);
    } else {
      setCorrectAns(correctAns.filter((item) => item != "optionB"));
    }
  }, [optBchecked]);

  React.useEffect(() => {
    if (optCchecked) {
      setCorrectAns([...correctAns, "optionC"]);
    } else {
      setCorrectAns(correctAns.filter((item) => item != "optionC"));
    }
  }, [optCchecked]);

  React.useEffect(() => {
    if (optDchecked) {
      setCorrectAns([...correctAns, "optionD"]);
    } else {
      setCorrectAns(correctAns.filter((item) => item != "optionD"));
    }
  }, [optDchecked]);

  React.useEffect(() => {
    if (optEchecked) {
      setCorrectAns([...correctAns, "optionE"]);
    } else {
      setCorrectAns(correctAns.filter((item) => item != "optionE"));
    }
  }, [optEchecked]);

  // const isCheckedA = () => {
  //   setOptAchecked(!optAchecked);
  // };

  // const isCheckedB = () => {
  //   setOptBchecked(!optBchecked);
  // };

  // const isCheckedC = () => {
  //   setOptCchecked(!optCchecked);
  // };

  // const isCheckedD = () => {
  //   setOptDchecked(!optDchecked);
  // };

  // const isCheckedE = () => {
  //   setOptEchecked(!optEchecked);
  // };

  // React.useEffect(() => {
  //   if (question && optionA && optionB && optionC && optionD && rbValue) {
  //     setCheckEnabled(true);
  //     setOpCheck(1);
  //   } else {
  //     if (optionA === "" && rbValue === "OptionA") setRBValue("");
  //     if (optionB === "" && rbValue === "OptionB") setRBValue("");
  //     if (optionC === "" && rbValue === "OptionC") setRBValue("");
  //     if (optionD === "" && rbValue === "OptionD") setRBValue("");
  //     setCheckEnabled(false);
  //     setOpCheck(0.3);
  //   }

  //   if (question || optionA || optionB || optionC || optionD || rbValue) {
  //     setResetEnabled(true);
  //     setOpReset(1);
  //   } else {
  //     setResetEnabled(false);
  //     setOpReset(0.3);
  //   }
  // }, [question, optionA, optionB, optionC, optionD]);

  return (
    <RadioButton.Group
      onValueChange={(newValue) => setRBValue(newValue)}
      value={rbValue}
    >
      <SafeAreaView style={{ backgroundColor: "white" }}>
        {numOpt &&
          numOpt.map((item) => (
            <View
              key={item}
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <View style={{ marginLeft: "5%", marginVertical: "5%" }}>
                {props.type && props.type === "MCA" ? (
                  <Checkbox.Android
                    status={Opt[item][3] ? "checked" : "unchecked"}
                    onPress={Opt[item][4]}
                    backgroundColor="white"
                    color="blue"
                    disabled={Opt[item][0] === "" ? true : false}
                  />
                ) : (
                  <RadioButton.Android
                    value={Opt[item][5]}
                    backgroundColor="white"
                    color="blue"
                    disabled={Opt[item][0] === "" ? true : false}
                  />
                )}
              </View>
              <TextInput
                style={style.optionInput}
                mode="outlined"
                label={Opt[item][2]}
                placeholder={`Enter ${Opt[item][2]}`}
                outlineColor="black"
                multiline
                activeOutlineColor="blue"
                value={Opt[item][0]}
                onChangeText={Opt[item][1]}
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
          <Checkbox.Android
            status={optBchecked ? "checked" : "unchecked"}
            onPress={isCheckedB}
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
          <Checkbox.Android
            status={optCchecked ? "checked" : "unchecked"}
            onPress={isCheckedC}
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
          <Checkbox.Android
            status={optDchecked ? "checked" : "unchecked"}
            onPress={isCheckedD}
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
      </SafeAreaView>
    </RadioButton.Group>
  );
}

const style = StyleSheet.create({
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

export default MCA;
