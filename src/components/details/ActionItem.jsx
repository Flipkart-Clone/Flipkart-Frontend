import {
  FlashOn as FlashOnIcon,
  ShoppingCart as Cart,
} from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {addToCart} from '../../redux/actions/cartActions'
import { payUsingPaytm } from "../../services/api";
import { post } from "../../utils/paytm";


const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0px 0px 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));
const Image = styled("img")({
  padding: "15px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  borderRadius: "2px",
  height: "50px",
  color: "#fff",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
}));

export const ActionItem = ({ product }) => {

  const {id } = product

  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(addToCart(id, quantity))
    navigate('/cart')
  };

  const buyNow = async (req, res)=> {
    const response = await payUsingPaytm({amount: 500, email: 'keshab0121@gmail.com'})
    let information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params : response,
    }
    post(information);
  }

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
        onClick={() => addItemToCart()}
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton variant="contained" style={{ background: "#fb641b" }} onClick={() => buyNow()}>
        <FlashOnIcon />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};
