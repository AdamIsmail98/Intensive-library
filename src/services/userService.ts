import { BASE_URL } from "../constants";
import { UserRegister } from "../types";
import authService from "./authService";
import axios from "axios";

const API_ENDPOINT = `${BASE_URL}/api/users`;

async function register(user: UserRegister) {
  const { headers, data } = await axios.post(API_ENDPOINT, user);
  const token = headers["x-auth-token"];
  authService.loginWithJwt(token);
  return data;
}

export default {
  register,
};
