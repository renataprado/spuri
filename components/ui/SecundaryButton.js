import { Button } from "@rneui/base";

function SecundaryButton ({children, onPress}){

  return(
    <Button
    title={children}
    onPress={onPress}
    titleStyle={{ fontWeight: "700", color: "lightblue"  }}
    buttonStyle={{
      backgroundColor: "transparent",
      borderColor: "lightblue",
      borderWidth: 2,
      borderRadius: 5,
    }}
    containerStyle={{
      width: "100%",
      height: 60,
    }}
  />
  );
}

export default SecundaryButton;

