import { Container } from "semantic-ui-react";
import {
  AuthorHead,
  AuthorSec,
  AuthorSubHead,
  Body,
  BodyInner,
  Description,
  Heading,
  Image,
  ImgDiv,
  ListItem,
  SubHeading,
  UnorderedList,
  Anchor,
  Date,
} from "./styles";
import DisqusComment from "../../DisqusComment/DisqusComments";
import googleAd from "../../AdComponent/AdComponent";

function May2021Update() {
  return (
    <Body>
      <Container>
        <BodyInner>
          <Date>
            10 MAY 2021
          </Date>
          <Heading>
            Blur, Transparency, Stability and much more with May update of ProjectSakura
          </Heading>
          <ImgDiv>
            <Image src="https://i.imgur.com/XYCf1os.jpg" />
          </ImgDiv>
          <SubHeading>
            Artwork by: cryptofox17 for ProjectSakura
          </SubHeading>
          <Description>
            It's May, the weather is really weird and the Pandemic is at the peak in India. I also don't know how long all of this will go on..
            It's quite pressurizing psychologically. But even then we are doing what we love and bringing another update of ProjectSakura. So, Let's take <i>"ProjectSakura to the mooooooooon"</i>.
            <br />
            Before we start see an ad.
            <br />
            <googleAd />
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
            <br />
            <ListItem>Added support for ScreenShot quality Settings</ListItem>
            <br />
            <ListItem>Developers can limit the max frame rate of built in screenrecorder</ListItem>
            <br />
            <ListItem> A new charging animation when you plug in your device</ListItem>
            <br />
            <ListItem>Two more clock faces to choose from, IDE(Java) clock and Type(Alt) clock</ListItem>
            <br />
            <ListItem>We fixed an issue where Type(Alt) clock was always stuck on Good Morning salute</ListItem>
            <br />
            <ListItem>The older volte icon is gone in favor of much better Dynamic Volte icon. But if you are a samsung user then you can cry a river coz you are obviously not getting Volte xD</ListItem>
            <br />
            <ListItem>There is the new OOS styled clear all button</ListItem>
            <br />
            <ListItem>A lot of improvements to the Blur from ProtonAOSP</ListItem>
            <br />
            <ListItem> Support for applying blur to the lockscreen and applying transparency to the notification background from CrDroid </ListItem>
            <br />
            <ListItem>Sakura is now translated to more new languages like Japanese, Hebrew and many more.</ListItem>
            <br />
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
            <googleAd />
          </Description>
          <DisqusComment />
        </BodyInner>
        <AuthorSec>
          <AuthorHead>About Author</AuthorHead>
          <AuthorSubHead>LordShenron</AuthorSubHead>
          <Description>
            LordShenron is the lead developer of the project. He is also an IT Engg Student and he loves anime and Japanese pop music. When he is not online he is mostly sleeping or busy with some college work.
          </Description>
        </AuthorSec>
      </Container>
    </Body>
  );
}
export default May2021Update;
