import React from "react";
import twitter from "./../../../../assets/images/twitter.svg";
import linkedIn from "./../../../../assets/images/linkedIn.svg";
import facebook from "./../../../../assets/images/facebook.svg";
import medium from "./../../../../assets/images/medium.svg";
import discord from "./../../../../assets/images/data_image_svg+xml;….svg";
import { Image } from "../../../elements/image";
import { Link } from "react-router-dom";

export const FooterSocial = ({ ...props }) => {
  return (
    <>
      <ul {...props} className="footerSocial">
        <li>
          <Link to="/">
            <Image src={twitter} alt="Twitter" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Image src={linkedIn} alt="LinkedIn" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Image src={facebook} alt="Facebook" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Image src={medium} alt="Medium" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Image src={discord} alt="Discord" width={24} />
          </Link>
        </li>
      </ul>
    </>
  );
};
