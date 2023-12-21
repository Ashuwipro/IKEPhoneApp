import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faFileLines,
  faImage,
  faMusic,
  faVideo,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { ThemedButton } from "react-native-really-awesome-button";
import * as DocumentPicker from "expo-document-picker";

import { launchImageLibrary } from "react-native-image-picker";
// import VideoPlayer from "react-native-video-player";

function AddFile() {
  const [fileNotAdded, setFileNotAdded] = React.useState(true);
  const [audioFileAdded, setAudioFileAdded] = React.useState(false);
  const [videoFileAdded, setVideoFileAdded] = React.useState(false);
  const [imageFileAdded, setImageFileAdded] = React.useState(false);
  const [textInputAdded, setTextInputAdded] = React.useState(false);

  const audioButtonPressed = () => {
    setFileNotAdded(false);
    setAudioFileAdded(true);
  };

  const videoButtonPressed = () => {
    setFileNotAdded(false);
    setVideoFileAdded(true);
  };

  const imageButtonPressed = () => {
    setFileNotAdded(false);
    setImageFileAdded(true);
  };

  const textButtonPressed = () => {
    setFileNotAdded(false);
    setTextInputAdded(true);
  };

  return (
    <View>
      {fileNotAdded ? (
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <View style={{ paddingLeft: 7, paddingRight: 2.5 }}>
            <ThemedButton
              name="bruce"
              type="primary"
              backgroundColor="blue"
              textColor="black"
              width={100}
              height={70}
              disabled={false}
              raiseLevel={5}
              onPress={audioButtonPressed}
            >
              <FontAwesomeIcon
                icon={faMusic}
                size={28}
                style={{ color: "white", paddingHorizontal: 20 }}
              />
              <Text style={{ color: "white", fontWeight: "bold" }}>Audio</Text>
            </ThemedButton>
          </View>
          <View style={{ paddingLeft: 2.5, paddingRight: 2.5 }}>
            <ThemedButton
              name="bruce"
              type="primary"
              backgroundColor="blue"
              textColor="black"
              width={100}
              height={70}
              disabled={false}
              raiseLevel={5}
              onPress={videoButtonPressed}
            >
              <FontAwesomeIcon
                icon={faVideo}
                size={28}
                style={{ color: "white", paddingHorizontal: 20 }}
              />
              <Text style={{ color: "white", fontWeight: "bold" }}>Video</Text>
            </ThemedButton>
          </View>
          <View style={{ paddingLeft: 2.5, paddingRight: 2.5 }}>
            <ThemedButton
              name="bruce"
              type="primary"
              backgroundColor="blue"
              textColor="black"
              width={100}
              height={70}
              disabled={false}
              raiseLevel={5}
              onPress={imageButtonPressed}
            >
              <FontAwesomeIcon
                icon={faImage}
                size={28}
                style={{ color: "white", paddingHorizontal: 20 }}
              />
              <Text style={{ color: "white", fontWeight: "bold" }}>Image</Text>
            </ThemedButton>
          </View>
          <View style={{ paddingLeft: 2.5, paddingRight: 5 }}>
            <ThemedButton
              name="bruce"
              type="primary"
              backgroundColor="blue"
              textColor="black"
              width={100}
              height={70}
              disabled={false}
              raiseLevel={5}
              onPress={textButtonPressed}
            >
              <FontAwesomeIcon
                icon={faFileLines}
                size={28}
                style={{ color: "white", paddingHorizontal: 20 }}
              />
              <Text style={{ color: "white", fontWeight: "bold" }}>Text</Text>
            </ThemedButton>
          </View>
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          {audioFileAdded && (
            <View style={{ paddingLeft: 40 }}>
              <ThemedButton
                name="bruce"
                type="primary"
                backgroundColor="blue"
                textColor="black"
                width={70}
                height={70}
                disabled={false}
                raiseLevel={5}
                onPress={() => {
                  console.log("pressed");
                }}
              >
                <FontAwesomeIcon
                  icon={faVolumeHigh}
                  size={28}
                  style={{ color: "white", paddingHorizontal: 20 }}
                />
              </ThemedButton>
              <Text>Audio button pressed</Text>
            </View>
          )}
          {videoFileAdded && (
            <View style={{ paddingLeft: 40 }}>
              <ThemedButton
                name="bruce"
                type="primary"
                backgroundColor="blue"
                textColor="black"
                width={70}
                height={70}
                disabled={false}
                raiseLevel={5}
                onPress={() => {
                  console.log("pressed");
                }}
              >
                <FontAwesomeIcon
                  icon={faVolumeHigh}
                  size={28}
                  style={{ color: "white", paddingHorizontal: 20 }}
                />
              </ThemedButton>
              <Text>Video button pressed</Text>
              {/* <VideoPlayer
                videoHeight={30}
                videoWidth={30}
                controls={true}
                video={require("./../assets/video/PS.mp4")}
              /> */}
            </View>
          )}
          {imageFileAdded && (
            <View style={{ paddingLeft: 40 }}>
              {/* <ThemedButton
                name="bruce"
                type="primary"
                backgroundColor="blue"
                textColor="black"
                width={70}
                height={70}
                disabled={false}
                raiseLevel={5}
                onPress={() => {
                  console.log("pressed");
                }}
              >
                <FontAwesomeIcon
                  icon={faVolumeHigh}
                  size={28}
                  style={{ color: "white", paddingHorizontal: 20 }}
                />
              </ThemedButton> */}
              <Image
                style={{ width: 100, height: 100 }}
                source={require("./../assets/favicon.png")}
              />
            </View>
          )}
          {textInputAdded && (
            <View style={{ paddingLeft: 40 }}>
              <ThemedButton
                name="bruce"
                type="primary"
                backgroundColor="blue"
                textColor="black"
                width={70}
                height={70}
                disabled={false}
                raiseLevel={5}
                onPress={() => {
                  console.log("pressed");
                }}
              >
                <FontAwesomeIcon
                  icon={faVolumeHigh}
                  size={28}
                  style={{ color: "white", paddingHorizontal: 20 }}
                />
              </ThemedButton>
              <Text>Text Input button pressed</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

export default AddFile;
