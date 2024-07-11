import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCategory, saveCategory } from "../services/categoryService";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
});

type FormData = z.infer<typeof schema>;

function CategoryFormPage() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetch() {
      if (!id || id === "new") return;

      const { data: category } = await getCategory(id);

      if (!category) return navigate("/not-found");

      reset({ name: category.name });
    }
    fetch();
  }, []);

  async function onSubmit(data: FormData) {
    saveCategory(id, data.name);
    navigate("/libraryitems");
  }

  return (
    <div>
      <h1 className="p-3">Category Form</h1>
      <div className="p-3 shadow rounded-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 w-50">
            <label className="form-label">Name</label>
            <input {...register("name")} className="form-control" />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
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

export default CategoryFormPage;
