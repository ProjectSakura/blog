// styles
// import { Menu } from "semantic-ui-react";
import {
  SideDiv, Image, LinkDiv, Anchor, ImgDiv, Span,
} from "./styles";
// Logo
import Logo from "../../images/logo.png";

function Sidebar() {
  return (
    <SideDiv>
      <ImgDiv>
        <Image src={Logo} alt="logo" />
        <Span> Project Sakura </Span>
      </ImgDiv>
      <LinkDiv>
        <Anchor href="https://projectsakura.github.io/"> Home </Anchor>
        <br />
        <Anchor href="https://projectsakura.github.io/blogs"> Blog </Anchor>
        <br />
        <Anchor href="https://projectsakura.github.io/stats.html"> Stats </Anchor>
        <br />
        <Anchor href="https://twitter.com/ProjectSakura_"> Twitter </Anchor>
        <br />
        <Anchor href="https://t.me/ProjectSakura"> Telegram </Anchor>
        <br />
      </LinkDiv>
    </SideDiv>
  );
}
export default Sidebar;
