import axios from "axios";
import { LibraryItem, LibraryItemType } from "../types";

interface LibraryItemFormData {
  id: string;
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

const API_BASEURL = "http://localhost:5544/api/libraryitems";

export function getLibraryItems() {
  return axios.get<LibraryItem[]>(API_BASEURL);
}

export function getLibraryItem(id: string) {
  return axios.get<LibraryItem>(`${API_BASEURL}/${id}`);
}

export function saveLibraryItem(LibraryItem: LibraryItemFormData) {
  if (LibraryItem.id) {
    return axios.put(`${API_BASEURL}/${LibraryItem.id}`, LibraryItem);
  }

  return axios.post(`${API_BASEURL}/${LibraryItem.id}`, LibraryItem);
}

export function deleteLibraryItem(id: string) {
  return axios.delete<LibraryItem>(`${API_BASEURL}/${id}`);
}
