import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Icons } from "../icons";

interface Company {
  name: string;
  location: string;
}

export const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>({
    name: "Acme Co.",
    location: "Palo Alto, CA",
  });

  return (
    <Dropdown
      classNames={{
        base: "w-full min-w-[260px]",
      }}
    >
      <DropdownTrigger>
        <div className="flex cursor-pointer items-center justify-between gap-2 px-2 py-1">
          <div className="flex flex-col gap-4">
            <h3 className="text-default-900 m-0 -mb-4 whitespace-nowrap text-xl font-medium">
              {company.name}
            </h3>
            <span className="text-default-500 text-xs font-medium">
              {company.location}
            </span>
          </div>
          <Icons.chevronDown className="h-4 w-4" />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        onAction={(e) => {
          if (e === "1") {
            setCompany({
              name: "Facebook",
              location: "San Fransico, CA",
            });
          }
          if (e === "2") {
            setCompany({
              name: "Instagram",
              location: "Austin, Tx",
            });
          }
          if (e === "3") {
            setCompany({
              name: "Twitter",
              location: "Brooklyn, NY",
            });
          }
          if (e === "4") {
            setCompany({
              name: "Acme Co.",
              location: "Palo Alto, CA",
            });
          }
        }}
        aria-label="Avatar Actions"
      >
        <DropdownSection title="Companies">
          <DropdownItem
            key="1"
            description="San Fransico, CA"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            Facebook
          </DropdownItem>
          <DropdownItem
            key="2"
            description="Austin, Tx"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            Instagram
          </DropdownItem>
          <DropdownItem
            key="3"
            description="Brooklyn, NY"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            Twitter
          </DropdownItem>
          <DropdownItem
            key="4"
            description="Palo Alto, CA"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            Acme Co.
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
