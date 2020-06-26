import { StyleSheet, I18nManager } from "react-native";
import Constants from "../../config/constants";
import { normalizedHeight, normalizedWidth } from "../../config/common";
import { ceil } from "react-native-reanimated";

const styles = StyleSheet.create({
   container:{
    width: 120, 
    height: 80, 
    backgroundColor: "white", 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    borderColor: "grey",
    borderWidth: 0.5,
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  containerSelected:{
    width: 120, 
    height: 80, 
    backgroundColor: "black", 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    borderColor: "grey",
    borderWidth: 0.5,
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
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
  },
  selectedLabel:{
    color: "white",
    fontFamily: "Montserrat-Medium", 
  },
});

export default styles;