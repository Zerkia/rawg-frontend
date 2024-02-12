import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
<<<<<<< HEAD
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem bg="orange.300" area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem bg="pink.300" area={"aside"}>
            Aside
          </GridItem>
        </Show>
        <GridItem bg="green.300" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </>
=======
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem bg="orange.300" gridArea={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="pink.300" gridArea={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem bg="green.300" gridArea={"main"}>
        Main
      </GridItem>
    </Grid>
>>>>>>> c76e0e7886a311e438a7950b5b40d71db6e23cde
  );
}

export default App;
