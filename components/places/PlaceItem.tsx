import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Place } from "../../models/place";

type PlaceItemProps = {
  place: Place;
  onSelect: () => void
};
const PlaceItem = ({ place, onSelect }: PlaceItemProps) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{uri: place.image}} />
      <Text>{place.title}</Text>
      <Text>{place.address}</Text>
    </Pressable>
  );
};
export default PlaceItem;

const styles = StyleSheet.create({
  
})
