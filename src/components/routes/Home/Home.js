import { Container } from "semantic-ui-react";
import Card from "../../cards/Card";
// styles
import {Body} from "./styles";
function Home() {
  return (
    <Body>
      <h1>Home Page</h1>
      <Container>
        <Card />
        <Card />
        <Card />
      </Container>
    </Body>
  );
}
export default Home;
