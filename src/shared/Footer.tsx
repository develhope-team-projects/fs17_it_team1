'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Team 1"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-7 sm:grid-cols-3 sm:gap-6"> 
            <div>
              <Footer.Title title="Prodotti" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Offerte</Footer.Link>
                <Footer.Link href="#">Nuovi prodotti</Footer.Link>
                <Footer.Link href="#">PIù venduti</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Il nostra team" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Chi siamo</Footer.Link>
                <Footer.Link href="#">Dove ci troviamo</Footer.Link>
                <Footer.Link href="#">Note legali</Footer.Link>
                <Footer.Link href="#">Contattaci</Footer.Link>
                <Footer.Link href="#">Negozi</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Il tuo account" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Informazioni persoanali</Footer.Link>
                <Footer.Link href="#">Ordini</Footer.Link>
                <Footer.Link href="#">Noter di credito</Footer.Link>
                <Footer.Link href="#">Indirizzi</Footer.Link>
                <Footer.Link href="#">I miei avvisi</Footer.Link>
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

export default FooterComponent