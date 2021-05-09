import { Container } from "semantic-ui-react";
import Card from "../cards/Card";
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Container>
        <Card />
        <Card />
        <Card />
      </Container>
    </div>
  );
}
export default Home;
