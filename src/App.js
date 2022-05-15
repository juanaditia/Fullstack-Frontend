import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";

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

          <Route path="/edit/:id">
            <UpdateProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
