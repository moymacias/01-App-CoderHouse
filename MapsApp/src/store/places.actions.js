import * as FileSystem from "expo-file-system";
import Map from "../constants/Map";

export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (title, image, location) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${Map.API_KEY}`
    );

    if (!response.ok)
      throw new Error("No se ha podido comunicar con Google Mas API");

    const resData = await response.json();

    if (!resData.results)
      throw new Error(
        "No se han encontrado datos para las coordenadas seleccionadas"
      );

    const address = resData.results[0].formatted_address;
    console.log(address);
    console.log(location)

    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;

    try {
      FileSystem.moveAsync({
        from: image,
        to: Path,
      });
    } catch (err) {
      console.log(err.message);
      throw err;
    }
    dispatch({
      type: ADD_PLACE,
      payload: {
        title,
        image: Path,
        address,
        lat: location.lat,
        lng: location.lng,
      },
    });
  };
};
