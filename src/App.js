import FoodList from './components/FoodList/FoodList';
import { useState } from 'react';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

const App = () => {
  // const [allFoods, setAllFoods] = useState(foods);

  // return <div className="App"></div>;
  return (
    <div>
      <FoodList />
      {/* <h2 className="title">Food List</h2>
      <div className="food-list-ctn">
        {allFoods.map((recipe, index) => {
          return (
            <div key={index}>
              <FoodBox food={recipe} />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
export default App;

// inline style for width --> style={{ width: 150 }}
