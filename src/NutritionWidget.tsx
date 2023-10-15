import { useState, useEffect } from 'react';

const NutritionWidget = () => {
  const [nutritionData, setNutritionData]: any = useState({});
  const apiKey = 'a431318bd32245edb1d3ddebf242bb44';

  useEffect(() => {
    const id = 1095; // Spoonacular ID for blueberries

    fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`)

      .then((response) => {
        console.log(response);

        return response.json()
      })

      .then((data) => {
        console.log(data);
        setNutritionData(data);

      })
      .catch((error) => {
        console.error('Error fetching nutrition data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Nutritional Data for Blueberries (per serving)</h2>
      <ul>
        <p>Calories: {nutritionData.calories}</p>
        <p>Fat: {nutritionData.fat}</p>
        <p>Saturated Fat: {nutritionData.saturatedFat}</p>
        <p>Carbohydrates: {nutritionData.carbs}</p>
        <p>Net Carbohydrates: {nutritionData.netCarbohydrates}</p>
        <p>Sugar: {nutritionData.sugar}</p>
        <p>Cholesterol: {nutritionData.cholesterol}</p>
        <p>Sodium: {nutritionData.sodium}</p>
        <p>Protein: {nutritionData.protein}</p>
      </ul>
    </div>
  );
};

export default NutritionWidget;
