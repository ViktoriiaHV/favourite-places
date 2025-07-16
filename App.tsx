import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import IconButton from "./components/UI/IconButton";
import { AddPlace } from "./screens/AddPlace";
import AllPlaces from "./screens/AllPlaces";
import { Colors } from "./constants/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerRight: ({ tintColor }) => (
              <IconButton
                color={tintColor}
                icon="add"
                onPress={() => navigation.navigate("AddPlace")}
              />
            ),
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700}
          })}
          initialRouteName="AllPlaces"
        >
          <Stack.Screen
            name="AllPlaces"
            options={{ title: "Your Favourite Places" }}
            component={AllPlaces}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{ presentation: "modal", title: "Addn a New Place" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
