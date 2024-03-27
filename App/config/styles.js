import { Platform } from "react-native";
import colors from "./colors";

export default {
  text: {
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        fontSize: 20,
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 18,
      },
    }),
    color: colors.dark,
  },
};
