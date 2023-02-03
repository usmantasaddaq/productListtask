import "./App.css";
import ProductList from "./Components/ProductList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;
