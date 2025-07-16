import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  ImagePickerResult,
} from "expo-image-picker";
import { useState } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";

import { Colors } from "../../constants/Colors";
import OutlinedButton from "../UI/OutlinedButton";

const ImagePicker = () => {
  const [permissionInfo, requestPermissionsInfo] = useCameraPermissions();

  const [image, setImage] = useState<ImagePickerResult | null>(null);
  const imageUri = image?.assets && image.assets[0].uri;

  const verifyPermissions = async () => {
    if (permissionInfo?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient persmissions",
        "You need to grant camera permissions to use the app"
      );
      return false;
    }
    if (permissionInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermissionsInfo();

      return permissionResponse.granted;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setImage(image);
  };

  return (
    <View>
      {imageUri && (
        <View style={styles.imagePreview}>
          <Image style={styles.image} source={{ uri: imageUri }} />
        </View>
      )}
      <OutlinedButton icon='camera' onPress={takeImageHandler}>
        {!imageUri ? "take image" : "Take another image"}
      </OutlinedButton>
    </View>
  );
};
export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 300,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
