import FormArea from "@/components/parts/FormArea";
import FormInput from "@/components/parts/FormInput";
import FormSelect from "@/components/parts/FormSelect";
import Navigation from "@/components/parts/Navigation";
import { Button } from "@/components/ui/button";

import { useForm, Controller } from "react-hook-form";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: object) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <div className="grid grid-cols-[300px,1fr]">
      <Navigation />
      <main className="mr-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5">
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

          <div>
            <FormSelect
              label="author"
              required
              Controller={Controller}
              control={control}
              placeholder="Select Author..."
              data={["Author 1", "Author 2", "Author 3"]}
              getValues={getValues}
              errors={errors}
              content="Author"
              validation={{
                required: {
                  value: true,
                  message: "Author is required",
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
