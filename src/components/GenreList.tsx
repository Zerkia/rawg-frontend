// import useGenre from "../hooks/useGenre";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenre";
import {
  ListItem,
  HStack,
  Image,
  List,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useData<Genre>("genres");
  return (
    <>
      {isLoading && <Spinner />}
      {error && <div>{error}</div>}
      <Text mx={4} my={2} fontSize={24} fontWeight={"bold"}>
        Genres
      </Text>
      {genres.map((genre) => (
        <List key={genre.id} m={4} fontSize={18}>
          <ListItem key={genre.slug}>
            <HStack>
              <Image
                src={genre.image_background}
                alt={genre.name}
                borderRadius={10}
                objectFit={"cover"}
                boxSize="45px"
              />
              <Button
                mx={2}
                onClick={() => onSelectedGenre(genre)}
                variant="link"
                colorScheme={
                  selectedGenre?.id === genre.id ? "yellow" : "white"
                }
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default GenreList;
