import { Button, Input, Link, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { BurguerButton } from "./burguer-button";
import { Icons } from "../icons";
import { NotificationsDropdown } from "./notification-dropdown";
import { UserDropdown } from "./user-dropdown";
import { DarkModeSwitch } from "./darkmodeswitch";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  return (
    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <NavbarContent className="w-full max-w-4xl max-md:hidden">
          <Input
            startContent={<Icons.search className="h-4 w-4" />}
            isClearable
            className="w-full"
            labelPlacement="outside"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search..."
          />
        </NavbarContent>
        <NavbarContent
          justify="end"
          className="w-fit gap-2 data-[justify=end]:flex-grow-0"
        >
          <NotificationsDropdown />

          <Button className="max-md:hidden" variant="light" isIconOnly>
            <Icons.helpCircle className="h-4 w-4" />
          </Button>

          <Button
            as={Link}
            href="https://github.com/y3owk1n"
            className="max-md:hidden"
            variant="light"
            isIconOnly
          >
            <Icons.gitHub className="h-4 w-4" />
          </Button>
          <DarkModeSwitch />
          <UserDropdown />
        </NavbarContent>
      </Navbar>
      <div className="p-6">{children}</div>
    </div>
  );
};
