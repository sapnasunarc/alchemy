import { Box, List } from "@mui/material";
import { NavLink } from "react-router-dom";
import arrowImage from "../../../../assets/images/arrow-narrow-right.svg";
import { Image } from "../../../elements/image";
import { HeaderNavMenus } from "./HeaderNavMenus";

export const DesktopNav = ({ click }) => {
  return (
    <Box className="desktopView">
      <List className={!click ? "navbar active" : "navbar"}>
        <HeaderNavMenus />
      </List>
      <NavLink to="/" className="hire">
        we're hiring
      </NavLink>
      <NavLink to="/" className="loginBtn">
        Login <Image src={arrowImage} width={27} />
      </NavLink>
    </Box>
  );
};
