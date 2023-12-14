
'use client';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Button } from 'flowbite-react';
import "./SpecialButton.css"
/* import { HiOutlineArrowRight } from 'react-icons/hi'; */

const customTheme: CustomFlowbiteTheme['button'] = {
    color: {
        primary: 'bg-trasparent',
    },
};

export type SpecialButtonElements = {
    content: string;
    svg?: any;
    function?: () => void; // scrivere la logica della funzione per il bottone a seconda del componente in cui viene inserito

}


export function SpecialButton(props: SpecialButtonElements) {



    return (
      <div className="flex no-wrap items-center">
        <Button
          onClick={props.function}
          theme={customTheme}
          color="primary"
          className="specialbutton  text-white focus:ring-none"
        >
          <p>{props.content}</p>
          {props.svg && props.svg}
        </Button>
      </div>
    );
}
