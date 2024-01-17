"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export type FooterType = {
  logo: string;
  firstFooterTitle: string;
  secondFooterTitle: string;
  thirdFooterTitle: string;
  firstColumnElement1: string;
  firstColumnElement2: string;
  firstColumnElement3: string;
  secondColumnElement1: string;
  secondColumnElement2: string;
  secondColumnElement3: string;
  secondColumnElement4: string;
  secondColumnElement5: string;
  thirdColumnElement1: string;
  thirdColumnElement2: string;
  thirdColumnElement3: string;
  thirdColumnElement4: string;
  thirdColumnElement5: string;
};
function FooterComponent(props: FooterType) {
  return (
    <Footer container className="rounded-none dark:bg-[#c8a485]">
      <div className="w-full max-w-screen-xl m-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand src={props.logo} alt="" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-7 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title={props.firstFooterTitle} />
              <Footer.LinkGroup col>
                <Footer.Link href="#">{props.firstColumnElement1}</Footer.Link>
                <Footer.Link href="#">{props.firstColumnElement2}</Footer.Link>
                <Footer.Link href="#">{props.firstColumnElement3}</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title={props.secondFooterTitle} />
              <Footer.LinkGroup col>
                <Footer.Link href="#">{props.secondColumnElement1}</Footer.Link>
                <Footer.Link href="#">{props.secondColumnElement2}</Footer.Link>
                <Footer.Link href="#">{props.secondColumnElement3}</Footer.Link>
                <Footer.Link href="#">{props.secondColumnElement4}</Footer.Link>
                <Footer.Link href="#">{props.secondColumnElement5}</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title={props.thirdFooterTitle} />
              <Footer.LinkGroup col>
                <Footer.Link href="#">{props.thirdColumnElement1}</Footer.Link>
                <Footer.Link href="#">{props.thirdColumnElement2}</Footer.Link>
                <Footer.Link href="#">{props.thirdColumnElement3}</Footer.Link>
                <Footer.Link href="#">{props.thirdColumnElement4}</Footer.Link>
                <Footer.Link href="#">{props.thirdColumnElement5}</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Team 1" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
