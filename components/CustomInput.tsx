import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';

// Generic Type for form schema
interface CustomInputProps<TFormValues extends FieldValues> {
  control: Control<TFormValues>;
  name: FieldPath<TFormValues>;
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute; // Allowing to specify the input type
  additionalProps?: React.InputHTMLAttributes<HTMLInputElement>; // Allow any other input props
}

const CustomInput = <TFormValues extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = 'text', // Default type is text
  additionalProps,
}: CustomInputProps<TFormValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex flex-col w-full">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field}
                {...additionalProps} // Spread additional props to the input
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
