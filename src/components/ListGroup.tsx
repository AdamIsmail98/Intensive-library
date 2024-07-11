import { Link } from "react-router-dom";

interface Item {
  id: string;
  name: string;
}

interface Props<T extends Item> {
  items: T[];
  onDelete(id: string): void;
}

function ListGroup<T extends Item>({ items, onDelete }: Props<T>) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {<Link to={`/categories/${item.id}`}>{item.name}</Link>}
          <button className="btn btn-danger" onClick={() => onDelete(item.id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
