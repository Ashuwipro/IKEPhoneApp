import React from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { ThemedButton } from "react-native-really-awesome-button";

function QuizFilter(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState(null);

  const data = [
    { label: "MCQ", value: "MCQ" },
    {
      label: "MCA",
      value: "MCA",
    },
  ];

  return (
    <View>
      <View style={{ margin: 20, marginTop: 40 }}>
        <DropDownPicker
          items={data}
          open={isOpen}
          setOpen={() => setIsOpen(!isOpen)}
          value={currentValue}
          setValue={(val) => setCurrentValue(val)}
          maxHeight={200}
          autoScroll
          placeholder="Type of Quiz"
        />
      </View>

      <View style={{ marginTop: 100 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, alignSelf: "center" }}>
          Page for applying additional filters, more filters to be added
        </Text>
      </View>

      <View
        style={{
          marginTop: 200,
          marginHorizontal: 125,
          marginVertical: 20,
        }}
      >
        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor="blue"
          width={200}
          height={100}
          disabled={currentValue !== null ? false : true}
          raiseLevel={5}
          onPress={() => {
            props.navigation.navigate(currentValue + " Quiz");
          }}
        >
          START QUIZ
        </ThemedButton>
      </View>
    </View>
  );
}

export default QuizFilter;
