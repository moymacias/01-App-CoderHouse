import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (title, image) => {
  return async (dispatch) => {
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
    dispatch({ type: ADD_PLACE, payload: { title, image: Path } });
  };
};
