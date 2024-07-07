import { useState } from "react";
import { getLibraryItems } from "../services/libraryItemService";
import { LibraryItem } from "../types";

function LibraryItemsPage() {
  const [libraryitems, setLibraryItems] = useState<LibraryItem[]>(
    getLibraryItems()
  );

  return (
    <div>
      <h1>Library</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author/Runtime</th>
            <th>Pages/Runtime</th>
            <th>Type</th>
            <th>Category</th>
            <th>Borrowable</th>
            <th>Borrower</th>
            <th>Borrow Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {libraryitems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{"author" in item ? item.author : item.runTimeMinutes}</td>
              <td>
                {"nbrPages" in item ? item.nbrPages : item.runTimeMinutes}
              </td>
              <td>{item.type}</td>
              <td>{item.category.name}</td>
              <td>{item.isBorrowable ? "Yes" : "No"}</td>
              <td>{item.borrower || "N/A"}</td>
              <td>
                {item.borrowDate ? item.borrowDate.toLocaleDateString() : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LibraryItemsPage;
