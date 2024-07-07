import { LibraryItem } from "../types";

const libraryItems: LibraryItem[] = [
  {
    id: "abc123",
    type: "Book",
    title: "En boktitel",
    author: "En författare",
    nbrPages: 300,
    isBorrowable: true,
    category: {
      id: "1",
      name: "Sci-Fi",
    },
    borrower: null,
    borrowDate: null,
  },
  {
    id: "abc1234",
    type: "DVD",
    title: "En DVD-titel",
    runTimeMinutes: 120,
    isBorrowable: true,
    category: {
      id: "2",
      name: "Action",
    },
    borrower: null,
    borrowDate: null,
  },
  {
    id: "abc321",
    type: "Audiobook",
    title: "En ljudbokstitel",
    runTimeMinutes: 360,
    isBorrowable: true,
    category: {
      id: "3",
      name: "Komedi",
    },
    borrower: null,
    borrowDate: null,
  },
  {
    id: "abc4321",
    type: "Encyclopedia",
    title: "En uppslagsbokstitel",
    author: "En författare",
    nbrPages: 1500,
    isBorrowable: false,
    category: {
      id: "4",
      name: "Referens",
    },
  },
];

export function getLibraryItems() {
  return libraryItems;
}
