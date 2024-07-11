import { SortColumn, SortOrder } from "../types";

interface Props {
  sortColumn: SortColumn;
  sortOrder: SortOrder;
  onSort(e: React.ChangeEvent<HTMLSelectElement>): void;
  onSortOrder(sortOrder: SortOrder): void;
}

function Sort({ sortColumn, sortOrder, onSort, onSortOrder }: Props) {
  return (
    <>
      <select className="ms-2 w-40 p-2" value={sortColumn} onChange={onSort}>
        <option value={"category.name"}>Category</option>
        <option value={"type"}>Type</option>
      </select>
      <select
        className="ms-2 w-40 p-2"
        value={sortOrder}
        onChange={(e) => onSortOrder(e.target.value as SortOrder)}
      >
        <option value={"asc"}>Ascending</option>
        <option value={"desc"}>Descending</option>
      </select>
    </>
  );
}

export default Sort;
