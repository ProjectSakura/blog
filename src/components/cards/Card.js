import { Body, Heading, SubHeading } from "./styles";

function Card() {
  return (
    <Body>
      <Heading>Blog Title</Heading>
      <hr />
      <SubHeading>Name</SubHeading>
      <p>
        Blog content
      </p>
    </Body>
  );
}
export default Card;
