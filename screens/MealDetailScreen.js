import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect } from "react";
import { MEALS } from "../data/dummy-data";
import { setEnabled } from "react-native/Libraries/Performance/Systrace";
import MealDetails from "../components/MealDetails";

function MealDetailScreen({ route, navigation }) {
  const mealName = route.params.mealName;
  const mealId = route.params.mealid;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  useEffect(() => {
    navigation.setOptions({ title: mealName });
  }, [mealName, navigation]);

  return (
    <View style={styles.parent}>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.image}
      ></Image>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        style={styles.details}
      />
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
      </View>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient} style={styles.text}>
          {" "}
          - {ingredient}
        </Text>
      ))}
      <Text style={styles.subtitle}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step} style={styles.text}>
          {" "}
          - {step}
        </Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  image: {
    height: 250,
    width: "100%",
    marginBottom: 10,
    justifyContent: "center",
  },
  details: {
    color: "white",
    fontSize: 12.4,
    fontWeight: "400",
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    marginBottom: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    marginTop: 20,
    margin: 4,
    padding: 6,
    borderBottomColor: "white",
    borderbottomwidth: 2,
  },
  text: {
    color: "#FBE9BB",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 12,
  },
});
