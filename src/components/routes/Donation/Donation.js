/* eslint-disable */
import {
    Body, BodyInner, Child, Heading, Parent, Image, SubHeading, Loader, Hr, FillLoader, GoalLoader, Anchor
} from "./styles";
import { donator, method } from "../../data/donator";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

function Donation() {

    const renderCards = (arr,section) => {
        let cards; 
        if(section==="method"){
            cards= arr.map((data) => (
                <Child key={data.id}>
                    <Image src={data.img} />
                    
                    <Heading>
                        <Anchor href={data.url}>
                            Donate via {data.name}
                        </Anchor>
                    </Heading>
                    {/* <SubHeading>{data.url}</SubHeading> */}
                </Child>
            ));
        }
        else{
            cards= arr.map((data) => (
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
                <Loader>
                    <FillLoader>
                        <Heading>$ 33</Heading>
                    </FillLoader>
                    <GoalLoader>
                        <Heading>Goal $ 50</Heading>
                    </GoalLoader>
                </Loader>
            </BodyInner>
            <BodyInner>
                <Heading>Donation Methods</Heading>
                <Parent>
                    {renderCards(method,"method")}
                </Parent>
            </BodyInner>
            <Hr />
            <BodyInner>
                <Heading>Top Donators</Heading>
                <Parent>
                    {renderCards(donator,"donator")}
                </Parent>
            </BodyInner>
            <Footer />
        </Body>
    );
}

export default Donation;
