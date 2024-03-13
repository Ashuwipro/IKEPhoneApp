import React, { useRef } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEdit,
  faFileLines,
  faImage,
  faMusic,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { ThemedButton } from "react-native-really-awesome-button";
import { Video, ResizeMode, Audio } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import { TextInput, Button } from "react-native-paper";
import * as DocumentPicker from "expo-document-picker";
import Slider from "@react-native-community/slider";
import Delete from "./Delete";
import Edit from "./Edit";
//import * as ScreenOrientation from "expo-screen-orientation";

function AddFile({ childTrigger, display }) {
  const [fileNotAdded, setFileNotAdded] = React.useState(true);
  const [audioFileAdded, setAudioFileAdded] = React.useState(false);
  const [videoFileAdded, setVideoFileAdded] = React.useState(false);
  const [imageFileAdded, setImageFileAdded] = React.useState(false);
  const [textInputAdded, setTextInputAdded] = React.useState(false);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [filePath, setFilePath] = React.useState({ abc: "def" });
  const [description, setDescription] = React.useState("");
  const [audioPlaying, setAudioPlaying] = React.useState(false);
  const [sound, setSound] = React.useState(new Audio.Sound());
  const [duration, setDuration] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [audioSliderDuration, setAudioSliderDuration] = React.useState(
    convertSecToHMS(0)
  );
  const [videoPosition, setVideoPosition] = React.useState(0);

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [videoPlaying, setVideoPlaying] = React.useState(true);

  const [videoPressed, setVideoPressed] = React.useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [btnDisplay, setBtnDisplay] = React.useState(true);

  // const [orientation, setOrientation] = React.useState(
  //   ScreenOrientation.Orientation.PORTRAIT_UP
  // );

  // const checkOrientation = async () => {
  //   console.log("check orientation called");
  //   const orientation = await ScreenOrientation.getOrientationAsync();
  //   setOrientation(orientation);
  // };

  // const handleOrientationChange = (o) => {
  //   console.log("handle orientation change called");
  //   setOrientation(o.orientationInfo.orientation);
  // };

  // React.useEffect(() => {
  //   checkOrientation();
  //   const subscription = ScreenOrientation.addOrientationChangeListener(
  //     handleOrientationChange
  //   );
  //   return () => {
  //     ScreenOrientation.removeOrientationChangeListeners(subscription);
  //   };
  // }, []);

  // React.useEffect(() => {
  //   console.log("Orientation:=", orientation);
  // }, [orientation]);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 1 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    console.log("Add file rendered");
  }, []);

  React.useEffect(() => {
    if (videoPressed) {
      setTimeout(() => {
        fadeOut(), setVideoPressed(false);
      }, 3000);
    }
  }, [videoPressed]);

  const chooseFile = async (type) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions[type],
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setFilePath(result.assets[0].uri);
        setFileNotAdded(false);
        if (type === "Videos") {
          setVideoFileAdded(true);
          setDuration(Math.floor(result.assets[0].duration / 1000));
        } else if (type === "Images") {
          setImageFileAdded(true);
        }
      }
    } catch (error) {
      console.log("Error:=2", error);
    }
  };

  const chooseAudio = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: "audio/*",
        // type: [Platform.OS === "ios" ? "public.mp3" : "audio/mpeg3"],
      });

      if (!result.canceled) {
        setFilePath(result.assets[0].uri);
        setFileNotAdded(false);
        setAudioFileAdded(true);
        // setDuration(result.assets[0].size);
      }
    } catch (error) {
      console.log("Error:=1", error);
    }
  };

  function convertMsToSec(milliseconds) {
    return Math.floor(milliseconds / 1000);
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function convertSecToHMS(seconds) {
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    // 👇️ if seconds are greater than 30, round minutes up (optional)
    // minutes = seconds >= 30 ? minutes + 1 : minutes;

    minutes = minutes % 60;

    // 👇️ If you don't want to roll hours over, e.g. 24 to 00
    // 👇️ comment (or remove) the line below
    // commenting next line gets you `24:00:00` instead of `00:00:00`
    // or `36:15:31` instead of `12:15:31`, etc.
    hours = hours % 24;
    if (hours === 0) {
      return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
    }
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds
    )}`;
  }

  React.useEffect(() => {
    if (Object.entries(filePath).length !== 0 && audioFileAdded) {
      (async () => {
        try {
          let load = await sound.loadAsync({ uri: filePath });
          setDuration(convertMsToSec(load.durationMillis));
          setAudioSliderDuration(
            convertSecToHMS(Math.floor(load.durationMillis / 1000))
          );
          await sound.playAsync();
          await sound.setIsLoopingAsync(true);
        } catch (error) {
          console.log("trying to play:=", error);
        }
      })();
    }
  }, [filePath, audioFileAdded]);

  const deleteResource = async (type) => {
    setFileNotAdded(true);
    setFilePath({});
    setDuration(0);
    setTime(0);
    setAudioSliderDuration(0);
    if (type === "audio") {
      setAudioFileAdded(false);
      await sound.stopAsync();
      await sound.unloadAsync({ uri: filePath });
    } else if (type === "video") {
      setVideoFileAdded(false);
    } else if (type === "image") {
      setImageFileAdded(false);
    } else if (type === "text") {
      setTextInputAdded(false);
    }
  };

  const textButtonPressed = () => {
    setFileNotAdded(false);
    setTextInputAdded(true);
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const display2 = () => {
    console.log("Add file width:=", windowWidth);
    console.log("Add file height:=", windowHeight);
    setBtnDisplay(!btnDisplay);
  };

  React.useEffect(() => {
    if (audioFileAdded || videoFileAdded) {
      const timer =
        time < duration && setInterval(() => setTime(time + 1), 1000);
      if (time === duration) {
        setTime(0);
      }
      return () => clearInterval(timer);
    }
  }, [duration, time]);

  React.useEffect(() => {
    if (audioFileAdded) {
      deleteResource("audio");
    } else if (videoFileAdded) {
      deleteResource("video");
    } else if (imageFileAdded) {
      deleteResource("image");
    } else if (textInputAdded) {
      deleteResource("text");
    }
  }, [childTrigger]);

  return (
    <View>
      {fileNotAdded ? (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "3%",
            justifyContent: "space-evenly",
            marginHorizontal: "0%",
            width: "100%",
          }}
        >
          <View>
            <ThemedButton
              name="bruce"
              type="primary"
              backgroundColor="blue"
              textColor="black"
              width={70}
              // height={70}
              disabled={false}
              raiseLevel={5}
              onPress={() => chooseAudio("Audio")}
            >
              <FontAwesomeIcon
                icon={faMusic}
                size={28}
                style={{ color: "white", paddingHorizontal: 20 }}
              />
            </ThemedButton>
          </View>
          <View>
            <ThemedButton
              name="bruce"
              type="primary"
              backgroundColor="blue"
              textColor="black"
              width={70}
              // height={70}
              disabled={false}
              raiseLevel={5}
              onPress={() => chooseFile("Videos")}
            >
              <FontAwesomeIcon
                icon={faVideo}
                size={28}
                style={{ color: "white", paddingHorizontal: 20 }}
              />
            </ThemedButton>
          </View>
          <View>
            <ThemedButton
              name="bruce"
              type="primary"
              backgroundColor="blue"
              textColor="black"
              width={70}
              // height={70}
              disabled={false}
              raiseLevel={5}
              onPress={() => chooseFile("Images")}
            >
              <FontAwesomeIcon
                icon={faImage}
                size={28}
                style={{ color: "white", paddingHorizontal: 20 }}
              />
            </ThemedButton>
          </View>
          <View>
            <ThemedButton
              name="bruce"
              type="primary"
              backgroundColor="blue"
              textColor="black"
              width={70}
              // height={70}
              disabled={false}
              raiseLevel={5}
              onPress={textButtonPressed}
            >
              <FontAwesomeIcon
                icon={faFileLines}
                size={28}
                style={{ color: "white", paddingHorizontal: 20 }}
              />
            </ThemedButton>
          </View>
        </View>
      ) : (
        <View
          style={
            btnDisplay
              ? {
                  flexDirection: "row",
                }
              : {}
          }
        >
          {audioFileAdded && (
            <View
              style={{
                width: "100%",
                height: 170,
                flexDirection: "row",
                marginHorizontal: "3%",
              }}
            >
              <View style={{ width: "78%", marginLeft: "1%" }}>
                <Slider
                  style={{ marginTop: "10%" }}
                  value={time}
                  minimumValue={0}
                  tapToSeek={true}
                  maximumValue={duration}
                  minimumTrackTintColor="#0000FF"
                  maximumTrackTintColor="#000000"
                  onValueChange={(val) => setTime(Math.floor(val))}
                  // onSlidingStart={async () => await sound.pauseAsync()}
                  onSlidingComplete={async () => {
                    await sound.setPositionAsync(time * 1000);
                    // await sound.playAsync();
                  }}
                />
                <View
                  style={{
                    width: "90%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: 15,
                    marginTop: "5%",
                  }}
                >
                  <View>
                    <Text>{convertSecToHMS(time)}</Text>
                  </View>
                  <View>
                    <Text>{audioSliderDuration}</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: "5%",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  marginLeft: "1%",
                }}
              >
                <Edit />
                <Delete deleteResource={deleteResource} type="audio" />
              </View>
            </View>
          )}
          {videoFileAdded && (
            <View
              style={
                btnDisplay
                  ? {
                      width: "100%",
                      height: display2 ? 170 : "100%",
                      flexDirection: "row",
                      marginHorizontal: "3%",
                    }
                  : {}
              }
            >
              <View
                style={
                  btnDisplay
                    ? {
                        borderWidth: 2,
                        borderRadius: 5,
                        width: "78%",
                        marginRight: "1%",
                        backgroundColor: "black",
                      }
                    : {
                        transform: [{ rotate: "90deg" }],
                      }
                }
              >
                {Object.entries(filePath).length !== 0 && (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      fadeIn();
                      setVideoPressed(true);
                    }}
                  >
                    <Video
                      ref={video}
                      style={
                        btnDisplay
                          ? {
                              flex: 1,
                            }
                          : {
                              height: windowWidth,
                              width: windowHeight - 97,
                              borderWidth: 2,
                              backgroundColor: "black",
                            }
                      }
                      source={{
                        uri: filePath ?? filePath.assets[0].uri,
                      }}
                      positionMillis={videoPosition}
                      shouldPlay={videoPlaying}
                      resizeMode={ResizeMode.COVER}
                      isLooping
                      onPlaybackStatusUpdate={(status) =>
                        setStatus(() => status)
                      }
                    >
                      <View
                        style={
                          btnDisplay
                            ? {
                                zIndex: 2,
                                marginTop: "30%",
                              }
                            : {
                                zIndex: 2,
                                marginTop: "40%",
                              }
                        }
                      >
                        <Animated.View
                          style={{
                            opacity: fadeAnim,
                            justifyContent: "space-between",
                            flexDirection: "row",
                          }}
                        >
                          <Text
                            style={{
                              color: videoPressed ? "white" : "transparent",
                              marginTop: "2%",
                              marginLeft: "2%",
                            }}
                          >
                            {convertSecToHMS(time)} /{" "}
                            {convertSecToHMS(duration)}
                          </Text>
                          <Button
                            title=""
                            icon={btnDisplay ? "fullscreen" : "fullscreen-exit"}
                            textColor={videoPressed ? "white" : "transparent"}
                            style={{
                              backgroundColor: "transparent",
                              width: 5,
                              marginRight: 40,
                            }}
                            labelStyle={{ fontSize: 25 }}
                            onPress={() => {
                              display();
                              display2();
                            }}
                          >
                            <Text></Text>
                          </Button>
                        </Animated.View>

                        <Slider
                          style={{
                            zIndex: 2,
                            marginTop: btnDisplay ? "-2%" : "1%",
                          }}
                          value={time}
                          tapToSeek={true}
                          thumbTintColor="transparent"
                          minimumValue={0}
                          maximumValue={duration}
                          minimumTrackTintColor="#FF0000"
                          maximumTrackTintColor="#000000"
                          onValueChange={(val) => setTime(Math.floor(val))}
                          onSlidingComplete={() =>
                            setVideoPosition(time * 1000)
                          }
                        />
                      </View>
                    </Video>
                  </TouchableWithoutFeedback>
                )}
              </View>
              <View
                style={{
                  width: "5%",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  marginLeft: "1%",
                  display: btnDisplay ? "block" : "none",
                }}
              >
                <Edit />
                <Delete deleteResource={deleteResource} type="video" />
              </View>
            </View>
          )}
          {imageFileAdded && (
            <View
              style={
                btnDisplay
                  ? {
                      width: "100%",
                      height: 170,
                      flexDirection: "row",
                      marginHorizontal: "3%",
                    }
                  : {}
              }
            >
              <View
                style={
                  btnDisplay
                    ? {
                        borderWidth: 2,
                        borderRadius: 5,
                        width: "78%",
                        marginRight: "1%",
                      }
                    : { transform: [{ rotate: "90deg" }] }
                }
              >
                {Object.entries(filePath).length !== 0 && (
                  <Image
                    style={
                      btnDisplay
                        ? { height: "100%" }
                        : {
                            height: windowWidth,
                            width: windowHeight - 97,
                            borderWidth: 2,
                            backgroundColor: "black",
                          }
                    }
                    source={filePath ?? filePath.assets[0].uri}
                    contentFit="cover"
                  >
                    <View
                      style={
                        btnDisplay
                          ? { zIndex: 2, marginTop: "38%", marginLeft: "85%" }
                          : {
                              zIndex: 2,
                              marginTop: "43%",
                              marginLeft: "90%",
                            }
                      }
                    >
                      <Button
                        title=""
                        icon={btnDisplay ? "fullscreen" : "fullscreen-exit"}
                        textColor="white"
                        style={{
                          backgroundColor: "transparent",
                          width: 5,
                          marginRight: 40,
                        }}
                        labelStyle={{ fontSize: 25 }}
                        onPress={() => {
                          display();
                          display2();
                        }}
                      >
                        <Text></Text>
                      </Button>
                    </View>
                  </Image>
                )}
              </View>
              <View
                style={{
                  width: "5%",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  marginLeft: "1%",
                  display: btnDisplay ? "block" : "none",
                }}
              >
                <Edit />
                <Delete deleteResource={deleteResource} type="image" />
              </View>
            </View>
          )}
          {textInputAdded && (
            <View
              style={{
                width: "100%",
                height: 130,
                flexDirection: "row",
                marginHorizontal: "3%",
              }}
            >
              <View
                style={{
                  borderRadius: 5,
                  width: "78%",
                  marginRight: "1%",
                  height: 130,
                }}
              >
                <TextInput
                  style={{
                    backgroundColor: "white",
                    minHeight: 130,
                  }}
                  mode="outlined"
                  label="Description"
                  placeholder="Enter your description here"
                  outlineColor="black"
                  multiline
                  activeOutlineColor="blue"
                  value={description}
                  onChangeText={(text) => setDescription(text)}
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: "1%",
                }}
              >
                <Delete deleteResource={deleteResource} type="image" />
              </View>
            </View>
          )}
          <Modal
            transparent={true}
            visible={isModalVisible}
            animationType="fade"
          >
            <View style={style.centeredView}>
              <View style={style.modalView}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Video Trim Page
                </Text>
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
                    setIsModalVisible(false);
                    setVideoPlaying(true);
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
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "90%",
    backgroundColor: "white",
    padding: 40,
    margin: 10,
    borderRadius: 5,
    shadowColor: "black",
    elevation: 5,
  },
});

export default AddFile;
