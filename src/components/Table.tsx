import { LibraryItem } from "../types";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface Props {
  libraryItems: LibraryItem[];
  onDelete(id: string): void;
}

function Table({ libraryItems, onDelete }: Props) {
  return (
    <table className="table">
      <TableHeader />
      <TableBody libraryItems={libraryItems} onDelete={onDelete} />
    </table>
  );
}

export default Table;
