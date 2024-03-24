import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ThemedButton } from "react-native-really-awesome-button";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { HeaderBackButton } from "@react-navigation/elements";

function ResultScreen(props) {
  React.useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerLeft: (prop) => (
        <HeaderBackButton {...prop} style={{ display: "none" }} />
      ),
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: 40,
          margin: 10,
        }}
      >
        <View style={{ alignSelf: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Quiz Completed !!!
          </Text>
        </View>

        <View style={{ alignSelf: "center", marginTop: 50 }}>
          <AnimatedCircularProgress
            size={300}
            width={15}
            fill={props.route.params.per}
            rotation={0}
            tintColor="green"
            lineCap="square"
            onAnimationComplete={() => console.log("onAnimationComplete")}
            backgroundColor="lightgray"
          />
        </View>

        <View
          style={{
            zIndex: 2,
            alignSelf: "center",
            marginTop: -200,
            marginLeft: 15,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 80 }}>
            {props.route.params.per}%
          </Text>
        </View>

        <View
          style={{
            marginTop: 200,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faCircleCheck}
              size={25}
              style={{ color: "green", marginBottom: 10 }}
            />
            <Text style={{ fontWeight: "bold", marginVertical: 5 }}>
              Correct
            </Text>
            <Text style={{ marginTop: 5, fontSize: 25 }}>
              {props.route.params.correctAnsCount}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faCircleXmark}
              size={25}
              style={{ color: "red", marginBottom: 10 }}
            />
            <Text style={{ fontWeight: "bold", marginVertical: 5 }}>
              Incorrect
            </Text>
            <Text style={{ marginTop: 5, fontSize: 25 }}>
              {props.route.params.incorrectAnsCount}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faCircle}
              size={25}
              style={{ color: "gray", marginBottom: 10 }}
            />
            <Text style={{ fontWeight: "bold", marginVertical: 5 }}>
              Skipped
            </Text>
            <Text style={{ marginTop: 5, fontSize: 25 }}>
              {props.route.params.skippedAnsCount}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ThemedButton
            name="bruce"
            type="secondary"
            backgroundColor="white"
            width={150}
            disabled={false}
            raiseLevel={5}
            onPress={() => props.navigation.navigate("Home")}
          >
            HOME
          </ThemedButton>
          <ThemedButton
            name="bruce"
            type="primary"
            backgroundColor="green"
            width={150}
            disabled={false}
            raiseLevel={5}
            onPress={() => props.navigation.navigate("Review")}
          >
            REVIEW
          </ThemedButton>
        </View>
      </View>
    </View>
  );
}

export default ResultScreen;
