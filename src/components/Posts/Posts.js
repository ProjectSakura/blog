import Card from "../SecondaryCard/SecondaryCard";
// semantic-ui
import { TableData, ContainerDiv } from "./styles";

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
            <TableData key={data.id}>
              <Card data={data} />
            </TableData>
            <br />
          </>
        );
      }
      return (
        <TableData key={data.id}>
          <Card data={data} />
        </TableData>
      );
    });
    return cards;
  };
  return (
    <ContainerDiv>
      {renderCards()}
    </ContainerDiv>
  );
}
export default Posts;
