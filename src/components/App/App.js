import { Route, HashRouter as Router } from "react-router-dom";
// routes
import Home from "../routes/Home/Home";
//blogs route
import MayUpdate from "../routes/Blog/MayUpdate";
import AndroidBetaTwo from "../routes/Blog/AndroidBetaTwo";

//Footer
import Footer from "../Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/5.R-May-2021-update" exact component={MayUpdate} />
        <Route path="/3-R-android-11-beta-2" exact component={AndroidBetaTwo} />
      </Router>
      <Footer />
    </div>
  );
}
export default App;
