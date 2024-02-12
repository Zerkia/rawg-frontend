import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius="10">
      <Image
        src={game.background_image}
        height={{ sm: "322px", md: "250px", lg: "225px", xl: "200px" }}
        objectFit="cover"
      ></Image>
      <CardBody>
        <Heading fontSize="2x1">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
