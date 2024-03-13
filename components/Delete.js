import React from "react";
import { View } from "react-native";
import { ThemedButton } from "react-native-really-awesome-button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Delete({ deleteResource, type }) {
  return (
    <View>
      <ThemedButton
        name="bruce"
        type="primary"
        backgroundColor="red"
        textColor="black"
        width={60}
        // height={70}
        disabled={false}
        raiseLevel={5}
        onPress={() => deleteResource(type)}
      >
        <FontAwesomeIcon
          icon={faTrash}
          size={28}
          style={{
            color: "white",
            marginTop: -4,
            marginRight: -3,
          }}
        />
      </ThemedButton>
    </View>
  );
}

export default Delete;
