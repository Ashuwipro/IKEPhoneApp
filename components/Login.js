import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Switch } from "react-native-switch";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEye,
  faEyeSlash,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ThemedButton } from "react-native-really-awesome-button";
import {
  faApple,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ForgotPassword from "./ForgotPassword";
import registerUser from "./database/registeredUser.json";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [secure, setSecure] = React.useState(true);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalEmail, setModalEmail] = React.useState("");
  const [modalPhone, setModalPhone] = React.useState("");

  const [getOtp, setGetOtp] = React.useState(false);
  const [typeOtp, setTypeOtp] = React.useState(false);
  const [changePass, setChangePass] = React.useState(false);

  const [time, setTime] = React.useState(60);
  const [otp1, setOtp1] = React.useState("");
  const [otp2, setOtp2] = React.useState("");
  const [otp3, setOtp3] = React.useState("");
  const [otp4, setOtp4] = React.useState("");
  const [forgot, SetForgot] = React.useState(false);

  const [modalNewPass, setModalNewPass] = React.useState("");
  const [modalNewPassSecure, setModalNewPassSecure] = React.useState(true);
  const [modalConfPass, setModalConfPass] = React.useState("");
  const [modalConfPassSecure, setModalConfPassSecure] = React.useState(true);

  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  const change = props.viewChange;

  const changeForgot = () => {
    SetForgot(!forgot);
  };

  React.useEffect(() => {
    if (otp1 && otp2 && otp3 && otp4) {
      console.log(otp1 + "" + otp2 + "" + otp3 + "" + otp4);
    }
  }, [otp1, otp2, otp3, otp4]);

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
    if (typeOtp) {
      const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
      if (time === 0) {
        setTime(60);
      }
      return () => clearInterval(timer);
    }
  }, [time, typeOtp]);

  const generateOTP = (length) => {
    const digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  };

  const checkUser = (email, pass) => {
    for (var user in registerUser["users"]) {
      if (
        registerUser["users"][user]["email"] === email &&
        registerUser["users"][user]["password"] === pass
      ) {
        console.log("user found in the file");
        break;
      }
    }
  };

  const validateEmail = (email) => {
    if (email == "") return true;
    for (var user in registerUser["users"]) {
      if (registerUser["users"][user]["email"] === email) {
        return true;
      }
    }
    return false;
  };

  const checkEmail = (email) => {
    return (
      email == "" ||
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    );
  };

  const checkPassword = (pass) => {
    return pass !== "";
  };

  return (
    <View>
      <View
        style={{
          marginVertical: 20,
          marginTop: 40,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor="green"
          textColor="black"
          width={70}
          height={70}
          disabled={false}
          raiseLevel={5}
          onPress={() => {
            console.log("Github pressed!!!");
          }}
        >
          <FontAwesomeIcon
            icon={faGithub}
            size={35}
            style={{ color: "white", paddingHorizontal: 20 }}
          />
        </ThemedButton>
        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor="black"
          textColor="black"
          width={70}
          height={70}
          disabled={false}
          raiseLevel={5}
          onPress={() => {
            console.log("Apple pressed!!!");
          }}
        >
          <FontAwesomeIcon
            icon={faApple}
            size={35}
            style={{ color: "white", paddingHorizontal: 20 }}
          />
        </ThemedButton>
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
            console.log("Twitter pressed!!!");
          }}
        >
          <FontAwesomeIcon
            icon={faTwitter}
            size={35}
            style={{ color: "white", paddingHorizontal: 20 }}
          />
        </ThemedButton>
        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor="red"
          textColor="black"
          width={70}
          height={70}
          disabled={false}
          raiseLevel={5}
          onPress={() => {
            console.log("Instagram pressed!!!");
          }}
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size={35}
            style={{ color: "white", paddingHorizontal: 20 }}
          />
        </ThemedButton>
      </View>
      <View style={{ marginVertical: 30, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          or use your email account
        </Text>
      </View>
      <View>
        <TextInput
          style={{
            marginHorizontal: "5%",
            marginBottom: "2%",
            marginTop: "10%",
            backgroundColor: "white",
            minHeight: "10%",
            fontSize: 20,
          }}
          mode="outlined"
          label="Email"
          placeholder="Enter your email"
          outlineColor="black"
          multiline={false}
          activeOutlineColor="blue"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      {/* if email not correct then display invalid email message */}
      {!checkEmail(email) && (
        <View>
          <Text style={{ marginLeft: "7%", color: "red" }}>Invalid email</Text>
        </View>
      )}
      {/* if email correct but not in database */}
      {checkEmail(email) && !validateEmail(email) && (
        <View>
          <Text style={{ marginLeft: "7%", color: "orange" }}>
            Email not found in database
          </Text>
        </View>
      )}
      {/* if email correct and also in database */}
      {checkEmail(email) && validateEmail(email) && email !== "" && (
        <View>
          <Text style={{ marginLeft: "7%", color: "green" }}>
            Email found in database
          </Text>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            marginHorizontal: "5%",
            marginBottom: "2%",
            marginTop: "5%",
            backgroundColor: "white",
            minHeight: "10%",
            fontSize: 20,
            flex: 1,
          }}
          mode="outlined"
          secureTextEntry={secure}
          label="Password"
          placeholder="Enter your password"
          outlineColor="black"
          multiline={false}
          activeOutlineColor="blue"
          value={pass}
          onChangeText={(text) => setPass(text)}
        />
        {pass !== "" && (
          <TouchableOpacity
            onPress={() => {
              setSecure(!secure);
            }}
            style={{ position: "absolute", right: 40, top: 40 }}
          >
            <FontAwesomeIcon icon={secure ? faEyeSlash : faEye} size={30} />
          </TouchableOpacity>
        )}
      </View>

      {/* check if password is in correct format */}

      {checkPassword(pass) && (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Text style={{ color: "red", marginLeft: "7%", paddingRight: "2%" }}>
            Password format not correct
          </Text>
          <View>
            <FontAwesomeIcon icon={faInfoCircle} size={20} />
          </View>
        </View>
      )}

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            marginLeft: 30,
            marginVertical: 30,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Switch
            value={isEnabled}
            onValueChange={() => {
              setIsEnabled(!isEnabled);
            }}
            activeText="Yes"
            inActiveText="No"
            circleSize={30}
          />
          <Text style={{ marginTop: 5, marginLeft: isEnabled ? 17 : 5 }}>
            Remember me
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginVertical: 30,
            marginTop: 33,
            display: "flex",
            marginRight: 25,
            flexDirection: "row",
          }}
        >
          <Text
            style={{ color: "blue", fontSize: 15 }}
            // onPress={() => {
            //   setGetOtp(true);
            // }}
            onPress={() => {
              SetForgot(!forgot);
            }}
          >
            Forgot Password?
          </Text>
        </View>
      </View>
      {/* <SafeAreaView>
        <Modal transparent={true} visible={true} animationType="slide">
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "top",
              position: "absolute",
              marginTop: 30,
            }}
          >
            <View
              style={{
                width: "95%",
                backgroundColor: "white",
                padding: 20,
                margin: 10,
                borderRadius: 5,
                shadowColor: "black",
                elevation: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                IKE Verify
              </Text>

              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text>Dear User, </Text>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "bold",
                    color: "blue",
                  }}
                >
                  {generateOTP(4)}
                </Text>
                <Text> is the code to verify your account.</Text>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView> */}
      {forgot && <ForgotPassword change={changeForgot} />}
      <View style={{ marginHorizontal: 15 }}>
        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor="green"
          textColor="black"
          width={"100%"}
          height={75}
          disabled={false}
          raiseLevel={5}
          onPress={checkUser.bind(this, email, pass)}
        >
          LOGIN
        </ThemedButton>
      </View>
      <View
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 15 }}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            change();
          }}
        >
          <Text style={{ marginLeft: 5, color: "blue", fontSize: 15 }}>
            Register here
          </Text>
        </TouchableOpacity>
      </View>
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

export default Login;
