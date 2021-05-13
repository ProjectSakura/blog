import { Route, HashRouter as Router } from "react-router-dom";
// routes
import Blog from "../routes/Blog/Blog";
import Home from "../routes/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
      </Router>
    </div>
  );
}
export default App;
