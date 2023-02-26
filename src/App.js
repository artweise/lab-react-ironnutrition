import foods from './foods.json';
import { useState } from 'react';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

const App = () => {
  const [allDishes, setAllDishes] = useState(foods);

  // return <div className="App"></div>;
  return (
    <div>
      {allDishes.map((dish, index) => {
        return (
          <div key={index}>
            <p>{dish.name}</p>
            <img src={dish.image} className="dish-image" />
          </div>
        );
      })}
    </div>
  );
};
export default App;

// inline style for width --> style={{ width: 150 }}
