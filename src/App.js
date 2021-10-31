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

import AllOrders from "./components/AllOrders/AllOrders";
import Review from "./components/Reviews/Review";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Shared/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/about'>
              <About></About>
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
            <PrivateRoute path='/manageBooking'>
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path='/createReview'>
              <Review></Review>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
