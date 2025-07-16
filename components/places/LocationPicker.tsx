import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
  LocationObject,
} from "expo-location";
import { useState } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";

import { Colors } from "../../constants/Colors";
import { getMapPreview } from "../../util/location";
import OutlinedButton from "../UI/OutlinedButton";

const LocationPicker = () => {
  const [permissionsInfo, requestPermissionsInfo] = useForegroundPermissions();
  const [location, setLocation] = useState<LocationObject>();

  const lat = location?.coords.latitude;
  const lng = location?.coords.longitude;

  const verifyPermissions = async () => {
    if (permissionsInfo?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient persmissions",
        "You need to grant camera permissions to use the app"
      );
      return false;
    }
    if (permissionsInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermissionsInfo();

      return permissionResponse.granted;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();

    setLocation(location);
    console.log(location);
  };

  const pickOnMapHandler = () => {};

  return (
    <View>
      {lat && lng && (
        <View style={styles.mapPreview}>
          <Image style={styles.image} source={{ uri: getMapPreview(lat, lng) }} />
        </View>
      )}
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate me
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on map
        </OutlinedButton>
      </View>
    </View>
  );
};
export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 300,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: 'hidden'
  },
  image: {
    width: "100%",
    height: "100%",
    // borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

/**
 * https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=AIzaSyDSUz_HgFQHlXGorbqY38gMxFQIusqmuXY&signature=YOUR_SIGNATURE
 */
