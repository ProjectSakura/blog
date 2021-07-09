import {
  useEffect, useState,
} from "react";

import { Container } from "semantic-ui-react";
import {
  AuthorHead, AuthorSec, AuthorSubHead, Body, BodyInner, Description, Heading, ImageTag, ImgDiv, ListItem, UnorderedList, Anchor, Date,
} from "./styles";
import AdComponent from "../../AdComponent/AdComponent";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import DisqusComment from "../../DisqusComment/DisqusComments";
//image
import GSSOC2021UpdateIMG from "../../../images/blogs/GSSOC2021UpdateIMG.webp";

// const DisqusComment = lazy(() => import("../../DisqusComment/DisqusComments"));
// const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

function GssocAssociationWebsiteUpdateMarch() {
  const [imageSrc, setImageSrc] = useState([]);
  useEffect(() => {
    //preloading image
    const img = new Image();
    img.onload = () => {
      setImageSrc(GSSOC2021UpdateIMG);
    };
    img.src = GSSOC2021UpdateIMG;
  }, []);
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>21 March 2021</Date>
          <Heading>Project Sakura is now associated with GSSOC'21</Heading>
          <Description>
            It's me, the web developer of project sakura, You might have seen some website changes in this past month and about those changes I want you to inform that our project got
            selected as GSSOC'21 and many of the contributors all around the world are coming and working on our website.
          </Description>
          <ImgDiv>
            <ImageTag src={imageSrc} alt="gssoc" />
          </ImgDiv>
          <Description>
            All have the same goal in mind to make user experience and user interface better, We are planning to create some new things which I am sure ,you gonna like it, For Now I want
            to thank the GSSOC community and all the contributors who are contributing to our project.
            <br />
            <br />
            Okay good, so what are the change log in the website
          </Description>
          <UnorderedList>
            <ListItem>The stats page is much more faster and now have 2 theme. </ListItem>
            <br />
            <ListItem>The buttons and the theme in the stats/blog website is changed and all website are adopting homogenous design.</ListItem>
          </UnorderedList>
          <Description>
            So, That was everything for this website update and hopefully see ya all in April. Also, If you like how hard We work to bring you awesome and absolutely free software, you can
            go ahead and gift me some coffee, <Anchor href="https://ko-fi.com/lordshen">Buy me a coffee.</Anchor>
          </Description>
          <Description>
            Well, this was it for this update and if you find any bugs in the website do report it to me on official telegram group by tagging me (
            <Anchor href="https://t.me/C0un13rT3rr0r1st">@C0un13rT3rr0r1st</Anchor>) . As always do follow us on twitter{" "}
            <Anchor href="https://twitter.com/ProjectSakura_">@ProjectSakura_</Anchor> coz we keep posting fun stuff on it ;)
          </Description>
          {/* <Suspense fallback={renderLoader()}> */}
          <AdComponent />
          {/* </Suspense> */}
          {/* <Suspense fallback={renderLoader()}> */}
          <DisqusComment />
          {/* </Suspense> */}
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
export default GssocAssociationWebsiteUpdateMarch;
