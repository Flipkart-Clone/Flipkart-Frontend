import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchComponent = styled(Box)`
  background: #fff;
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  width: 100%;
  padding-left: 20px;
  font-size: unset;
`;
const SearchIconWrapper = styled(Box)`
  color: #2874f0;
  padding: 6px;
  margin-right: 7px;
  display: flex;
`;
const ListWrapper = styled(List)({
  position: "absolute",
  background: " #fff",
  color: "#000",
  marginTop: "36px",
});

const Search = () => {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };
  const removeText = () => {
    setText("");
  };

  return (
    <SearchComponent>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <Link
                to={`product/${product.id}`}
                onClick={removeText}
                style={{
                  textDecoration: "none",
                  color: "inherit"
                }}
                className="link"
              >
                <ListItem>{product.title.longTitle}</ListItem>
              </Link>
            ))}
        </ListWrapper>
      )}
    </SearchComponent>
  );
};

export default Search;
