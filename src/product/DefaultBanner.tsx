"use client";

import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";

export type BannerContent = {
  announcement: string;
  link: string;
};
export function DefaultBanner(props: BannerContent) {
  return (
    <Banner>
      <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-our-black">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <MdAnnouncement className="mr-4 h-4 w-4" />
            <span className="[&_p]:inline">
              {props.announcement}
              <a
                href="https://flowbite.com"
                className="decoration-600 dark:decoration-500 inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
              >
                {props.link}
              </a>
            </span>
          </p>
        </div>
        <Banner.CollapseButton
          color="gray"
          className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
        >
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
}
