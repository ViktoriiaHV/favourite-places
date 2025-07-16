import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { Colors } from "../../constants/Colors";
export { Ionicons } from "@expo/vector-icons";

type OutlinedButtonProps = {
  onPress: () => void;
  icon: ComponentProps<typeof Ionicons>["name"];
  children: React.ReactNode;
};

const OutlinedButton = ({ children, icon, onPress }: OutlinedButtonProps) => {
  return (
    <Pressable style={({pressed})=> [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <Ionicons name={icon} style={styles.icon} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};
export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.primary500,
  },
  pressed: {
    opacity: 0.75
  },
  icon: {
    marginRight: 6,
    color: Colors.primary500,
    fontSize: 16
  },
  text: {
    color: Colors.primary500,
    textTransform: 'uppercase',
    fontSize: 16
  }
})
