import axios from "axios";
const URL = "https://flipkartcloneserver.onrender.com";

export const authSign = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (err) {
    console.log("error while signing in", err);
  }
};

export const authLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (err) {
    console.log("error while logging in", err);
  }
};

export const payUsingPaytm = async (data) => {
  try {
    const res = await axios.post(`${URL}/payment`, data)
    return res.data
  } catch (error) {
    
  }
}