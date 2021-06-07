/* eslint-disable */
import {
    Body, BodyInner, DonorChild, DonorDiv, Span, Heading, DonorParent,
} from "./styles";
import Donator from "../../data/donator";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

function Donation() {
    const renderCards = () => {
        const cards = Donator.map((data) => (
            <DonorChild key={data.id}>
                <DonorDiv>
                    <Heading>
                        <Span role="img" aria-label="donor">
                            👑
                        </Span>
                        {"  "}
                        {data.name}
                    </Heading>
                </DonorDiv>
            </DonorChild>
        ));
        return cards;
    };
    return (
        <Body>
            <Navbar />
            <BodyInner>
                <DonorParent>
                    {renderCards()}
                </DonorParent>
            </BodyInner>
            <Footer />
        </Body>
    );
}

export default Donation;
