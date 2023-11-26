import React from "react";
import { useSidebarContext } from "../layout/layout-context";
import { tv } from "@nextui-org/react";
import { Icons } from "../icons";

const StyledBurgerButton = tv({
  base: "absolute flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer padding-0 z-50 focus:outline-none [&_div]:w-6 [&_div]:h-px [&_div]:bg-default-900 [&_div]:rounded-xl  [&_div]:transition-all  [&_div]:relative  [&_div]:origin-[1px] ",

  variants: {
    open: {
      true: "[&",
    },
  },
});

export const BurguerButton = () => {
  const { collapsed, setCollapsed } = useSidebarContext();

  return <Icons.menu className={StyledBurgerButton()} onClick={setCollapsed} />;
};
