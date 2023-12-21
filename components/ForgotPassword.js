import React, { useRef } from "react";
import {
  Modal,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { ThemedButton } from "react-native-really-awesome-button";

function ForgotPassword(props) {
  const [modalEmail, setModalEmail] = React.useState("");
  const [modalPhone, setModalPhone] = React.useState("");
  const [otp1, setOtp1] = React.useState("");
  const [otp2, setOtp2] = React.useState("");
  const [otp3, setOtp3] = React.useState("");
  const [otp4, setOtp4] = React.useState("");
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const [isOpen, setIsOpen] = React.useState(true);
  const [getOtp, setGetOtp] = React.useState(true);
  const [typeOtp, setTypeOtp] = React.useState(false);
  const [changePass, setChangePass] = React.useState(false);
  const [time, setTime] = React.useState(10);
  const [modalNewPass, setModalNewPass] = React.useState("");
  const [modalNewPassSecure, setModalNewPassSecure] = React.useState(true);
  const [modalConfPass, setModalConfPass] = React.useState("");
  const [modalConfPassSecure, setModalConfPassSecure] = React.useState(true);

  React.useEffect(() => {
    if (typeOtp) {
      const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
      if (time === 0) {
        setTime(10);
      }
      return () => clearInterval(timer);
    }
  }, [time, typeOtp]);

  React.useEffect(() => {
    if (otp1) {
      input2.current.focus();
    }
  }, [otp1]);

  React.useEffect(() => {
    if (otp2) {
      input3.current.focus();
    }
  }, [otp2]);

  React.useEffect(() => {
    if (otp3) {
      input4.current.focus();
    }
  }, [otp3]);

  React.useEffect(() => {
    if (otp1 && otp2 && otp3 && otp4) {
      console.log(otp1 + "" + otp2 + "" + otp3 + "" + otp4);
    }
  }, [otp1, otp2, otp3, otp4]);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Modal transparent={true} visible={isOpen} animationType="fade">
          <View style={style.centeredView}>
            <View style={style.modalView}>
              {getOtp && (
                <View>
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

                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 20,
                      justifyContent: "center",
                    }}
                  >
                    <Text>We will send you a </Text>
                    <Text style={{ fontWeight: "bold" }}>
                      {" "}
                      One Time Password
                    </Text>
                  </View>

                  <View>
                    <TextInput
                      style={{
                        marginHorizontal: "1%",
                        marginBottom: "2%",
                        marginTop: "10%",
                        backgroundColor: "white",
                        minHeight: "10%",
                        fontSize: 25,
                      }}
                      mode="outlined"
                      label="Email"
                      placeholder="Enter your email"
                      outlineColor="black"
                      multiline={false}
                      activeOutlineColor="blue"
                      value={modalEmail}
                      onChangeText={(text) => setModalEmail(text)}
                    />
                  </View>

                  <View>
                    <Text style={{ alignSelf: "center" }}>OR</Text>
                  </View>

                  <View>
                    <TextInput
                      style={{
                        marginHorizontal: "1%",
                        marginBottom: "2%",
                        marginTop: "2%",
                        backgroundColor: "white",
                        minHeight: "10%",
                        fontSize: 25,
                      }}
                      mode="outlined"
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      outlineColor="black"
                      keyboardType="number-pad"
                      maxLength={10}
                      multiline={false}
                      activeOutlineColor="blue"
                      value={modalPhone}
                      onChangeText={(text) => setModalPhone(text)}
                    />
                  </View>

                  <View style={{ alignItems: "center", marginTop: 40 }}>
                    <ThemedButton
                      name="bruce"
                      type="primary"
                      backgroundColor="green"
                      width={150}
                      disabled={false}
                      raiseLevel={5}
                      onPress={() => {
                        setGetOtp(false);
                        setTypeOtp(true);
                        setChangePass(false);
                      }}
                    >
                      GET OTP
                    </ThemedButton>
                  </View>
                </View>
              )}

              {typeOtp && (
                <View>
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

                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 20,
                      justifyContent: "center",
                    }}
                  >
                    <Text>Enter the OTP sent to </Text>
                    <Text style={{ fontWeight: "bold" }}>+91 8960948616</Text>
                  </View>

                  <View
                    style={{
                      marginTop: 20,
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <TextInput
                      type="number"
                      style={{ backgroundColor: "white", fontSize: 30 }}
                      width={50}
                      height={10}
                      mode="outlined"
                      keyboardType="number-pad"
                      maxLength={1}
                      value={otp1}
                      autoFocus={true}
                      onChangeText={(text) => {
                        setOtp1(text);
                      }}
                    />
                    <TextInput
                      type="number"
                      ref={input2}
                      style={{ backgroundColor: "white", fontSize: 30 }}
                      width={50}
                      height={10}
                      mode="outlined"
                      keyboardType="number-pad"
                      maxLength={1}
                      value={otp2}
                      onChangeText={(text) => {
                        setOtp2(text);
                      }}
                    />
                    <TextInput
                      type="number"
                      ref={input3}
                      style={{ backgroundColor: "white", fontSize: 30 }}
                      width={50}
                      height={10}
                      mode="outlined"
                      keyboardType="number-pad"
                      maxLength={1}
                      value={otp3}
                      onChangeText={(text) => {
                        setOtp3(text);
                      }}
                    />
                    <TextInput
                      type="number"
                      ref={input4}
                      style={{ backgroundColor: "white", fontSize: 30 }}
                      width={50}
                      height={10}
                      mode="outlined"
                      keyboardType="number-pad"
                      maxLength={1}
                      value={otp4}
                      onChangeText={(text) => {
                        setOtp4(text);
                      }}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: 20,
                    }}
                  >
                    <Text style={{ fontSize: 15 }}>Resend OTP in </Text>
                    <Text style={{ fontWeight: "900", color: "blue" }}>
                      {time}s
                    </Text>
                  </View>

                  <View style={{ alignItems: "center", marginTop: 40 }}>
                    <ThemedButton
                      name="bruce"
                      type="primary"
                      backgroundColor="blue"
                      width={200}
                      disabled={false}
                      raiseLevel={5}
                      onPress={() => {
                        setGetOtp(false);
                        setTypeOtp(false);
                        setChangePass(true);
                      }}
                    >
                      VERIFY & PROCEED
                    </ThemedButton>
                  </View>
                </View>
              )}
              {changePass && (
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      alignSelf: "center",
                    }}
                  >
                    Set New password
                  </Text>

                  <View>
                    <TextInput
                      style={{
                        marginHorizontal: "1%",
                        marginBottom: "2%",
                        marginTop: "10%",
                        backgroundColor: "white",
                        minHeight: "10%",
                        fontSize: 25,
                      }}
                      mode="outlined"
                      secureTextEntry={modalNewPassSecure}
                      label="Password"
                      placeholder="Enter new password"
                      outlineColor="black"
                      multiline={false}
                      activeOutlineColor="blue"
                      value={modalNewPass}
                      onChangeText={(text) => setModalNewPass(text)}
                    />
                    {modalNewPass !== "" && (
                      <TouchableOpacity
                        onPress={() => {
                          setModalNewPassSecure(!modalNewPassSecure);
                        }}
                        style={{ position: "absolute", right: 20, top: 45 }}
                      >
                        <FontAwesomeIcon
                          icon={modalNewPassSecure ? faEyeSlash : faEye}
                          size={30}
                        />
                      </TouchableOpacity>
                    )}
                  </View>

                  <View>
                    <TextInput
                      style={{
                        marginHorizontal: "1%",
                        marginBottom: "2%",
                        marginTop: "5%",
                        backgroundColor: "white",
                        minHeight: "10%",
                        fontSize: 25,
                      }}
                      mode="outlined"
                      secureTextEntry={modalConfPassSecure}
                      label="Confirm Password"
                      placeholder="Re-Enter Password"
                      outlineColor="black"
                      multiline={false}
                      activeOutlineColor="blue"
                      value={modalConfPass}
                      onChangeText={(text) => setModalConfPass(text)}
                    />
                    {modalConfPass !== "" && (
                      <TouchableOpacity
                        onPress={() => {
                          setModalConfPassSecure(!modalConfPassSecure);
                        }}
                        style={{ position: "absolute", right: 20, top: 30 }}
                      >
                        <FontAwesomeIcon
                          icon={modalConfPassSecure ? faEyeSlash : faEye}
                          size={30}
                        />
                      </TouchableOpacity>
                    )}
                  </View>

                  <View>
                    {modalNewPass &&
                      modalConfPass &&
                      modalNewPass !== modalConfPass && (
                        <Text style={{ color: "red" }}>
                          New Password and Confirm Password does not match
                        </Text>
                      )}
                  </View>

                  <View style={{ alignItems: "center", marginTop: 40 }}>
                    <ThemedButton
                      name="bruce"
                      type="primary"
                      backgroundColor="green"
                      width={150}
                      disabled={false}
                      raiseLevel={5}
                      onPress={() => {
                        setGetOtp(false);
                        setTypeOtp(false);
                        setChangePass(false);
                        setIsOpen(false);
                        props.change();
                      }}
                    >
                      RESET PASSWORD
                    </ThemedButton>
                  </View>
                </View>
              )}
            </View>
          </View>
        </Modal>
        {/* <Modal transparent={true} visible={typeOtp} animationType="fade">
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

            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              <Text>Enter the OTP sent to </Text>
              <Text style={{ fontWeight: "bold" }}>+91 8960948616</Text>
            </View>

            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <TextInput
                type="number"
                style={{ backgroundColor: "white", fontSize: 30 }}
                width={50}
                height={10}
                mode="outlined"
                keyboardType="number-pad"
                maxLength={1}
                value={otp1}
                autoFocus={true}
                onChangeText={(text) => {
                  setOtp1(text);
                }}
              />
              <TextInput
                type="number"
                ref={input2}
                style={{ backgroundColor: "white", fontSize: 30 }}
                width={50}
                height={10}
                mode="outlined"
                keyboardType="number-pad"
                maxLength={1}
                value={otp2}
                onChangeText={(text) => {
                  setOtp2(text);
                }}
              />
              <TextInput
                type="number"
                ref={input3}
                style={{ backgroundColor: "white", fontSize: 30 }}
                width={50}
                height={10}
                mode="outlined"
                keyboardType="number-pad"
                maxLength={1}
                value={otp3}
                onChangeText={(text) => {
                  setOtp3(text);
                }}
              />
              <TextInput
                type="number"
                ref={input4}
                style={{ backgroundColor: "white", fontSize: 30 }}
                width={50}
                height={10}
                mode="outlined"
                keyboardType="number-pad"
                maxLength={1}
                value={otp4}
                onChangeText={(text) => {
                  setOtp4(text);
                }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ fontSize: 15 }}>Resend OTP in </Text>
              <Text style={{ fontWeight: "900", color: "blue" }}>{time}s</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 40 }}>
              <ThemedButton
                name="bruce"
                type="primary"
                backgroundColor="blue"
                width={200}
                disabled={false}
                raiseLevel={5}
                onPress={() => {
                  setGetOtp(false);
                  setTypeOtp(false);
                  setChangePass(true);
                }}
              >
                VERIFY & PROCEED
              </ThemedButton>
            </View>
          </View>
        </View>
      </Modal> */}
        {/* <Modal transparent={true} visible={changePass} animationType="fade">
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              Set New password
            </Text>

            <View>
              <TextInput
                style={{
                  marginHorizontal: "1%",
                  marginBottom: "2%",
                  marginTop: "10%",
                  backgroundColor: "white",
                  minHeight: "10%",
                  fontSize: 25,
                }}
                mode="outlined"
                secureTextEntry={modalNewPassSecure}
                label="Password"
                placeholder="Enter new password"
                outlineColor="black"
                multiline={false}
                activeOutlineColor="blue"
                value={modalNewPass}
                onChangeText={(text) => setModalNewPass(text)}
              />
              {modalNewPass !== "" && (
                <TouchableOpacity
                  onPress={() => {
                    setModalNewPassSecure(!modalNewPassSecure);
                  }}
                  style={{ position: "absolute", right: 20, top: 45 }}
                >
                  <FontAwesomeIcon
                    icon={modalNewPassSecure ? faEyeSlash : faEye}
                    size={30}
                  />
                </TouchableOpacity>
              )}
            </View>

            <View>
              <TextInput
                style={{
                  marginHorizontal: "1%",
                  marginBottom: "2%",
                  marginTop: "5%",
                  backgroundColor: "white",
                  minHeight: "10%",
                  fontSize: 25,
                }}
                mode="outlined"
                secureTextEntry={modalConfPassSecure}
                label="Confirm Password"
                placeholder="Re-Enter Password"
                outlineColor="black"
                multiline={false}
                activeOutlineColor="blue"
                value={modalConfPass}
                onChangeText={(text) => setModalConfPass(text)}
              />
              {modalConfPass !== "" && (
                <TouchableOpacity
                  onPress={() => {
                    setModalConfPassSecure(!modalConfPassSecure);
                  }}
                  style={{ position: "absolute", right: 20, top: 30 }}
                >
                  <FontAwesomeIcon
                    icon={modalConfPassSecure ? faEyeSlash : faEye}
                    size={30}
                  />
                </TouchableOpacity>
              )}
            </View>

            <View>
              {modalNewPass &&
                modalConfPass &&
                modalNewPass !== modalConfPass && (
                  <Text style={{ color: "red" }}>
                    New Password and Confirm Password does not match
                  </Text>
                )}
            </View>

            <View style={{ alignItems: "center", marginTop: 40 }}>
              <ThemedButton
                name="bruce"
                type="primary"
                backgroundColor="green"
                width={150}
                disabled={false}
                raiseLevel={5}
                onPress={() => {
                  setGetOtp(false);
                  setTypeOtp(false);
                  setChangePass(false);
                }}
              >
                RESET PASSWORD
              </ThemedButton>
            </View>
          </View>
        </View>
      </Modal> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
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

export default ForgotPassword;
