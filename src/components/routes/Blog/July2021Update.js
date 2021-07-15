/* eslint-disable */
import {
  lazy, Suspense, useEffect, useState,
} from "react";
import { Container } from "semantic-ui-react";
import { Helmet } from "react-helmet";
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
import July2021UpdateIMG from "../../../images/blogs/July2021UpdateIMG.webp";
 import Comments from "../../Comments/Comments";
 // const DisqusComment = lazy(() => import("../../DisqusComment/DisqusComments"));
const AdComponent = lazy(() => import("../../AdComponent/AdComponent"));
const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

function July2021Update() {
  const [imageSrc, setImageSrc] = useState([]);
  useEffect(() => {
    //preloading image
    const img = new Image();
    img.onload = () => {
      setImageSrc(July2021UpdateIMG);
    };
    img.src = July2021UpdateIMG;
  }, []);
  return (
    <Body>
      <Helmet>
        <title>Project Sakura July 2021 Update</title>
      </Helmet>    
      <Navbar />
      <Container>
        <BodyInner>
          <Date>
            15 JULY 2021
          </Date>
          <Heading>
            A sweet and simple July update of Project Sakura
          </Heading>
          <ImgDiv>
            <ImageTag src={imageSrc} alt="display" />
          </ImgDiv>
          <Description>
          It is monsoon season in Northern India and Its raning almost everyday in my city too. This is far from the spring that I enjoy but I don't hate 
          rainy season too. It atleast smell very nice when the soil is wet. But there is no peace as this is the final year of my engineering course and 
          I have to prepare for getting a job too. I cannot keep doing this forever because I too have bills to pay. Well I will keep pondering about the direction that I should take. 
            <br />
            <br />
          So now without wasting anymore time let's get into the changelog. But before we start, see an ad.
          <Suspense fallback={renderLoader()}>            
           <AdComponent />
           </Suspense>
            <br />
            Here goes the changelog for July update..
          </Description>
          <UnorderedList>
            <ListItem>July Security Patch android-11.0.0_r39</ListItem>
            <br />
            <ListItem>Android 12 like switches are added and it look very sleek. 
            </ListItem>
            <br />
            <ListItem>We also have added Aandroid 12 like lockscreen clock by Project 404.</ListItem>
            <br />
            <ListItem>The vertical padding between QS tiles have been decreased to save space. </ListItem>
            <br />
            <ListItem>Adaptive playback support is added which allows to pause media if the audio is muted and resume after sometime if you increase the audio.
            </ListItem>
            <br />
            <ListItem>Smartcharging and smartcutoff is now hidden by default and developers can enable it by adding Setting overlays in their device trees.</ListItem>
            <br />
            <ListItem>Rotations with picture in picture mode will be more seamless.</ListItem>
            <br />
            <ListItem>You will now be able to rank all the sourceforge mirrors and set the fastest mirror in the Updater app.</ListItem>
            <br />
            <ListItem>Dogbin is dead so we have switched to Hastebin for uploading logs when there is a crash in the ROM. You can send us the log URL while reporting issues.</ListItem>
			<br />
			<ListItem>Developers can now invert the IMS slots to show correct dynamic VoLTE and VoWifi icon. </ListItem>
			<br />
			<ListItem>We are not spoofing pixel XL(Marlin) for Google Photos, which means you will get unlimited standard photos storage.</ListItem>
			<br />
			<ListItem>We have reduced the QS header images storage size by 8% while keeping the same great quality.</ListItem>
			<br />
			<ListItem>We will be shipping all the wallpapers we used so far with the ROM. So, you don't need to ask us for giving wallpaper links xD.</ListItem>
			<br />
			<ListItem>And few more changes that you can know by seeing the sources.</ListItem>
          </UnorderedList>
          <Description>
            We have made some changes to the website too as you can see by the comment section below. We have started testing out utterances which is an opensource comment management
            that uses GitHub issues. This is much better and more privacy oriented than disqus but you will need a GitHub id to interact with us now. You gain something and you lose 
            something it is. 
            <br />
            <br />
            We have one more small announcement to make regarding our Official merchandises that we made in partnership with Open Source Clothing specialist, Hellotux.
            You can read more about it in our detailed blog posts by clicking on the this <Anchor href="https://projectsakura.xyz/blog/#/merch-update">LINK.</Anchor>
            <br />
            <br />
            And if you like how hard we work every month to bring you absolutely free software then please consider donating at <Anchor href="https://projectsakura.xyz/blog/#/donation"> Project Sakura | Donations, </Anchor> 
            You can also get your name in the top donators section. 
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
          {/* <Suspense fallback={renderLoader()}> */}
          <Comments />
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
export default July2021Update;
