import moment from "moment";
import { CgProfile as Profile } from "react-icons/cg";
import { AiOutlineClockCircle as Time } from "react-icons/ai";
import {
  Body, Heading, SubHeading, Btn, Description, LeftSection, RightSection, Hr,
} from "./styles";

function Card({ data }) {
  return (
    <Body>
      <Heading>{data.title}</Heading>
      <Hr />
      <SubHeading>
        <LeftSection><Profile />  {data.author}</LeftSection>
        <RightSection><Time /> {moment(data.date).format("LL")}</RightSection>
      </SubHeading>
      <Description>
        {data.desc}
      </Description>
      <Btn className="signin ui inverted blue button" to={data.url}>
        Read More
      </Btn>
    </Body>
  );
}
export default Card;
