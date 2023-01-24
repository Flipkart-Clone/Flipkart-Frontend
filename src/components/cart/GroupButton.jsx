import { Box, Button, styled } from "@mui/material";
import React from "react";
import { useState } from "react";
import { ButtonGroup } from '@mui/material';


const Component = styled(Box)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  
`;

const GroupButton = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <Component>
      <StyledButton onClick={() => handleDecrement()} disabled={counter == 0} variant="outlined" color="inherit">
        -
      </StyledButton>
      <Button variant="outlined" disabled color="inherit" style={{margin: '0px 10px'}}>{counter}</Button>
      <StyledButton onClick={() => handleIncrement()} color="inherit" variant="outlined">+</StyledButton>
    </Component>
  );
};

export default GroupButton;
