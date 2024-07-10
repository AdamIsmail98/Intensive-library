import { z } from "zod";
import { LibraryItemType } from "./types";

export const baseSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: "Title is required" }),
  type: z.enum(["Book", "DVD", "Audiobook", "Encyclopedia"]),
  isBorrowable: z.boolean(),
  categoryId: z.string().min(1, { message: "Category is required" }),
  borrower: z.string().optional().nullable(),
  borrowDate: z.date().optional().nullable(),
});

const bookSchema = baseSchema.extend({
  author: z.string().min(1, { message: "Author is required" }),
  nbrPages: z
    .number({ invalid_type_error: "Number of pages must be a number" })
    .min(1, { message: "Number of pages must be at least 1" }),
});

const dvdSchema = baseSchema.extend({
  creator: z.string().min(1, { message: "Creator is required" }),
  runTimeMinutes: z
    .number({ invalid_type_error: "Runtime must be a number" })
    .min(1, { message: "Runtime must be at least 1 minute" }),
});

const audiobookSchema = dvdSchema;

const encyclopediaSchema = baseSchema.extend({
  author: z.string().min(1, { message: "Author is required" }),
  nbrPages: z
    .number({ invalid_type_error: "Number of pages must be a number" })
    .min(1, { message: "Number of pages must be at least 1" }),
});

export function getValidationSchema(type: LibraryItemType) {
  if (type === "Book") return bookSchema;
  if (type === "DVD") return dvdSchema;
  if (type === "Audiobook") return audiobookSchema;
  if (type === "Encyclopedia") return encyclopediaSchema;
  throw new Error("Invalid type");
}
