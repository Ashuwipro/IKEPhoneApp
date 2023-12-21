import React from "react";
import { View, Text } from "react-native";
import Login from "./Login";
import Register from "./Register";

function LoginOrRegister() {
  const [showLogin, setShowLogin] = React.useState(true);

  const changeView = () => {
    setShowLogin(!showLogin);
  };

  return (
    <View>
      {showLogin ? (
        <Login viewChange={changeView} />
      ) : (
        <Register viewChange={changeView} />
      )}
    </View>
  );
}

export default LoginOrRegister;
