import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Control } from "react-hook-form";

type CustomFormSelectProps = {
  label?: string;
  name: string;
  placeholder: string;
  formControl: Control<any>;
  options: any[];
  disabled?: boolean;
  className?: string;
  optionType?: "string" | "object";
};

const CustomFormSelect: React.FC<CustomFormSelectProps> = ({
  label,
  name,
  placeholder,
  formControl,
  options,
  disabled,
  className = "",
  optionType = "string",
}) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <Select
            disabled={disabled}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl
              className={cn(
                "h-auto px-3.5 py-2.5 text-[15px] sm:text-base",
                className,
              )}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option, index) => (
                <SelectItem
                  key={index}
                  value={optionType === "string" ? option : option.value}
                >
                  {optionType === "string" ? option : option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage className="text-[13px]" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormSelect;
