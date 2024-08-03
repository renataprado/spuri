import { StyleSheet, View, FlatList } from "react-native";
import ChipButton from "../ui/ChipButton";

const ChipsInput = ({ onChange, qualifier }) => {

  const { chipsData, exclusive } = qualifier;

  const handleOnChange = (updatedChip) => {
    const updatedChipsData = {
      chipsData: chipsData.map((chip) =>
        exclusive
          ? { ...chip, selected: chip.id === updatedChip.id }
          : chip.id === updatedChip.id ? updatedChip : chip
      )
    };

    onChange(updatedChipsData);
  }

  return (
    <View style={styles.rootContainer}>
      {chipsData.map((chip) => (
        <View style={styles.chipContainer} key={chip.id}>
          <ChipButton chip={chip} onChange={handleOnChange} />
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
