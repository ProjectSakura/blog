import { Route, HashRouter as Router } from "react-router-dom";
//routes
import Home from "../routes/Home/Home";
import Blog from "../routes/Blog/Blog";

function App(){
    return(
        <div>
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/blog" exact component={Blog}/>
            </Router>
        </div>
    )
}
export default App;