"use client";

import { Banner, Label, TextInput } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { NormalButton } from "../shared/NormalButton";
import InputField, { input } from "../shared/InputField";

export type NewsletterBannerContent = {
  announcement: string;
  link: string;
};

const test: input = {
  type: "email",
  id: "email",
  label: "email",
};

export function NewsletterBanner(props: NewsletterBannerContent) {
  return (
    <Banner>
      <div className="flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-our-black">
        <div className="mx-auto flex w-full flex-shrink-0 items-center sm:w-auto">
          <form
            action="#"
            className="flex w-full flex-col items-center md:flex-row md:gap-x-3"
          >
            <Label
              htmlFor="email"
              className="mb-2 mr-auto flex-shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0"
            >
              {props.announcement}
            </Label>
            <InputField {...test} />
            <NormalButton content="Subscribe" />
          </form>
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
