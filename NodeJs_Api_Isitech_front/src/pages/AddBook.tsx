import FormArea from "@/components/parts/FormArea";
import FormInput from "@/components/parts/FormInput";
import FormSelect from "@/components/parts/CustomComboBox";
import Navigation from "@/components/parts/Navigation";
import { Button } from "@/components/ui/button";

import { useForm, Controller } from "react-hook-form";

// Services

import CategoriesService from "@/services/categories.service.js";
import BooksService from "@/services/books.service.js";

import { useState, useEffect } from "react";

const AddBook = () => {
  const [categories, setCategories] = useState<object[]>([]);
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    (async () => {
      const categoriesResponse = await CategoriesService.getAllCategories();
      setCategories(categoriesResponse);
    })();
  }, []);

  const onSubmit = (data: object) => {
    BooksService.createBook(data);
    console.log(data);
  };

  return (
    <div className="grid grid-cols-[300px,1fr]">
      <Navigation />
      <main className="mr-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5 mb-5">
            <FormInput
              register={register}
              errors={errors}
              label="title"
              content="Title"
              validation={{
                required: {
                  value: true,
                  message: "Title is required",
                },
              }}
            />

            <FormInput
              register={register}
              errors={errors}
              label="author"
              content="Author"
              validation={{
                required: {
                  value: true,
                  message: "Author is required",
                },
              }}
            />
          </div>

          <div className="mb-5 w-[3px]">
            <FormSelect
              label="categories"
              required
              Controller={Controller}
              control={control}
              placeholder="Select Categorie ..."
              data={(categories.length > 0 ? categories : []).map(
                (category: { label: string }) => category.label
              )}
              getValues={getValues}
              errors={errors}
              content="Categories"
              validation={{
                required: {
                  value: true,
                  message: "Categorie is required",
                },
              }}
            />
          </div>

          <FormArea
            register={register}
            errors={errors}
            label="description"
            content="Description"
            validation={{
              required: {
                value: true,
                message: "Description is required",
              },
            }}
          />

          <Button variant="outline" type="submit" className="mt-5">
            Submit
          </Button>
        </form>
      </main>
    </div>
  );
};

export default AddBook;
