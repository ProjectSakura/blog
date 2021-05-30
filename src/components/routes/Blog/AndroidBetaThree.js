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
import googleAd from "../../AdComponent/AdComponent";
import DisqusComment from "../../DisqusComment/DisqusComments";
import Footer from "../../Footer/Footer";

function AndroidBetaThree() {
  return (
    <Body>
      <Container>
        <BodyInner>
          <Date>
            11 December 2020
          </Date>
          <Heading>
            Android 11 Beta 3 of Project Sakura is here!
          </Heading>
          <Description>
            We are back with beta 3 of Project Sakura. With this release we will be fixing most of the bugs. After Beta 3 we will be rebasing to the upcoming Lineage 18.1, because of this in this release we are not updating the security patch. For most of the devices
            this update will be as good as a stable update, but some devices will still have some issues here and there. With the rebase to Lineage 18.1 we will be moving to the stable 4.R release sometimes in January.
            <br />
            <br />
            Now see an ad.
            <br />
            <googleAd />
            <br />
            Okay good, so what we have new in this release..
            <br />
            <br />
          </Description>
          <UnorderedList>
            <ListItem>For your ugly faces, Face unlock.</ListItem>
            <br />
            <ListItem>Custom Icon Pack support in Trebuchet Launcher.</ListItem>
            <br />
            <ListItem>Project Sakura's own custom header pack.</ListItem>
            <br />
            <ListItem>QS tint for quick settings tiles. </ListItem>
            <br />
            <ListItem>OneUI styled setting actionbar.</ListItem>
            <br />
            <ListItem>A ton of upstreams from Lineage 18.0.</ListItem>
            <br />
          </UnorderedList>
          <Description>
            Now, we will immediately start working on 4.R with no sleep and no food. We are the ultimate lonely ass developers.. Like hell that's gonna happen. After this update I am going to sleep a ton and enjoy my free time until new year. So don't ask for those annoying ETAs. Just set some hentai wallpaper and enjoy Beta 3.
            <br />
            <br />
            Last week we released Beta 1 for some more devices. Beta 2 will take a little bit time for them to arrive. We have also started accepting applications for Official. So, If you are interested in maintaining
            a device then apply on <Anchor href="https://projectsakura.xyz/posts/maintainership.html"> Project Sakura Maintainers form.</Anchor>
            <br />
            <br />
            Also, If you like how hard we work you can go ahead and gift us some coffee for Xmas or New year. We will surely be delighted
            <Anchor href="https://www.buymeacoffee.com/lBUDKgM"> Buying me a coffee.</Anchor>
            <br />
            <br />
            Well, thats all for this release and as always do follow us on twitter <Anchor href="https://twitter.com/ProjectSakura_"> @ProjectSakura_</Anchor>
            coz we keep posting fun stuff on it ;)
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
      <Footer />
    </Body>
  );
}
export default AndroidBetaThree;
