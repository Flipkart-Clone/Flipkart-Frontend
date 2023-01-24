import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { LocalOffer as Badge } from "@mui/icons-material";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
    border: none; 
  }
`;

const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 rating and 1 review
        <Box component="span">
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>Available offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          Buy this Product and Get Extra ₹500 Off on Two-WheelersT&C
        </Typography>
        <Typography>
          <StyledBadge />
          Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
        </Typography>
        <Typography>
          <StyledBadge />
          Special PriceGet extra ₹500 off (price inclusive of
          cashback/coupon)T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Partner OfferBuy this product and get upto ₹500 off on Flipkart
          FurnitureKnow More
        </Typography>
        <Typography>
          <StyledBadge />
          EMI starting from ₹311/monthView Plans
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell style={{ fontWeight: 600 }}>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SuperCommNet
              </Box>
              <Typography>GST invoice Available</Typography>
              <Typography>14 days Warranty</Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }} colSpan={2}>
              <img src={adURL} style={{width: 390}} />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell style={{ fontWeight: 600 }}>{product.description}
            </TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
