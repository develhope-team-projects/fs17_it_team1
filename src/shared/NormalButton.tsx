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
<<<<<<< HEAD
    content: string;
    svg?: any;
    type?: string;
    function?: () => void; // scrivere la logica della funzione per il bottone a seconda del componente in cui viene inserito

}

=======
  content?: string;
  svg?: any;
  function?: () => void; // scrivere la logica della funzione per il bottone a seconda del componente in cui viene inserito
};
>>>>>>> 64b1b32260681975a2b6d9de5a81b9f152db1313

export function NormalButton(props: ButtonElements) {
  return (
    <div className="flex no-wrap items-center">
      <Button
        onClick={props.function}
        theme={customTheme}
        color="primary"
        className=" hover:text-oro-chiaro focus:ring-oro-chiaro focus:bg-our-black focus:text-oro-chiaro"
      >
        <p>{props.content}</p>
        {props.svg && props.svg}
      </Button>
    </div>
  );
}
