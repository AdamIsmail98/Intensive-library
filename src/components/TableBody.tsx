import _ from "lodash";
import { LibraryItem } from "../types";
import { Link } from "react-router-dom";

interface Props {
  libraryItems: LibraryItem[];
  onDelete(id: string): void;
}

function TableBody({ libraryItems, onDelete }: Props) {
  function titleAbbreviation(title: string) {
    return title
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  }

  return (
    <tbody>
      {libraryItems.map((item) => (
        <tr key={item.id}>
          <td>
            <Link to={`/libraryitems/${item.id}`}>
              {item.title} ({titleAbbreviation(item.title)})
            </Link>
          </td>
          <td>{item.author || item.creator}</td>
          <td>
            {item.nbrPages
              ? `${item.nbrPages} Pages`
              : `${item.runTimeMinutes} Minutes`}
          </td>
          <td>{item.type}</td>
          <td>{item.category.name}</td>
          <td>{item.isBorrowable ? "Yes" : "No"}</td>
          <td>{item.borrower || null}</td>
          <td>
            {item.borrowDate
              ? new Date(item.borrowDate).toLocaleDateString()
              : null}
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => onDelete(item.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
