import React, { useState, useEffect, useContext } from "react";

import { DataContext } from "../../context/DataProvider";

import {
  Dialog,
  DialogContent,
  TextField,
  Box,
  Button,
  Typography,
  styled,
} from "@mui/material";

import { authSign, authLogin} from "../../services/api";

const Component = styled(DialogContent)`
  height: 70vh;
  width: 90vh;
  padding: 0;
  padding-top: 0;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;
// height: 70vh;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 30%;
  height: 82%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

// setting initial values of the login dialog to change when user wants to login done using useState by passing this object initially

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const LoginDialog = ({ open, setOpen }) => {
  // This is used to get the values user enters in the login field while logging in
  const [login, setLogin] = useState(loginInitialValues);
  // This is used to get the values user enters in the signup field while signing in
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState(false);
  //this is used to toggle between login and signup dialog box
  const [account, toggleAccount] = useState(accountInitialValues.login);

  const { setAccount } = useContext(DataContext);

  useEffect(() => {
    showError(false);
  }, [login]);

  const handleClose = () => {
    console.log("handleClose Triggered");
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authLogin(login);
    if (!response) showError(true);
    else {
      showError(false);
      handleClose();
      setAccount(response.data.data.firstname);
    }
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const signupUser = async () => {
    let response = await authSign(signup);
    if (!response) return;
    handleClose();
    setAccount(response.data.data.firstname);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter Email/Mobile number"
              />
              {error && (
              <Error>Please enter valid Email ID/Mobile number</Error>
              )}
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter Firstname"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter Lastname"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone"
              />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
