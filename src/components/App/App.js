import { lazy, Suspense } from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
//Loader
import { BiLoaderCircle } from "react-icons/bi";
// styles
import { Body } from "./styles";
// routes
const Home = lazy(() => import("../routes/Home/Home"));
//blogs route
const June2021Update = lazy(() => import("../routes/Blog/June2021Update"));
const May2021Update = lazy(() => import("../routes/Blog/MidMay2021Update"));
const MidMay2021Update = lazy(() => import("../routes/Blog/May2021Update"));
const GssocAssociationWebsiteUpdateMarch = lazy(() => import("../routes/Blog/GssocAssociationWebsiteUpdateMarch"));
const Android11SecondUpdateMarch = lazy(() => import("../routes/Blog/Android11SecondUpdateMarch"));
const Android11InitialRelease = lazy(() => import("../routes/Blog/Android11InitialRelease"));
const AndroidBetaTwo = lazy(() => import("../routes/Blog/AndroidBetaTwo"));
const AndroidBetaThree = lazy(() => import("../routes/Blog/AndroidBetaThree"));
const FourAndroidUpdate = lazy(() => import("../routes/Blog/FourAndroidUpdate"));
const FourRFebUpdate = lazy(() => import("../routes/Blog/FourRFebUpdate"));
const FourRJanUpdate = lazy(() => import("../routes/Blog/FourRJanUpdate"));
const May2020Update = lazy(() => import("../routes/Blog/May2020Update"));
const AndroidElevenBeta = lazy(() => import("../routes/Blog/AndroidElevenBeta"));
const OurSponsor = lazy(() => import("../routes/Blog/OurSponsor"));
const April2021Update = lazy(() => import("../routes/Blog/April2021Update"));
const September2020Update = lazy(() => import("../routes/Blog/September2020Update"));
const SecondUpdateOfJune2020 = lazy(() => import("../routes/Blog/SecondUpdateOfJune2020"));
const Maintainership = lazy(() => import("../routes/Blog/Maintainership"));
const AugustSecondUpdate2020 = lazy(() => import("../routes/Blog/AugustSecondUpdate2020"));
const AugustUpdate2020 = lazy(() => import("../routes/Blog/AugustUpdate2020"));
const July2020Update = lazy(() => import("../routes/Blog/July2020Update"));
const Donation = lazy(() => import("../routes/Donation/Donation"));

const renderLoader = () => <p><center><BiLoaderCircle /></center></p>;

function App() {
  return (
    <Body>
      <Router>
        <Suspense fallback={renderLoader()}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/5.1-June-2021-update" exact component={June2021Update} />
            <Route path="/5.R-May-2021-update" exact component={MidMay2021Update} />
            <Route path="/5.R-mid-may-2021-update" exact component={May2021Update} />
            <Route path="/5.R-April-2021-update" exact component={April2021Update} />
            <Route path="/gssoc-association-website-update-march" exact component={GssocAssociationWebsiteUpdateMarch} />
            <Route path="/5.R-android-11-second-update-march" exact component={Android11SecondUpdateMarch} />
            <Route path="/5.R-android-11-initial-release" exact component={Android11InitialRelease} />
            <Route path="/3.R-android-11-beta-2" exact component={AndroidBetaTwo} />
            <Route path="/3.R-android-11-beta-3" exact component={AndroidBetaThree} />
            <Route path="/4.R-android-11-update" exact component={FourAndroidUpdate} />
            <Route path="/4.R-february-2021-update" exact component={FourRFebUpdate} />
            <Route path="/4.R-january-2021-update" exact component={FourRJanUpdate} />
            <Route path="/android-11-beta-1" exact component={AndroidElevenBeta} />
            <Route path="/may-2020-update" exact component={May2020Update} />
            <Route path="/july-2020-update" exact component={July2020Update} />
            <Route path="/oursponsor" exact component={OurSponsor} />
            <Route path="/september-2020-update" exact component={September2020Update} />
            <Route path="/second-update-of-june-2020" exact component={SecondUpdateOfJune2020} />
            <Route path="/maintainership" exact component={Maintainership} />
            <Route path="/second-update-of-august-2020" exact component={AugustSecondUpdate2020} />
            <Route path="/august-2020-update" exact component={AugustUpdate2020} />
            <Route path="/donation" exact component={Donation} />
          </Switch>
        </Suspense>
      </Router>
    </Body>
  );
}
export default App;
