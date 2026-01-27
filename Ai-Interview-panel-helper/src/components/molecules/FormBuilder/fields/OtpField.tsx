import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";
import { OTPInput, SlotProps } from "input-otp";

interface OtpFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  validation?: RegisterOptions<T, Path<T>>;
  className?: string;
  width?: string;
}

export function OtpField<T extends FieldValues>({
  name,
  label,
  className = "",
  width = "w-full",
}: Readonly<OtpFieldProps<T>>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  const fieldError = errors[name];

  return (
    <div className={`mb-4  ${width} ${className}`}>
      <label htmlFor={name}>{label}</label>
      <div className="mt-1 relative">
        <Controller
          control={control}
          name={name}
          rules={{
            validate: (val) => {
              if (!val) return "Required";
              if (val.length < 6) return "OTP must be of 6 digits";
            },
          }}
          render={({ field }) => (
            <OtpInputField value={field.value} onChange={field.onChange} />
          )}
        />
      </div>
      {fieldError && (
        <span className="text-red-500 text-xs mt-1">
          {fieldError.message?.toString() ||
            (fieldError.type == "required" ? "Required" : "")}
        </span>
      )}
    </div>
  );
}

type Props = {
  value: string;
  onChange: (val: string) => void;
};

function OtpInputField({ value, onChange }: Props) {
  return (
    <OTPInput
      maxLength={6}
      value={value}
      onChange={onChange}
      containerClassName="group flex items-center opacity-100 mt-2"
      render={({ slots }) => (
        <div className="flex gap-x-2 justify-center w-full">
          {slots.map((slot, idx) => (
            <Slot key={idx} {...slot} />
          ))}
        </div>
      )}
      autoFocus={true}
    />
  );
}

function Slot(props: SlotProps) {
  const baseClass =
    "relative text-2xl w-[50px] h-14 flex items-center justify-center border border-gray-300 rounded-md transition duration-300 focus-within:ring-2 ring-purple-500";

  const activeClass = props.isActive ? "ring-2 ring-purple-500" : "";

  return (
    <div className={`${baseClass} ${activeClass}`}>
      <div className="opacity-100 group-has-[input[data-input-otp-placeholder-shown]]:opacity-40">
        {props.char ?? props.placeholderChar}
      </div>
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  );
}

function FakeCaret() {
  return (
    <div className="absolute inset-0 flex items-center justify-center animate-caret-blink pointer-events-none">
      <div className="w-px h-6 bg-black dark:bg-white" />
    </div>
  );
}

export default OtpField;
