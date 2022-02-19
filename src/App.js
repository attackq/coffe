import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Linkedpage from "./pages/linkedpage/Linkedpage";
import Choosencoffee from "./pages/choosencoffee/Choosencoffee";
import Lastpage from "./pages/lastpage/Lastpage";


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
                    <Lastpage />
                </Route>
                <Route path="/coffeeItem/:id">
                    <Choosencoffee />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
