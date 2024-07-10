import Table from "../components/Table";
import { useLibraryItems } from "../hooks/useLibraryItems";

function LibraryItemsPage() {
  const { libraryItems } = useLibraryItems();

  return (
    <div>
      <h1>Library</h1>
      <Table libraryItems={libraryItems} />
    </div>
  );
}

export default LibraryItemsPage;
