import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Router>
      <div className="w-2/3 mx-auto">
        <h2>Welcome</h2>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>

          <Route path="/add">
            <AddProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
