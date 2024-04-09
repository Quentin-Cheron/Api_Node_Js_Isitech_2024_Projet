import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const FormInput = ({
  label,
  content,
  register,
  errors,
  validation,
}: {
  label: string;
  content: string;
  register?: any;
  errors?: any;
  validation?: object;
}) => {
  return (
    <div className="mt-2">
      <Label htmlFor={label}>{content}</Label>
      <Input
        name={label}
        id={label}
        {...(register ? register(label, validation) : {})}
      ></Input>

      {validation && errors[label] && (
        <p className="text-red-500 mt-2 text-sm">{errors[label].message}</p>
      )}
    </div>
  );
};

export default FormInput;
