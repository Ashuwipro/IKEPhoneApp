import React, { useRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Animated,
  LayoutAnimation,
} from "react-native";
import { ThemedButton } from "react-native-really-awesome-button";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { toggleAnimation } from "./toggleAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function AccordianItem({ title, body }) {
  const [showContent, setShowContent] = React.useState(false);
  const [edit, setEdit] = React.useState(true);
  const [text, setText] = React.useState(body);

  const animationController = useRef(new Animated.Value(0)).current;

  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation);
    setShowContent(!showContent);
  };

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  return (
    <View style={style.container}>
      {/* <TouchableOpacity
        onPress={() => {
          toggleListItem();
        }}
      >
        <View style={style.titleContainer}>
          <Text style={style.title}>{title}</Text>
          <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
            <MaterialIcons name={"keyboard-arrow-right"} size={30} />
          </Animated.View>
        </View>
      </TouchableOpacity> */}
      {/* <View
        style={{
          marginTop: 10,
          marginHorizontal: 10,
          marginVertical: 20,
        }}
      > */}
      <ThemedButton
        name="bruce"
        type="primary"
        backgroundColor="blue"
        width={"100%"}
        height={75}
        disabled={false}
        raiseLevel={5}
        onPress={() => {
          toggleListItem();
        }}
      >
        <View style={style.titleContainer}>
          <Text style={style.title}>{title}</Text>
          <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
            <MaterialIcons
              name={"keyboard-arrow-right"}
              size={50}
              style={{ color: "white" }}
            />
          </Animated.View>
        </View>
      </ThemedButton>
      {/* </View> */}
      {showContent && (
        <View style={style.body}>
          {edit ? (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>{body}</Text>
              <TouchableOpacity
                onPress={() => {
                  setEdit(false);
                }}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </TouchableOpacity>
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
          <ThemedButton
            name="bruce"
            type="primary"
            backgroundColor="blue"
            width={200}
            disabled={false}
            raiseLevel={5}
            onPress={() => {
              setEdit(true);
            }}
          >
            UPDATE
          </ThemedButton>
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    padding: "2%",
    borderRadius: 12,
    backgroundColor: "white",
    marginBottom: "2%",
    overflow: "hidden",
  },
  title: {
    fontSize: 16,
    color: "#2d2d2d",
    fontWeight: "bold",
  },
  body: {
    paddingHorizontal: "2%",
    paddingVertical: "3%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default AccordianItem;
