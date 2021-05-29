/* eslint-disable */
import moment from "moment";
import { CgProfile as Profile } from "react-icons/cg";
import { AiOutlineClockCircle as Time } from "react-icons/ai";
import {
    Body, Image, ImgDiv, ContentDiv, Heading, SubHeading, Btn, Description, LeftSection, RightSection,
} from "./styles";

function RecentCard() {
    const data = {
        title: "Mid-May happiness with Project Sakura.",
        author: "LordShenron",
        date: new Date(Date.parse("2021-05-23")),
        url: "/5.R-mid-may-2021-update",
        desc: "Whats new in the latest release of Project Sakura? Check out.."
    };
    return (
        <Body>
            <ImgDiv>
                <Image src="https://i.imgur.com/1nn79L9.pngv" alt="banner-img" />
            </ImgDiv>
            <ContentDiv>
                <Heading>{data.title}</Heading>
                <SubHeading>
                    <LeftSection><Profile />  {data.author}</LeftSection>
                    <RightSection><Time /> {moment(data.date).format("LL")}</RightSection>
                </SubHeading>
                <Description>
                    {data.desc}
                </Description>
                <Btn className="signin ui inverted blue button mini" to={data.url}>
                    Read More
                </Btn>
            </ContentDiv>
        </Body>
    );
}
export default RecentCard;
