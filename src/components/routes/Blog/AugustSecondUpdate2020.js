import {
  lazy, Suspense, useEffect, useState,
} from "react";
import { Container } from "semantic-ui-react";
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
import AugustSecondUpdate2020IMG from "../../../images/blogs/AugustSecondUpdate2020IMG.webp";
import Comments from "../../Comments/Comments";
// import DisqusComment from "../../DisqusComment/DisqusComments";

const AdComponent = lazy(() => import("../../AdComponent/AdComponent"));
const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

function AugustSecondUpdate2020() {
  const [imageSrc, setImageSrc] = useState([]);
  useEffect(() => {
    //preloading image
    const img = new Image();
    img.onload = () => {
      setImageSrc(AugustSecondUpdate2020IMG);
    };
    img.src = AugustSecondUpdate2020IMG;
    document.title = "Project Sakura | August Second Update 2020";
  }, []);
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>
            28 August 2020
          </Date>
          <Heading>
            Whats better than a warm cup of coffee? Yes! Project Sakura update.
          </Heading>
          <ImgDiv>
            <ImageTag src={imageSrc} alt="image" />
          </ImgDiv>
          <Description>
            So If you were following us on twitter you may would have noticed that we changed somethings, fixed somethings and broken somethings. Well, thats just how we work.
            <br />
            <br />
            That's why we decided we should push and update before moving to september patch. It will also be difficult starting next month because we would start working with Android 11 from September. Well, all that is for the future. So, what we added new in this update!
          </Description>
          <UnorderedList>
            <ListItem>You can now change the icons in Settings dashboard. To random, oneplus and many more.</ListItem>
            <br />
            <ListItem>We have more features for notched devices now.</ListItem>
            <br />
            <ListItem>You can now have a oneUI actionbar in Settings dashboard.</ListItem>
            <br />
            <ListItem>We also fixed QS bug where long pressed panels won't close.</ListItem>
            <br />
            <ListItem>A fully redesigned Sakura Config, much more minimal much more responsive.</ListItem>
            <br />
            <ListItem>December Security Patch.We also caught to up to the Lineage OS changes like skipping screen on animation when unlocking with biometrics and much more.</ListItem>
          </UnorderedList>
          <Description>
            Oh and from the cup of coffee i remember to tell you that the developer also need a cup to keep working so please consider
            <Anchor href="https://www.buymeacoffee.com/lBUDKgM"> Buying me a coffee.</Anchor>
            <br />
            <br />
            Well, thats all the small changes for this release and as always do follow us on twitter at
            <Anchor href="https://twitter.com/ProjectSakura_"> @ProjectSakura_</Anchor>,coz we keep posting fun stuff on it ;)
            <br />
          </Description>
          <Suspense fallback={renderLoader()}>
            <AdComponent />
          </Suspense>
          <Comments />
          {/* <DisqusComment /> */}
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
export default AugustSecondUpdate2020;
