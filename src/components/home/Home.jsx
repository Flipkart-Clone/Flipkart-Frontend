import Banner from "./Banner";
import NavBar from "./NavBar";
import { styled } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;


//we Can't directly call the getProducts function here becasue it's a reducer funtion and hence we have to dispatch it from here using a custom hook name useDispatch
const Home = () => {
  // This the state in redux store
  const {products} = useSelector(state => state.getProducts)

  const dispatch = useDispatch()

  useEffect(()=>{
    //This is the function in actions and is dispatched from here
    dispatch(getProducts())
  },[dispatch])
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the day" timer={true}/>
        <MidSection/>
        <Slide products={products} title="Deal of the day" timer={true}/>
        <Slide products={products} title="Top Selections" timer={false} />
        <Slide products={products} title="Discounts for You" timer={false}/>
        <Slide products={products} title="Suggested Items"  timer={false}/>
        <Slide products={products} title="Trending Offers" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false}/>
        <Slide products={products} title="Top deals on accessories" timer={false}/>
      </Component>
    </>
  );
};
export default Home;
