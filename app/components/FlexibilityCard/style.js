import { StyleSheet, I18nManager } from "react-native";
import Constants from "../../config/constants";
import { normalizedHeight, normalizedWidth } from "../../config/common";
import { ceil } from "react-native-reanimated";

const styles = StyleSheet.create({
   container:{
    // width: 400, 
    height: 220, 
    alignItems: "center",
    justifyContent: "center",

  },
   image:{
    height: 200, 
    width: 320,
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
   },
   description:{
    height: 200, 
    width: 320, 
    justifyContent: "center",
    // marginTop: 10,
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    backgroundColor:"white"
  },
  boldText:{
    fontSize: 15,
    color: "black",
    fontFamily: "Montserrat-Medium",
    paddingLeft:30,
    paddingRight:30,
    marginBottom: 10
    // textAlign: "left"
  },
  greyText:{
    fontSize: 15,
    color: "grey",
    fontFamily: "Montserrat-Medium",
    paddingLeft:30,
    paddingRight:30,
    marginBottom: 10
  }
});

export default styles;