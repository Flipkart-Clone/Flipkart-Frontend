import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import CustomButtons from "./CustomButtons";
import Search from "./Search";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const LinkTag = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
  color: #fff;
`;
const PlusLogo = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    color: "#fff",
  },
}));

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setopen] = useState();

  const handleOpen = () => {
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };

  const list = () => {
    return (
      <Box
        style={{
          width: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onClick={handleClose}
      >
        <List>
          <ListItemButton>
            <CustomButtons />
          </ListItemButton>
        </List>
      </Box>
    );
  };

  return (
    <div>
      <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
          <MenuButton onClick={handleOpen}>
            <Menu />
          </MenuButton>
          <Drawer open={open} onClose={handleClose}>
            {list()}
          </Drawer>
          <LinkTag to={`/`}>
            <img src={logoURL} style={{ width: 75 }} alt=""></img>
            <Box style={{ display: "flex" }}>
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style={{ color: "#FFE500" }}>
                  Plus
                </Box>
              </SubHeading>
              <PlusLogo src={subURL} />
            </Box>
          </LinkTag>
          <Search />
          <CustomButtonWrapper>
            <CustomButtons />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};
export default Header;
