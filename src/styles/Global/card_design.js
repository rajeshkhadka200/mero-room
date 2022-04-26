import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  actual_card_con: {
    width: wp("90%"),
    height: 210,
    marginRight: 10,
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },

  img_des: {
    width: "100%",
    backgroundColor: "rgba(43, 41, 41, 0.85);",
    height: 70,
    position: "absolute",
    left: 0,
    bottom: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  dec_address: {
    color: "white",
    fontSize: 15,
    fontFamily: "500",
  },
  dec_price: {
    color: "rgba(255, 165, 0, 1)",
    fontSize: 15,
    fontFamily: "500",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar_con: {
    borderColor: "#2374E1",
    borderWidth: 1.5,
    marginRight: 10,
    borderRadius: 100,
  },
});
