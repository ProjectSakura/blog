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
  UnorderedList,
  Anchor,
  Date,
  LoaderDiv,
} from "./styles";
// import AdComponent from "../../AdComponent/AdComponent";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
//image
import August2021UpdateIMG from "../../../images/blogs/August2021UpdateIMG.PNG";
// const DisqusComment = lazy(() => import("../../DisqusComment/DisqusComments"));
const AdComponent = lazy(() => import("../../AdComponent/AdComponent"));
const renderLoader = () => <LoaderDiv active inline="centered" size="big">Loading</LoaderDiv>;

function August2021Update() {
  //! IMP SECTION FOR COMMENTS
  const url = "https://direwolf-tech.disqus.com/5.2-August-2021-Update";
  const identifier = "August-2021 5.2-Update";
  const title = "Project Sakura | August Update";
  //!
  useEffect(() => {
    document.title = "Project Sakura | 5.2 Update";
  }, []);
  const [imageSrc, setImageSrc] = useState([]);
  useEffect(() => {
    //preloading image
    const img = new Image();
    img.onload = () => {
      setImageSrc(August2021UpdateIMG);
    };
    img.src = August2021UpdateIMG;
    // document.title = "Project Sakura | July 2021 Update";
  }, []);
  return (
    <Body>
      <Navbar />
      <Container>
        <BodyInner>
          <Date>
            08 August 2021
          </Date>
          <Heading>
            August Update of Project Sakura, Simple is the best!
          </Heading>
          <ImgDiv>
            <ImageTag src={imageSrc} alt="display" />
          </ImgDiv>
          <Description>
            Ohh, If it isn't the user who comes here to read my awesome blog posts every month. I have been trying hard to some how carry
            through my personal life struggles and keep the ROM alive and in good shape too. Like you say in Japanese, "Ganbare" which means
            to "Hang in there", and no I am not talking about hanging in your room that because that would be the opposite of what I am trying to say.
            Umm.. I think I have just said something very dark so, I will quickly turn back to the main topic of this blog post and that is the
            August security update.
            <br />
            <br />
            But before we start, if you are a gamer or a youtuber who have "Gaming ROM" in your YouTube video titles then FUCK YOU.
            Now, the changelogs for this release of Project Sakura are,
            <Suspense fallback={renderLoader()}>
              <AdComponent />
            </Suspense>
            <br />
          </Description>
          <UnorderedList>
            <ListItem>
              First and the most important is August Security Patch, android-11.0.0_r40.
            </ListItem>
            <br />
            <ListItem>
              Second is Datura Firewall, that let's you block internet access for any application on your phone.
              It is designed by CalyxOS and we are grateful for them for creating something so useful. The functionality itself
              was always present in the ROM since the beginning and you could toggle it by going into the app info page.
              But as you can guess nobody actually knew about it and it was kinda boring to do it from there.
            </ListItem>
            <br />
            <ListItem>
              Third is that you can switch from Google DNS to CloudFlare DNS by going into Network settings - Private DNS.
              We want you and everybody to use CloudFlare DNS because it's faster and more privacy oritented than Google DNS.
              You can read about it in more detail in this <Anchor href="https://askanydifference.com/difference-between-cloudflare-and-google-dns/">Article.</Anchor>
            </ListItem>
            <br />
            <ListItem>
              We have also added an option to use AdGuard DNS as private DNS provider and it will block all the ads on all websites
              while you browse through the internet from any browser. Which means you won't need to use any adblocker but we are sure you won't
              use it while browsing Project Sakura, you won't right?
            </ListItem>
            <br />
            <ListItem>
              You can now use the new Android 12 ShapeShift clock which an Android 12 DP-3 styled clock with dynamic font weight and it's
              color changes based on the wallpaper you use.
            </ListItem>
            <br />
            <ListItem>
              The lock icon on lockscreen will get left aligned for some clocks like the new Android 12 clocks and the IDE clocks
              because it looks better there and suits better with the clock styles.
            </ListItem>
            <br />
            <ListItem>
              And lastly, we have merged more translations and we would like to thank everyone who helped us in translating Project Sakura to more
              languages.
            </ListItem>
          </UnorderedList>
          <Description>
            So this was the simple monthly update that enhances your privacy. You will start seeing builds in few hours but
            it now completely depends on your maintainer if you will recieve an OTA update or not and we have no control over it anymore.
            And Android 12's stable release is coming closer too so from October we will start our work on the Android 12 based Project Sakura.
            <br />
            <br />
            We hope you don't end up with bugs but you can always avoid them by by wearing a Project Sakura exclusive Tshirt which you can check
            by clicking on this <Anchor href="https://www.hellotux.com/projectsakura">link</Anchor>. And if you love how hard we work every month to
            bring you absolutely free software then please consider donating at <Anchor href="https://projectsakura.xyz/blog/#/donation"> Project Sakura | Donations, </Anchor>
            we need your support to keep moving forward. As always do follow us on twitter at
            <Anchor href="https://twitter.com/ProjectSakura_"> @ProjectSakura_</Anchor>, we are racing to 500 followers and we post a lot of fun stuff there.
            <br />
            <br />
          </Description>
          <Suspense fallback={renderLoader()}>
            <AdComponent />
          </Suspense>
          <DiscussionEmbed
            shortname="direwolf-tech"
            config={{ url, identifier, title }}
          />
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
export default August2021Update;
