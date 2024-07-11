export interface LibraryItem {
  id: string;
  title: string;
  author?: string;
  creator?: string;
  nbrPages?: number;
  runTimeMinutes?: number;
  type: LibraryItemType;
  isBorrowable: boolean;
  category: Category;
  borrower?: string | null;
  borrowDate?: Date | null;
}

export interface Category {
  id: string;
  name: string;
}

export type LibraryItemType = "Book" | "DVD" | "Audiobook" | "Encyclopedia";

export type SortOrder = "asc" | "desc";

export type SortColumn = "category.name" | "type";
