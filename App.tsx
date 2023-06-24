const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./src/pages/login";
import RegisterIcon from "./src/pages/register";
import ThngTinCNhn from "./src/pages/ThngTinCNhn";
import ThngTinHS from "./src/pages/ThngTinHS";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Montserrat_regular: require("./src/assets/fonts/Montserrat_regular.ttf"),
    Montserrat_semibold: require("./src/assets/fonts/Montserrat_semibold.ttf"),
    Montserrat_bold: require("./src/assets/fonts/Montserrat_bold.ttf"),
    Inter_regular: require("./src/assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./src/assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./src/assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./src/assets/fonts/Inter_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ThngTinCNhn"
              component={ThngTinCNhn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ThngTinHS"
              component={ThngTinHS}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
