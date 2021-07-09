import {
  useEffect, useState,
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
  // LoaderDiv,
} from "./styles";
import AdComponent from "../../AdComponent/AdComponent";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import DisqusComment from "../../DisqusComment/DisqusComments";
//image
import MidMay2021UpdateIMG from "../../../images/blogs/MidMay2021UpdateIMG.webp";

// const DisqusComment = lazy(() => import("../../DisqusComment/DisqusComments"));
// const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

function MidMay2021Update() {
  const [imageSrc, setImageSrc] = useState([]);
  useEffect(() => {
    //preloading image
    const img = new Image();
    img.onload = () => {
      setImageSrc(MidMay2021UpdateIMG);
    };
    img.src = MidMay2021UpdateIMG;
  }, []);
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>
            23 MAY 2021
          </Date>
          <Heading>
            Mid May Happiness from Project Sakura
          </Heading>
          <ImgDiv>
            <ImageTag src={imageSrc} alt="banner" />
          </ImgDiv>
          <Description>
            Heyo! we are back with some fixes and a fresh batch of bugs so you guys can keep crying about it. But before we begin, you can see in banner that sakura chan is also wearing a mask. So, If you are somebody reading this blog from India then please wear a mask all the time and wash hands properly to stay safe from Mucormycosis and COVID-19. Now, let's get started with another update..
            <br />
            <br />
            Oh an ad. what? Seeing it even after adblock? Cry now.
            <br />
            {/* <Suspense fallback={renderLoader()}> */}
            <AdComponent />
            {/* </Suspense> */}
            <br />
            <br />
            So, what do we have this time? Here goes the changelog..
          </Description>
          <UnorderedList>
            <ListItem>Fixed the weird ghost space in dock with vanilla builds (because of lack of Google app).</ListItem>
            <ListItem>Finally, the weird looking arrow above the dock is gone.</ListItem>
            <ListItem>Fixed the issue of wrong slot detection for VoLTE icons.</ListItem>
            <ListItem> We have switched to full gesture navigation as our default.</ListItem>
            <ListItem>You can now see your battery's temperature in Battery Settings.</ListItem>
            <ListItem>Blur will start working again for Samsung devices.</ListItem>
            <ListItem>And we are now translated to few more languages.</ListItem>
          </UnorderedList>
          <Description>
            Last week we added support for Xiaomi Redmi Note 7 and restored support for Poco X2 and with that we have so far supported 50 different devices. So, hats off to us and the maintainers. If you are wondering how you can get official then we have a nice article on our Wiki at
            <Anchor href="https://projectsakura.xyz/wiki/#/apply"> Wiki | Apply </Anchor>
            <br />
            <br />
            Well, that was about everything for this small tiny mid May update and we will see you again in June. And please stop making memes, saying we are dead because we are not. If you like how hard I work to bring you awesome and absolutely free software, you can go ahead and donate us some coffee at,
            <Anchor href="https://projectsakura.xyz/donation"> ProjectSakura | Donations. </Anchor> Also I would like to thank Mircea Nicolau and MissingNerd for the donations so far.
            <br />
            <br />
            As always do follow us on twitter at
            <Anchor href="https://twitter.com/ProjectSakura_"> @ProjectSakura_</Anchor>, we recently crossed 200 followers there.
            <br />
            One more ad lol.
            <br />
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
export default MidMay2021Update;
