import { jwtDecode } from "jwt-decode";
import { User, UserLogin } from "../types";
import axios from "axios";
import { BASE_URL } from "../constants";

const API_ENDPOINT = `${BASE_URL}/api/auth`;

const TOKEN_KEY = "token";

axios.defaults.headers.common["x-auth-token"] = getJwt();

async function login(user: UserLogin) {
  const { data: token } = await axios.post(API_ENDPOINT, user);
  localStorage.setItem(TOKEN_KEY, token);
}

function loginWithJwt(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

function getCurrentUser() {
  const token = localStorage.getItem(TOKEN_KEY);

  if (!token) return null;

  try {
    const user = jwtDecode<User>(token);

    return user;
  } catch (error) {
    localStorage.removeItem(TOKEN_KEY);
    return null;
  }
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
