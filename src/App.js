import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Shared/Header/Header";
import CreatePackage from "./components/CreatePackage/CreatePackage";
import AuthProvider from "./Context/AuthProvider";
import Login from "./components/Login/Login/Login";
import Booking from "./components/Booking/Booking";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Orders from "./components/Orders/Orders";
function App() {
  return (
    <div className=''>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/createPackage'>
              <CreatePackage></CreatePackage>
            </Route>
            <PrivateRoute path='/booking/:bookingId'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/order'>
              <Orders></Orders>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
