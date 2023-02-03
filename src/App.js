import "./App.css";
import ProductList from "./Components/ProductList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ProductList />} />
      </Routes>
      </div>
  );
}

export default App;
