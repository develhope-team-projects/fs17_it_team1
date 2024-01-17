"use client";

import { Card, Rating } from "flowbite-react";
import { SpecialButton } from "../shared/SpecialButton";

export type Card = {
  name: string;
  rating: number;
  img: string;
  price: number;
};

export default function CardStd(props: Card) {
  return (
    <Card
      className="max-w-sm dark:bg-our-black"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="https://www.capijersey.com/media/catalog/product/cache/99831d77450675e6f1766168ca7c1fdb/7/-/7-74-113-05_jack_daniel_s_whisky_old_no.7_1l.png"
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <Rating>
          <Rating.Star filled={props.rating >= 1 ? true : false} />
          <Rating.Star filled={props.rating >= 2 ? true : false} />
          <Rating.Star filled={props.rating >= 3 ? true : false} />
          <Rating.Star filled={props.rating >= 4 ? true : false} />
          <Rating.Star filled={props.rating >= 5 ? true : false} />
        </Rating>
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-oro-chiaro dark:text-our-black">
          {props.rating}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${props.price}
        </span>
      </div>
      <SpecialButton content="Add to cart" />
    </Card>
  );
}
