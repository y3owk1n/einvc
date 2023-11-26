import React from "react";
import { useTheme as useNextTheme } from "next-themes";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import { Icons } from "../icons";

export const DarkModeSwitch = () => {
  const { setTheme } = useNextTheme();

  return (
    <>
      <Dropdown placement="bottom-end">
        <NavbarItem>
          <DropdownTrigger>
            <Button variant="light" isIconOnly>
              <Icons.sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Icons.moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu aria-label="Theme toggle">
          <DropdownSection>
            <DropdownItem key="light" onClick={() => setTheme("light")}>
              Light
            </DropdownItem>
            <DropdownItem key="dark" onClick={() => setTheme("dark")}>
              Dark
            </DropdownItem>
            <DropdownItem key="system" onClick={() => setTheme("system")}>
              System
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
