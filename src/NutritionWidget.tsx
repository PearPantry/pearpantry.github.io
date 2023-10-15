import { useState, useEffect } from "react";

const NutritionWidget = () => {
  const [nutritionData, setNutritionData]: any = useState(null);
  const apiKey = "08ad4558f9f945aebde9c55ad1f54589";

  useEffect(() => {
    const id = 1095; // Spoonacular ID for blueberries

    fetch(
      `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`
    )
      .then((response) => {
        console.log(response);

        return response.json();
      })

      .then((data) => {
        console.log(data);
        setNutritionData(data);
      })
      .catch((error) => {
        console.error("Error fetching nutrition data:", error);
      });
  }, []);

  return (
    <div>
      {nutritionData ? (
        <ul>
          <p>Calories: {nutritionData.calories}</p>
          <p>Fat: {nutritionData.fat}</p>
          <p>Saturated Fat: {nutritionData.nutrients[2].amount}</p>
          <p>Carbohydrates: {nutritionData.carbs}</p>
          <p>Net Carbohydrates: {nutritionData.nutrients[4].amount}</p>
          <p>Sugar: {nutritionData.nutrients[5].amount}</p>
          <p>Cholesterol: {nutritionData.nutrients[6].amount}</p>
          <p>Sodium: {nutritionData.nutrients[7].amount}</p>
          <p>Protein: {nutritionData.protein}</p>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NutritionWidget;
