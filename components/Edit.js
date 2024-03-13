import React from "react";
import { View } from "react-native";
import { ThemedButton } from "react-native-really-awesome-button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function Edit() {
  return (
    <View>
      <ThemedButton
        name="bruce"
        type="primary"
        backgroundColor="blue"
        textColor="black"
        width={60}
        // height={70}
        disabled={false}
        raiseLevel={5}
        onPress={() => {
          console.log("video sent for edit");
        }}
      >
        <FontAwesomeIcon
          icon={faEdit}
          size={30}
          style={{
            color: "white",
            marginTop: -6,
            marginRight: -5,
          }}
        />
      </ThemedButton>
    </View>
  );
}

export default Edit;
