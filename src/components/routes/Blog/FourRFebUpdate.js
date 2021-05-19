import { Container } from "semantic-ui-react";
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

function FourRFebUpdate() {
  return (
    <Body>
      <Container>
        <BodyInner>
          <Date>
            09 JANUARY 2021
          </Date>
          <Heading>
            First update of Project Sakura in 2021
          </Heading>

          <Description>
            A lot of shit is now gone with 2020 like Pubg from India and Covid-19. Well the great stuff like our new updates are still continuing and we are here with the first update of 2021. It's cold and my exams are ongoing but I still made some time for the January Update. I don't have much to talk for this release, it's a small update but we did made some decisions like not including any launcher other than Trebuchet by default on all builds (Go, Gapps, Vanilla or any other in future). Why? Coz having another launcher was becoming a pain in the ass for me.
            <br />
            Now see an ad.
            <br />
            <br />
            So did we fix any of the bugs we had last time? Haha Nope, but here goes the changelog.
          </Description>
          <UnorderedList>
            <ListItem>January Security Patch.</ListItem>
            <br />
            <ListItem>Added bunch of options like optional roaming and data disabled indicators.</ListItem>
            <br />
            <ListItem>You can now switch to Old styled network indicators.</ListItem>
            <br />
            <ListItem>Fixed QS and LS music player getting swiped away even while being active.</ListItem>
            <br />
            <ListItem>Fixed double tab on statusbar to sleep.</ListItem>
            <br />
            <ListItem>You can now customize the length of gesture bar.</ListItem>
            <br />
            <ListItem>3 button navigation layouts.v</ListItem>
            <br />
            <ListItem>And a lot more changes that we cannot mention here.</ListItem>
            <br />
          </UnorderedList>
          <Description>
            Now, the update will start rolling out from tonight or tomorrow morning most probably. It completely depends on the maintainer when he build and release. Also we have a bunch of new devices that we support now like Miatoll and Phoenix.
            <br />
            <br />
            Also, If you like how hard I work to bring you awesome and absolutely free software, you can go ahead and gift me some coffee
            <Anchor href="https://www.buymeacoffee.com/lBUDKgM"> Buying me a coffee.</Anchor>
            Also I would like to thank Antonio De Gaetano for buying me some coffee last month.
            <br />
            <br />
            Well, this was it for this very small update and if you find any bugs do report it to us with logcat coz Logcat or gtfo. and as always do follow us on twitter at
            <Anchor href="https://twitter.com/ProjectSakura_"> @ProjectSakura_</Anchor>,coz we keep posting fun stuff on it ;)
            <br />
            <br />
            One more ad lol.
          </Description>
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
export default FourRFebUpdate;
