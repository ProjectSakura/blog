// Stlying
// Icons
import { CgProfile as Profile } from "react-icons/cg";
import { AiOutlineClockCircle as Time } from "react-icons/ai";
import {
  Body, Heading, SubHeading, Btn, Description, LeftSection, RightSection,
} from "./styles";

function Card() {
  return (
    <Body>
      <Heading>ProjectSakura April 2021 Security update is here.</Heading>
      <hr />
      <SubHeading>
        <LeftSection><Profile />  LordShenron</LeftSection>
        <RightSection><Time /> April 12, 2021</RightSection>
      </SubHeading>
      <Description>
        Whats new in the latest release of Project Sakura? Check out..
      </Description>
      <Btn inverted color="blue">
        Read More
      </Btn>
    </Body>
  );
}
export default Card;
