import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import {
  FooterBody, FooterChild, Image, Anchor, TagLine, FooterImage, SponsorTag,
} from "./Styles";
import Logo from "./sakura_footer.webp";
import Sponsor from "../../images/sponsor.webp";

const Footer = () => (
  <>
    <FooterBody>
      <FooterChild>
        <Image src={Logo} />
        <TagLine>Project Sakura is a fully free and Opensource Custom ROM built around LineageOS.</TagLine>
        <br />
        <Anchor href="https://telegram.me/ProjectSakura" target="blank" rel="noopener noreferrer">
          <IconContext.Provider value={{ size: "2em" }}>
            <FaTelegram />
          </IconContext.Provider>
        </Anchor>
        <Anchor href="https://twitter.com/ProjectSakura_" target="blank" rel="noopener noreferrer">
          <IconContext.Provider value={{ size: "2em" }}>
            <FaTwitter />
          </IconContext.Provider>
        </Anchor>
        <Anchor href="https://github.com/ProjectSakura" target="blank" rel="noopener noreferrer">
          <IconContext.Provider value={{ size: "2em" }}>
            <FaGithub />
          </IconContext.Provider>
        </Anchor>
      </FooterChild>
      <FooterChild>
        <SponsorTag>Sponsored By</SponsorTag>
        <FooterImage src={Sponsor} />
      </FooterChild>
    </FooterBody>
  </>
);
export default Footer;
