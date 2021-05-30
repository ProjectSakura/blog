import { Container } from "semantic-ui-react";
import {
  AuthorHead, AuthorSec, AuthorSubHead, Body, BodyInner, Description, Heading, Image, ImgDiv, ListItem, SubHeading, UnorderedList, Anchor, Date,
} from "./styles";
import googleAd from "../../AdComponent/AdComponent";
import DisqusComment from "../../DisqusComment/DisqusComments";
import Footer from "../../Footer/Footer";

function April2021Update() {
  return (
    <Body>
      <Container>
        <BodyInner>
          <Date>12 April 2021</Date>
          <Heading>April security update of ProjectSakura is here!</Heading>
          <ImgDiv>
            <Image src="https://i.imgur.com/gQIVeSH.png" />
          </ImgDiv>
          <SubHeading />
          <Description>
            Damn, Its April and temperatures are going up but the quality of Custom ROMs are doing down :P , but we are different! We get better and better with the power of Friendship!
            So, here we are fully japanized with a freaking Anime character of our own.
            <br />
            <br />
            With every release I feel more and more retarded while writing these blog posts. So, Now let's get seriously into the release. You guys spammed us with "wen update", "wen
            update sar", "plox update". But sadly like every month we are following our normal release cycle. We always update around 12th to 15th of the month at best. So, Lemme tell you
            what changes you will be seeing this month.
            <br />
            <br />
            See a smol cute ad first.
            <br />
            <googleAd />
            <br />
            Okay good, so what we have new in this release..
          </Description>
          <UnorderedList>
            <ListItem>April Security Patch. </ListItem>
            <br />
            <ListItem>All the changes from LineageOS.</ListItem>
            <br />
            <ListItem>Another new clock faces from ShapeShift and Fluid.</ListItem>
            <br />
            <ListItem>
              To protecc your batteries we added Smart Cutoff which basically stops charging if temperatures goes above the set limit and wait for it cool down to start charging again.
            </ListItem>
            <br />
            <ListItem>Also no more OnePlus Launcher, simply coz Trebuchet is so so much better now.</ListItem>
            <br />
            <ListItem>Redesigned Recent bottons for Trebuchet, yeah once again this time its much better and simpler.</ListItem>
            <br />
            <ListItem>You can now set different ringtones for both of your simcards.</ListItem>
            <br />
            <ListItem>We have added Applock support. Some devices might have already recieved it but we never made an Official Announcement.</ListItem>
            <br />
            <ListItem>AntiFlicker support from LineageOS.</ListItem>
            <br />
            <ListItem>And we now support much more Languages like czech, chinese, spanish, Vietnamese because of ya'all who made contributions on our Crowdin, So Thank you.</ListItem>
            <br />
          </UnorderedList>
          <Description>
            We are also dropping an array of devices from our supported list, they are:
          </Description>
          <UnorderedList>
            <ListItem>Samsung Galaxy J4+</ListItem>
            <ListItem>Xiaomi Redmi K20</ListItem>
            <ListItem>Xiaomi Redmi 6 PRO</ListItem>
            <ListItem>Xiaomi Mi A1</ListItem>
            <ListItem>Xiaomi Mi A2</ListItem>
            <ListItem>Xiaomi Mi 6X</ListItem>
            <ListItem>Xiaomi Poco X2</ListItem>
          </UnorderedList>
          <Description>
            We dropped them because most of em recieved updates very irregularly and maintainers going AFK without any notice and some various other reasons.
            <br />
            So, If you are someone who is interested in maintaining these devices then feel free to fill up our maintainers form and we will get in touch with you.
            <br />
            We are also adding support for few of our all time favorite devices, the list goes like:
            <br />
          </Description>
          <UnorderedList>
            <ListItem>Samsung Galaxy S8</ListItem>
            <ListItem>Samsung Galaxy S8 Plus</ListItem>
            <ListItem>Samsung Galaxy Note 8</ListItem>
          </UnorderedList>
          <Description>
            But, this is not all we also have one more thing coming this week :) But that will have a separate blog post of it's own( more retarded content from me ).
            <br />
            So, That was everything for this small release and see ya all soon.
            <br />
            <br />
            Also, If you like how hard we work you can go ahead and gift us some coffee to complete this trade. We will surely be delighted, <Anchor href="https://ko-fi.com/lordshen">Buying me a coffee.</Anchor>
            <br />
            <br />
            Well, thats all for this release and as always do follow us on twitter <Anchor href="https://twitter.com/ProjectSakura_">@ProjectSakura_</Anchor> coz we keep posting fun stuff on it ;)
            <br />
            <br />
            One more ad lol.
            <googleAd />
          </Description>
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
      </Container>
      <Footer />
    </Body>
  );
}
export default April2021Update;
