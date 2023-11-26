import React from "react";
import { Avatar, Tooltip } from "@nextui-org/react";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";
import { tv } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { Icons } from "../icons";
import { CollapseItems } from "./collapse-item";

const SidebarMain = tv({
  base: "bg-background space-y-4 transition-transform h-full fixed -translate-x-full w-64 shrink-0 z-50 overflow-y-auto border-r border-divider flex-col py-6 px-3 md:ml-0 md:flex md:static md:h-screen md:translate-x-0 ",

  variants: {
    collapsed: {
      true: "translate-x-0 ml-0 [display:inherit]",
    },
  },
});

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="sticky top-0 z-50 h-screen">
      {collapsed ? (
        <div
          className={
            "fixed inset-0 z-40 bg-[rgb(15_23_42/0.3)] opacity-80 transition-opacity md:z-auto md:hidden md:opacity-100"
          }
          onClick={setCollapsed}
        />
      ) : null}
      <div className={SidebarMain({ collapsed })}>
        <div className="flex items-center gap-2">
          <Icons.logo className="h-4 w-4" />
          <span>EINVC</span>
        </div>

        <CompaniesDropdown />

        <div className="flex h-full flex-col justify-between">
          <div className={"flex flex-col gap-6 px-2"}>
            <SidebarItem
              title="Home"
              icon={<Icons.home className="h-4 w-4" />}
              isActive={pathname === "/"}
              href="/"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/accounts"}
                title="Accounts"
                icon={<Icons.home className="h-4 w-4" />}
                href="accounts"
              />
              <SidebarItem
                isActive={pathname === "/payments"}
                title="Payments"
                icon={<Icons.home className="h-4 w-4" />}
              />
              <CollapseItems
                icon={<Icons.home className="h-4 w-4" />}
                items={["Banks Accounts", "Credit Cards", "Loans"]}
                title="Balances"
              />
              <SidebarItem
                isActive={pathname === "/customers"}
                title="Customers"
                icon={<Icons.home className="h-4 w-4" />}
              />
              <SidebarItem
                isActive={pathname === "/products"}
                title="Products"
                icon={<Icons.home className="h-4 w-4" />}
              />
              <SidebarItem
                isActive={pathname === "/reports"}
                title="Reports"
                icon={<Icons.home className="h-4 w-4" />}
              />
            </SidebarMenu>

            <SidebarMenu title="General">
              <SidebarItem
                isActive={pathname === "/developers"}
                title="Developers"
                icon={<Icons.home className="h-4 w-4" />}
              />
              <SidebarItem
                isActive={pathname === "/view"}
                title="View Test Data"
                icon={<Icons.home className="h-4 w-4" />}
              />
              <SidebarItem
                isActive={pathname === "/settings"}
                title="Settings"
                icon={<Icons.home className="h-4 w-4" />}
              />
            </SidebarMenu>

            <SidebarMenu title="Updates">
              <SidebarItem
                isActive={pathname === "/changelog"}
                title="Changelog"
                icon={<Icons.home className="h-4 w-4" />}
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
