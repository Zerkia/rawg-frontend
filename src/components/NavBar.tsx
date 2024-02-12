import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
<<<<<<< HEAD
    return <>
    <HStack>
        <Image src={logo} boxSize="60px"></Image>
        <ColorModeSwitch />
    </HStack></>;
};

export default NavBar;
=======
  return (
    <>
      <HStack justifyContent="space-between">
        <Image src={logo} boxSize="60px"></Image>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
>>>>>>> c76e0e7886a311e438a7950b5b40d71db6e23cde
