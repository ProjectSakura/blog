import { Route, HashRouter as Router, Switch } from "react-router-dom";
// styles
import { Body } from "./styles";
// routes
import Home from "../routes/Home/Home";
//blogs route
import MayUpdate1 from "../routes/Blog/MayUpdate1";
import AprilUpdate1 from "../routes/Blog/AprilUpdate1";
import MarchUpdate1 from "../routes/Blog/MarchUpdate1";
import MarchUpdate2 from "../routes/Blog/MarchUpdate2";
import MarchUpdate3 from "../routes/Blog/MarchUpdate3";
import AndroidBetaTwo from "../routes/Blog/AndroidBetaTwo";
import AndroidBetaThree from "../routes/Blog/AndroidBetaThree";
import FourAndroidUpdate from "../routes/Blog/FourAndroidUpdate";
import FourRFebUpdate from "../routes/Blog/FourRFebUpdate";
import FourRJanUpdate from "../routes/Blog/FourRJanUpdate";
import AndroidElevenBeta from "../routes/Blog/AndroidElevenBeta";
// Navbar
import Navbar from "../Navbar/Navbar";
//Footer
import Footer from "../Footer/Footer";
import OurSponsor from "../routes/Blog/OurSponsor";

function App() {
  return (
    <Body>
      <Navbar />
      <Router basename="/blogs">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/5.R-May-2021-update" exact component={MayUpdate1} />
          <Route path="/5.R-April-2021-update" exact component={AprilUpdate1} />
          <Route path="/gssoc-association-website-update-march" exact component={MarchUpdate1} />
          <Route path="/5.R-android-11-second-update-march" exact component={MarchUpdate2} />
          <Route path="/5.R-android-11-initial-release" exact component={MarchUpdate3} />
          <Route path="/3-R-android-11-beta-2" exact component={AndroidBetaTwo} />
          <Route path="/3.R-android-11-beta-3" exact component={AndroidBetaThree} />
          <Route path="/4.R-android-11-update" exact component={FourAndroidUpdate} />
          <Route path="/4.R-february-2021-update" exact component={FourRFebUpdate} />
          <Route path="/4.R-january-2021-update" exact component={FourRJanUpdate} />
          <Route path="/android-11-beta-1" exact component={AndroidElevenBeta} />
          <Route path="/oursponsor" exact component={OurSponsor} />
        </Switch>
        <Footer />
      </Router>
    </Body>
  );
}
export default App;
