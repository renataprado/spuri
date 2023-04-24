import { Button } from "@rneui/base";

function PrimaryButton ({children, onPress}){

  return(
    <Button
    title={children}
    onPress={onPress}
    titleStyle={{ fontWeight: "700" }}
    buttonStyle={{
      backgroundColor: "lightblue",
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 5,
    }}
    containerStyle={{
      width: "100%",
      height: 60,
    }}
  />
  );
}

export default PrimaryButton;

