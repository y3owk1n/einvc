import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import React from "react";
import { Icons } from "../icons";

const notifications = [
  {
    id: 1,
    title: "Edit your information",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    id: 2,
    title: "Say goodbye to paper receipt",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    id: 3,
    title: "Generating receipt easier as ever",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
];

export const NotificationsDropdown = () => {
  return (
    <Dropdown placement="bottom-end">
      <NavbarItem>
        <DropdownTrigger>
          <Button variant="light" isIconOnly>
            <Icons.bell className="h-4 w-4" />
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu className="w-80" aria-label="Notifications Actions">
        <DropdownSection title="Notifications">
          {notifications.map((notification) => (
            <DropdownItem
              classNames={{
                base: "py-2",
                title: "text-base mb-1 font-semibold",
              }}
              key={notification.id}
              description={notification.description}
            >
              {notification.title}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
