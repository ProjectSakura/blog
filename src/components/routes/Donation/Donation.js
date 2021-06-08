/* eslint-disable */
import {
    Body, BodyInner, DonorChild, DonorDiv, Heading, DonorParent, Image, SubHeading, Loader, Hr, FillLoader, GoalLoader,
} from "./styles";
// import Bitcoin from "../../../images/donation/bitcoin.png";
import {donator, method} from "../../data/donator";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

function Donation() {
    const renderCards = (arr) => {
        const cards = arr.map((data) => (
            <DonorChild key={data.id}>
               
                    <Image src={data.img}/>
                    <Heading>
                        {data.name}
                    </Heading>
                    {/* <SubHeading>{data.url}</SubHeading> */}
                
            </DonorChild>
        ));
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
                <DonorParent>
                    {renderCards(method)}
                </DonorParent>
            </BodyInner>
            <Hr/>
            <BodyInner>
                <Heading>Top Donators</Heading>
                <DonorParent>
                        {renderCards(donator)}
                    </DonorParent>
            </BodyInner>
            <Footer />
        </Body>
    );
}

export default Donation;
