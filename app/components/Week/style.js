import { StyleSheet, I18nManager } from "react-native";
import Constants from "../../config/constants";
import { normalizedHeight, normalizedWidth } from "../../config/common";
import { ceil } from "react-native-reanimated";

const styles = StyleSheet.create({
   container:{
    marginTop: 10,
    paddingRight: 10,
    paddingLeft:20
  },
  bodypartsImage:{
    height:40, 
    width:40, 
    marginBottom: 5
  },
  bodypartsImagesSelected:{
    height:40, 
    width:40, 
    marginBottom: 5,
  },
  label:{
    color: "#999999",
    fontFamily: "Montserrat-Medium",
    fontSize: 14, 
  },
  selectedLabel:{
    color: "black",
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },
});

export default styles;