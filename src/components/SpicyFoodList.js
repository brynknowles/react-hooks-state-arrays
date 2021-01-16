import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisineFilter, setCuisineFilter] = useState("All")
  // console.log(foods)

  const filteredFoods = foods.filter((food) => {
    if (cuisineFilter === "All") {
      return true;
    } else {
      return food.cuisine === cuisineFilter;
    }
  })

  const foodArray = filteredFoods.map((food) =>  
    <li key={food.id} onClick={() => handleFoodClick(food.id)}> {food.name} | Cuisine Type: {food.cuisine} | Heat Level: {food.heatLevel} </li>
  )
  // console.log(foodArray)

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodList = [...foods, newFood]
    // console.log(newFoodList);
    setFoods(newFoodList)
  }

  function handleFoodClick(id) {
    console.log(id)
    const newFoodList = foods.filter((food) => food.id !== id)
    setFoods(newFoodList)
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        }
      } else {
        return food
      }
    });
    setFoods(newFoodArray)
  }

  function handleCuisineChange(event) {
    setCuisineFilter(event.target.value)
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodArray}</ul>
      <select name="filter" onChange={handleCuisineChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
