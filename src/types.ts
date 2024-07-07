export interface LibraryItemBase {
  id: string;
  title: string;
  type: string;
  isBorrowable: boolean;
  category: Category;
  borrower?: string | null;
  borrowDate?: Date | null;
}

export interface Category {
  id: string;
  name: string;
}

export interface Book extends LibraryItemBase {
  type: "Book";
  author: string;
  nbrPages: number;
}

export interface DVD extends LibraryItemBase {
  type: "DVD";
  runTimeMinutes: number;
}

export interface Audiobook extends LibraryItemBase {
  type: "Audiobook";
  runTimeMinutes: number;
}

export interface Encyclopedia extends LibraryItemBase {
  type: "Encyclopedia";
  author: string;
  nbrPages: number;
}

export type LibraryItem = Book | DVD | Audiobook | Encyclopedia;
