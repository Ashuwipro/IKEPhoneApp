import React from "react";
import { View, Text, FlatList, SafeAreaView, TextInput } from "react-native";
import AccordianItem from "./AccordianItem";

import Data from "./../assets/data.json";

function Uploaded() {
  const [text, setText] = React.useState("abc");
  // React.useEffect(() => {
  //   Data.push({ id: 6, question: "question 6", description: "description 6" });
  // }, []);
  //

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <AccordianItem title={item.question} body={item.description} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TextInput
        style={{
          marginRight: "5%",
          marginLeft: "5%",
          backgroundColor: "white",
          borderRadius: 5,
        }}
        mode="outlined"
        height={80}
        label="Option A"
        placeholder="Enter Option A"
        outlineColor="black"
        multiline
        activeOutlineColor="blue"
        value={text}
        onChangeText={(newText) => {
          setText(newText);
        }}
      />
    </SafeAreaView>
  );
}

export default Uploaded;
