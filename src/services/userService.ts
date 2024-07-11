import { UserRegister } from "../types";
import authService from "./authService";
import axios from "axios";

const API_BASEURL = "http://localhost:5544/api/users";

async function register(user: UserRegister) {
  const { headers, data } = await axios.post(API_BASEURL, user);
  const token = headers["x-auth-token"];
  authService.loginWithJwt(token);
  return data;
}

export default {
  register,
};
