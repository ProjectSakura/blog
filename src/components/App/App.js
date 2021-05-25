import { Route, HashRouter as Router, Switch } from "react-router-dom";
// styles
import { Body } from "./styles";
// routes
import Home from "../routes/Home/Home";
//blogs route
import May2021Update from "../routes/Blog/May2021Update";
import GssocAssociationWebsiteUpdateMarch from "../routes/Blog/GssocAssociationWebsiteUpdateMarch";
import Android11SecondUpdateMarch from "../routes/Blog/Android11SecondUpdateMarch";
import Android11InitialRelease from "../routes/Blog/Android11InitialRelease";
import AndroidBetaTwo from "../routes/Blog/AndroidBetaTwo";
import AndroidBetaThree from "../routes/Blog/AndroidBetaThree";
import FourAndroidUpdate from "../routes/Blog/FourAndroidUpdate";
import FourRFebUpdate from "../routes/Blog/FourRFebUpdate";
import FourRJanUpdate from "../routes/Blog/FourRJanUpdate";
import May2020Update from "../routes/Blog/May2020Update";
import AndroidElevenBeta from "../routes/Blog/AndroidElevenBeta";
import OurSponsor from "../routes/Blog/OurSponsor";
import April2021Update from "../routes/Blog/April2021Update";
import September2020Update from "../routes/Blog/September2020Update";
import Maintainership from "../routes/Blog/Maintainership";
import AugustSecondUpdate2020 from "../routes/Blog/AugustSecondUpdate2020";
// Navbar
import Navbar from "../Navbar/Navbar";
//Footer
import Footer from "../Footer/Footer";

function App() {
  return (
    <Body>
      <Navbar />
      <Router basename="/blogs">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/5.R-May-2021-update" exact component={May2021Update} />
          <Route path="/5.R-April-2021-update" exact component={April2021Update} />
          <Route path="/gssoc-association-website-update-march" exact component={GssocAssociationWebsiteUpdateMarch} />
          <Route path="/5.R-android-11-second-update-march" exact component={Android11SecondUpdateMarch} />
          <Route path="/5.R-android-11-initial-release" exact component={Android11InitialRelease} />
          <Route path="/3-R-android-11-beta-2" exact component={AndroidBetaTwo} />
          <Route path="/3.R-android-11-beta-3" exact component={AndroidBetaThree} />
          <Route path="/4.R-android-11-update" exact component={FourAndroidUpdate} />
          <Route path="/4.R-february-2021-update" exact component={FourRFebUpdate} />
          <Route path="/4.R-january-2021-update" exact component={FourRJanUpdate} />
          <Route path="/android-11-beta-1" exact component={AndroidElevenBeta} />
          <Route path="/may-2020-update" exact component={May2020Update} />
          <Route path="/oursponsor" exact component={OurSponsor} />
          <Route path="/september-2020-update" exact component={September2020Update} />
          <Route path="/maintainership" exact component={Maintainership} />
          <Route path="/second-update-of-august-2020" exact component={AugustSecondUpdate2020} />
        </Switch>
        <Footer />
      </Router>
    </Body>
  );
}
export default App;
