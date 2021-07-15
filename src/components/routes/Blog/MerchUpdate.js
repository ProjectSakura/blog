/* eslint-disable */
import {
  useEffect, useState,
} from "react";
import { Container } from "semantic-ui-react";
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
  Date,
} from "./styles";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
//image
import MerchIMG from "../../../images/blogs/merch.webp";

import Comments from "../../Comments/Comments";

function MerchUpdate() {
  const [imageSrc, setImageSrc] = useState([]);
  useEffect(() => {
    //preloading image
    const img = new Image();
    img.onload = () => {
      setImageSrc(MerchIMG);
    };
    img.src = MerchIMG;
    //? title of the blog
    document.title = "Project Sakura | Official Merches"
  }, []);
  return (
    <Body>   
      <Navbar />
      <Container>
        <BodyInner>
          <Date>
            9 JULY 2021
          </Date>
          <Heading>
            Official Project Sakura Embroidered Tshirts and sweatshirts.
          </Heading>
          <ImgDiv>
            <ImageTag src={imageSrc} alt="display" />
          </ImgDiv>
          <Description>
            Hope you all are in great health and staying home.We are back with a great anouncement *drum rolls*
            <br />
            <br />
            We recently partnered with Open-source clothing specialist Hellotux to create embroidered Project Sakura shirts abd sweatshirts.
          </Description>
          <Description>
            <h3>So what is HelloTux?</h3>
            Hellotux is a European family run business and they have been making Tshirts for Ubuntu, CentOS, Fedora, Debian and many other big names in the Open Source space. And we arw very proud to announce that they are making Tshirts for Project Sakura now. They embroider every Project Sakura tshirt individually with care and love using their programmable embroidery machine, and use only free softwares for all of their operations.
            <br />
            It is a first of it's kind initiative in the Android development community and wearing these Tshirts you can support Project Sakura. For every purchase you make we get $4 in donation which help us grow and sustain so we making Project Sakura for you all.
          </Description>
          <Description>
            <strong>Go get yourself a Project Sakura premium embroidered t-shirt, polo shirt or sweatshirt and enjoy the freedom! Tastier than an apple.</strong>
          </Description>
          <Comments />
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
export default MerchUpdate;
