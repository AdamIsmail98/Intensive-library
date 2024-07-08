import { LibraryItem } from "../types";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface Props {
  libraryItems: LibraryItem[];
}

function Table({ libraryItems }: Props) {
  return (
    <table className="table">
      <TableHeader />
      <TableBody libraryItems={libraryItems} />
    </table>
  );
}

export default Table;
