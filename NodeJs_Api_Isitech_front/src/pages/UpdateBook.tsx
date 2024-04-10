import React, { useState, useEffect } from "react";

import { useForm, Controller, set } from "react-hook-form";

// Custom Components

import FormInput from "@/components/parts/FormInput";
import FormArea from "@/components/parts/FormArea";
import FormSelect from "@/components/parts/CustomComboBox";

import Navigation from "@/components/parts/Navigation";

// Shadcn Components

import { Button } from "@/components/ui/button";

// Services

import CategoriesService from "@/services/categories.service.js";
import BooksService from "@/services/books.service.js";
import { useParams } from "react-router-dom";

const UpdateBook = () => {
  const [categories, setCategories] = useState<object[]>([]);
  const [book, setBook] = useState<object>({});
  const params = useParams();
  const [defaultValues, setDefaultValues] = useState<object>({});
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    (async () => {
      const categoriesResponse = await CategoriesService.getAllCategories();
      const book = await BooksService.getBookById(params.id);
      setBook(book);
      setCategories(categoriesResponse);
      setValue("title", book.label);
      setValue("author", book.author);
      setValue("description", book.description);
      setValue("categories", [book.categories]);
    })();
  }, []);

  // OnSubmit

  const onSubmit = async (data: object) => {
    await BooksService.updateBook(params.id, data);
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
              data={categories.map(
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

export default UpdateBook;
