import { StyleSheet, View, FlatList } from "react-native";
import ChipButton from "../ui/ChipButton";

const ChipsInput = ({ onChange, chipsData }) => {
  return (
    <View style={styles.rootContainer}>
      {chipsData.map((chip) => (
        <View style={styles.chipContainer} key={chip.id}>
          <ChipButton chip={chip} handleSelected={onChange} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    backgroundColor: "gray",
  },
  chipContainer: {
    marginVertical: 2,
  },
});

export default ChipsInput;
