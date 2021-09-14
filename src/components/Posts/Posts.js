import Card from "../SecondaryCard/SecondaryCard";
// semantic-ui
import { Parent, Child } from "./styles";

function Posts({ cardData, loading }) {
  if (loading) {
    return (
      <h1>Loading...</h1>
    );
  }
  const renderCards = () => {
    const cards = cardData.map((data) => (
      <Child key={data.id}>
        <Card data={data} />
      </Child>
    ));
    return cards;
  };
  return (
    <Parent>
      {renderCards()}
    </Parent>
  );
}
export default Posts;
