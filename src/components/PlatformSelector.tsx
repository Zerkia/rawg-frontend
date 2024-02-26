import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton my={3} mx={10} as={Button} rightIcon={<BsChevronDown />}>
        Actions
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
