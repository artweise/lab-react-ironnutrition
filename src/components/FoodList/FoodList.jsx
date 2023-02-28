import foodsData from '../../foods.json';
import FoodBox from '../FoodBox/FoodBox';
import AddFoodForm from '../AddFoodForm/AddFoodForm';
import { useState } from 'react';
import { Card, Col, Button } from 'antd';
import './style.css';

const FoodList = () => {
  const [foods, setFoods] = useState(foodsData);
  const [foodsToDisplay, setFoodsToDisplay] = useState(foodsData);

  const addNewFood = (newFood) => {
    const updateListOfFoods = [newFood, ...foods]; // adding the new food to the array of all
    const updateDisplayList = [newFood, ...foodsToDisplay]; //updating the display state of all foods

    setFoods(updateListOfFoods);
    setFoodsToDisplay(updateDisplayList);
  };

  return (
    <div>
      <AddFoodForm addNewFood={addNewFood} />
      <div className="title">
        <h2>Food List</h2>
      </div>
      <div className="food-list-ctn">
        {foods.map((recipe, index) => (
          <div key={index}>
            <FoodBox food={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
