import React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ThemedButton } from "react-native-really-awesome-button";
import {
  faArrowUp,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

function VideoTimer() {
  return (
    // <View style={{ display: "flex", flexDirection: "row", marginLeft: 10 }}>
    //   <View>
    //     <View style={{ marginBottom: 1 }}>
    //       <ThemedButton
    //         name="bruce"
    //         type="primary"
    //         backgroundColor="blue"
    //         width={60}
    //         height={60}
    //         disabled={false}
    //         raiseLevel={5}
    //         onPress={() => {
    //           console.log("pressed");
    //         }}
    //       >
    //         <FontAwesomeIcon
    //           icon={faCaretUp}
    //           size={30}
    //           style={{
    //             color: "white",
    //             marginLeft: 10,
    //           }}
    //         />
    //       </ThemedButton>
    //     </View>
    //     <View style={{ marginBottom: 1 }}>
    //       <ThemedButton
    //         name="bruce"
    //         type="primary"
    //         backgroundColor="blue"
    //         width={60}
    //         height={60}
    //         disabled={false}
    //         raiseLevel={5}
    //         onPress={() => {
    //           console.log("pressed");
    //         }}
    //       >
    //         <Text
    //           style={{
    //             color: "white",
    //             fontWeight: "bold",
    //           }}
    //         >
    //           10
    //         </Text>
    //       </ThemedButton>
    //     </View>
    //     <View>
    //       <ThemedButton
    //         name="bruce"
    //         type="primary"
    //         backgroundColor="blue"
    //         width={60}
    //         height={60}
    //         disabled={false}
    //         raiseLevel={5}
    //         onPress={() => {
    //           console.log("pressed");
    //         }}
    //       >
    //         <FontAwesomeIcon
    //           icon={faCaretDown}
    //           size={30}
    //           style={{
    //             color: "white",
    //             marginLeft: 10,
    //           }}
    //         />
    //       </ThemedButton>
    //     </View>
    //   </View>

    //   <View
    //     style={{
    //       marginLeft: 1,
    //       justifyContent: "center",
    //     }}
    //   >
    //     <Text style={{ color: "black", fontSize: 50 }}>:</Text>
    //   </View>

    //   <View>
    //     <View style={{ marginBottom: 1 }}>
    //       <ThemedButton
    //         name="bruce"
    //         type="primary"
    //         backgroundColor="blue"
    //         width={60}
    //         height={60}
    //         disabled={false}
    //         raiseLevel={5}
    //         onPress={() => {
    //           console.log("pressed");
    //         }}
    //       >
    //         <FontAwesomeIcon
    //           icon={faCaretUp}
    //           size={30}
    //           style={{
    //             color: "white",
    //             marginLeft: 10,
    //           }}
    //         />
    //       </ThemedButton>
    //     </View>
    //     <View style={{ marginBottom: 1 }}>
    //       <ThemedButton
    //         name="bruce"
    //         type="primary"
    //         backgroundColor="blue"
    //         width={60}
    //         height={60}
    //         disabled={false}
    //         raiseLevel={5}
    //         onPress={() => {
    //           console.log("pressed");
    //         }}
    //       >
    //         <Text
    //           style={{
    //             color: "white",
    //             fontWeight: "bold",
    //           }}
    //         >
    //           10
    //         </Text>
    //       </ThemedButton>
    //     </View>
    //     <View>
    //       <ThemedButton
    //         name="bruce"
    //         type="primary"
    //         backgroundColor="blue"
    //         width={60}
    //         height={60}
    //         disabled={false}
    //         raiseLevel={5}
    //         onPress={() => {
    //           console.log("pressed");
    //         }}
    //       >
    //         <FontAwesomeIcon
    //           icon={faCaretDown}
    //           size={30}
    //           style={{
    //             color: "white",
    //             marginLeft: 10,
    //           }}
    //         />
    //       </ThemedButton>
    //     </View>
    //   </View>

    //   <View
    //     style={{
    //       marginLeft: 1,
    //       justifyContent: "center",
    //     }}
    //   >
    //     <Text style={{ color: "black", fontSize: 50 }}>:</Text>
    //   </View>

    //   <View>
    //     <View style={{ marginBottom: 1 }}>
    //       <ThemedButton
    //         name="bruce"
    //         type="primary"
    //         backgroundColor="blue"
    //         width={60}
    //         height={60}
    //         disabled={false}
    //         raiseLevel={5}
    //         onPress={() => {
    //           console.log("pressed");
    //         }}
    //       >
    //         <FontAwesomeIcon
    //           icon={faCaretUp}
    //           size={30}
    //           style={{
    //             color: "white",
    //             marginLeft: 10,
    //           }}
    //         />
    //       </ThemedButton>
    //     </View>
    //     <View style={{ marginBottom: 1 }}>
    //       <ThemedButton
    //         name="bruce"
    //         type="primary"
    //         backgroundColor="blue"
    //         width={60}
    //         height={60}
    //         disabled={false}
    //         raiseLevel={5}
    //         onPress={() => {
    //           console.log("pressed");
    //         }}
    //       >
    //         <Text
    //           style={{
    //             color: "white",
    //             fontWeight: "bold",
    //           }}
    //         >
    //           10
    //         </Text>
    //       </ThemedButton>
    //     </View>
    //     <View>
    //       <ThemedButton
    //         name="bruce"
    //         type="primary"
    //         backgroundColor="blue"
    //         width={60}
    //         height={60}
    //         disabled={false}
    //         raiseLevel={5}
    //         onPress={() => {
    //           console.log("pressed");
    //         }}
    //       >
    //         <FontAwesomeIcon
    //           icon={faCaretDown}
    //           size={30}
    //           style={{
    //             color: "white",
    //             marginLeft: 10,
    //           }}
    //         />
    //       </ThemedButton>
    //     </View>
    //   </View>
    // </View>

    <Modal transparent={true} visible={false} animationType="fade">
      <View style={style.centeredView}>
        <View style={style.modalView}>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              OTP Verification
            </Text>
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
    width: "90%",
    backgroundColor: "white",
    padding: 40,
    margin: 10,
    borderRadius: 5,
    shadowColor: "black",
    elevation: 5,
  },
});

export default VideoTimer;
