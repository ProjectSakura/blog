import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import {
  FooterBody, FooterChild, Img, Anchor, TagLine, FooterImage, SponsorTag,
} from "./Styles";
import Logo from "./sakura_footer.webp";
import Sponsor from "../../images/sponsor.webp";

const Footer = () => {
  const [LogoSrc, setLogoSrc] = useState([]);
  const [SponsorSrc, setSponsorSrc] = useState([]);
  useEffect(() => {
    const img0 = new Image();
    img0.onload = () => {
      setLogoSrc(Logo);
    };
    img0.src = Logo;

    const img1 = new Image();
    img1.onload = () => {
      setSponsorSrc(Sponsor);
    };
    img1.src = Sponsor;
  }, []);
  return (
    <>
      <FooterBody>
        <FooterChild>
          <Img src={LogoSrc} alt="logo" />
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
          <FooterImage src={SponsorSrc} alt="sponsor" />
        </FooterChild>
      </FooterBody>
    </>
  );
};
export default Footer;
