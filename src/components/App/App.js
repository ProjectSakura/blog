import { Route, HashRouter as Router } from "react-router-dom";
// routes
import Home from "../routes/Home/Home";
//blogs route
import MayUpdate from "../routes/Blog/MayUpdate";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/5.R-May-2021-update" exact component={MayUpdate} />
      </Router>
    </div>
  );
}
export default App;
