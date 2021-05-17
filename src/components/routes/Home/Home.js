import { Container } from "semantic-ui-react";
import Card from "../../cards/Card";
//card data
import cardData from "../../data/cardData";
// styles
import { Body } from "./styles";

function Home() {
  const renderCards = () => {
    const cards = cardData.map((data) => <Card data={data} key={data.author} />);
    return cards;
  };

  return (
    <Body>
      <Container>
        {renderCards()}
      </Container>
    </Body>
  );
}
export default Home;
