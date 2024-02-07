import { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Product from "./components/Product/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <ItemListContainer greetingMessage="Welcome to Modern Tools World" />
    </>
  );
}

export default App;
