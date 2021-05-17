import {
  Body,
  Bold,
  Anchor,
} from "./styles";

function Footer() {
  return (
    <Body>
      <Bold>
        Made with <span role="img" aria-label="heart"> 💖 </span> by
        <Anchor target="_blank" href="https://github.com/ProjectSakura"> Project Sakura </Anchor>
        - Sponsored by XSLTEL OU. Read about the credits
        <Anchor target="_blank" href="https://github.com/ProjectSakura/ProjectSakura.github.io/blob/master/README.md"> here </Anchor>
      </Bold>
    </Body>
  );
}

export default Footer;
