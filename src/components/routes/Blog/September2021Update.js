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

function September2021Update() {
  //! IMP SECTION FOR COMMENTS
  const url = "https://direwolf-tech.disqus.com/5.2-September-2021-Update";
  const identifier = "September-2021 5.2-Update";
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
            September Update of Project Sakura, adding more pain to your life..
          </Heading>
          <Description>
            Delays, Delays, Delays.. That's how the last three days of the development cycle went on. It did not happen because there were some issues with the
            sources but because I just didn't had time. So why I don't have time anymore? It is because I am working as full time employee for the PrimeOS
            team now. They are the famous commercial Android x86 operating system and I joined the development team this week. So, I am working 5 days a week at their
            Office now and I also have my college and studies running at the same time. I am already juggling between the two and the one I don't know how to fit in is,
            Project Sakura. I will try to give it sometime on my weekends but I really don't know how effective that would be. Now coming to this update we have fixed some
            very minor bugs and improved some things and merging some upstreams from Lineage OS 18.1 branches. But there is no September security patch in this release because
            it;s not yet merged to the AOSP branches and going by the previous Google mess ups and the fact that we have Android 12 coming this month it is very important
            to roll out this update.
            <br />
            <br />
            Now, the changelogs for this release of Project Sakura are,
            <Suspense fallback={renderLoader()}>
              <AdComponent />
            </Suspense>
          </Description>
          <UnorderedList>
            <ListItem>
              The null text for the Android 12 clock is fixed.
            </ListItem>
            <br />
            <ListItem>
              The location dependency for Twilight service (Auto Light/Dark mode) have been reduced and it will work without you needing to turn on your location service.
            </ListItem>
            <br />
            <ListItem>
              Support for one-shot auto brightness is added and it is very useful for devices that have unaccurate brightness/proximity sensors.
            </ListItem>
            <br />
            <ListItem>
              IMSI and Phone numbers won't be shared with the SUPL server anymore. SUPL is basically a protocol to make your GPS function and even without sharing our sensitive information it works perfectly alright.
            </ListItem>
            <br />
            <ListItem>
              Location permission won't be auto granted to system browsers anymore.
            </ListItem>
            <br />
            <ListItem>
              A lot of PowerUI and notification history logspam is reduced and we will be spoofing pixel XL for the new Galaxy Watch 4 plugins.
            </ListItem>
            <br />
            <ListItem>
              And lastly, a lot of translation imports and fixes are merged into the source.
            </ListItem>
          </UnorderedList>
          <Description>
            So, this was the small update and we will see you again with the September security patch, if Google don't mess up like they always do when
            there is a new Android release scheduled. We hope you don't end up with bugs but you can always
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
export default September2021Update;
