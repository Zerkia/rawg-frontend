// import useGenre from "../hooks/useGenre";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenre";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data: genres, error, isLoading } = useData<Genre>("genres");
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {genres.map((genre) => (
        <Text key={genre.slug} mx={10} my={3} fontSize={20}>
          {genre.name}
        </Text>
      ))}
    </>
  );
};

export default GenreList;
