import {
  lazy, Suspense, useEffect,
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
// const DisqusComment = lazy(() => import("../../DisqusComment/DisqusComments"));
const AdComponent = lazy(() => import("../../AdComponent/AdComponent"));
const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

function SeptemberSecondUpdate2021() {
  //! IMP SECTION FOR COMMENTS
  const url = "https://direwolf-tech.disqus.com/5.2-September-2021-ASBUpdate";
  const identifier = "Second-September-2021 5.2-Update";
  const title = "Project Sakura | September Update";
  //!
  useEffect(() => {
    document.title = "Project Sakura | 5.2 Update";
  }, []);
  useEffect(() => {
  }, []);
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>
            08 September 2021
          </Date>
          <Heading>
            September Patch amidst our Busy Schedule
          </Heading>
          <Description>
            Now, the Lead Dev is busy, so I am writing the blog posts, at least for now. Anyways, Ashwin here.
            Android 12 is right around the corner, we thought this would be the last Android 11 update, but it
            seems it would take a month more for the sources release, so there might be an Android 11 October
            Update. Shen recently got his new Poco X3 Pro, so this would be the final update for his previous
            device X00TD (Sad to see that go). About this update, we have merged upstream from Lineage OS and
            because Shen is busy with his work, this update will be short and sweet.
            <br />
            <br />
            Now, the changelogs for this release of Project Sakura are,
            <Suspense fallback={renderLoader()}>
              <AdComponent />
            </Suspense>
          </Description>
          <UnorderedList>
            <ListItem>
              Fixed SafetyNet failing for most users
            </ListItem>
            <br />
            <ListItem>
              Redesigned QS Media player
            </ListItem>
            <br />
            <ListItem>
              September Patch
            </ListItem>
            <br />
            <ListItem>
              Fixed one-shot auto brightness
            </ListItem>
            <br />
          </UnorderedList>
          <Description>
            So, this was the small update and we will (hopefully) see you again with another update, as much as we are excited about the Android 12, it might be hard for Shen
            to juggle all the things in his life, anyways we hope you don't end up with bugs but you can always
            avoid them by by wearing a Project Sakura exclusive Tshirt which you can check
            by clicking on this <Anchor href="https://www.hellotux.com/projectsakura">link</Anchor>. And if you love how hard we work every month to
            bring you absolutely free software then please consider donating at <Anchor href="https://projectsakura.xyz/blog/#/donation"> Project Sakura | Donations, </Anchor>
            we need your support to keep moving forward. As always do follow us on twitter at
            <Anchor href="https://twitter.com/ProjectSakura_"> @ProjectSakura_</Anchor>, we are racing to 500 followers and we post a lot of fun stuff there.
            <br />
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
          <AuthorSubHead>Ashwin</AuthorSubHead>
          <Description>
            Ashwin (or Ashwin DS or dsashwin) is the official device maintainer for Redmi Note 10 and Redmi Note 8. He is probably thinking how to pass his next exam, among other things.
          </Description>
        </AuthorSec>
      </Container>
      <Footer />
    </Body>
  );
}
export default SeptemberSecondUpdate2021;
