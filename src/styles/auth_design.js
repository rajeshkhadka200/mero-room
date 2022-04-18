import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    marginTop: hp("20%"),
  },
  text: {
    color: "#000",
    fontSize: 30,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    backgroundColor: "#5B628F",
    width: wp("50%"),
    height: hp("25%"),
    borderRadius: 200,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    marginTop: 10,
    fontSize: hp("5%"),
    fontWeight: "bold",
    color: "#5B628F",
  },
  inputContainer: {
    paddingTop: hp("2%"),
    marginTop: 70,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: "grey",
    flex: 2,
    width: (Dimensions.get("window").width / 100) * 100,
    alignItems: "center",
    backgroundColor: "#ffff",
    height: (Dimensions.get("window").width / 100) * 100,
  },
  input: {
    backgroundColor: "#EFEFEF",
    paddingVertical: hp("2%"),
    paddingLeft: 30,
    width: (Dimensions.get("window").width / 100) * 80,
    borderRadius: 30,
    paddingRight: 30,
    marginTop: 20,
    fontSize: hp("2%"),
  },
  button: {
    width: (Dimensions.get("window").width / 100) * 80,
    backgroundColor: "#5B628F",
    borderRadius: 45,
    paddingVertical: hp("2%"),
    paddingHorizontal: 25,
    marginTop: 40,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: hp("2.5%"),
  },
  fText: {
    marginTop: 5,
    flex: 1,
    flexDirection: "row",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});