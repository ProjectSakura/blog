import { Container } from "semantic-ui-react";
//Style-Component
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
} from "./styles";
import AdComponent from "../../AdComponent/AdComponent";
import DisqusComment from "../../DisqusComment/DisqusComments";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

function AndroidBetaTwo() {
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>
            28 November 2020
          </Date>
          <Heading>
            Android 11 Beta 2 of Project Sakura is here!
          </Heading>
          <Description>
            Exactly 20 days it took us to be here. Yes!!! FINALLY 1 STEP CLOSER TO THE STABLE TAG. Last time we released Beta 1 that had BUGS. They are still here LoL. Well, if I say we are one step closer to the STABLE tag then we indeed are moving towards it. With
            Beta 2 we will be bringing more features, more fixes and even more weird ass bugs. Also, we have a lot of devices that will be available to download with Beta 2.
            <br />
            <br />
            Now see an ad.
            <br />
            <AdComponent />
            <br />
            Okay good, so what we have new in this release..
            <br />
            <br />
          </Description>
          <UnorderedList>
            <ListItem>Everyone's favorite gimmick, Gaming mode.</ListItem>
            <br />
            <ListItem>Moar Clock faces, some ugly ones too.</ListItem>
            <br />
            <ListItem>Fixed the issue where wifi tile was not expanding in QS.</ListItem>
            <br />
            <ListItem>Volume dialog's visibility time can be changed now.</ListItem>
            <br />
            <ListItem>For weak ass displays that never goes over 60, we have fps meter </ListItem>
            <br />
            <ListItem>A ton of misc changes.</ListItem>
          </UnorderedList>
          <Description>
            With Beta 2 release you can now have builds with GAPPS included. Most of the devices will be switching to builds with GAPPS included. Builds with GAPPS will also have Pixel Launcher as default launcher while VANILLA builds will have Trebucet Launcher based on Launcher3.
            <br />
            <br />
            Last week we released Beta 1 for some more devices. Beta 2 will take a little bit time for them to arrive. We have also started accepting applications for Official. So, If you are interested in maintaining
            a device then apply on <Anchor href="https://projectsakura.xyz/posts/maintainership.html"> Project Sakura Maintainers form.</Anchor>
            <br />
            <br />
            Well, That was almost everything that we needed to tell. With beta 2 you can call this thing almost daily usable. We still don't advice you to use Beta builds on devices that you need in 100% best state.
            <br />
            <br />
            Oh and if you like our work, please consider buying me a coffee because we need to keep working hard to bring you awesome free software
            <Anchor href="https://www.buymeacoffee.com/lBUDKgM"> Buying me a coffee.</Anchor>
            <br />
            <br />
            Well, thats all for this release and as always do follow us on twitter <Anchor href="https://twitter.com/ProjectSakura_"> @ProjectSakura_</Anchor>
            coz we keep posting fun stuff on it ;)
            <br />
            <br />
            One more ad lol.
            <br />
          </Description>
          <AdComponent />
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
      <Footer />
    </Body>
  );
}
export default AndroidBetaTwo;
