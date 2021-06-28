/* eslint-disable */
import {
    Body, BodyInner, Child, Heading, Parent, Image, Hr, Anchor, MerchBanner, PCImg,
} from "./styles";
import { donator, method } from "../../data/donator";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import LazyLoad from 'react-lazyload';
//merch
import MerchPCBanner from "../../../images/merch/merch.webm";

function Donation() {

    const renderCards = (arr, section) => {
        let cards;
        if (section === "method") {
            cards = arr.map((data) => (
                <Child key={data.id}>
                    <LazyLoad once>
                        <Image src={data.img} />
                    </LazyLoad>
                    <Heading>
                        <Anchor href={data.url}>
                            Donate via {data.name}
                        </Anchor>
                    </Heading>
                    {/* <SubHeading>{data.url}</SubHeading> */}
                </Child>
            ));
        }
        else {
            cards = arr.map((data) => (
                <Child key={data.id}>
                    <Image src={data.img} />
                    <Heading>
                        {data.name}
                    </Heading>
                    {/* <SubHeading>{data.url}</SubHeading> */}
                </Child>
            ));
        }
        return cards;
    };
    return (
        <Body>
            <Navbar />
            <BodyInner>
            </BodyInner>
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
