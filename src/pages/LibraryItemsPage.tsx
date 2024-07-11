import { Link } from "react-router-dom";
import Table from "../components/Table";
import { useLibraryItems } from "../hooks/useLibraryItems";
import { useCategories } from "../hooks/useCategories";
import ListGroup from "../components/ListGroup";
import { deleteCategory } from "../services/categoryService";
import { deleteLibraryItem } from "../services/libraryItemService";

function LibraryItemsPage() {
  const { libraryItems, setLibraryItems } = useLibraryItems();
  const { categories, SetCategories } = useCategories();

  async function handleCategoryDelete(id: string) {
    try {
      await deleteCategory(id);
      const newCategories = categories.filter((category) => category.id !== id);
      SetCategories(newCategories);
    } catch (error: any) {
      alert(error.response.data);
    }
  }

  async function handleLibraryItemDelete(id: string) {
    const newLibraryItems = libraryItems.filter(
      (libraryItem) => libraryItem.id !== id
    );
    setLibraryItems(newLibraryItems);
    await deleteLibraryItem(id);
  }

  return (
    <div className="row container pt-3">
      <h1>Library</h1>
      <div className="col-2">
        <Link to="/categories/new" className="btn btn-primary mb-2">
          New Category
        </Link>
        <ListGroup items={categories} onDelete={handleCategoryDelete} />
      </div>
      <div className="col">
        <Link to="/libraryitems/new" className="btn btn-primary mb-2">
          New Library item
        </Link>
        <Table libraryItems={libraryItems} onDelete={handleLibraryItemDelete} />
      </div>
    </div>
  );
}

export default LibraryItemsPage;
