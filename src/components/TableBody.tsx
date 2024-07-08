import _ from "lodash";
import { LibraryItem } from "../types";
import { Link } from "react-router-dom";

interface Props {
  libraryItems: LibraryItem[];
}

function TableBody({ libraryItems }: Props) {
  return (
    <tbody>
      {libraryItems.map((item) => (
        <tr key={item.id}>
          <td>
            <Link to={`/libraryitems/${item.id}`}>{item.title}</Link>
          </td>
          <td>{"author" in item ? item.author : null}</td>
          <td>{"nbrPages" in item ? item.nbrPages : item.runTimeMinutes}</td>
          <td>{item.type}</td>
          <td>
            <Link to={`/categoriesform/${item.category.id}`}>
              {item.category.name}
            </Link>
          </td>
          <td>{item.isBorrowable ? "Yes" : "No"}</td>
          <td>{item.borrower || "N/A"}</td>
          <td>
            {item.borrowDate ? item.borrowDate.toLocaleDateString() : "N/A"}
          </td>
          {/* <td>
                  {item.isBorrowable && !item.borrower && (
                    <button onClick={() => handleCheckout(item)}>Checkout</button>
                  )}
                </td> */}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
