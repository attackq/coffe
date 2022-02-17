import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Linkedpage from "./pages/linkedpage/Linkedpage";
import Choosencoffee from "./pages/choosencoffee/Choosencoffee";


function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route path="/ourcoffee">
                    <Linkedpage />
                </Route>
                <Route path="/about">
                    {/* <Linkedpage bg={'for-your'} title={'For your pleasure'} /> */}
                </Route>
                <Route path="/coffeeItem">
                    <Choosencoffee />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
