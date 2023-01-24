import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Divider, Box, Typography, styled } from "@mui/material";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;

const Deal = styled(Box)`
  display: flex;
  padding: 15px 20px;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  margin-right: 25px;
`;

const Timer = styled(Box)`
  color: #7f7f7f;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
`;

const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

// const RenderTimer = styled(Box)(({ theme }) => ({
//   [theme.breakpoints.down("sm")]: {
//     display: "none",
//   },
// }));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours} : {minutes} : {seconds} Left
      </Box>
    );
  };

  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} style={{ width: 24 }} alt=""/>
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}
        <ViewAllButton variant="contained" color="primary">
          View All
        </ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={4000}
        centerMode={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((products) => (
          <Link to={`product/${products.id}`} style={{textDecoration: 'None'}} >
            <Box style={{ padding: "25px 15px" }} textAlign="center">
              <Image src={products.url} />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {products.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{products.discount}</Text>
              <Text style={{ opacity: "0.6", color: "#212121" }}>
                {products.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;
