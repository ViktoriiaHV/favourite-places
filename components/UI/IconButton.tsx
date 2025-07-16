import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

type IconButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  icon: ComponentProps<typeof Ionicons>["name"];
  size?: number;
  color?: string;
  style?: object
};

function IconButton({ onPress, icon, size = 24, color, style }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.buttonContainer, style]}>
        <Ionicons size={size} name={icon} color={color} />
      </View>
    </Pressable>
  );
}
export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  pressed: {
    opacity: 0.75
  }
});