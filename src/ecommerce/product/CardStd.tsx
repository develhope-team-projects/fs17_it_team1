"use client";

import { Card, Rating } from "flowbite-react";
import { SpecialButton } from "../../shared/SpecialButton";

export type Card = {
  id: number;
  name: string;
  rating: number;
  img: string;
  price: number;
};

const cardTheme: any = {
  root: {
    base: "flex rounded-lg  bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};

export default function CardStd(props: Card) {
  const href = `/ecommerce/product/${props.id}`;
  return (
    <Card
      className="max-w-s dark:bg-our-black/75"
      imgAlt="Img"
      imgSrc={`/src/Images/${props.id}.jpg`}
      theme={cardTheme}
    >
      <a href={href}>
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
