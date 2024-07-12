import axios from "axios";
import { Category } from "../types";
import { BASE_URL } from "../constants";

const API_ENDPOINT = `${BASE_URL}/api/categories`;

export function getCategories() {
  return axios.get<Category[]>(API_ENDPOINT);
}

export function getCategory(id: string) {
  return axios.get<Category>(`${API_ENDPOINT}/${id}`);
}

export function saveCategory(id: string | undefined, name: string) {
  if (id && id !== "new") {
    return axios.put(`${API_ENDPOINT}/${id}`, { name });
  }

  return axios.post(`${API_ENDPOINT}`, { name });
}

export function deleteCategory(id: string) {
  return axios.delete<Category>(`${API_ENDPOINT}/${id}`);
}
