//styles
import {
  Container, ContentDiv, ImgDiv, Heading, Anchor, Image,
} from "./styles";
//img
import Merch from "../../images/merch/shirt.png";

function MerchCard() {
  return (
    <Container>
      <ImgDiv>
        <Image src={Merch} alt="merch shirt" />
      </ImgDiv>
      <ContentDiv>
        <Heading>Buy our merch and support us</Heading>
        <Anchor href="https://www.hellotux.com/projectsakura" target="blank">Check out</Anchor>
      </ContentDiv>
    </Container>
  );
}
export default MerchCard;
