import React, { useState, useEffect } from 'react';

const NutritionWidget = () => {
  const [nutritionData, setNutritionData] = useState({});
  const apiKey = 'a431318bd32245edb1d3ddebf242bb44';

  useEffect(() => {
    const id = 1095; // Spoonacular ID for blueberries

    fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`)

      .then((response) => {
        console.log(response);
        
        return response.json()})
      
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
<p>Vitamin B12: {nutritionData.nutrients[9].amount} {nutritionData.nutrients[9].unit}</p>
<p>Selenium: {nutritionData.nutrients[10].amount} {nutritionData.nutrients[10].unit}</p>
<p>Phosphorus: {nutritionData.nutrients[11].amount} {nutritionData.nutrients[11].unit}</p>
<p>Vitamin B6: {nutritionData.nutrients[12].amount} {nutritionData.nutrients[12].unit}</p>
<p>Vitamin B3: {nutritionData.nutrients[13].amount} {nutritionData.nutrients[13].unit}</p>
<p>Magnesium: {nutritionData.nutrients[14].amount} {nutritionData.nutrients[14].unit}</p>
<p>Vitamin B5: {nutritionData.nutrients[15].amount} {nutritionData.nutrients[15].unit}</p>
<p>Potassium: {nutritionData.nutrients[16].amount} {nutritionData.nutrients[16].unit}</p>



      </ul>
    </div>
  );
};

export default NutritionWidget;
