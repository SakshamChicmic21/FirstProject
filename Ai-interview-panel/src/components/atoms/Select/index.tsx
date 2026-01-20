import { useTheme } from "next-themes";
import ReactSelect, { Props as SelectProps } from "react-select";

import { THEME_TYPE } from "@/shared/constants";

const Select = <OptionType, IsMulti extends boolean = false>(
  props: SelectProps<OptionType, IsMulti>,
) => {
  const { resolvedTheme } = useTheme();
  return (
    <ReactSelect
      {...props}
      styles={{
        control: (provided) => ({
          ...provided,
          minHeight: "40px",
          border: `1px solid ${resolvedTheme === THEME_TYPE.DARK ? "#374151" : "#e5e7eb"}`,
          borderRadius: "8px",
          "&:hover": {
            border: `1px solid ${resolvedTheme === THEME_TYPE.DARK ? "#374151" : "#d1d5db"}`,
          },
          backgroundColor:
            resolvedTheme === THEME_TYPE.DARK ? "#111827" : "white",
        }),
        placeholder: (provided) => ({
          ...provided,
          color: resolvedTheme === THEME_TYPE.DARK ? "#9ca3af" : "#9ca3af",
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
        option: (provided) => ({
          ...provided,
          backgroundColor:
            resolvedTheme === THEME_TYPE.DARK ? "#111827" : "white",
          color: resolvedTheme === THEME_TYPE.DARK ? "#9ca3af" : "black",
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor:
            resolvedTheme === THEME_TYPE.DARK ? "#111827" : "white",
        }),
        ...(props.styles || {}), // allow custom overrides from props
      }}
    />
  );
};

export default Select;
