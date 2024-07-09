const API_BASEURL = "http://localhost:5544/api/libraryitems";

export function getLibraryItems() {
  return axios.get<LibraryItem[]>(API_BASEURL);
}

export function getLibraryItem(id: string) {
  return axios.get<LibraryItem>(`${API_BASEURL}/${id}`);
}

export function saveFood(LibraryItem: LibraryItemFormData) {
  if (LibraryItem.id) {
    return axios.put(`${API_BASEURL}/${LibraryItem.id}`, LibraryItem);
  }

  return axios.post(`${API_BASEURL}/${LibraryItem.id}`, LibraryItem);
}

export function deleteFood(id: string) {
  return axios.delete<LibraryItem>(`${API_BASEURL}/${id}`);
}
