import { Link } from "react-router-dom";
import Table from "../components/Table";
import { useLibraryItems } from "../hooks/useLibraryItems";

function LibraryItemsPage() {
  const { libraryItems } = useLibraryItems();

  return (
    <div>
      <h1>Library</h1>
      <Link to="/libraryitems/new" className="btn btn-primary mb-2">
        New Library item
      </Link>
      <Table libraryItems={libraryItems} />
    </div>
  );
}

export default LibraryItemsPage;
