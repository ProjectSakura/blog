import moment from "moment";
import { CgProfile as Profile } from "react-icons/cg";
import { AiOutlineClockCircle as Time } from "react-icons/ai";
import data from "../data/cardData";
import {
  Body, Image, ImgDiv, ContentDiv, Heading, SubHeading, Btn, LeftSection, RightSection, Description,
} from "./styles";

function RecentCard() {
  return (
    <Body>
      <ImgDiv>
        <Image src="https://i.imgur.com/1nn79L9.pngv" alt="banner-img" />
      </ImgDiv>
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
