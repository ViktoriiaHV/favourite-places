import Constants from "expo-constants";

const GOOGLE_API_KEY = Constants.expoConfig?.extra?.googleApiKey;

export const getMapPreview = (lat: number, lng: number) => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${lng}}&key=${GOOGLE_API_KEY}`;
};
