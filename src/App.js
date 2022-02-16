import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Linkedpage from "./pages/linkedpage/Linkedpage";


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
            </Switch>
        </Router>
    )
}

export default App;
