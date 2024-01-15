"use client";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Button } from "flowbite-react";
/* import { HiOutlineArrowRight } from 'react-icons/hi'; */

const customTheme: CustomFlowbiteTheme["button"] = {
  color: {
    primary: "bg-oro-chiaro hover:bg-light-bg",
  },
};

export type ButtonElements = {
  content: string;
  svg?: any;
  type?: "button" | "submit" | "reset";
  onClick?: any;
  function?: () => void; // scrivere la logica della funzione per il bottone a seconda del componente in cui viene inserito
  customstyle?: string;
};



export function NormalButton(props: ButtonElements) {
  return (
    <div className="flex no-wrap items-center">

      <Button
        onClick={props.function}
        theme={customTheme}
        color="primary"
        className=" hover:text-oro-chiaro focus:ring-oro-chiaro focus:bg-our-black focus:text-oro-chiaro"
        type={props.type}
      >
        <p>{props.content}</p>
        {props.svg && props.svg}
      </Button>
    </div>
  );
}
