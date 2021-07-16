import { lazy, Suspense, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { DiscussionEmbed } from "disqus-react";
import {
  AuthorHead, AuthorSec, AuthorSubHead, Body, BodyInner, Description, Heading, ListItem, UnorderedList, Anchor, Date, LoaderDiv,
} from "./styles";
// import AdComponent from "../../AdComponent/AdComponent";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const AdComponent = lazy(() => import("../../AdComponent/AdComponent"));
const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

function OurSponsor() {
  //! IMP SECTION FOR COMMENTS
  const url = "https://direwolf-tech.disqus.com/oursponsor";
  const identifier = "Our Sponsor";
  const title = "Project Sakura | Our Sponsor";
  useEffect(() => {
    document.title = "Project Sakura | Our Sponsor";
  }, []);
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>1 May 2020</Date>
          <Heading>Introduction to Our Sponsor : xsl.tel</Heading>
          <Description>
            Hello everyone.
            <br />
            We hope everyone's doing well and staying safe amidst the pandemic.
            <br />
            We have a good news to share with our community. Earlier we shared a news that Sakura was sponsored by TheStack but some things happened and there is a small news to share now.
            <br />
            <br />
            Drum Rolls please....
            <br />
            <b>Sakura Project is now sponsored again.</b>
            <br />
            We are sponsored by <Anchor href="https://www.xsl.tel/">xsltel</Anchor>
          </Description>
          <Description>
            <h3>
              About <Anchor href="https://www.xsl.tel/">xsltel</Anchor>
            </h3>
            Xsltel is a "one-man show" hosting server provider which provides its users with both free and premium hosting services as per their likeness. They are trusted and reliable and
            are providing their services since 2011. They have a very postive support system which will help you and guide you with whatever queries you maybe facing.
            <br />
            They provide both free VPS (Virtualised servers) and premium VPS.
            <br />
            They also have other services as well like Domain registration, Server Management and Web Development.
            <br />
          </Description>
          <Description>
            <h3>Features provided</h3>
          </Description>

          <UnorderedList>
            <ListItem>
              <b>Semi Managed: </b>You get full access to along with their help,in case, you mayneed it.
            </ListItem>
            <ListItem>
              <b>Free Migration: </b>They will help you with the problems you face.
            </ListItem>
            <ListItem>
              <b>Free Consultations: </b>They will help you in your projects which is a bonus as they have 10 years of experience.
            </ListItem>
            <ListItem>
              <b>Privacy Protected: </b>Xsltel respects your privacy and does not shares data.
            </ListItem>
            <ListItem>
              <b>Encryted Datastores: </b>Their servers and storage are physically encrypted.
            </ListItem>
            <ListItem>
              <b>Bleeding Edge Hardware: </b>They are not dependent on old technology and stay updated with the current technology
            </ListItem>
          </UnorderedList>
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
          <AuthorSubHead>Manish</AuthorSubHead>
          <Description>
            Manish is a tech entusiast and Android Fanboi. He is new to the blog writing and stuff and is looking forward to create some really good articles. He also likes Naruto like
            everyone.
          </Description>
        </AuthorSec>
      </Container>
      <Footer />
    </Body>
  );
}
export default OurSponsor;
