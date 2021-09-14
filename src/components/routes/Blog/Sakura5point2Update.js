import {
  lazy, Suspense, useEffect, useState,
} from "react";
import { Container } from "semantic-ui-react";
import { DiscussionEmbed } from "disqus-react";
import {
  AuthorHead,
  AuthorSec,
  AuthorSubHead,
  Body,
  BodyInner,
  Description,
  Heading,
  ImageTag,
  ImgDiv,
  ListItem,
  UnorderedList,
  Anchor,
  Date,
  LoaderDiv,
} from "./styles";
// import AdComponent from "../../AdComponent/AdComponent";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
//image
import Sakura5point2UpdateIMG from "../../../images/blogs/Sakura5point2UpdateIMG.webp";
// const DisqusComment = lazy(() => import("../../DisqusComment/DisqusComments"));
const AdComponent = lazy(() => import("../../AdComponent/AdComponent"));
const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

function Sakura5point2Update() {
  //! IMP SECTION FOR COMMENTS
  const url = "https://direwolf-tech.disqus.com/5.2-Project-Sakura-Update";
  const identifier = "5.2 Project Sakura Update";
  const title = "Project Sakura | 5.2 Update";
  //!
  useEffect(() => {
    document.title = "Project Sakura | 5.2 Update";
  }, []);
  const [imageSrc, setImageSrc] = useState([]);
  useEffect(() => {
    //preloading image
    const img = new Image();
    img.onload = () => {
      setImageSrc(Sakura5point2UpdateIMG);
    };
    img.src = Sakura5point2UpdateIMG;
    // document.title = "Project Sakura | July 2021 Update";
  }, []);
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>
            31 JULY 2021
          </Date>
          <Heading>
            Project Sakura 5.2 is Faster, Lighter, More stable!
          </Heading>
          <ImgDiv>
            <ImageTag src={imageSrc} alt="display" />
          </ImgDiv>
          <Description>
            There is a saying, <i>"It's hardware that makes a machine fast. It's software that makes a fast machine slow."  </i>
            Our smartphones are pretty fast machines but OEM skins are absolute pile of garbage designed to make
            your fast enough smartphones slow so they can sell more smartphones and we are not OEM software.
            We have to remain fast and keep getting more out of the hardware.
            So as soon as we realised things were not so great we started working.
            <br />
            <br />
            So now without wasting anymore time let's get into the changelog. But before we start, see an ad.
            <Suspense fallback={renderLoader()}>
              <AdComponent />
            </Suspense>
            <br />
            Do note that this is not a monthly Android security update and that the ASP update is still atleast 2 weeks away.
            Not all updates are for features additions and this one is one such update..
          </Description>
          <UnorderedList>
            <ListItem>We have completely dropped FOD animations and custom FOD icon support.
              I personally don't have an FOD supported device and It was getting hard for me to manage something that I have no knowledge in.
              It was also getting harder to keep up with different implementations every device was needing. So we decided to go back to what LineageOS is shipping and stick only to that.
            </ListItem>
            <br />
            <ListItem>We have switched to a better GAPPS package from CrDroid.
              For developers who want to build with GAPPS will now be able to choose between a smaller CORE package and a more complete BASIC package.
              Flags will be updated on Wiki but here are the newer flags that you should use,<br /><br />
              <i>SAKURA_BUILD_TYPE=coregapps or SAKURA_BUILD_TYPE=basicgapps</i>
              <br /><br />
              We also hope more maintainers to use GAPPS build now instead of VANILLA.
            </ListItem>
            <br />
            <ListItem>We have something for the samsung users this time.
              Samsung users won't have to spoof device for using Samsung wearables apps anymore because we will be spoofing PixelXL for them by default.
            </ListItem>
            <br />
            <ListItem>There will be a new option in Sound settings where you can control the QS Media player for all supported apps.
              It's a feature coming with Android 12 but you can now use the same on Android 11 with Project Sakura.
            </ListItem>
            <br />
            <ListItem>You can now disable the lock icon on lockscreen; we added this because it was sometimes collapsing with the Android 12 Clock because of Smaller DPI.
              So now you can disable the icon while using Android 12 clock and stop nagging.
            </ListItem>
            <br />
            <ListItem>We have completely restructured our OTA infrastructure and thanks to Ashwin, maintainers will have a proper control over when users should recieve OTA updates
              and when they should not. Because of this restructuring NO user will recieve the OTA for 5.2 and this makes it even more important that we push this update before August Security
              patch is merged.
            </ListItem>
            <br />
          </UnorderedList>
          <Description>
            As for the process of installation we recommend you do a CLEAN flash and hopefully with our recent changes we will be able to prevent broken OTA updates
            and even detect and stop the rollout if anything goes wrong. And this update is more or less an update for us rather than a normal user.
            They won't see much difference but they will surely feel the improvements not just in ROM but in overall operations.
            <br />
            <br />
            Well this was everything for this small but important update and we hope you end up with a ton of bugs, Ahem.. I mean you enjoy the release to the fullest :)
            You can avoid the bugs by wearing a Project Sakura exclusive Tshirt which you can check by clicking on this <Anchor href="https://www.hellotux.com/projectsakura">link. </Anchor>
            I just very smoothly inserted that promotion there.
            <br />
            <br />
            And if you like how hard we work every month to bring you absolutely free software then please consider donating at <Anchor href="https://projectsakura.xyz/blog/#/donation"> Project Sakura | Donations, </Anchor>
            we need your support to keep moving forward.
            As always do follow us on twitter at
            <Anchor href="https://twitter.com/ProjectSakura_"> @ProjectSakura_</Anchor>, we are racing to 500 followers and we post a lot of fun stuff there.
            <br />
            <br />
            Before you go.. one more small tiny ad.
            <br />
          </Description>
          <Suspense fallback={renderLoader()}>
            <AdComponent />
          </Suspense>
          <DiscussionEmbed
            shortname="direwolf-tech"
            config={{ url, identifier, title }}
          />
        </BodyInner>
        <AuthorSec>
          <AuthorHead>About Author</AuthorHead>
          <AuthorSubHead>LordShenron</AuthorSubHead>
          <Description>
            LordShenron is the lead developer of the project. He is also an IT Engg Student and he loves anime and Japanese pop music. When he is not online he is mostly sleeping or busy with some college work.
          </Description>
        </AuthorSec>
      </Container>
      <Footer />
    </Body>
  );
}
export default Sakura5point2Update;
