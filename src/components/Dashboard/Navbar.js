import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Request 1-to-1", "Next Lesson"];

const Navbar = (props) => {
  const { navbarWidth } = props;

  return (
    <AppBar
      position="static"
      sx={{ width: `calc(100% - ${navbarWidth})`, marginLeft: "auto" }}
      color="default"
    >
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: "right" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "#333", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="avatar" src="" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
