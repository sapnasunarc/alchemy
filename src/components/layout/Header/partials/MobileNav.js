import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { MobileNavMenus } from "./MobileNavMenu";

export const MobileNav = ({ click }) => {
  return (
    <Box className="mobileView">
      <Box className={!click ? "navbar active" : "navbar"}>
        <MobileNavMenus />
        <NavLink to="/" className="loginBtn">
          <Button variant="contained">Login</Button>
        </NavLink>
      </Box>
    </Box>
  );
};
