import { Container } from "./styles";
import { MdStar, MdStarBorder } from "react-icons/md";

export function Stars({ ratings = 0 }) {
  const stars = Array(5).fill(0).map((_, index) => {
    return index < ratings ? <MdStar key={index} /> : <MdStarBorder key={index} />;
  });

  return (
    <>
      <Container>
        {stars}
      </Container>
    </>
  );
}
