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
import AdComponent from "../../AdComponent/AdComponent";
import DisqusComment from "../../DisqusComment/DisqusComments";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

function FourRJanUpdate() {
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>
            08 FEBRUARY 2021
          </Date>
          <Heading>
            February 2021 update of Project Sakura
          </Heading>
          <Description>
            With every month passing we are moving closer towards the spring we want (atleast in my country). So, with a very deep line that I took a whole week to think up ; I am writing the blog post for february just like I do every month. This month is very very fucking busy for me.. but guess what? we are one day early with the update than we were last month. Though there are no big overhaul just some small tweaks and changes.
            <br />
            Now see an ad.
            <AdComponent />
            <br />
            Wondering what's new we have this month?
          </Description>
          <UnorderedList>
            <ListItem>February Security Patch.</ListItem>
            <ListItem>Navigation gesture height.</ListItem>
            <ListItem>Ability to manually reset battery stats.</ListItem>
            <ListItem>A ton of accents, like a whole load of them.</ListItem>
          </UnorderedList>
          <Description>
            Yeah, really that's all the major changes we did for this release. Initially I planned for more changes but nothing ever goes as planned. Also, We have had to say goodbye to a lot of our favorite devices like Galaxy A30, A40, M30 and Begonia; Pfft good riddance. But we have a lot of newly supported devices with this release like OnePlus 6, Galaxy A10, Redmi K20 and Poco X3 and we are always expanding to support more and more devices.
            <br />
            <br />
            So, That was everything for this release and see you in March with a big release. Also, If you like how hard I work to bring you awesome and absolutely free software, you can go ahead and gift me some coffee,
            <Anchor href="https://www.buymeacoffee.com/lBUDKgM"> Buying me a coffee.</Anchor>
            Also I would like to thanks to Thapsus for buying me some coffee last month.
            <br />
            <br />
            Well, this was it for this very small update and if you find any bugs do report it to us with logcat coz Logcat or gtfo. and as always do follow us on twitter at
            <Anchor href="https://twitter.com/ProjectSakura_"> @ProjectSakura_</Anchor>,coz we keep posting fun stuff on it ;)
            <br />
            <br />
            One more ad lol.
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
export default FourRJanUpdate;
