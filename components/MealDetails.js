import { View, StyleSheet, Text } from "react-native";

function MealDetails({ duration, complexity, affordability, style }) {
  return (
    <View style={styles.ItemsContainer}>
      <Text style={[styles.item, style]}>{duration}</Text>
      <Text style={[styles.item, style]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.item, style]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  ItemsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  item: {
    marginHorizontal: 4,
    fontSize: 13,
  },
});
