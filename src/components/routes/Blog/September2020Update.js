import { lazy, Suspense, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { DiscussionEmbed } from "disqus-react";
import {
  AuthorHead, AuthorSec, AuthorSubHead, Body, BodyInner, Description, Heading, ListItem, UnorderedList, Anchor, Date, LoaderDiv,
} from "./styles";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const AdComponent = lazy(() => import("../../AdComponent/AdComponent"));
const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

function September2020Update() {
  //! IMP SECTION FOR COMMENTS
  const url = "https://direwolf-tech.disqus.com/september-2020-update";
  const identifier = "September Update";
  const title = "Project Sakura | September Update";
  useEffect(() => {
    document.title = "Project Sakura | September Update";
  }, []);
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>14 SEPTEMBER 2020</Date>
          <Heading>When android 11, what is new in this update and what you can expect in future</Heading>
          <Description>
            Are we late for the update this month? Probably no because we use to update around 13th and 14th so we are on our monthly cycle.
          </Description>
          <Description>
            Well It's a feature freeze from this month. There are no new features and there won't be any in the upcoming releases as well. So are we killing the support for Android Q? Umm not yet! We have decided to continue providing monthly security patches everymonth till the Q1 of next year. Its to note that if a maintainer decides to not support Q anymore then we are not going to pressure him or anything, at that point expect it dead for your device.
            <br />
            <br />
            So for this month you are going to get
          </Description>
          <UnorderedList>
            <ListItem>September Security Patch. </ListItem>
            <br />
            <ListItem>Fixes and upstreams from Lineage.</ListItem>
          </UnorderedList>
          <Description>
            Moving forward, When android 11 for Project Sakura? Since we are again going to follow Lineage OS and customize the next variant of Lineage OS, we are going to wait till it gets stable enough and all our currently supported devices boot up Android R. It is very difficult to give any fixed timeline, But i do expect it to happen around the end of November.
          </Description>
          <Description>
            Well, thats all for this release and as always do follow us on twitter
            <Anchor href="https://twitter.com/ProjectSakura_">@ProjectSakura_</Anchor> coz we keep posting fun stuff on it ;)
          </Description>
          <Description>
            Oh and if you like our work, please consider buying me a coffee because it helps a lot.
            <Anchor href="https://ko-fi.com/lordshen">Buy me a coffee.</Anchor>
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
          <AuthorSubHead>Arun Teltia</AuthorSubHead>
          <Description>Arun Teltia is the lead web developer of the project. He is a passionate web developer and loves to watch anime is his spare time.</Description>
        </AuthorSec>
      </Container>
      <Footer />
    </Body>
  );
}
export default September2020Update;
