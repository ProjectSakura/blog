import { Container } from "semantic-ui-react";
import {
  AuthorHead, AuthorSec, AuthorSubHead, Body, BodyInner, Description, Heading, ListItem, UnorderedList, Anchor, Date,
} from "./styles";
import AdComponent from "../../AdComponent/AdComponent";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import DisqusComment from "../../DisqusComment/DisqusComments";

function Android11InitialRelease() {
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>08 March 2021</Date>
          <Heading>Initial Release of Project Sakura 5.R</Heading>
          <Description>
            This spring feels more like summer, thanks to overheating kernels for causing Global Warming (Poor Joke :P). Well, We were so damn silent that people starting asking If we are
            alive anymore. Happy to tell you that, we are alive and we are updating every month like we always do. This month we are moving from version 4.R to 5.R and going into feature
            freeze, that means no more new feature requests will be taken and no more new features will be added anymore. So, please don't ask us to add anymore weird ass features.
          </Description>
          <Description>Now see an ad.</Description>
          <AdComponent />
          <Description>So, What took us so long for this update? Here goes the changelog.</Description>
          <UnorderedList>
            <ListItem>March Security Patch. </ListItem>
            <br />
            <ListItem>Better icon pack support in Trebuchet </ListItem>
            <br />
            <ListItem>App Drawer Opacity support in Trebuchet </ListItem>
            <br />
            <ListItem>Icon size support in Trebuchet </ListItem>
            <br />
            <ListItem>Moved Lineage Settings from System to SakuraConfig</ListItem>
            <br />
            <ListItem>Lockscreen weather </ListItem>
            <br />
            <ListItem>New IDE lockscreen clock </ListItem>
            <br />
            <ListItem>Data usage in QS Panel </ListItem>
            <br />
            <ListItem>Redesigned Volume Panel </ListItem>
            <br />
            <ListItem>Materialized Toasts </ListItem>
            <br />
            <ListItem>QS media player can be toggled ON and OFF</ListItem>
            <br />
            <ListItem>FaceUnlock animations </ListItem>
            <br />
            <ListItem>Notification sounds can be suppressed while screen is ON </ListItem>
            <br />
            <ListItem>Long ScreenShot support (Though it's kinda buggy) </ListItem>
            <br />
            <ListItem>And everything else that we cannot write here.. </ListItem>
          </UnorderedList>
          <Description>
            Huge ass update right? It took us so much work to get this all done during february. You guys better be really grateful to me this time. Also, we will try to increase the
            frequency of updates from this month and fix any remaining bugs, Please don't report about long screenshot coz we already know about it.
          </Description>
          <Description>
            So, That was everything for this small release and see ya all in April. Also, If you like how hard I work to bring you awesome and absolutely free software, you can go ahead
            and gift me some coffee,<Anchor href="https://ko-fi.com/lordshen"> Buy me a coffee</Anchor>.
          </Description>
          <Description>
            Well, this was it for this update and if you find any bugs do report it to us with logcat coz Logcat or gtfo. As always do follow us on twitter{" "}
            <Anchor href="https://twitter.com/ProjectSakura_">@ProjectSakura_</Anchor> coz we keep posting fun stuff on it ;)
          </Description>
          <Description>One more ad lol.</Description>
          <AdComponent />

          <DisqusComment />

        </BodyInner>

        <AuthorSec>
          <AuthorHead>About Author</AuthorHead>
          <AuthorSubHead>LordShenron</AuthorSubHead>
          <Description>
            LordShenron is the lead developer of the project. He is also an IT Engg Student and he loves anime and Japanese pop music. When he is not online he is mostly sleeping or busy
            with some college work.
          </Description>
        </AuthorSec>
        <AdComponent />
      </Container>
      <Footer />
    </Body>
  );
}
export default Android11InitialRelease;
