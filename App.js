const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login1 from "./screens/Login1";
import Register from "./screens/Register";
import Permission from "./screens/Permission";
import PersonalHealthIndex from "./screens/PersonalHealthIndex";
import PersonalInformation from "./screens/PersonalInformation";
import MedicalHistory from "./screens/MedicalHistory";
import Personal from "./screens/Personal";
import MainMenuPatient from "./screens/MainMenuPatient";
import MainMenuDoctor from "./screens/MainMenuDoctor";
import RegisterIcon from "./screens/RegisterIcon";
import MnHnhChnh from "./screens/MnHnhChnh";
import ThngTinCNhn from "./screens/ThngTinCNhn";
import ThngTinHS from "./screens/ThngTinHS";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Montserrat_regular: require("./assets/fonts/Montserrat_regular.ttf"),
    Montserrat_semibold: require("./assets/fonts/Montserrat_semibold.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    Inter_light: require("./assets/fonts/Inter_light.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Permission"
              component={Permission}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalHealthIndex"
              component={PersonalHealthIndex}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalInformation"
              component={PersonalInformation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MedicalHistory"
              component={MedicalHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Personal"
              component={Personal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainMenuPatient"
              component={MainMenuPatient}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainMenuDoctor"
              component={MainMenuDoctor}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register1"
              component={RegisterIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MnHnhChnh"
              component={MnHnhChnh}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ThngTinKhmChaBnh"
              component={ThngTinCNhn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ThngTinCNhn"
              component={ThngTinHS}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Login1 />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
