import React from "react";
import {
  View,
  Text,
  Modal,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Image } from "expo-image";
import { Video, ResizeMode, Audio } from "expo-av";
import { Button } from "react-native-paper";
import { ThemedButton } from "react-native-really-awesome-button";
import Slider from "@react-native-community/slider";

function PreviewModal({
  question,
  fileType,
  filePath,
  type,
  numOpt,
  opt,
  toggleModal,
}) {
  const options = [
    ["OptionA", "Optiona"],
    ["OptionB", "Optionb"],
    ["OptionC", "Optionc"],
    ["OptionD", "Optiond"],
    ["OptionE", "Optione"],
  ];

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const [videoPressed, setVideoPressed] = React.useState(false);

  return (
    <Modal transparent={true} visible={true} animationType="fade">
      <View style={style.centeredView}>
        <View style={style.modalView}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
            >
              Ques :
            </Text>
            <Text style={style.userText}>
              {
                "What is the full form of MBBS?gdjffsnzkjdvbndsjkfvbnasdbvshjdbvhjbsdhvjbdsxhvjbdfd"
              }
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
            >
              Type :
            </Text>
            <Text style={style.userText}>{type}</Text>
          </View>
          <View>
            {fileType === "Images" && (
              <Image
                style={{
                  height: windowWidth / 2,
                  width: windowHeight / 2.7,
                  borderWidth: 2,
                  backgroundColor: "black",
                  marginBottom: 10,
                  borderRadius: 5,
                }}
                source={filePath ?? filePath}
                contentFit="cover"
              >
                <View
                  style={{
                    zIndex: 2,
                    marginTop: "48%",
                    marginLeft: "85%",
                  }}
                >
                  <Button
                    title=""
                    icon={"fullscreen"}
                    textColor="white"
                    style={{
                      backgroundColor: "transparent",
                      width: 5,
                      marginRight: 40,
                    }}
                    labelStyle={{ fontSize: 25 }}
                    onPress={() => {
                      console.log("wide");
                    }}
                  >
                    <Text></Text>
                  </Button>
                </View>
              </Image>
            )}

            {/* code for audio file to be added*/}
            {fileType === "Videos" && (
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log("pressed video preview");
                }}
              >
                <Video
                  style={{
                    height: windowWidth / 2,
                    width: windowHeight / 2.7,
                    borderWidth: 2,
                    backgroundColor: "black",
                    marginBottom: 10,
                    borderRadius: 5,
                  }}
                  source={{
                    uri: filePath ?? filePath,
                  }}
                  shouldPlay={true}
                  resizeMode={ResizeMode.COVER}
                  isLooping
                >
                  <View
                    style={{
                      zIndex: 2,
                      marginTop: "40%",
                    }}
                  >
                    <Animated.View
                      style={{
                        // opacity: fadeAnim,
                        opacity: 1,
                        justifyContent: "space-between",
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          //   color: videoPressed ? "white" : "transparent",
                          color: "white",
                          marginTop: "2%",
                          marginLeft: "2%",
                        }}
                      >
                        {/* {convertSecToHMS(time)} /{" "}
                            {convertSecToHMS(duration)} */}
                        00:00 / 02:30
                      </Text>
                      <Button
                        title=""
                        icon={"fullscreen"}
                        // textColor={videoPressed ? "white" : "transparent"}
                        textColor="white"
                        style={{
                          backgroundColor: "transparent",
                          width: 5,
                          marginRight: 40,
                        }}
                        labelStyle={{ fontSize: 25 }}
                        onPress={() => {
                          console.log("video expand preview pressed");
                        }}
                      >
                        <Text></Text>
                      </Button>
                    </Animated.View>

                    <Slider
                      style={{
                        zIndex: 2,
                        marginTop: "-2%",
                      }}
                      //value={time}
                      value={30}
                      tapToSeek={true}
                      thumbTintColor="transparent"
                      minimumValue={0}
                      //   maximumValue={duration}
                      maximumValue={100}
                      minimumTrackTintColor="#FF0000"
                      maximumTrackTintColor="#000000"
                      //   onValueChange={(val) => setTime(Math.floor(val))}
                      //   onSlidingComplete={() => setVideoPosition(time * 1000)}
                    />
                  </View>
                </Video>
              </TouchableWithoutFeedback>
            )}
          </View>

          {options.slice(0, numOpt).map((item) => (
            <View style={{ flexDirection: "row" }} key={item}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
              >
                {item[0]} :
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "normal",
                  marginLeft: 10,
                  marginBottom: 10,
                  marginRight: 50,
                }}
              >
                {item[1]}
              </Text>
            </View>
          ))}

          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ fontSize: 20, marginBottom: 10, fontWeight: "bold" }}
            >
              Correct Answer :
            </Text>
            <Text style={style.userText}>{"OptionA"}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <ThemedButton
              name="bruce"
              type="primary"
              backgroundColor="red"
              width={150}
              disabled={false}
              raiseLevel={5}
              onPress={toggleModal}
            >
              CANCEL
            </ThemedButton>
            <ThemedButton
              name="bruce"
              type="primary"
              backgroundColor="green"
              width={150}
              disabled={false}
              raiseLevel={5}
              onPress={toggleModal}
            >
              SUBMIT
            </ThemedButton>
          </View>
        </View>
      </View>
    </Modal>
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
    width: "100%",
    backgroundColor: "white",
    padding: 40,
    margin: 10,
    borderRadius: 5,
    shadowColor: "black",
    elevation: 5,
  },
  userText: {
    fontSize: 20,
    fontWeight: "normal",
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 50,
  },
});

export default PreviewModal;
