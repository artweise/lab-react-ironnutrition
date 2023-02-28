import foods from '../../foods.json';
import FoodBox from '../FoodBox/FoodBox';
import { useState } from 'react';
import { Card, Col, Button } from 'antd';
import './style.css';

const FoodList = () => {
  const [allFoods] = useState(foods);

  return (
    <div>
      <h2 className="title">Food List</h2>
      <div className="food-list-ctn">
        {allFoods.map((recipe, index) => (
          <div key={index}>
            <FoodBox food={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
