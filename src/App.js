import './App.css';
import DropdownComponent from "./components/DropdownComponent";
import FoodComponent from "./components/FoodComponent";
import { useState} from "react";
import MenuData from './data/MenuData';

function App() {

  const [food,setFood] = useState(MenuData);

  const changeFoodData = (e)=>{
    const category = e.target.value;
    if(category === "เมนูทั้งหมด"){
        setFood(MenuData);
    }else{
      const result = MenuData.filter((item)=>{
        return item.menu === category;
      })
      setFood(result);
    }
  }

  return (
    <div className="container">
        <DropdownComponent changeFoodData={changeFoodData}/>
        <div className="content">
            {food.map((data,index)=>{
              return (
                <FoodComponent key={index} {...data}/>
              )
            })}
        </div>
    </div>
  );
}

export default App;
