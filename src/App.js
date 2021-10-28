import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Shared/Header/Header";
import CreatePackage from "./components/CreatePackage/CreatePackage";
function App() {
  return (
    <div className=''>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/createPackage'>
            <CreatePackage></CreatePackage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
