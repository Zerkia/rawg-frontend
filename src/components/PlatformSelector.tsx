import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import usePlatform, { Platform } from "../hooks/usePlatform";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data: platforms, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton my={3} mx={10} as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
