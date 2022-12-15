import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigation from "./AuthNavigation";
import BottomTabNavigator from "./BottomTabNavigator";
import { useSelector } from "react-redux";

export default () => {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>
      {userId ? <BottomTabNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
