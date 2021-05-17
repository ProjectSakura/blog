import { Container } from "semantic-ui-react";
import Card from "../../cards/Card";
// styles
import { Body } from "./styles";

function Home() {
  return (
    <Body>
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </Body>
  );
}
export default Home;
