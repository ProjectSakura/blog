import React from "react";
import {
  FooterBody, FooterChild, Image, Anchor, TagLine,
} from "./Styles";
import Logo from "./sakura_footer.svg";
import Sponsor from "../../images/sponsor.png";

const Footer = () => (
  <>
    <FooterBody>
      <FooterChild>
        <Image src={Logo} />
        <TagLine>Project Sakura is a fully free and Opensource Custom ROM built around LineageOS.</TagLine>
        <br />
        <Anchor href="https://telegram.me/ProjectSakura" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-telegram fa-2x" />
        </Anchor>
        <Anchor href="https://twitter.com/ProjectSakura_" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter fa-2x" />
        </Anchor>
        <Anchor href="https://github.com/ProjectSakura" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github fa-2x" />
        </Anchor>
      </FooterChild>
      <FooterChild>
        <h3>Sponsored By</h3>
        <Image src={Sponsor} />
      </FooterChild>
    </FooterBody>
  </>
);
export default Footer;
