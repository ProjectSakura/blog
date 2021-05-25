import { Container } from "semantic-ui-react";
import {
  AuthorHead, AuthorSec, AuthorSubHead, Body, BodyInner, Description, Heading, ListItem, UnorderedList, Anchor, Date, CenterDiv,
} from "./styles";

function Maintainership() {
  return (
    <Body>
      <Container>
        <BodyInner>
          <Date>14 May 2020</Date>
          <Heading>Maintainership Application for Project Sakura</Heading>
          <Description>
            Another update is coming tomorrow and with it I am opening the maintainership application for The ROM. So if you are interested in maintaining the ROM you can apply from the
            link below.
          </Description>
          <Description>You don't need too many skills to be a device maintainer. You only need to have:-</Description>
          <UnorderedList>
            <ListItem>Enough git skills to properly handle your device repos and maintaining it.</ListItem>
            <ListItem>Contributions made to your device community.</ListItem>
            <ListItem>Ability to read logs, so you can fix your device related stuff.</ListItem>
          </UnorderedList>
          <Description>So if you have the skills then feel free to click the below and submit your application. Someone from the admin team will get back to you :)</Description>
          <CenterDiv>
            <Anchor href="https://docs.google.com/forms/d/e/1FAIpQLSfKFUSyohdGKQFLEZCxsxCemlcXdKUMPCsShi0TXGJu7ihceg/viewform"> Apply for Maintainership</Anchor>
          </CenterDiv>
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
    </Body>
  );
}
export default Maintainership;
