import { Box, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { footerNavMenus } from "./FooterNavMenus";

export const FooterNav = () => {
  return (
    <>
      <Grid container>
        {footerNavMenus.map((footerNavMenu, i) => (
          <Grid item md={3} xs={6} key={i}>
            <Box className="footerNav">
              <Typography variant="h4" component="h4">
                {footerNavMenu.title}
              </Typography>
              {footerNavMenu.menus.map((menu, i) => (
                <NavLink to={menu.path} key={i}>
                  {menu.title}
                </NavLink>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
