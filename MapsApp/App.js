import React from "react";
import PlaceNavigator from "./src/navigation/PlaceNavigator";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <PlaceNavigator />
    </Provider>
  );
}
