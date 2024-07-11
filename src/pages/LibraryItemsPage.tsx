import { Link } from "react-router-dom";
import Table from "../components/Table";
import ListGroup from "../components/ListGroup";
import { useLibraryItems } from "../hooks/useLibraryItems";
import { useCategories } from "../hooks/useCategories";
import { deleteCategory } from "../services/categoryService";
import { deleteLibraryItem } from "../services/libraryItemService";
import { useState } from "react";
import { SortColumn, SortOrder } from "../types";
import _ from "lodash";
import Sort from "../components/Sort";

function LibraryItemsPage() {
  const { libraryItems, setLibraryItems } = useLibraryItems();
  const { categories, SetCategories } = useCategories();
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [sortColumn, setSortColumn] = useState<SortColumn>("category.name");

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

  const handleSortColumnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortColumn(e.target.value as SortColumn);
    setSortOrder("asc");
  };

  const sortedLibraryItems = _.orderBy(libraryItems, sortColumn, sortOrder);

  return (
    <div className="row container pt-3">
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
        <Sort
          sortColumn={sortColumn}
          sortOrder={sortOrder}
          onSort={handleSortColumnChange}
          onSortOrder={setSortOrder}
        />
        <Table
          libraryItems={sortedLibraryItems}
          onDelete={handleLibraryItemDelete}
        />
      </div>
    </div>
  );
}

export default LibraryItemsPage;
