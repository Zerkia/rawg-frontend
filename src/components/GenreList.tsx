// import useGenre from "../hooks/useGenre";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenre";
import { ListItem, HStack, Image, List, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data: genres, error, isLoading } = useData<Genre>("genres");
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <Text mx={5} my={2} fontSize={24} fontWeight={"bold"}>
        Genres
      </Text>
      {genres.map((genre) => (
        <List key={genre.id} m={5} fontSize={20}>
          <ListItem key={genre.slug}>
            <HStack>
              <Image
                src={genre.image_background}
                alt={genre.name}
                borderRadius={10}
                objectFit={"cover"}
                boxSize="65px"
              />
              <Text mx={2}>{genre.name}</Text>
            </HStack>
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default GenreList;
