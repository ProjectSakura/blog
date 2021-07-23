import { useEffect, useState } from "react";
import {
  Body, BodyInner, Child, Heading, Parent, Img, Anchor, MerchBanner, PCImg,
} from "./styles";
import { donator, method } from "../../data/donator";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
//merch
import MerchPCBanner from "../../../images/merch/merch.webm";

function Donation() {
  // const [MethodSrc, setMethodSrc] = useState([]);
  const [DonatorSrc, setDonatorSrc] = useState([]);
  //?PRELOAD IMAGE SECTION
  useEffect(() => {
    //? donator img section
    const img0 = new Image();
    img0.onload = () => {
      setDonatorSrc(donator[0].img);
    };
    img0.src = donator[0].img;
    //? methods img section
    // method.forEach((data) => {
    //   const img1 = new Image();
    //   img1.onload = () => {
    //     setMethodSrc((arr) => [...arr, data.img]);
    //   };
    //   img1.src = data.img;
    // });
  }, []);
  const renderCards = (arr, section) => {
    let cards;
    if (section === "method") {
      cards = arr.map((data) => (
        <Child key={data.id}>
          {/* <Img src={MethodSrc[data.id]} /> */}
          <Img src={data.img} />
          <Heading>
            <Anchor href={data.url}>
              Donate via {data.name}
            </Anchor>
          </Heading>
        </Child>
      ));
    } else {
      cards = arr.map((data) => (
        <Child key={data.id}>
          <Img src={DonatorSrc} />
          <Heading>
            {data.name}
          </Heading>
        </Child>
      ));
    }
    return cards;
  };
  return (
    <Body>
      <Navbar />
      <BodyInner />
      <BodyInner>
        <Heading>Donation Methods</Heading>
        <Parent>
          {renderCards(method, "method")}
        </Parent>
      </BodyInner>
      <MerchBanner>
        <a href="https://www.hellotux.com/projectsakura" target="blank">
          <PCImg autoPlay loop muted playsinline src={MerchPCBanner} alt="pc-banner" />
        </a>
      </MerchBanner>
      {/* <Hr /> */}
      <BodyInner>
        <Heading>Top Donators</Heading>
        <Parent>
          {renderCards(donator, "donator")}
        </Parent>
      </BodyInner>
      <Footer />
    </Body>
  );
}

export default Donation;
