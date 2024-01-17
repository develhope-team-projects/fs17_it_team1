"use client";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export type SitePathType = {
  firstTitle: string;
  secondTitle: string;
  thirdTitle: string;
};

export function SitePathComponent(props: SitePathType) {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="/ecommerce/homepage" icon={HiHome}>
        <p className="text-gray-400 hover:text-black">{props.firstTitle}</p>
      </Breadcrumb.Item>

      <Breadcrumb.Item href="/ecommerce/store">
        <p className="text-gray-400 hover:text-black">{props.secondTitle}</p>
      </Breadcrumb.Item>

      <Breadcrumb.Item>
        <p className="text-gray-400 hover:text-black">{props.thirdTitle}</p>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
