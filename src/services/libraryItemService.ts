import axios from "axios";
import { LibraryItem, LibraryItemType } from "../types";
import { BASE_URL } from "../constants";

interface LibraryItemFormData {
  id?: string;
  title: string;
  author?: string;
  creator?: string;
  nbrPages?: number;
  runTimeMinutes?: number;
  type: LibraryItemType;
  isBorrowable: boolean;
  categoryId: string;
  borrower?: string | null;
  borrowDate?: Date | null;
}

const API_ENDPOINT = `${BASE_URL}/api/libraryitems`;

export function getLibraryItems() {
  return axios.get<LibraryItem[]>(API_ENDPOINT);
}

export function getLibraryItem(id: string) {
  return axios.get<LibraryItem>(`${API_ENDPOINT}/${id}`);
}

export function saveLibraryItem(LibraryItem: LibraryItemFormData) {
  if (LibraryItem.id) {
    return axios.put(`${API_ENDPOINT}/${LibraryItem.id}`, LibraryItem);
  }

  return axios.post(`${API_ENDPOINT}`, LibraryItem);
}

export function deleteLibraryItem(id: string) {
  return axios.delete<LibraryItem>(`${API_ENDPOINT}/${id}`);
}
