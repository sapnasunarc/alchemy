import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Logo } from "./partials/Logo";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

import { useEffect } from "react";
import { DesktopNav } from "./partials/DesktopNav";
import { MobileNav } from "./partials/MobileNav";

export const Header = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1199;
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return width;
  }, [width]);

  return (
    <>
      <AppBar position="static">
        <Container fixed>
          <Toolbar disableGutters>
            <Logo />
            <Box className="navbar-icon" onClick={handleClick} ml="auto">
              {click ? (
                <DehazeIcon className="icon" />
              ) : (
                <CloseIcon className="icon" />
              )}
            </Box>
            {width < breakpoint ? (
              <MobileNav click={click} />
            ) : (
              <DesktopNav click={click} />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
