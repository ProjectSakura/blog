import { Container } from "semantic-ui-react";
import Card from "../SecondaryCard/SecondaryCard";
// semantic-ui

function Posts({ cardData, loading }) {
  if (loading) {
    return (
      <h1>Loading...</h1>
    );
  }
  let count = 0;
  const renderCards = () => {
    const cards = cardData.map((data) => {
      count += 1;
      if (count % 2 === 0) {
        return (
          <>
            <td key={data.id}>
              <Card data={data} />
            </td>
            <br />
          </>
        );
      }
      return (
        <td key={data.id}>
          <Card data={data} />
        </td>
      );
    });
    return cards;
  };
  return (
    <Container>
      {renderCards()}
    </Container>
  );
}
export default Posts;
