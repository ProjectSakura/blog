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
import googleAd from "../../AdComponent/AdComponent";
import DisqusComment from "../../DisqusComment/DisqusComments";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

function AndroidElevenBeta() {
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>
            09 NOVEMBER 2020
          </Date>
          <Heading>
            Android 11 Beta 1 of Project Sakura is here!
          </Heading>

          <Description>
            It's been so long that you last heard from us. Project Sakura's new release have been in work for quite some time now. I am working on it completely and I have no time anymore to work on 10. So I have 1 bad news and 1 good news today. Bad news is that Project Sakura based on android 10 officially dead starting now.
            <br />
            And the good news is the post title. Don't expect too much.
            <br />
            <br />
            What have we got in the bag for 1st beta release? Lets see..
          </Description>
          <UnorderedList>
            <ListItem>November Security Patch.</ListItem>
            <br />
            <ListItem>OTA Updates</ListItem>
            <br />
            <ListItem>Almost all of the features that Project Sakura 10 had, well most of them are there in Android 11 beta too.</ListItem>
            <br />
          </UnorderedList>
          <Description>Almost all of the features that Project Sakura 10 had, well most of them are there in Android 11 beta too.</Description>
          <UnorderedList>
            <ListItem>ASUS Zenfone Max Pro M1 by LordShenron</ListItem>
            <br />
            <ListItem>LeEco Le 2 by CakesTwix</ListItem>
            <br />
            <ListItem>Samsung Galaxy M20 and M30 by Haridhayal</ListItem>
            <br />
            <ListItem>Xiaomi Note 7 Pro by Nitish and Wally</ListItem>
            <br />
            <ListItem>Xiaomi Note 9 Pro Global by A9ito, the list can be changed later</ListItem>
          </UnorderedList>
          <Description>
            We have also started accepting applications for Official. So, If you are interested in maintaining a device then apply on
            <Anchor href="https://projectsakura.xyz/posts/maintainership.html">Project Sakura Maintainers form. </Anchor>
            <br />
            <br />
            It will take some time to port the remaining stuff from android 10 to 11. This is all for this quick small Beta release. Keep in mind that its beta and expect some bugs to be there. Everything takes time to get better and we are no exception.
            <br />
            <br />
            Also keep an eye on our channel you will see releases happening soon enough.
            <br />
            <br />
            Oh and if you like our work, please consider buying me a coffee because we need to keep working hard to bring you awesome free software.
            <Anchor href="https://www.buymeacoffee.com/lBUDKgM"> Buying me a coffee.</Anchor>
            Also I would like to thanks to Thapsus for buying me some coffee last month.
            <br />
            <br />
            Well, this was it for this very small update and if you find any bugs do report it to us with logcat coz Logcat or gtfo. and as always do follow us on twitter at
            <Anchor href="https://twitter.com/ProjectSakura_"> @ProjectSakura_</Anchor>,coz we keep posting fun stuff on it ;)
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
export default AndroidElevenBeta;
