import { Container } from "semantic-ui-react";
import Card from "../cards/Card";
// semantic-ui

function Posts({ cardData, loading }) {
  if (loading) {
    return (
      <h1>Loading...</h1>
    );
  }
  const renderCards = () => {
    const cards = cardData.map((data) => <Card data={data} key={data.id} />);
    return cards;
  };
  return (
    <Container>
      {renderCards()}
    </Container>
  );
}
export default Posts;
