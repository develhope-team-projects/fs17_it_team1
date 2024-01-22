import { Rating } from "flowbite-react";
import { number } from "prop-types";

export type Review = {
  title: string;
  comment: string;
  creation_date: string;
  user_id: string;
  rating: number;
};

export default function RatingReview(props: Review) {
  return (
    <article className="bg-beige-scuro/50 p-2">
      <div className="flex items-center mb-4">
        {/*  <img
          className="w-10 h-10 me-4 rounded-full"
          src={props.img}
          alt=""
        ></img> */}
        <div className="font-medium dark:text-white">
          <p>{props.user_id}</p>
        </div>
      </div>
      <Rating>
        <Rating.Star filled={props.rating >= 1 ? true : false} />
        <Rating.Star filled={props.rating >= 2 ? true : false} />
        <Rating.Star filled={props.rating >= 3 ? true : false} />
        <Rating.Star filled={props.rating >= 4 ? true : false} />
        <Rating.Star filled={props.rating >= 5 ? true : false} />
      </Rating>
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
        {props.title}
      </h3>

      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>
          {/*           Reviewed in {props.userCountry} on{" "}
           */}{" "}
          <time dateTime={props.creation_date}>{props.creation_date}</time>
        </p>
      </footer>
      <p className="mb-2 text-gray-500 dark:text-gray-400">{props.comment}</p>
      <aside>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          19 people found this helpful
        </p>
        <div className="flex items-center mt-3">
          <a
            href="#"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Helpful
          </a>
          <a
            href="#"
            className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600"
          >
            Report abuse
          </a>
        </div>
      </aside>
    </article>
  );
}
