import React from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="flex custom-640:flex-col custom-640:gap-14 mb-4">
        <div className="w-[40%] flex flex-col gap-6">
          <img src="/assets/icons/logo.png" className="w-[5rem]" alt="logo" />{" "}
          <small>
            Seeds Technologie, une SARL co-dirigée par une femme et de jeunes
            entrepreneurs, porte l'initiative "Ma Cité d'Ame Verte" pour
            soutenir les jeunes et femmes face au changement climatique, en
            ciblant son impact sur leur santé sexuelle et leur autonomie.
          </small>
          <img src="/assets/images/partner.png" alt="partner" />
        </div>
        <div className="flex gap-14 custom-640:flex-col w-[100%] justify-end ">
          <div>
            <h2 className="font-[900]">About</h2>
            <ul className="flex flex-col gap-2 mt-3 text-[13px]">
              <li>Accueil</li>
              <li>Evénement</li>
              <li>Formation</li>
              <li>Market Place</li>
              <li>Ma Ville</li>
              <li>Méteo</li>
            </ul>
          </div>
          <div>
            <h2 className="font-[900]">Project</h2>
            <ul className="flex flex-col gap-2 mt-3 text-[13px]">
              <li>Ma cité d'âme verte</li>
            </ul>
          </div>
          <div>
            <h2 className="font-[900]">Community</h2>
            <ul className="flex flex-col gap-2 mt-3 text-[13px]">
              <li>Join Discord</li>
              <li>Follow on Twitter</li>
              <li>Email newsletter</li>
              <li>Github discussion</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-4 flex justify-between">
        <div>© 2024 mantine.dev. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <FacebookIcon className="w-[1rem]" />
          <InstagramIcon className="w-[1rem]" />
          <TwitterIcon className="w-[1rem]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
