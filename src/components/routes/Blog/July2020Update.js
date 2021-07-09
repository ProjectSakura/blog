// import { lazy, Suspense } from "react";
import { Container } from "semantic-ui-react";
import {
  AuthorHead,
  AuthorSec,
  AuthorSubHead,
  Body,
  BodyInner,
  Description,
  Heading,
  ListItem,
  UnorderedList,
  Date,
  Anchor,
  // LoaderDiv,
} from "./styles";
import AdComponent from "../../AdComponent/AdComponent";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import DisqusComment from "../../DisqusComment/DisqusComments";

// const DisqusComment = lazy(() => import("../../DisqusComment/DisqusComments"));
// const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

function AugustSecondUpdate2020() {
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>
            13 July 2020
          </Date>
          <Heading>
            July patch, ultra thicc gesture handle and more.
          </Heading>
          <Description>
            So a lot of you guys have been getting impatient asking "WEN OTA?" or "WEN JULY SECURITY PATCH".
            <br />
            <br />
            Well before I get into that I hope all the readers are doing well mentally and physically, safe in their home, if not its always good to talk to someone about it. It will make you feel way better.
            <br />
            <br />
            This blog post will talk about two things:-
          </Description>
          <UnorderedList>
            <ListItem>OUR BRAND NEW BUG TRACKER REPO</ListItem>
            <br />
            <ListItem>What's new in the July update?</ListItem>
            <br />
            <ListItem>You can now have a oneUI actionbar in Settings dashboard.</ListItem>
          </UnorderedList>
          <Description>
            <h3><b>Let's start with OUR BRAND NEW BUG TRACKER REPO</b></h3>
          </Description>
          <Description>
            Well, the idea behind this is to make the reporting of bugs easier. It helps us a lot because we can just go to the repo and check out what's wrong and work towards fixing it "SO TELL ME HOW CAN I HELP YOU GUYS BY REPORTING BUGS SAR" So this is what you'll have to:
          </Description>
          <UnorderedList>
            <ListItem>MAKE SURE ITS A BUG IN THE ROM AND NOT THE DEVICE</ListItem>
          </UnorderedList>
          <Description>
            "but sar what do I do when its a bug in the device"
          </Description>
          <Description>
            Well then contact your device maintainer(You can find their telegram via Sakura Settings About Project)
          </Description>
          <UnorderedList>
            <ListItem>Now that you know its a bug in the rom and not the device, grab a logcat.</ListItem>
          </UnorderedList>
          <Description>
            "how do I do that sar?"
          </Description>
          <Description>
            Refer to <Anchor href="https://forum.xda-developers.com/showthread.php?t=2774386">this</Anchor> while you're taking a logcat
          </Description>
          <UnorderedList>
            <ListItem>Once you've got the logcat, go over to our bug tracker <Anchor href="https://github.com/ProjectSakura/Bug_Tracker">repo</Anchor> and you see that button that says "Issues"? Click on that and create a new issue</ListItem>
          </UnorderedList>
          <Description>
            Now that I've finished explaining how to report bugs lets move to the fun part
          </Description>
          <Description>
            Whats changes have been made in the ROM:-
          </Description>
          <UnorderedList>
            <ListItem>That annoying bug where the navbar buttons stop working in gesture navigation has been fixed(thx to Raj from posp).</ListItem>
            <ListItem>The gesture pill is now THICC. Why? BECAUSE THICC  <span role="img" aria-label="peach">🍑</span> = BEST.</ListItem>
            <ListItem>A BRAND NEW BOOTANIMATION (thx to glitch  <span role="img" aria-label="heart">💛</span>).</ListItem>
            <ListItem>Add new icon shapes from Android R.</ListItem>
            <ListItem>Blocking sensor for apps is now configurable.</ListItem>
            <ListItem>Moved the battery icon to header.</ListItem>
          </UnorderedList>
          <Description>
            I'd like to end this post by telling you that Project Sakura is now officially supporting:-
          </Description>
          <UnorderedList>
            <ListItem>Violet, Co-Maintained by Nitish & Prajwal.</ListItem>
            <ListItem>Beryllium, Maintained by Human Glitch.</ListItem>
            <ListItem>LeEco Le 2, Maintained by CakesTwix.</ListItem>
            <ListItem>Sanders, Maintained by ArmSM.</ListItem>
            <ListItem>Meizu 16TH and 16T, Maintained by thedauke.</ListItem>
            <ListItem>Realme 1, Maintained by CyberJalagam.</ListItem>
          </UnorderedList>
          {/* <Suspense fallback={renderLoader()}> */}
          <AdComponent />
          {/* </Suspense> */}
          {/* <Suspense fallback={renderLoader()}> */}
          <DisqusComment />
          {/* </Suspense> */}
        </BodyInner>
        <AuthorSec>
          <AuthorHead>About Author</AuthorHead>
          <AuthorSubHead>Amartya</AuthorSubHead>
          <Description>
            Amartya is the maintainer for Huawei Nexus 6P for Project Sakura. He loves watching Anime. He designs in his free time and aspires to be a Product Designer.
          </Description>
        </AuthorSec>
      </Container>
      <Footer />
    </Body>
  );
}
export default AugustSecondUpdate2020;
