"use client";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Button } from "flowbite-react";
/* import { HiOutlineArrowRight } from 'react-icons/hi'; */

const customTheme: CustomFlowbiteTheme["button"] = {
  color: {
    primary: "bg-giallo hover:bg-beige-chiaro",
  },
};

export type ButtonElements = {
  content?: string;
  svg?: any;
  type?: "button" | "submit" | "reset";
  onClick?: any;
  function?: () => void; // scrivere la logica della funzione per il bottone a seconda del componente in cui viene inserito
  customstyle?: string;
};

export function NormalButton(props: ButtonElements) {
  console.log(props.function);
  return (
    <div className="flex no-wrap items-center">
      <Button
        onClick={!props.onClick ? props.function : props.onClick}
        theme={customTheme}
        color="primary"
        className=" hover:text-ocra focus:ring-giallo focus:bg-nero focus:text-giallo"
        type={props.type}
      >
        <p>{props.content}</p>
        {props.svg && props.svg}
      </Button>
    </div>
  );
}
