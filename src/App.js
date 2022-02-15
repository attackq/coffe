import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";


function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" >
                    <Home />
                    {/* <Header bgurl={'Mainbg'} /> */}
                </Route>
                <Route path="/ourcoffee">
                    {/* <Header bgurl={'ourcoffe'} /> */}
                </Route>
                <Route path="/about">
                    <div>dfsfsfs</div>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
