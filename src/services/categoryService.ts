import axios from "axios";
import { Category } from "../types";

const API_BASEURL = "http://localhost:5544/api/categories";

export function getLibraryItems() {
  return axios.get<Category[]>(API_BASEURL);
}

export function getLibraryItem(id: string) {
  return axios.get<Category>(`${API_BASEURL}/${id}`);
}

export function saveFood(category: Category) {
  if (category.id) {
    return axios.put(`${API_BASEURL}/${category.id}`, category.name);
  }

  return axios.post(`${API_BASEURL}/${category.id}`, category.name);
}

export function deleteFood(id: string) {
  return axios.delete<Category>(`${API_BASEURL}/${id}`);
}
