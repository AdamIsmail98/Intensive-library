import { useEffect, useState } from "react";
import { getLibraryItems } from "../services/libraryItemService";
import { LibraryItem } from "../types";
import Table from "../components/Table";

function LibraryItemsPage() {
  const [libraryitems, setLibraryItems] = useState<LibraryItem[]>([]);

  useEffect(() => {
    async function fetch() {
      const { data: libraryItems } = await getLibraryItems();
      setLibraryItems(libraryItems);
    }

    fetch();
  }, []);

  console.log(libraryitems);

  return (
    <div>
      <h1>Library</h1>
      <Table libraryItems={libraryitems} />
    </div>
  );
}

export default LibraryItemsPage;
