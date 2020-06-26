import { StyleSheet, I18nManager } from "react-native";
import Constants from "../../config/constants";
import { normalizedHeight, normalizedWidth } from "../../config/common";
import { ceil } from "react-native-reanimated";

const styles = StyleSheet.create({
   container:{
    // width: 400, 
    height: 400, 
    alignItems: "center",
    justifyContent: "center",

  },
  bgColor:{
    backgroundColor: "white",
  },
  headingView:{
    flexDirection: 'row', 
    padding: 20,
  },
  contentOne:{
    fontSize: 15, 
    // marginTop: 2
  },
  contentTwo:{
    fontSize: 15, 
    fontWeight :"bold"
  },
  landingImageContainer:{
    // padding: 20,
    // marginTop: 20, 
    alignItems: "center"
  },
  landingImage:{
    height: 350, 
    width: 320,
    backgroundColor: "black", 
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15 
  },
  buttonContainer:{
    width: 320, 
    height: 50, 
    backgroundColor: "black", 
    alignItems: "center",
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
  },
  buttonText:{
    color: "white", 
    fontSize: 20, 
    marginTop: 5
  },
  mealsContainer:{
    flexDirection: 'row', 
    padding: 20
  },
  commonFlex:{
    flex: 1
  },
  mealsFont:{
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
    marginTop: 2
  },
  viewallText:{
    fontSize: 15, 
    marginTop: 3, 
    textAlign: "right", 
    color: "grey"
  },
  recBar:{
    height: 12,
    width: 6, 
    backgroundColor: "grey"
  },
  termsTextColored: {
    fontSize: 13,
    textAlign: "left",
    color: "rgb(100, 171, 235)",
    fontFamily: Constants.Fonts.REGULAR,
  },
  routineName:{
    marginLeft: 20
  },
  routineImageContainer:{
    padding: 20,
  },
  routineImage:{
    height: 200, 
    width: 320,
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15 
  },
  routineMainContentContainer:{
    width: 320, 
    borderColor: "grey",
    borderWidth: 0.5,
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
  },
  routineContentContainer:{
    width: 350, 
    flexDirection: 'row',
    padding: 15
  },
  routineContentFont:{
    fontFamily: "Montserrat-Medium",
    // fontFamily: Constants.Fonts.MEDIUM,
    fontSize: 14
  },
  routineCalories:{
    fontFamily: "Montserrat-Medium",
    fontSize: 13,
    marginRight:20, 
    textAlign: "right", 
    color: "grey"
  },
  routineSubContentContainer:{
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  routineSubContentFont:{
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
    marginTop: 5
  },
});

export default styles;