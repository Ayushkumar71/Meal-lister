import { useEffect } from "react";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, FlatList, StyleSheet } from "react-native";

function MealsOverviewScreen({ route, navigation }) {
  // Below is a string of a list of one element
  const catId = route.params.categoryId;

  // look into detail how the second line works
  const displayedMeals = MEALS.filter((mealData) => {
    return mealData.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    // [] is the access the first(& only ) element(an object) of the array.
    const categoryTitle = CATEGORIES.filter((category) => {
      return category.id === catId;
    })[0].title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
