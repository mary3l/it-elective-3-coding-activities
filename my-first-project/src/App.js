import TextInput from "./components/TextInput";
import CheckBox from "./components/CheckBox";
import Category from "./components/Category";
import Header from "./components/Header";
import Items from "./components/Items";
import "./App.css";
import { useState } from "react";

const sportingGoods = [
  { id: 1, name: "Football", price: 49.99, stock: 0 },
  { id: 2, name: "Baseball", price: 9.99, stock: 1 },
  { id: 3, name: "Basketball", price: 29.99, stock: 2 },
];

const electronics = [
  { id: 1, name: "Ipod Touch", price: 99.99, stock: 0 },
  { id: 2, name: "IPhone 5", price: 399.99, stock: 0 },
  { id: 3, name: "Nexus 7", price: 199.99, stock: 0 },
];

function App() {
  const [textValue, setTextValue] = useState("");
  const [showOnlyStock, setShowOnlyStock] = useState(false);

  const handleClick = () => {
    alert("Clicked");
  };
  return (
    <div className="App">
      {textValue}
      <TextInput
        value={textValue}
        onChange={(e) => {
          setTextValue(e.target.value);
          console.log(e.target.value);
        }}
      />

      <CheckBox
        checked={showOnlyStock}
        onChange={(e) => setShowOnlyStock(e.target.checked)}
      />
      <button type="button" onClick={handleClick}>
        Submit
      </button>

      <table>
        <Header />
        <Category className="categoryName" categoryName="Sporting Goods" />
        <Items
          items={sportingGoods}
          query={textValue}
          showOnlyStock={showOnlyStock}
        />
      </table>
    </div>
  );
}

export default App;
