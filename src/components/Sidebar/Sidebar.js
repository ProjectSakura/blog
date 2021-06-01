// styles
// import { Menu } from "semantic-ui-react";
import {
  SideDiv, Image, LinkDiv, Anchor, ImgDiv, Span, SponsorImage,
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
        <Anchor href="https://projectsakura.github.io/stats.html"> Stats </Anchor>
        <br />
        <Anchor href="https://twitter.com/ProjectSakura_"> Twitter </Anchor>
        <br />
        <Anchor href="https://t.me/ProjectSakura"> Telegram </Anchor>
        <br />
        <Anchor href="https://projectsakura.xyz/download"> Downloads </Anchor>
        <br />
      </LinkDiv>
      {/* Sponser Section */}
      <ImgDiv>
        <SponsorImage src="https://projectsakura.xyz/image/spon-white.png" alt="logo" />
      </ImgDiv>
    </SideDiv>
  );
}
export default Sidebar;
