import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Uploaded from "./Uploaded";
import Approved from "./Approved";

const Tab = createMaterialTopTabNavigator();

function QuestionsDetails() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Uploaded" component={Uploaded} />
      <Tab.Screen name="Approved" component={Approved} />
    </Tab.Navigator>
  );
}

export default QuestionsDetails;
