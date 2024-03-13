import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { Switch } from "react-native-switch";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEye,
  faEyeSlash,
  faFaceKissBeam,
  faSquareFacebook,
} from "@fortawesome/free-solid-svg-icons";
import { ThemedButton } from "react-native-really-awesome-button";
import {
  faApple,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import registeredUser from "./database/registeredUser.json";

function Register(props) {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [name, setName] = React.useState("");
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [secure, setSecure] = React.useState(true);

  const change = props.viewChange;

  const saveUser = (email, name, pass) => {
    console.log({ email, name, pass });
    //code to save to database or local json file
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
            minHeight: "8%",
            fontSize: 25,
          }}
          mode="outlined"
          label="Email"
          placeholder="Enter your email"
          outlineColor="black"
          multiline={false}
          activeOutlineColor="blue"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View>
        <TextInput
          style={{
            marginHorizontal: "5%",
            marginBottom: "2%",
            marginTop: "5%",
            backgroundColor: "white",
            minHeight: "8%",
            fontSize: 25,
          }}
          mode="outlined"
          label="Name"
          placeholder="Enter your name"
          outlineColor="black"
          multiline={false}
          activeOutlineColor="blue"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

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
            minHeight: "8%",
            fontSize: 25,
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

      <View style={{ marginHorizontal: 15, marginTop: 30 }}>
        <ThemedButton
          name="bruce"
          type="primary"
          backgroundColor="green"
          textColor="black"
          width={"100%"}
          height={75}
          disabled={false}
          raiseLevel={5}
          onPress={saveUser.bind(this, email, name, pass)}
        >
          REGISTER
        </ThemedButton>
      </View>

      {/* two modal, one for showing success message and button 
      proceed to Login
      another modal for showing error message and button
      try again */}

      <View
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 15 }}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            change();
          }}
        >
          <Text style={{ marginLeft: 5, color: "blue", fontSize: 15 }}>
            Login here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;
