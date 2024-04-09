import { useState } from "react";

//data

//icons
import { Plus, ChevronLeftCircle, Check } from "lucide-react";

//shadcn components
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CustomComboBox = ({
  label,
  required,
  Controller,
  control,
  placeholder,
  data,
  getValues,
  errors,
  multipleChoices,
  content,
  validation,
}: {
  label: string;
  required: boolean;
  Controller: React.ElementType;
  control: object;
  placeholder: string;
  data: string[];
  getValues: {
    (label: string): string[];
  };
  errors: {
    [key: string]: string;
  };
  multipleChoices: boolean;
  content: string;
  validation: {
    required: {
      value: boolean;
      message: string;
    };
  };
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const removeItem = (item: string, field: any) => {
    if (getValues(label).includes(item)) {
      field.onChange(getValues(label).filter((i: string) => i !== item));
    }
  };

  return (
    <div className="flex flex-col mt-2 w-[300px]">
      <Label htmlFor={label} className="mb-2">
        {content} {required ? <span className="text-red-600">*</span> : ""}{" "}
      </Label>
      <Controller
        control={control}
        name={label}
        rules={{
          required,
        }}
        render={({ field }: any) => (
          <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="block text-left flex justify-between"
              >
                <ul className="flex gap-3">
                  {getValues(label) === undefined ||
                  getValues(label).length === 0
                    ? placeholder
                    : getValues(label).map((item) => (
                        <li
                          className={`flex items-center gap-1 text-xs ${
                            multipleChoices ? "border px-3 rounded-full" : null
                          }`}
                          onClick={(e) => {
                            removeItem(item, field);
                            e.stopPropagation();
                          }}
                          key={item}
                        >
                          {item} <Plus className="rotate-45 w-[1rem] left-0" />
                        </li>
                      ))}
                </ul>
                <ChevronLeftCircle
                  className={`text-slate-500 w-[1.1rem] transition-all ${
                    isOpen ? "rotate-[-90deg] transition-all" : null
                  }`}
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-white">
              <Command className="relative z-50">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    {data.map((item, index) => (
                      <CommandItem
                        {...field}
                        className="cursor-pointer"
                        key={index}
                        onSelect={() => {
                          let array = [];
                          if (multipleChoices) {
                            if (getValues(label) === undefined) {
                              array = [item];
                            } else if (getValues(label).includes(item)) {
                              array = getValues(label).filter(
                                (i) => i !== item
                              );
                            } else {
                              array = [...getValues(label), item];
                            }
                          } else {
                            array = [item];
                          }
                          field.onChange(array);
                          setIsOpen(!isOpen);
                        }}
                      >
                        {item}
                        {getValues(label)?.includes(item) && (
                          <Check className="w-[1.1rem] absolute right-0" />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        )}
      />
      {errors[label] && (
        <p className="text-red-600 text-sm mt-1">
          {validation.required.message}
        </p>
      )}
    </div>
  );
};

export default CustomComboBox;
