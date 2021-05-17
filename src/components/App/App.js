import { Route, HashRouter as Router } from "react-router-dom";
// routes
import Home from "../routes/Home/Home";
//blogs route
import MayUpdate from "../routes/Blog/MayUpdate";
import AndroidBetaTwo from "../routes/Blog/AndroidBetaTwo";
import AndroidBetaThree from "../routes/Blog/AndroidBetaThree";

//Footer
import Footer from "../Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/5.R-May-2021-update" exact component={MayUpdate} />
        <Route path="/3-R-android-11-beta-2" exact component={AndroidBetaTwo} />
        <Route path="/3.R-android-11-beta-3" exact component={AndroidBetaThree} />
      </Router>
      <Footer />
    </div>
  );
}
export default App;