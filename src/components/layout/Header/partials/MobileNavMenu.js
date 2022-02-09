import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Image } from "../../../elements/image";
import { headerMobileNaviagtion } from "./MobileNavData";

export const MobileNavMenus = () => {
  return (
    <>
      {headerMobileNaviagtion.map((headernav, i) => (
        <>
          {headernav?.menus ? (
            <>
              {headernav?.menus &&
                headernav.menus.map((menu, i) => (
                  <div key={i}>
                    {menu?.menuTitle ? (
                      <Typography component="p" className="navTitle">
                        {menu.menuTitle}
                      </Typography>
                    ) : null}
                    {menu?.subMenus &&
                      menu.subMenus.map((submenu, i) => (
                        <NavLink
                          key={i}
                          to={submenu.path}
                          className="dropdownMenu"
                        >
                          <Box>
                            <Image src={submenu.src} width={32} />
                          </Box>
                          <Box>
                            <Typography className="dropdownTitle">
                              {submenu.subTitle}
                            </Typography>
                          </Box>
                        </NavLink>
                      ))}
                  </div>
                ))}
            </>
          ) : null}
        </>
      ))}
    </>
  );
};
