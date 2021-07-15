import {
  lazy, Suspense, useEffect, useState,
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
  ImageTag,
  ImgDiv,
  ListItem,
  SubHeading,
  UnorderedList,
  Anchor,
  Date,
  LoaderDiv,
} from "./styles";
// import AdComponent from "../../AdComponent/AdComponent";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
// import Comments from "../../Comments/Comments";
// import DisqusComment from "../../DisqusComment/DisqusComments";
//image
import May2021UpdateIMG from "../../../images/blogs/May2021UpdateIMG.webp";

// const DisqusComment = lazy(() => import("../../DisqusComment/DisqusComments"));
const AdComponent = lazy(() => import("../../AdComponent/AdComponent"));
const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

function May2021Update() {
  const [imageSrc, setImageSrc] = useState([]);
  //! IMP SECTION FOR COMMENTS
  const url = "https://direwolf-tech.disqus.com/5.R-mid-may-2021-update";
  const identifier = "May 2021 Update";
  const title = "Project Sakura | May 2021 Update";
  //!
  useEffect(() => {
    //preloading image
    const img = new Image();
    img.onload = () => {
      setImageSrc(May2021UpdateIMG);
    };
    img.src = May2021UpdateIMG;
    document.title = "Project Sakura | May 2021 Update";
  }, []);
  return (
    <Body>
      {/* <Helmet>
        <title>Blur, Transparency, Stability and much more with May update of ProjectSakura</title>
      </Helmet> */}
      <Navbar />
      <Container>
        <BodyInner>
          <Date>
            10 MAY 2021
          </Date>
          <Heading>
            Blur, Transparency, Stability and much more with May update of ProjectSakura
          </Heading>
          <ImgDiv>
            <ImageTag src={imageSrc} alt="display" />
          </ImgDiv>
          <SubHeading>
            Artwork by: cryptofox17 for ProjectSakura
          </SubHeading>
          <Description>
            It's May, the weather is really weird and the Pandemic is at the peak in India. I also don't know how long all of this will go on..
            It's quite pressurizing psychologically. But even then we are doing what we love and bringing another update of ProjectSakura. So, Let's take <i>"ProjectSakura to the mooooooooon"</i>.
            <br />
            Before we start see an ad.
            <Suspense fallback={renderLoader()}>
              <AdComponent />
            </Suspense>
            <br />
            So, what is new in this monthly update? Here goes the changelog
          </Description>
          <UnorderedList>
            <ListItem>May Security Patch android-11.0.0_r37</ListItem>
            <br />
            <ListItem>
              Trebuchet now look and feel like Pixel Launcher with a search bar in dock. And YES, it can be toggled
              Applock can now lock apps Instantly after exiting
            </ListItem>
            <ListItem>Added support for ScreenShot quality Settings</ListItem>
            <ListItem>Developers can limit the max frame rate of built in screenrecorder</ListItem>
            <ListItem> A new charging animation when you plug in your device</ListItem>
            <ListItem>Two more clock faces to choose from, IDE(Java) clock and Type(Alt) clock</ListItem>
            <ListItem>We fixed an issue where Type(Alt) clock was always stuck on Good Morning salute</ListItem>
            <ListItem>The older volte icon is gone in favor of much better Dynamic Volte icon. But if you are a samsung user then you can cry a river coz you are obviously not getting Volte xD</ListItem>
            <ListItem>There is the new OOS styled clear all button</ListItem>
            <ListItem>A lot of improvements to the Blur from ProtonAOSP</ListItem>
            <ListItem> Support for applying blur to the lockscreen and applying transparency to the notification background from CrDroid </ListItem>
            <ListItem>Sakura is now translated to more new languages like Japanese, Hebrew and many more.</ListItem>
          </UnorderedList>
          <Description>
            With this release we are also adding support for Moto G7 Power, codenamed Ocean.
            <br />
            There is one more small thing that we would like to address here, and that is the people who are applying for the official maintainer-ship of Project Sakura.
            Earlier only I was reviewing it, but now we have ArmSm manage them too because the volume of the applications every month kept rising.
            We get applications of people who have no experience of git, some literally signed up on github like a week ago. Some didn't even bother to build the ROM before applying.
            This is now pissing me off. Why do we have to review a "shitty" application?
            <br />
            <br />
            To tackel this we will soon be revising our minimum requirements for applying to get the Official tag of Project Sakura. So, this is all that you needed to know.
            Well that was everything for this big release and the updates for supported devices will start rolling out from today. Also, If you like how hard I work to bring you awesome and absolutely free software, you can go ahead and donate us some coffee at,
            <Anchor href="https://projectsakura.xyz/donation"> ProjectSakura | Donations. </Anchor> Also I would like to thank MissingNerd and Evan Krimpen for the donations so far.
            <br />
            <br />
            As always do follow us on twitter at
            <Anchor href="https://twitter.com/ProjectSakura_"> @ProjectSakura_</Anchor>, we recently crossed 200 followers there.
            <br />
            <br />
            One more ad lol.
            <br />
          </Description>
          <Suspense fallback={renderLoader()}>
            <AdComponent />
          </Suspense>
          <DiscussionEmbed
            shortname="direwolf-tech"
            config={{ url, identifier, title }}
          />
          {/* <Comments /> */}
          {/* <Suspense fallback={renderLoader()}> */}
          {/* <DisqusComment /> */}
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
export default May2021Update;
