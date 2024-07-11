import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCategories } from "../hooks/useCategories";
import {
  getLibraryItem,
  saveLibraryItem,
} from "../services/libraryItemService";
import { baseSchema, getValidationSchema } from "../validationSchemas";
import { LibraryItem, LibraryItemType } from "../types";

type FormData = z.infer<typeof baseSchema>;
type ExtendedFormData = FormData & {
  author?: string;
  creator?: string;
  nbrPages?: number;
  runTimeMinutes?: number;
  borrower?: string | null;
  borrowDate?: Date | null;
};

function LibraryItemFormPage() {
  const [type, setType] = useState<LibraryItemType>("Book");
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    watch,
    reset,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<ExtendedFormData>({
    resolver: zodResolver(getValidationSchema(type)),
    mode: "onChange",
  });

  const { categories } = useCategories();

  useEffect(() => {
    async function fetch() {
      if (!id || id === "new") return;

      const { data: libraryItem } = await getLibraryItem(id);

      if (!libraryItem) return navigate("/not-found");

      setType(libraryItem.type as LibraryItemType);

      reset(mapToFormData(libraryItem));
    }
    fetch();
  }, []);

  useEffect(() => {
    if (!id || id === "new") {
      setValue("borrowDate", null);
      setValue("borrower", null);
    }
  }, []);

  function mapToFormData(libraryItem: LibraryItem): ExtendedFormData {
    const mappedLibraryItem: ExtendedFormData = {
      id: libraryItem.id,
      title: libraryItem.title,
      type: libraryItem.type,
      isBorrowable: libraryItem.isBorrowable,
      categoryId: libraryItem.category.id,
      borrower: libraryItem.borrower,
      borrowDate: libraryItem.borrowDate
        ? new Date(libraryItem.borrowDate)
        : null,
    };

    if (libraryItem.type === "Book") {
      mappedLibraryItem.author = libraryItem.author;
      mappedLibraryItem.nbrPages = libraryItem.nbrPages;
    } else if (libraryItem.type === "DVD" || libraryItem.type === "Audiobook") {
      mappedLibraryItem.creator = libraryItem.creator;
      mappedLibraryItem.runTimeMinutes = libraryItem.runTimeMinutes;
    } else if (libraryItem.type === "Encyclopedia") {
      mappedLibraryItem.author = libraryItem.author;
      mappedLibraryItem.nbrPages = libraryItem.nbrPages;
    } else {
      throw new Error(`Unsupported type: ${libraryItem.type}`);
    }

    return mappedLibraryItem;
  }

  async function onSubmit(data: ExtendedFormData) {
    if (data.type === "Encyclopedia" && data.isBorrowable) {
      alert("Encyclopedia cannot be borrowed.");
      return;
    }

    await saveLibraryItem(data);
    navigate("/libraryitems");
  }

  return (
    <div>
      <h1 className="p-3 ">Library Item Form</h1>
      <div className="p-3 shadow rounded-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 w-50">
            <label className="form-label">Title</label>
            <input {...register("title")} className="form-control" />
            {errors.title && (
              <p className="text-danger">{errors.title.message}</p>
            )}
          </div>
          <div className="mb-3 w-50">
            <label className="form-label">Type</label>
            <select
              {...register("type")}
              className="form-select"
              onChange={(e) => setType(e.target.value as LibraryItemType)}
            >
              <option value="Book">Book</option>
              <option value="DVD">DVD</option>
              <option value="Audiobook">Audiobook</option>
              <option value="Encyclopedia">Encyclopedia</option>
            </select>
            {errors.type && (
              <p className="text-danger">{errors.type.message}</p>
            )}
          </div>
          <div className="mb-3 w-50">
            <label className="form-label">Category</label>
            <select {...register("categoryId")} className="form-select">
              <option />
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.categoryId && (
              <p className="text-danger">{errors.categoryId.message}</p>
            )}
          </div>

          {type === "Book" && (
            <>
              <div className="mb-3 w-50">
                <label className="form-label">Author</label>
                <input {...register("author")} className="form-control" />
                {errors.author && (
                  <p className="text-danger">{errors.author.message}</p>
                )}
              </div>
              <div className="mb-3 w-50">
                <label className="form-label">Number of Pages</label>
                <input
                  {...register("nbrPages", { valueAsNumber: true })}
                  className="form-control"
                />
                {errors.nbrPages && (
                  <p className="text-danger">{errors.nbrPages.message}</p>
                )}
              </div>
            </>
          )}

          {(type === "DVD" || type === "Audiobook") && (
            <>
              <div className="mb-3 w-50">
                <label className="form-label">Creator</label>
                <input {...register("creator")} className="form-control" />
                {errors.creator && (
                  <p className="text-danger">{errors.creator.message}</p>
                )}
              </div>
              <div className="mb-3 w-50">
                <label className="form-label">Runtime in Minutes</label>
                <input
                  {...register("runTimeMinutes", { valueAsNumber: true })}
                  className="form-control"
                />
                {errors.runTimeMinutes && (
                  <p className="text-danger">{errors.runTimeMinutes.message}</p>
                )}
              </div>
            </>
          )}

          {type === "Encyclopedia" && (
            <>
              <div className="mb-3 w-50">
                <label className="form-label">Author</label>
                <input {...register("author")} className="form-control" />
                {errors.author && (
                  <p className="text-danger">{errors.author.message}</p>
                )}
              </div>
              <div className="mb-3 w-50">
                <label className="form-label">Number of Pages</label>
                <input
                  {...register("nbrPages", { valueAsNumber: true })}
                  className="form-control"
                />
                {errors.nbrPages && (
                  <p className="text-danger">{errors.nbrPages.message}</p>
                )}
              </div>
            </>
          )}

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              {...register("isBorrowable")}
              defaultChecked={watch("isBorrowable")}
              className="form-check-input"
            />
            <label className="form-check-label">Is Borrowable</label>
          </div>

          {watch("isBorrowable") && (
            <>
              <div className="mb-3 w-50">
                <label className="form-label">Borrower</label>
                <input {...register("borrower")} className="form-control" />
                {errors.borrower && (
                  <p className="text-danger">{errors.borrower.message}</p>
                )}
              </div>
              <div className="mb-3 w-50">
                <label className="form-label">Borrow Date</label>
                <input
                  {...register("borrowDate", { valueAsDate: true })}
                  type="date"
                  className="form-control"
                />
                {errors.borrowDate && (
                  <p className="text-danger">{errors.borrowDate.message}</p>
                )}
              </div>
            </>
          )}

          <div>
            <button className="btn btn-primary" disabled={!isValid}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LibraryItemFormPage;
