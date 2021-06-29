/* eslint-disable */
import { useEffect, useState } from "react";
import moment from "moment";
import { CgProfile as Profile } from "react-icons/cg";
import { AiOutlineClockCircle as Time } from "react-icons/ai";
// import LazyLoad from "react-lazyload";
import data from "../data/cardData";
import {
  Body, ImageTag, ImgDiv, ContentDiv, Heading, SubHeading, Btn, LeftSection, RightSection, Description,
} from "./styles";
//image
import bannerImg from "../../images/blogs/recent.webp";

function RecentCard() {
  const [imageSrc, setImageSrc] = useState([]);
  useEffect(() => {
    //preloading image
    const img = new Image();
    img.onload = () => {
      setImageSrc(bannerImg);
    };
    img.src = bannerImg;
  }, []);
  return (
    <Body>
      {/* <LazyLoad height={200} once> */}
      <ImgDiv>
        <ImageTag src={imageSrc} alt="banner-img" />
      </ImgDiv>
      {/* </LazyLoad> */}
      <ContentDiv>
        <Heading>{data[0].title}</Heading>
        <SubHeading>
          <LeftSection><Profile />  {data[0].author}</LeftSection>
          <RightSection><Time /> {moment(data[0].date).format("LL")}</RightSection>
        </SubHeading>
        <Description>
          {data[0].desc}
        </Description>
        <Btn className="signin ui inverted blue button mini" to={data[0].url}>
          Read More
        </Btn>
      </ContentDiv>
    </Body>
  );
}
export default RecentCard;
