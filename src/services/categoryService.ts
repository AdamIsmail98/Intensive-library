import axios from "axios";
import { Category } from "../types";

const API_BASEURL = "http://localhost:5544/api/categories";

export function getCategories() {
  return axios.get<Category[]>(API_BASEURL);
}

export function getCategory(id: string) {
  return axios.get<Category>(`${API_BASEURL}/${id}`);
}

export function saveCategory(id: string | undefined, name: string) {
  if (id && id !== "new") {
    return axios.put(`${API_BASEURL}/${id}`, { name });
  }

  return axios.post(`${API_BASEURL}`, { name });
}

export function deleteCategory(id: string) {
  return axios.delete<Category>(`${API_BASEURL}/${id}`);
}
