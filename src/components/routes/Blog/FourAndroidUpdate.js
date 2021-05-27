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
import DisqusComment from "../../DisqusComment/DisqusComments";

function FourAndroidUpdate() {
  return (
    <Body>
      <Container>
        <BodyInner>
          <Date>
            29 DECEMBER 2020
          </Date>
          <Heading>
            4.R of Project Sakura is here!
          </Heading>
          <ImgDiv>
            <Image src="https://i.imgur.com/gHcCRzi.jpg" />
          </ImgDiv>
          <Description>
            A curvy, powerful and cool looking update of Project Sakura is here. With many yes, no and bootloops we are here. We have completely rebased to Lineage 18.1 for this release and trust me it was not easy. This one is not a BETA, its a buggy STABLE update so no more asking "Is this beta ser hehe? Is this build stable to use?" Well i secretly use blog posts to smash you users. This update will also start rolling from today or prolly tomorrow and almost all of the supported devices will get it by new year (No i didn't bothered asking maintainers before giving this ETA).
            <br />
            Now see an ad. Man we really ain't earning shit from it so plox turn off that adblocker ;_;
            <br />
            <br />
            So what new stuff we have this time?
          </Description>
          <UnorderedList>
            <ListItem>Themes, like a lot of em.</ListItem>
            <br />
            <ListItem>Gvisual Mod, yup that magisk module one.</ListItem>
            <br />
            <ListItem>Screen locking animation, they look very sick.</ListItem>
            <br />
            <ListItem>In-call Vibrations options.</ListItem>
            <br />
            <ListItem>Live Volume steps controller.</ListItem>
            <br />
            <ListItem>December Security Patch.</ListItem>
            <br />
            <ListItem>All fonts from 2.Q are back.</ListItem>
            <br />
            <ListItem>And everything else that we couldn't write here.</ListItem>
            <br />
          </UnorderedList>
          <Description>
            Next month I have my terminal exams so I am not sure when or if there will be a January Update. I will surely try my best to push atleast january security patch. Before wrapping up, a small workaround for those who aren't able to access Obb folders in any file manager because of Android 11's scoped storage changes, all you need to do is give "Install unknown apps" permission to the file manager and you will be access it. As for accessing data folder you will need root access then migrate to {`data->media->0->`}Android and voila you can access data of apps.
            <br />
            <br />
            Also, If you like how hard we work to bring you awesome and absolutely free software, you can go ahead and gift us some coffee for New year. We will surely be delighted.
            <Anchor href="https://www.buymeacoffee.com/lBUDKgM"> Buying me a coffee.</Anchor>
            <br />
            <br />
            Well, this was it for this very small update happy new year and hope you all enjoy version 4.R. and as always do follow us on twitter at
            <Anchor href="https://twitter.com/ProjectSakura_"> @ProjectSakura_</Anchor>,coz we keep posting fun stuff on it ;)
            <br />
            <br />
            One more ad lol.
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
export default FourAndroidUpdate;
