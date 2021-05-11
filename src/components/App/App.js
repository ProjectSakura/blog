import { Route, HashRouter as Router } from "react-router-dom";
//routes
import Home from "../routes/Home/Home";
//styles
// import {Body} from "./styles";
function App(){
    return(
        <div>
            <Router>
                <Route path="/" exact component={Home}/>
            </Router>
        </div>
    )
}
export default App;