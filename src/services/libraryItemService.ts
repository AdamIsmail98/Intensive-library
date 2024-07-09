import { LibraryItem } from "../types";

const libraryItems: LibraryItem[] = [
  {
    id: "abc123",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    nbrPages: 310,
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
    title: "Inception",
    creator: "Christopher Nolan",
    runTimeMinutes: 148,
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
    title: "The Alchemist",
    creator: "Paulo Coelho",
    runTimeMinutes: 195,
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
    title: "World Atlas",
    author: "National Geographic",
    nbrPages: 400,
    type: "Encyclopedia",
    category: {
      id: "4",
      name: "Referens",
    },
    isBorrowable: false,
  },
  {
    id: "abc3212",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    nbrPages: 443,
    type: "Book",
    category: {
      id: "5",
      name: "History",
    },
    isBorrowable: true,
    borrower: null,
    borrowDate: null,
  },
];

export function getLibraryItems() {
  return libraryItems;
}
