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
  UnorderedList,
  Anchor,
  Date,
} from "./styles";
import AdComponent from "../../AdComponent/AdComponent";
import DisqusComment from "../../DisqusComment/DisqusComments";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
//image
import June2021UpdateIMG from "../../../images/blogs/June2021UpdateIMG.png";

function June2021Update() {
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>
            17 JUNE 2021
          </Date>
          <Heading>
            The best thing this summer is Project Sakura 5.1
          </Heading>
          <ImgDiv>
            <Image src={June2021UpdateIMG} alt="display" />
          </ImgDiv>
          <Description>
            Far beyond the mountains and the sea there was a vast land with nothing but a beautiful green grass but there was a weird looking table there and a computer on it
            and on that table there was a man sitting while holding his head. All of a sudden he get up and looks in the sky and screams "DAMNNNN ITTTT".<br />
            The above lines describe how I felt this june while juggling between my studies and this update. But exclude those green grass coz June in India feels more like
            living in a desert. But just so you know the heat and frustration couldn't stop us and so here we are with Project Sakura 5.1. Yeah we have dropped our old versioning of having the letter
            of the android version that the ROM is based on, in favor of this more traditional versioning style. Also this update deserved a version bumb because we had to rebase many repos.
            Now I know you all come to read the blog because I write it 😅 but let's focus on the update.
            <br />
            <br />
            But before we start, see an ad.
            <AdComponent />
            <br />
            So, what do we have for 5.1 release? Here goes the changelog..
          </Description>
          <UnorderedList>
            <ListItem>June Security Patch android-11.0.0_r38</ListItem>
            <br />
            <ListItem>We have dropped our switch based theme implementation in favour of Color Bucket. With this all the theme resetting issues are
              fully solved.
            </ListItem>
            <br />
            <ListItem>While moving to color bucket we have also added few more themes like "Dark Aubergine" and "Android 12 Dark Theme".</ListItem>
            <br />
            <ListItem>We have switched back to 3 button navigation as default.</ListItem>
            <br />
            <ListItem>Many users reported to us that they wanted to have the AOSP clear all button instead of OOS styled material clear all.
              So, we have now added the toggle to switch between them.
            </ListItem>
            <br />
            <ListItem>Package Installer will now show you the current installed version and new version while APK installation.</ListItem>
            <br />
            <ListItem>Another big change is VolumePanel Plugins from POSP. So now you can switch between many different volume panel styles.</ListItem>
            <br />
            <ListItem>We moved to FontService and added a ton of new fonts including Google Sans. All of the fonts will be applied System Wide and to apps also, if
              they support it.
            </ListItem>
            <br />
            <ListItem>We won't be using IEC standards for Network Traffic Indicator.</ListItem>
            <br />
            <ListItem>You can now control the transparency of Power Menu Options.</ListItem>
            <br />
            <ListItem>We have fixed the crashes in About Project Section of Sakura Config.</ListItem>
            <br />
            <ListItem>Throughout the Settings we will be using List Menus instead of drop down menus.</ListItem>
            <br />
            <ListItem>And final is that there are a lot of translation improvements and we would like to thank all the contributors for helping us with translations.</ListItem>
          </UnorderedList>
          <Description>
            Our Wiki is now live at <Anchor href="https://projectsakura.xyz/wiki">ProjectSakura | Wiki</Anchor>.  So, if you are a developer who want to get started with Project Sakura
            or a user who just want to know more about Project Sakura, then please visit our Wiki. Our Github Sponsors Profile is also live now so if you want to support Project Sakura
            then consider becoming a Sponsor on <Anchor href="https://github.com/sponsors/ProjectSakura"> GitHub</Anchor>. It means a lot to us because we rely primarily on donations.
            <br />
            <br />
            Well that was about everything for this new release of Project Sakura and hope you guys will be reporting a lots of bugs and issues so that my misery would never end.
            As always do follow us on twitter at
            <Anchor href="https://twitter.com/ProjectSakura_"> @ProjectSakura_</Anchor>, we are very close to 300 followers and we post a lot of fun stuff there.
            <br />
            <br />
            Before you go.. one more small tiny ad. We also don't like them but sadly we have no choice.
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
      <AdComponent />
      <Footer />
    </Body>
  );
}
export default June2021Update;
