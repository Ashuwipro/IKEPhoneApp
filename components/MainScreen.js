import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { ThemedButton } from "react-native-really-awesome-button";
import { TextInput } from "react-native-paper";
export default function MainScreen(props) {
  return (
    <SafeAreaView
      style={{ backgroundColor: "white", width: "100%", height: "100%" }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <ThemedButton
            name="bruce"
            type="primary"
            backgroundColor="green"
            width={150}
            height={150}
            disabled={false}
            raiseLevel={5}
            onPress={() => {
              props.navigation.navigate("Upload Questions");
            }}
          >
            UPLOAD QUESTIONS
          </ThemedButton>
        </View>
        {/* <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <ThemedButton
            name="bruce"
            type="primary"
            backgroundColor="blue"
            width={150}
            height={150}
            disabled={false}
            raiseLevel={5}
            onPress={() => {
              props.navigation.navigate("Play Quiz");
            }}
          >
            PLAY QUIZ
          </ThemedButton>
        </View> */}
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <ThemedButton
            name="bruce"
            type="primary"
            backgroundColor="blue"
            width={150}
            height={150}
            disabled={false}
            raiseLevel={5}
            onPress={() => {
              props.navigation.navigate("Choose Type");
            }}
          >
            PLAY QUIZ
          </ThemedButton>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <ThemedButton
            name="bruce"
            type="primary"
            backgroundColor="yellow"
            textColor="black"
            width={150}
            height={150}
            disabled={false}
            raiseLevel={5}
            onPress={() => {
              props.navigation.navigate("Questions");
            }}
          >
            Questions Details
          </ThemedButton>
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <ThemedButton
            name="bruce"
            type="primary"
            backgroundColor="red"
            textColor="black"
            width={150}
            height={150}
            disabled={false}
            raiseLevel={5}
            onPress={() => {
              props.navigation.navigate("Login to your account");
            }}
          >
            Login/Register
          </ThemedButton>
        </View>
      </View>
      {/* <View>
        {isEdit ? (
          <View>
            <Text>Hello</Text>
          </View>
        ) : (
          <View>
            <TextInput
              style={{
                marginRight: "5%",
                marginLeft: "5%",
                backgroundColor: "white",
              }}
              mode="outlined"
              label="Option A"
              placeholder="Enter Option A"
              outlineColor="black"
              multiline
              activeOutlineColor="blue"
              value="optionA"
            />
          </View>
        )}
      </View>
      <View>
        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor="blue"
          width={200}
          disabled={false}
          raiseLevel={5}
          onPress={() => {
            setIsEdit(!isEdit);
          }}
        >
          UPDATE
        </ThemedButton>
      </View> */}
    </SafeAreaView>
  );
}
