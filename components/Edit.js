import React from "react";
import { View } from "react-native";
import { ThemedButton } from "react-native-really-awesome-button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { ImageEditor } from "expo-crop-image";

function Edit({ filePath, changeFilePath, type }) {
  const [openImageEdit, setOpenImageEdit] = React.useState(false);

  return (
    <View>
      {openImageEdit && (
        <ImageEditor
          imageUri={filePath}
          fixedAspectRatio={2 / 3}
          minimumCropDimensions={{
            width: 50,
            height: 50,
          }}
          onEditingCancel={() => {
            console.log("onEditingCancel");
          }}
          onEditingComplete={(image) => {
            changeFilePath(image.uri);
            setOpenImageEdit(false);
          }}
        />
      )}
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
          if (type === "image") {
            setOpenImageEdit(true);
          }
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
