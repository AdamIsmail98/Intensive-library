import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";
import { Category } from "../types";

export function useCategories() {
  const [categories, SetCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetch() {
      const { data: categories } = await getCategories();
      SetCategories(categories);
    }

    fetch();
  }, []);

  return { categories, SetCategories };
}
