import { useEffect, useState } from "react";
import { LibraryItem } from "../types";
import { getLibraryItems } from "../services/libraryItemService";

export function useLibraryItems() {
  const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([]);

  useEffect(() => {
    async function fetch() {
      const { data: libraryItems } = await getLibraryItems();
      setLibraryItems(libraryItems);
    }

    fetch();
  }, []);

  return { libraryItems, setLibraryItems };
}
