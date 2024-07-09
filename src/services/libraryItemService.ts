import { LibraryItem } from "../types";

const libraryItems: LibraryItem[] = [
  {
    id: "abc123",
    title: "En boktitel",
    author: "En författare",
    nbrPages: 300,
    type: "Book",
    category: {
      id: "1",
      name: "Sci-Fi",
    },
    isBorrowable: true,
    borrower: null,
    borrowDate: null,
  },
  {
    id: "abc1234",
    title: "En DVD-titel",
    creator: "Alex guetta",
    runTimeMinutes: 120,
    type: "DVD",
    category: {
      id: "2",
      name: "Action",
    },
    isBorrowable: true,
    borrower: null,
    borrowDate: null,
  },
  {
    id: "abc321",
    title: "En ljudbokstitel",
    creator: "Karl Gustav",
    runTimeMinutes: 360,
    type: "Audiobook",
    category: {
      id: "3",
      name: "Komedi",
    },
    isBorrowable: true,
    borrower: null,
    borrowDate: null,
  },
  {
    id: "abc4321",
    title: "En uppslagsbokstitel",
    author: "En författare",
    nbrPages: 1500,
    type: "Encyclopedia",
    category: {
      id: "4",
      name: "Referens",
    },
    isBorrowable: false,
  },
  {
    id: "abc3212",
    title: "En ljudbokstitel",
    creator: "Creator",
    runTimeMinutes: 360,
    type: "Audiobook",
    category: {
      id: "3",
      name: "Komedi",
    },
    isBorrowable: true,
    borrower: null,
    borrowDate: null,
  },
];

export function getLibraryItems() {
  return libraryItems;
}
