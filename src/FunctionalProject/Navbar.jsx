import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const pages = ["All", "Politics", "Crime", "Education", "Entertainment"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
// console.log("Navbar called");
export default function Navbar(props) {
  // console.log("Navbar inside compo called");
  let navigate = useNavigate();
  // let searchNavigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [lanOpen, setLanOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleLanOpen = () => {
    setLanOpen(!lanOpen);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    // console.log(event.currentTarget);
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" sx={{ maxHeight: "80px" }}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <img
            src="images/newsAppIcon.png"
            height={40}
            alt=""
            style={{ display: { xs: "none", md: "flex" } }}
          />
          <Typography
            variant="h6"
            // noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NewsApp
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(`/${page}`);
                    props.changePath(window.location.pathname.slice(1));
                    document.querySelector(".search input").value = "";
                  }}
                >
                  <NavLink
                    key={page}
                    to={`/${page.toLowerCase()}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "larger",
                      font: "bolder",
                    }}
                  >
                    {page}
                  </NavLink>
                </MenuItem>
              ))}
              <MenuItem key={"dropdown1"} onClick={handleOpen}>
                <Box
                  sx={{
                    fontSize: "larger",
                    font: "bolder",
                    width: "100%",
                  }}
                >
                  <Box display={"flex"} width="100%">
                    <Typography fontSize={"large"}>Others</Typography>
                    <ArrowDropDownIcon />
                  </Box>
                  {open ? (
                    <List
                      sx={{
                        backgroundColor: "white",
                        color: "black",
                        width: "100%",
                      }}
                    >
                      {[
                        "Science",
                        "Technology",
                        "Sports",
                        "Cricket",
                        "Jokes",
                        "Covid-19",
                      ].map((text, index) => {
                        return (
                          <ListItem
                            key={index}
                            sx={{
                              width: "100%",
                            }}
                            onClick={() => {
                              navigate(`/${text}`);
                              props.changePath(
                                window.location.pathname.slice(1)
                              );

                              document.querySelector(".search input").value =
                                "";
                            }}
                          >
                            <ListItemButton>
                              <ListItemText primary={text} />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  ) : null}
                </Box>
              </MenuItem>
              <MenuItem key={"dropdown2"} onClick={handleLanOpen}>
                <Box width={"100%"}>
                  <Box display={"flex"} width={"100%"}>
                    <Typography fontSize={"large"}>Language</Typography>
                    <ArrowDropDownIcon />
                  </Box>

                  {lanOpen ? (
                    <List
                      sx={{
                        backgroundColor: "white",
                        color: "black",
                        width: "100%",
                      }}
                    >
                      {["Hindi", "English"].map((text, index) => {
                        return (
                          <ListItem
                            key={index}
                            sx={{
                              width: "100%",
                              paddingLeft: "0",
                              paddingRight: "0",
                            }}
                            onClick={() =>
                              props.change(`${text.slice(0, 2).toLowerCase()}`)
                            }
                          >
                            <ListItemButton>
                              <ListItemText primary={text} />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  ) : null}
                </Box>
              </MenuItem>
              <MenuItem key={"dropdown3"}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    className="search"
                    onKeyUp={(e) => {
                      if (e.key === "Enter") {
                        navigate(`/${e.target.value}`);
                        props.changePath(
                          window.location.pathname
                            .slice(1)
                            .replaceAll("%20", " ")
                        );
                      }
                    }}
                    placeholder="Search news…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
              marginTop: "10px",
            }}
          >
            {pages.map((page, index) => (
              <ul style={{ listStyle: "none", marginTop: "15px" }} key={index}>
                <li style={{ marginLeft: "-10px" }}>
                  <NavLink
                    key={page}
                    to={`/${page}`}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "larger",
                      font: "bolder",
                    }}
                    onClick={() => {
                      navigate(`/${page}`);
                      props.changePath(window.location.pathname.slice(1));
                      document.querySelector(".search input").value = "";
                    }}
                  >
                    {page}
                  </NavLink>
                </li>
              </ul>
            ))}
            <Box
              onClick={handleOpen}
              sx={{
                position: "relative",
                cursor: "pointer",
                height: "80px",
                width: "100px",
                // backgroundColor: "red",
                marginLeft: "35px",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  color: "white",
                  marginTop: "18px",
                  fontSize: "larger",
                  font: "bolder",
                }}
                display={"flex"}
              >
                <Typography fontSize={"large"}>Others</Typography>
                <ArrowDropDownIcon />
              </Box>

              {open ? (
                <Paper
                  elevation={5}
                  sx={{
                    position: "absolute",
                    // backgroundColor: "pink",
                    top: "70px",
                    zIndex: "2",
                    borderRadius: "4px",
                    width: "175px",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <List
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      width: "100%",
                    }}
                  >
                    {[
                      "Science",
                      "Technology",
                      "Sports",
                      "Cricket",
                      "Jokes",
                      "Covid-19",
                    ].map((text, index) => {
                      return (
                        <ListItem
                          key={index}
                          sx={{
                            width: "100%",
                            paddingLeft: "0",
                            paddingRight: "0",
                          }}
                          onClick={() => {
                            navigate(`/${text}`);
                            props.changePath(window.location.pathname.slice(1));

                            document.querySelector(".search input").value = "";
                          }}
                        >
                          <ListItemButton>
                            <ListItemText primary={text} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Paper>
              ) : null}
            </Box>
            <Box
              onClick={handleLanOpen}
              sx={{
                position: "relative",
                cursor: "pointer",
                height: "80px",
                width: "100px",
                // backgroundColor: "red",
                marginLeft: "15px",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  color: "white",
                  marginTop: "18px",
                  fontSize: "larger",
                  font: "bolder",
                }}
                display={"flex"}
              >
                <Typography fontSize={"large"}>Language</Typography>
                <ArrowDropDownIcon />
              </Box>

              {lanOpen ? (
                <Paper
                  elevation={5}
                  sx={{
                    position: "absolute",
                    // backgroundColor: "pink",
                    top: "70px",
                    zIndex: "2",
                    borderRadius: "4px",
                    width: "175px",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <List
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      width: "100%",
                    }}
                  >
                    {["Hindi", "English"].map((text, index) => {
                      return (
                        <ListItem
                          key={index}
                          sx={{
                            width: "100%",
                            paddingLeft: "0",
                            paddingRight: "0",
                          }}
                          onClick={() =>
                            props.change(`${text.slice(0, 2).toLowerCase()}`)
                          }
                        >
                          <ListItemButton>
                            <ListItemText primary={text} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Paper>
              ) : null}
            </Box>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              className="search"
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  navigate(`/${e.target.value}`);
                  props.changePath(
                    window.location.pathname.slice(1).replaceAll("%20", " ")
                  );
                }
              }}
              placeholder="Search news…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
