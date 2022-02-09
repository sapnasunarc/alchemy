import { NavLink } from "react-router-dom";
import { headerNaviagtion } from "./HeaderNav";
import { Box, ListItem, Typography } from "@mui/material";
import "../partials/headerStyle.css";
import { Image } from "../../../elements/image";

export const HeaderNavMenus = () => {
  return (
    <>
      {headerNaviagtion.map((headernav, i) => (
        <ListItem key={i}>
          <NavLink to="/" className="navLink">
            {headernav.title}
          </NavLink>
          {headernav?.menus ? (
            <Box className="dropdownList">
              {headernav?.menus &&
                headernav.menus.map((menu, i) => (
                  <Box key={i}>
                    {menu?.menuTitle ? (
                      <Typography component="p" className="navTitle">
                        {menu.menuTitle}
                      </Typography>
                    ) : null}
                    {menu?.subMenus &&
                      menu.subMenus.map((submenu, i) => (
                        <Box key={i}>
                          <NavLink to={submenu.path} className="dropdownMenu">
                            <Box>
                              <Image src={submenu.src} width={24} />
                            </Box>
                            <Box>
                              <Typography className="dropdownTitle">
                                {submenu.subTitle}
                              </Typography>
                              {submenu.decs ? 
                              <Typography className="dropdownDecs">
                                {submenu.decs}
                              </Typography>
                              : null }
                            </Box>
                          </NavLink>
                        </Box>
                      ))}
                  </Box>
                ))}
            </Box>
          ) : null}
        </ListItem>
      ))}
    </>
  );
};
