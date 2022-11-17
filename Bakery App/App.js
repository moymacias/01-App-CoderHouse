import { useFonts } from "expo-font";
import ShopNavigator from "./src/navigation/ShopNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Tillana: require("./src/assets/fonts/Tillana-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <ShopNavigator />;
}
