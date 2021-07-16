import { lazy, Suspense, useEffect } from "react";
import { Container } from "semantic-ui-react";
import {
  AuthorHead, AuthorSec, AuthorSubHead, Body, BodyInner, Description, Heading, ListItem, UnorderedList, Date, CenterDiv, LoaderDiv,
} from "./styles";
// import AdComponent from "../../AdComponent/AdComponent";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import DisqusComment from "../../DisqusComment/DisqusComments";
// const DisqusComment = lazy(() => import("../../DisqusComment/DisqusComments"));
const AdComponent = lazy(() => import("../../AdComponent/AdComponent"));
const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

function SecondUpdateOfJune2020() {
  useEffect(() => {
    document.title = "Project Sakura | Second UpdateOf June";
  }, []);
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>14 May 2020</Date>
          <Heading>SecondUpdateOfJune2020 Application for Project Sakura</Heading>
          <Description>
            July is 1 day ahead and what we are doing here? We came up with an update yes! I really really hate making a list, So I feel its kind of a burden to be keeping track of things
            and make a proper list. Because of this habit I often forget the stuff I was doing a night before :( Well lets just ignore what i do and see the changelogs of this release.
          </Description>
          <UnorderedList>
            <ListItem>A bigger header image.</ListItem>
            <ListItem>Mizu Themes, a transparent theme we adapted from rebellion theme.</ListItem>
            <ListItem>The very much requested Gaming Mode.</ListItem>
            <ListItem>Fixed the rounded corner settings.</ListItem>
            <ListItem>Statusbar screen burn protection for OLED and amoled displays.</ListItem>
            <ListItem>Synced all sources up to latest LineageOS</ListItem>
          </UnorderedList>
          <Description>
            These are the major changes, beside these there are many minor changes. Also, I hope you see the newer redesigned Blog and hopefully it is visually more pleasing. So, this is
            it and enjoy the update until we come back in july.
          </Description>
          <CenterDiv><b>What do you think?</b></CenterDiv>
          <Suspense fallback={renderLoader()}>
            <AdComponent />
          </Suspense>
          {/* <Suspense fallback={renderLoader()}> */}
          <DisqusComment />
          {/* </Suspense> */}
        </BodyInner>
        <AuthorSec>
          <AuthorHead>About Author</AuthorHead>
          <AuthorSubHead>LordShenron</AuthorSubHead>
          <Description>
            LordShenron is the lead developer of the project. He is also an IT Engg Student and he loves anime and Japanese pop music. When he is not online he is mostly sleeping or busy
            with some college work.
          </Description>
        </AuthorSec>
      </Container>
      <Footer />
    </Body>
  );
}
export default SecondUpdateOfJune2020;
