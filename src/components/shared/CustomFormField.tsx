import { cn } from "@/lib/utils";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type CustomFormFieldProps = {
  label?: string;
  name: string;
  placeholder: string;
  formControl: Control<any>;
  inputType?: string;
  disabled?: boolean;
  isTextArea?: boolean;
  className?: string;
};

const CustomFormField: React.FC<CustomFormFieldProps> = ({
  label,
  name,
  placeholder,
  formControl,
  inputType,
  disabled,
  isTextArea = false,
  className = "",
}) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem className={"space-y-1"}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {!isTextArea ? (
              <Input
                {...field}
                placeholder={placeholder}
                type={inputType || "text"}
                className={cn(
                  "h-auto px-3.5 py-2.5 text-[15px] placeholder:text-gray-400 sm:text-base",
                  className,
                )}
                disabled={disabled}
              />
            ) : (
              <Textarea
                {...field}
                placeholder={placeholder}
                className={cn(
                  "px-[15px] py-2.5 text-[15px] placeholder:text-gray-400 sm:text-base",
                  className,
                )}
                disabled={disabled}
              />
            )}
          </FormControl>
          <FormMessage className="text-[13px]" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
