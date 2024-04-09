import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

const FormArea = ({
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
      <Textarea
        name={label}
        id={label}
        {...(register ? register(label, validation) : {})}
      ></Textarea>

      {validation && errors[label] && (
        <p className="text-red-500 mt-2 text-sm">{errors[label].message}</p>
      )}
    </div>
  );
};

export default FormArea;
